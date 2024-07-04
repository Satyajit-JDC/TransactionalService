import cds from '@sap/cds';
import { regulationcompliancemasterserviceApi } from '../external/regulationcompliancemasterservice_api/service';
import {
    MaintainRfs2Material, MaintainTransactionType, MaintainAdjustmentReasonCode, RegulationUom,
    Impact, ObjectCategory, MaintainRegulationGroupView, MaintainRegulationMaterialGroupView, MaintainRegulationObjectType,
    MaintainRegulationSubScenarioToScenarioType, MaintainMovementType, MaintainMovementTypeToTransactionCategoryMapping,
    MaintainRegulationTransactionType, MaintainRegulationType, Rfs2DebitType, FuelCategory, FuelSubCategory
} from '../external/regulationcompliancemasterservice_api';
import { EventPayload } from './utilities/zcom_tsRegulationComplicanceInterface';
import { LogUtilityService, logutilityserviceApi } from '../external/logutilityservice_api';
import { ILogUtility } from './utilities/zcom_tsRegulationComplicanceInterface';
import { resilience } from '@sap-cloud-sdk/resilience';
import { RFS2ComplianceClass } from './zcom_tsRFS2Compliance';
import { RFS2ConstantValues, destinationNames, messageTypes, language } from './utilities/zcom_tsConstants';
import { ResourceManager } from '@sap/textbundle';
import { RegulationComplianceTransaction } from '@cds-models/com/sap/chs/com/regulationcompliancetransaction';
import { MaintainRegulationObjectTypeApi } from 'srv/external/regulationcompliancemasterservice_api/MaintainRegulationObjectTypeApi';
import { MaintainMovementTypeToTransactionCategoryMappingApi } from 'srv/external/regulationcompliancemasterservice_api/MaintainMovementTypeToTransactionCategoryMappingApi';

export class RegulationComplianceBaseClass {
    // private elements
    private _oRFS2ComplianceClassInstance!: RFS2ComplianceClass;

    // public elements
    public oEventPayloadData: EventPayload;
    public oRFS2RegulationData: MaintainRegulationGroupView = {} as MaintainRegulationGroupView;
    public oRegulationDataIsReady: Promise<unknown>;
    public oRFS2CreditData: MaintainRegulationMaterialGroupView = {} as MaintainRegulationMaterialGroupView;
    public oRFS2DebitData: MaintainRegulationMaterialGroupView = {} as MaintainRegulationMaterialGroupView;
    public oMaintainRegulationObjectType: MaintainRegulationObjectType = {} as MaintainRegulationObjectType;
    public aMaintainRegulationObjectType: MaintainRegulationObjectType[] = [];
    public oMaintainRegulationSubScenarioToScenarioType: MaintainRegulationSubScenarioToScenarioType = {} as MaintainRegulationSubScenarioToScenarioType;
    public oMaintainMovementType: MaintainMovementType = {} as MaintainMovementType;
    public aMaintainMovementType: MaintainMovementType[] = [];
    public oMaintainMovementTypeToTransactionCategoryMapping: MaintainMovementTypeToTransactionCategoryMapping = {} as MaintainMovementTypeToTransactionCategoryMapping;
    public aMaintainMovementTypeToTransactionCategoryMapping: MaintainMovementTypeToTransactionCategoryMapping[] = [];
    public aMaintainRfs2Material: MaintainRfs2Material[] = [];
    public oMaintainRegulationTransactionType: MaintainRegulationTransactionType = {} as MaintainRegulationTransactionType;
    public oMaintainRegulationType: MaintainRegulationType = {} as MaintainRegulationType;
    public aMaintainRegulationType: MaintainRegulationType[] = [];
    public aMaintainTransactionType: MaintainTransactionType[] = [];
    public mMaintainTransactionType: { [index: string]: MaintainTransactionType } = {};
    public aRfs2DebitType: Rfs2DebitType[] = [];
    public mRfs2DebitType: { [index: string]: Rfs2DebitType } = {};
    public aFuelCategory: FuelCategory[] = [];
    public mFuelCategory: { [index: string]: FuelCategory } = {};
    public aFuelSubCategory: FuelSubCategory[] = [];
    public mFuelSubCategory: { [index: string]: FuelSubCategory } = {};
    public aObjectCategory: ObjectCategory[] = [];
    public aMaintainAdjustmentReasonCode: MaintainAdjustmentReasonCode[] = [];
    public aRegulationUom: RegulationUom[] = [];
    public aImpact: Impact[] = [];

    //-------- Start of Base constructor ------------------
    constructor(oEventPayloadData: EventPayload) {
        this.oEventPayloadData = oEventPayloadData; //fill event data from S4 API

        // initialize the data
        
        this.oRegulationDataIsReady = new Promise(async (resolve, reject) => {
            // check is regulation data available
            if (!this.oRFS2RegulationData.regulationType) {
                // regulation group present then set Regulation Type to class object
                if (oEventPayloadData.RegulationGroupName) {
                    try {
                        await this.setRegulations();
                        resolve(true);
                    } catch (error) {
                        reject(false);
                    }
                } else {
                    // resolve promise in case of Manual adjustment
                    resolve(true);
                }
            } else { // regulation type available
                // resolve promise
                resolve(true);
            }
        });
    }
    //-------- End of Base constructor ------------------
    
    // --------- Start of Setter methods ------------------
    // set RFS2 Class Instance Object
    set setRFS2ComplianceClassObject(oRFS2ClassObjectInstance: RFS2ComplianceClass) {
        this._oRFS2ComplianceClassInstance = oRFS2ClassObjectInstance;
    }

    // method to set regulation to object
    async setRegulations() {
        if (this.oEventPayloadData.RegulationGroupName) { // Regulation type available
            try {
                // create object
                const { maintainRegulationGroupViewApi } = regulationcompliancemasterserviceApi();

                // call master with cloud SDK
                (await maintainRegulationGroupViewApi.requestBuilder().getAll()
                    .addCustomQueryParameters({
                        $filter: encodeURIComponent("regulationGroup_regulationGroup eq '" + this.oEventPayloadData.RegulationGroupName + "'")
                    }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).
                    forEach((oData) => {
                        if (oData.regulationType === RFS2ConstantValues.RFS2) {   // RFS2 compliances
                            this.oRFS2RegulationData = oData;  //set data for RFS2 regulation
                        }
                    }); RFS2ConstantValues.RFS2
            } catch (error) {
                console.log(error);
                let sErrorMsg = "";
                if (error instanceof Error) {
                    // e is narrowed to Error!
                    sErrorMsg = error.stack as string;
                }
                // in case of S4 event log the message
                if (this.oEventPayloadData.RenewableEventType !== RFS2ConstantValues.eventTypeMDJ) {
                    const oLogData: ILogUtility = {} as ILogUtility;
                    oLogData.message = "FailedToReadRegulationGroupFromMasterData";
                    oLogData.technicalMessage = sErrorMsg;
                    oLogData.messageType = messageTypes.error;
                    this.addLog(oLogData);
                }
            }
        }
    }

    // set material group data and object category
    async setRegulationMaterialGroup() {
        try {
            if (this.oRFS2RegulationData.regulationType) {
                // create object
                const { maintainRegulationMaterialGroupViewApi } = regulationcompliancemasterserviceApi();

                // call master with cloud SDK
                (await maintainRegulationMaterialGroupViewApi.requestBuilder().getAll()
                    .addCustomQueryParameters({
                        $filter: encodeURIComponent("regulationType eq '" + this.oRFS2RegulationData.regulationType +
                            "' and regulationMaterialGroup_regulationMaterialGroup eq '" + this.oEventPayloadData.RegulationMateGroup + "'")
                    }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).forEach((oData) => {
                        // RFS2 
                        if (this.oRFS2RegulationData.regulationType === RFS2ConstantValues.RFS2) {
                            // RFS2 RF RIN (Credit) Scenario
                            if (oData.category === RFS2ConstantValues.credit) {
                                this.oRFS2CreditData = oData;
                            }
                            // RFS2 RVO (Debit) Scenario
                            if (oData.category === RFS2ConstantValues.debit) {
                                this.oRFS2DebitData = oData;
                            }
                        }
                    });
            }
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType !== RFS2ConstantValues.eventTypeMDJ) {
                const oLogData: ILogUtility = {} as ILogUtility;
                oLogData.message = "FailedToReadObjectCategoryFromMasterData";
                oLogData.technicalMessage = sErrorMsg;
                oLogData.messageType = messageTypes.error;
                this.addLog(oLogData);
            }
        }
    }

    // set sub scenario data
    async setRgulationSubScnario() {
        try {
            const { maintainRegulationSubScenarioToScenarioApi } = regulationcompliancemasterserviceApi();
            if (this.oEventPayloadData.RenewableEventType && this.oRFS2RegulationData.regulationType && (this.oRFS2CreditData.category || this.oRFS2DebitData.category)) {
                const sSourceScenario = this.oEventPayloadData.RenewableEventType === RFS2ConstantValues.eventTypeMDJ ?
                    RFS2ConstantValues.eventTypeMDJ : this.oEventPayloadData.RenewableEventType.substring(0, 2);
                const sFilterSubObjectScenario = "regulationType_regulationType eq '" + this.oRFS2RegulationData.regulationType
                    + "' and transactionSourceScenario_category eq '" + sSourceScenario +
                    "' and objectCategory_category eq '"
                    + (this.oRFS2CreditData.category ? this.oRFS2CreditData.category : this.oRFS2DebitData.category) + "'";

                // call Cloud SDK
                (await maintainRegulationSubScenarioToScenarioApi.requestBuilder().getAll()
                    .addCustomQueryParameters({
                        $filter: encodeURIComponent(sFilterSubObjectScenario)
                    })
                    .middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).
                    forEach((oData) => {
                        this.oMaintainRegulationSubScenarioToScenarioType = oData;
                    });
            }
            else {
                (await maintainRegulationSubScenarioToScenarioApi.requestBuilder().getAll()
                    .middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).
                    forEach((oData) => {
                        this.oMaintainRegulationSubScenarioToScenarioType = oData;
                    });
            }
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType !== RFS2ConstantValues.eventTypeMDJ) {
                const oLogData: ILogUtility = {} as ILogUtility;
                oLogData.message = "FailedToReadRegulationSubScenarioToScenarioFromMasterData";
                oLogData.technicalMessage = sErrorMsg;
                oLogData.messageType = messageTypes.error;
                this.addLog(oLogData);
            }
        }
    }

    // set reg object type data
    async setRegulationObjectType() {
        const { maintainRegulationObjectTypeApi } = regulationcompliancemasterserviceApi();
        try {
            if (this.oRFS2RegulationData.regulationType && (this.oRFS2CreditData.category || this.oRFS2DebitData.category)) {
                const sFilters = "regulationType_regulationType eq '" + this.oRFS2RegulationData.regulationType +
                    "' and objectCategory_category eq '" +
                    (this.oRFS2CreditData ? this.oRFS2CreditData.category : this.oRFS2DebitData.category) + "'";

                (await maintainRegulationObjectTypeApi.requestBuilder().getAll()
                    .addCustomQueryParameters({
                        $filter: encodeURIComponent(sFilters)
                    }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).
                    forEach((oData) => {
                        this.oMaintainRegulationObjectType = oData;
                    });
            } else {
                (await maintainRegulationObjectTypeApi.requestBuilder().getAll()
                    .middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).
                    forEach((oData) => {
                        this.aMaintainRegulationObjectType.push(oData);
                    });
            }
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType !== RFS2ConstantValues.eventTypeMDJ) {
                const oLogData: ILogUtility = {} as ILogUtility;
                oLogData.message = "FailedToReadObjectTypeFromMasterData";
                oLogData.technicalMessage = sErrorMsg;
                oLogData.messageType = messageTypes.error;
                this.addLog(oLogData);
            }
        }
    }

    // set movement type data
    async setMovementType() {
        const { maintainMovementTypeApi } = regulationcompliancemasterserviceApi();
        try {
            if (this.oRFS2RegulationData.regulationType && this.oMaintainRegulationObjectType.objectTypeCode) {
                const sFilters = "regulationType_regulationType eq '" + this.oRFS2RegulationData.regulationType +
                    "' and objectType_code eq '" + this.oMaintainRegulationObjectType.objectTypeCode + "'";

                (await maintainMovementTypeApi.requestBuilder().getAll()
                    .addCustomQueryParameters({
                        $filter: encodeURIComponent(sFilters)
                    }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).forEach((oData) => {
                        this.oMaintainMovementType = oData;
                    });
            } else {
                (await maintainMovementTypeApi.requestBuilder().getAll()
                    .middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).forEach((oData) => {
                        this.aMaintainMovementType.push(oData);
                    });
            }
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType !== RFS2ConstantValues.eventTypeMDJ) {
                const oLogData: ILogUtility = {} as ILogUtility;
                oLogData.message = "FailedToReadMovementTypeFromMasterData";
                oLogData.technicalMessage = sErrorMsg;
                oLogData.messageType = messageTypes.error;
                this.addLog(oLogData);
            }
        }
    }

    // set mvt type relevance data
    async setMvtTypeTransationRelevance() {
        const { maintainMovementTypeToTransactionCategoryMappingApi } = regulationcompliancemasterserviceApi();
        try {
            if (this.oRFS2RegulationData.regulationType && this.oMaintainRegulationObjectType.objectTypeCode && this.oMaintainMovementType.movementType) {
                const sFilters = "regulationType_regulationType eq '" + this.oRFS2RegulationData.regulationType +
                    "' and objectType_code eq '" + this.oMaintainRegulationObjectType.objectTypeCode +
                    "' and movementType_movementType eq '" + this.oMaintainMovementType.movementType + "'";

                (await maintainMovementTypeToTransactionCategoryMappingApi.requestBuilder().getAll()
                    .addCustomQueryParameters({
                        $filter: encodeURIComponent(sFilters)
                    }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).
                    forEach((oData) => {
                        this.oMaintainMovementTypeToTransactionCategoryMapping = oData;
                    });
            } else {
                (await maintainMovementTypeToTransactionCategoryMappingApi.requestBuilder().getAll()
                    .middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).
                    forEach((oData) => {
                        this.aMaintainMovementTypeToTransactionCategoryMapping.push(oData);
                    });
            }
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType !== RFS2ConstantValues.eventTypeMDJ) {
                const oLogData: ILogUtility = {} as ILogUtility;
                oLogData.message = "FailedToReadMovementTypeRelevanceFromMasterData";
                oLogData.technicalMessage = sErrorMsg;
                oLogData.messageType = messageTypes.error;
                this.addLog(oLogData);
            }
        }
    }

    // set mat config data
    async setMaterialConfiguration() {
        const { maintainRfs2MaterialApi } = regulationcompliancemasterserviceApi();
        try {
            if (this.oRFS2RegulationData.regulationType && this.oMaintainRegulationObjectType.objectTypeCode && this.oEventPayloadData._RenewableMaterialDocument) {
                const sFilters = "regulationType_regulationType eq '" + this.oRFS2RegulationData.regulationType +
                    "' and objectType_code eq '" + this.oMaintainRegulationObjectType.objectTypeCode + "' and year eq " +
                    new Date(this.oEventPayloadData._RenewableMaterialDocument.DocumentDate).getFullYear().toString();

                this.aMaintainRfs2Material = await maintainRfs2MaterialApi.requestBuilder().getAll()
                    .addCustomQueryParameters({
                        $filter: encodeURIComponent(sFilters)
                    }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    });
            }
            //  else {
            //     this.aMaintainRfs2Material = await maintainRfs2MaterialApi.requestBuilder().getAll()
            //         .middleware(resilience({ retry: 3, circuitBreaker: true }))
            //         .execute({
            //             destinationName: destinationNames.regulationComplianceMasterService
            //         });
            // }
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType !== RFS2ConstantValues.eventTypeMDJ) {
                const oLogData: ILogUtility = {} as ILogUtility;
                oLogData.message = "FailedToReadMaterialConfigurationFromMasterData";
                oLogData.technicalMessage = sErrorMsg;
                oLogData.messageType = messageTypes.error;
                this.addLog(oLogData);
            }
        }
    }

    // set regulation type
    async setRegulationTypes() {
        const { maintainRegulationTypeApi } = regulationcompliancemasterserviceApi();
        try {
            if (this.oRFS2RegulationData.regulationType) {
                const sFilters = "regulationType eq '" + this.oRFS2RegulationData.regulationType + "'";

                (await maintainRegulationTypeApi.requestBuilder().getAll()
                    .addCustomQueryParameters({
                        $filter: encodeURIComponent(sFilters)
                    }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).forEach((oData) => {
                        this.oMaintainRegulationType = oData;
                    });
            }
            else {
                (await maintainRegulationTypeApi.requestBuilder().getAll()
                    .middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).forEach((oData) => {
                        this.aMaintainRegulationType.push(oData);
                    });
            }
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType !== RFS2ConstantValues.eventTypeMDJ) {
                const oLogData: ILogUtility = {} as ILogUtility;
                oLogData.message = "FailedToReadRegulationTypeFromMasterData";
                oLogData.technicalMessage = sErrorMsg;
                oLogData.messageType = messageTypes.error;
                this.addLog(oLogData);
            }
        }
    }

    // set Regulation Transaction Types data
    async setRegulationTransactionTypeTs() {
        try {
            const { maintainRegulationTransactionTypeApi } = regulationcompliancemasterserviceApi();

            if (this.oRFS2RegulationData.regulationType && this.oMaintainMovementTypeToTransactionCategoryMapping.transactionCategoryCategory) {
                const sFilters = "regulationType_regulationType eq '" + this.oRFS2RegulationData.regulationType +
                    "' and transactionCategory_category eq '" + this.oMaintainMovementTypeToTransactionCategoryMapping.transactionCategoryCategory + "'";

                (await maintainRegulationTransactionTypeApi.requestBuilder().getAll()
                    .addCustomQueryParameters({
                        $filter: encodeURIComponent(sFilters)
                    }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).
                    forEach((oData) => {
                        this.oMaintainRegulationTransactionType = oData;
                    });
            }
            else {
                (await maintainRegulationTransactionTypeApi.requestBuilder().getAll()
                    .middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).
                    forEach((oData) => {
                        this.oMaintainRegulationTransactionType = oData;
                    });
            }
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType !== RFS2ConstantValues.eventTypeMDJ) {
                const oLogData: ILogUtility = {} as ILogUtility;
                oLogData.message = "FailedToReadRegulationTransactionTypesFromMasterData";
                oLogData.technicalMessage = sErrorMsg;
                oLogData.messageType = messageTypes.error;
                this.addLog(oLogData);
            }
        }
    }

    // set Transaction Type Data
    async setTransactiontype() {
        const { maintainTransactionTypeApi } = regulationcompliancemasterserviceApi();
        try {
            (await maintainTransactionTypeApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: destinationNames.regulationComplianceMasterService
                })).
                forEach(oData => {
                    this.aMaintainTransactionType.push(oData);
                    if (oData.transactionType) {
                        this.mMaintainTransactionType[oData.transactionType] = oData;
                    }
                });
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType !== RFS2ConstantValues.eventTypeMDJ) {
                const oLogData: ILogUtility = {} as ILogUtility;
                oLogData.message = "FailedToReadTransactionTypeFromMasterData";
                oLogData.technicalMessage = sErrorMsg;
                oLogData.messageType = messageTypes.error;
                this.addLog(oLogData);
            }
        }
    }

    // set RFS2 Debit Type data
    async setRFS2DebitType() {
        const { rfs2DebitTypeApi } = regulationcompliancemasterserviceApi();
        try {
            (await rfs2DebitTypeApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: destinationNames.regulationComplianceMasterService
                })).
                forEach((oData) => {
                    this.aRfs2DebitType.push(oData);
                    this.mRfs2DebitType[oData.category] = oData;
                });
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType !== RFS2ConstantValues.eventTypeMDJ) {
                const oLogData: ILogUtility = {} as ILogUtility;
                oLogData.message = "FailedToReadRFS2DebitTypeFromMasterData";
                oLogData.technicalMessage = sErrorMsg;
                oLogData.messageType = messageTypes.error;
                this.addLog(oLogData);
            }
        }
    }

    // set Fuel Category data
    async setFuelCategory() {
        const { fuelCategoryApi } = regulationcompliancemasterserviceApi();
        try {
            (await fuelCategoryApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: destinationNames.regulationComplianceMasterService
                })).
                forEach((oData) => {
                    this.aFuelCategory.push(oData);
                    this.mFuelCategory[oData.category] = oData;
                });
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType !== RFS2ConstantValues.eventTypeMDJ) {
                const oLogData: ILogUtility = {} as ILogUtility;
                oLogData.message = "FailedToReadFuelCategoryFromMasterData";
                oLogData.technicalMessage = sErrorMsg;
                oLogData.messageType = messageTypes.error;
                this.addLog(oLogData);
            }
        }
    }

    // set Fuel Sub Category data
    async setFuelSubCategory() {
        const { fuelSubCategoryApi } = regulationcompliancemasterserviceApi();
        try {
            (await fuelSubCategoryApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: destinationNames.regulationComplianceMasterService
                })).
                forEach((oData) => {
                    this.aFuelSubCategory.push(oData);
                    this.mFuelSubCategory[oData.category] = oData;
                });
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType !== RFS2ConstantValues.eventTypeMDJ) {
                const oLogData: ILogUtility = {} as ILogUtility;
                oLogData.message = "FailedToReadFuelCategoryFromMasterData";
                oLogData.technicalMessage = sErrorMsg;
                oLogData.messageType = messageTypes.error;
                this.addLog(oLogData);
            }
        }
    }

    // set Adjustment Reason Code
    async setAdjustmentReasonCode() {
        const { maintainAdjustmentReasonCodeApi } = regulationcompliancemasterserviceApi();
        try {
            if (this.oEventPayloadData._RenewableMaterialDocument.RenewableReasonReasonCode) {
                const sFilters = "reasonCode eq " + this.oEventPayloadData._RenewableMaterialDocument.RenewableReasonReasonCode + "";

                (await maintainAdjustmentReasonCodeApi.requestBuilder().getAll()
                    .addCustomQueryParameters({
                        $filter: encodeURIComponent(sFilters)
                    }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).
                    forEach(oData => {
                        this.aMaintainAdjustmentReasonCode.push(oData);
                    });
            }
            else {
                (await maintainAdjustmentReasonCodeApi.requestBuilder().getAll()
                    .middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).
                    forEach(oData => {
                        this.aMaintainAdjustmentReasonCode.push(oData);
                    });
            }
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType !== RFS2ConstantValues.eventTypeMDJ) {
                const oLogData: ILogUtility = {} as ILogUtility;
                oLogData.message = "FailedToReadAdjustmentReasonCodeFromMasterData";
                oLogData.technicalMessage = sErrorMsg;
                oLogData.messageType = messageTypes.error;
                this.addLog(oLogData);
            }
        }
    }

    // set Object Category
    async setObjectCategory() {
        const { objectCategoryApi } = regulationcompliancemasterserviceApi();
        try {
            (await objectCategoryApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: destinationNames.regulationComplianceMasterService
                })).
                forEach(oData => {
                    this.aObjectCategory.push(oData);
                });
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType !== RFS2ConstantValues.eventTypeMDJ) {
                const oLogData: ILogUtility = {} as ILogUtility;
                oLogData.message = "FailedToReadObjectCategoryFromMasterData";
                oLogData.technicalMessage = sErrorMsg;
                oLogData.messageType = messageTypes.error;
                this.addLog(oLogData);
            }
        }
    }

    // set Unit of Measurement
    async setUOM() {
        const { regulationUomApi } = regulationcompliancemasterserviceApi();
        try {
            (await regulationUomApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: destinationNames.regulationComplianceMasterService
                })).
                forEach(oData => {
                    this.aRegulationUom.push(oData);
                });
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType !== RFS2ConstantValues.eventTypeMDJ) {
                const oLogData: ILogUtility = {} as ILogUtility;
                oLogData.message = "FailedToReadUnitOfMeasurementFromMasterData";
                oLogData.technicalMessage = sErrorMsg;
                oLogData.messageType = messageTypes.error;
                this.addLog(oLogData);
            }
        }
    }

    // set Impact
    async setImpact() {
        const { impactApi } = regulationcompliancemasterserviceApi();
        try {
            (await impactApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: destinationNames.regulationComplianceMasterService
                })).
                forEach(oData => {
                    this.aImpact.push(oData);
                });
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType !== RFS2ConstantValues.eventTypeMDJ) {
                const oLogData: ILogUtility = {} as ILogUtility;
                oLogData.message = "FailedToReadImpactFromMasterData";
                oLogData.technicalMessage = sErrorMsg;
                oLogData.messageType = messageTypes.error;
                this.addLog(oLogData);
            }
        }
    }
    // --------- End of Setter methods ------------------

    // --------- Start of Getter methods ------------------
    async getNextRenewableId(RegulationSubScenario: string): Promise<number> {
        if (RegulationSubScenario) {
            const { operations: {
                getNextRenewableId
            } } = regulationcompliancemasterserviceApi();
            const payload = {
                "regulationSubScenario": RegulationSubScenario
            };
            const oCurrentSeqence = await getNextRenewableId(payload).middleware(resilience({ retry: 3, circuitBreaker: true })).execute({
                destinationName: destinationNames.regulationComplianceMasterService
            });

            return Number(oCurrentSeqence);
        } else {
            return 0;
        }
    }
    // --------- End of Getter methods ------------------

    // --------- Start of Post methods ------------------
    // add logs to log service
    async addLog(oLogData: ILogUtility) {
        if (oLogData) {
            const oResourceManager = new ResourceManager("../../_i18n/i18n"),
                oBundle = oResourceManager.getTextBundle(language),
                logObjectID = this.oEventPayloadData.RenewableEventType +
                    this.oEventPayloadData._RenewableMaterialDocument ? this.oEventPayloadData._RenewableMaterialDocument.RenwableMaterialDocument : "" +
                    this.oEventPayloadData._RenewableMaterialDocument ? this.oEventPayloadData._RenewableMaterialDocument.RenwableMaterialDocumentItem : "",
                { logUtilityServiceApi } = logutilityserviceApi();

            // fill unfilled common data
            if (!oLogData.object) {
                oLogData.object = logObjectID;
            }
            oLogData.message = oBundle.getText(oLogData.message);
            if (!oLogData.regulationType) {
                oLogData.regulationType = this.oRFS2RegulationData.regulationType as string;
            }
            if (!oLogData.regulationSubObjectType) {
                oLogData.regulationSubObjectType = this.oMaintainRegulationObjectType.objectTypeCode as string;
            }
            if (!oLogData.applicationModule) {
                oLogData.applicationModule = this.oRFS2RegulationData.regulationType as string;
            }
            if (!oLogData.applicationSubModule) {
                oLogData.applicationSubModule = this.oMaintainRegulationSubScenarioToScenarioType.regulationSubScenarioCategory as string;
            }

            const payload: LogUtilityService = logUtilityServiceApi.entityBuilder().fromJson(oLogData);

            await logUtilityServiceApi.requestBuilder().create(payload).middleware(resilience({ retry: 3, circuitBreaker: true })).execute({
                destinationName: "LogUtilityService"
            });
        }
    }

    // add regulations
    async addRegulationCompliances(data: RegulationComplianceTransaction[]) {
        const srv = await cds.connect.to('RegulationComplianceTransactionService');
        try {
            await srv.post('RegulationComplianceTransaction', data);

        } catch (error) {
            console.log(error);
            const oLogData: ILogUtility = {} as ILogUtility;
            if (error instanceof Error) {
                // e is narrowed to Error!
                oLogData.technicalMessage = error.stack as string;
            }
            oLogData.message = "ErrorDuringInsertingData";
            oLogData.messageType = messageTypes.error;
            this.addLog(oLogData);
        }
    }
    // --------- End of Post methods ------------------

    async getManualAdjustmentData(sourceScenario: string) {
        const { RegulationComplianceTransaction } = cds.entities('com.sap.chs.com.regulationcompliancetransaction');
        const srv = await cds.connect.to('RegulationComplianceTransactionService');
        return await srv.read(RegulationComplianceTransaction).where({ sourceScenario: sourceScenario });
    }

}
