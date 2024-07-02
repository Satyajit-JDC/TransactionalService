import cds from '@sap/cds';
import { regulationcompliancemasterserviceApi } from '../external/regulationcompliancemasterservice_api/service';
import {
    MaintainRenewableMaterialConfiguration, MaintainTransactionType, MaintainAdjustmentReasonCode, Uom,
    Impact, ObjectCategory, MaintainRegulationGroupView, MaintainRegulationMaterialGroupView, MaintainRegulationObjecttype,
    MaintainRegulationSubScenarioToScenarioType, MaintainMovementType, MaintainMovementTypeToTransactionCategoryImpact,
    MaintainRegulationTransactionTypeTs, MaintainRegulationType, Rfs2DebitType, FuelCategory, FuelSubCategory
} from '../external/regulationcompliancemasterservice_api';
import {
    IMaintainRegulationGroupView, IMaintainRegulationType,
    IMaintainRegulationMaterialGroupView, IMaintainMovementTypeToTransactionCategoryImpact,
    IMaintainMovementType, IMaintainRegulationObjecttype, IMaintainRegulationTransactionTypeTs,
    IMaintainRegulationSubscenariotoScenario, IRfs2DebitType, IFuelCategory, IFuelSubCategory,
    EventPayload
} from './utilities/zcom_tsRegulationComplicanceInterface';
import { LogUtilityService, logutilityserviceApi } from '../external/logutilityservice_api';
import { ILogUtility } from './utilities/zcom_tsRegulationComplicanceInterface';
import { resilience } from '@sap-cloud-sdk/resilience';
// import { Impact, ObjectCategory } from '@cds-models';
import { RFS2ComplianceClass } from './zcom_tsRFS2Compliance';
import { RFS2ConstantValues, destinationNames, messageTypes,language } from './utilities/zcom_tsConstants';
import { ResourceManager } from '@sap/textbundle';

export class RegulationComplianceBaseClass {
    // private elements
    private _oRFS2Compliance!: RFS2ComplianceClass;

    // public elements
    public oEventPayloadData: EventPayload;
    public oRFS2RegulationData: MaintainRegulationGroupView;
    public oRegulationDataIsReady!: Promise<unknown>;
    public oRFS2CreditData!: MaintainRegulationMaterialGroupView;
    public oRFS2DebitData!: MaintainRegulationMaterialGroupView;
    public oMaintainRegulationObjecttype: MaintainRegulationObjecttype;
    public aMaintainRegulationObjecttype: MaintainRegulationObjecttype[];
    public oMaintainRegulationSubScenarioToScenarioType: MaintainRegulationSubScenarioToScenarioType;
    public oMaintainMovementType: MaintainMovementType;
    public aMaintainMovementType: MaintainMovementType[];
    public oMaintainMovementTypeToTransactionCategoryImpact: MaintainMovementTypeToTransactionCategoryImpact;
    public aMaintainMovementTypeToTransactionCategoryImpact: MaintainMovementTypeToTransactionCategoryImpact[];
    public aMaintainRenewableMaterialConfiguration: MaintainRenewableMaterialConfiguration[];
    public oMaintainRegulationTransactionTypeTs: MaintainRegulationTransactionTypeTs;
    public oMaintainRegulationType: MaintainRegulationType;
    public aMaintainRegulationType: MaintainRegulationType[];
    public aMaintainTransactionType: MaintainTransactionType[];
    public mMaintainTransactionType: { [index: string]: MaintainRegulationTransactionTypeTs };
    public aRfs2DebitType: Rfs2DebitType[];
    public mRfs2DebitType: { [index: string]: Rfs2DebitType };
    public aFuelCategory: FuelCategory[];
    public mFuelCategory: { [index: string]: FuelCategory };
    public aFuelSubCategory: FuelSubCategory[];
    public mFuelSubCategory: { [index: string]: FuelSubCategory };
    public aObjectCategory: ObjectCategory[];
    public aMaintainAdjustmentReasonCode: MaintainAdjustmentReasonCode[];
    public aUom: Uom[];
    public aImpact: Impact[];

    //-------- Start of Base constructor ------------------
    constructor(oEventPayloadData: EventPayload) {
        this.oEventPayloadData = oEventPayloadData; //fill event data from S4 API

        // initialize the data
        this.oRFS2RegulationData = {} as MaintainRegulationGroupView;
        this.oMaintainRegulationObjecttype = {} as MaintainRegulationObjecttype;
        this.aMaintainRegulationObjecttype = [] as MaintainRegulationObjecttype[];
        this.oMaintainRegulationSubScenarioToScenarioType = {} as MaintainRegulationSubScenarioToScenarioType;
        this.oMaintainMovementType = {} as MaintainMovementType;
        this.aMaintainMovementType = [] as MaintainMovementType[];
        this.oMaintainMovementTypeToTransactionCategoryImpact = {} as MaintainMovementTypeToTransactionCategoryImpact;
        this.aMaintainMovementTypeToTransactionCategoryImpact = [] as MaintainMovementTypeToTransactionCategoryImpact[];
        this.aMaintainRenewableMaterialConfiguration = [] as MaintainRenewableMaterialConfiguration[];
        this.oMaintainRegulationTransactionTypeTs = {} as MaintainRegulationTransactionTypeTs;
        this.oMaintainRegulationType = {} as MaintainRegulationType;
        this.aMaintainRegulationType = [] as MaintainRegulationType[];
        this.aMaintainTransactionType = [] as MaintainTransactionType[];
        this.mMaintainTransactionType = {} as { [index: string]: MaintainRegulationTransactionTypeTs };
        this.aRfs2DebitType = [] as Rfs2DebitType[];
        this.mRfs2DebitType = {} as { [index: string]: Rfs2DebitType };
        this.aFuelCategory = [] as FuelCategory[];
        this.mFuelCategory = {} as { [index: string]: FuelCategory };
        this.aFuelSubCategory = [] as FuelSubCategory[];
        this.mFuelSubCategory = {} as { [index: string]: FuelSubCategory };
        this.aObjectCategory = [] as ObjectCategory[];
        this.aMaintainAdjustmentReasonCode = [] as MaintainAdjustmentReasonCode[];
        this.aUom = [] as Uom[];
        this.aImpact = [] as Impact[];

        // regulation group present then set Regulation Type to class object
        if (oEventPayloadData.RegulationGroupName) {
            this.oRegulationDataIsReady = new Promise(async (resolve) => {
                await this.setRegulations();
                resolve(undefined);
            });
        }
    }
    //-------- End of Base constructor ------------------

    // --------- Start of Setter methods ------------------
    // set RFS2 Class Instance Object
    set setRFS2ComplianceClassObject(oRFS2ClassObject: RFS2ComplianceClass) {
        this._oRFS2Compliance = oRFS2ClassObject;
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
                if (this.oEventPayloadData.RenewableEventType === RFS2ConstantValues.eventTypeGMCR) {
                    this.addLog("FailedToReadRegulationGroupFromMasterData", sErrorMsg, messageTypes.error);
                }
            }
        }
    }

    // set material group data and object category
    async setRegulationMaterialGroup() {
        try {
            if (this.oRFS2RegulationData) {
                // create object
                const { maintainRegulationMaterialGroupViewApi } = regulationcompliancemasterserviceApi();

                // call master with cloud SDK
                (await maintainRegulationMaterialGroupViewApi.requestBuilder().getAll()
                    .addCustomQueryParameters({
                        $filter: encodeURIComponent("regulationType eq '" + this.oRFS2RegulationData.regulationType + "'")
                    }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).forEach((oData) => {
                        // RFS2 
                        if (this.oRFS2RegulationData.regulationType === RFS2ConstantValues.RFS2) {
                            // RFS2 Credit Scenario
                            if (oData.category === RFS2ConstantValues.credit) {
                                this.oRFS2CreditData = oData;
                            }
                            // RFS2 Debit Scenario
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
            if (this.oEventPayloadData.RenewableEventType === RFS2ConstantValues.eventTypeGMCR) {
                this.addLog("FailedToReadObjectCategoryFromMasterData", sErrorMsg, messageTypes.error);
            }
        }
    }

    // set sub scenario data
    async setRgulationSubScnario() {
        try {
            if (this.oRFS2RegulationData && (this.oRFS2CreditData || this.oRFS2DebitData)) {
                const sFilterSubObjectScenario = this.oRFS2RegulationData.regulationType
                    + " and transactionSourceScenario_category eq '"+this.oEventPayloadData.RenewableEventType+"' and '"
                    + (this.oRFS2CreditData ? this.oRFS2CreditData.category : this.oRFS2DebitData.category) + "'",
                    { maintainRegulationSubScenarioToScenarioApi } = regulationcompliancemasterserviceApi();

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
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType === RFS2ConstantValues.eventTypeGMCR) {
                this.addLog("FailedToReadRegulationSubScenarioToScenarioFromMasterData", sErrorMsg, messageTypes.error);
            }
        }
    }

    // set reg object type data
    async setRegulationObjectType() {
        const { maintainRegulationObjecttypeApi } = regulationcompliancemasterserviceApi();
        try {
            if (this.oRFS2RegulationData && (this.oRFS2CreditData || this.oRFS2DebitData)) {
                const sFilters = "regulationType_regulationType eq '" + this.oRFS2RegulationData.regulationType + "'" +
                    "objectCategory_category eq '" +
                    (this.oRFS2CreditData ? this.oRFS2CreditData.category : this.oRFS2DebitData.category) + "'";

                (await maintainRegulationObjecttypeApi.requestBuilder().getAll()
                    .addCustomQueryParameters({
                        $filter: encodeURIComponent(sFilters)
                    }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).
                    forEach((oData) => {
                        this.oMaintainRegulationObjecttype = oData;
                    });
            } else {
                (await maintainRegulationObjecttypeApi.requestBuilder().getAll()
                    .middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).
                    forEach((oData) => {
                        this.aMaintainRegulationObjecttype.push(oData);
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
            if (this.oEventPayloadData.RenewableEventType === RFS2ConstantValues.eventTypeGMCR) {
                this.addLog("FailedToReadObjectTypeFromMasterData", sErrorMsg, messageTypes.error);
            }
        }
    }

    // set movement type data
    async setMovementType() {
        const { maintainMovementTypeApi } = regulationcompliancemasterserviceApi();
        try {
            if (this.oRFS2RegulationData && this.oMaintainRegulationObjecttype) {
                const sFilters = "regulationType_regulationType eq '" + this.oRFS2RegulationData.regulationType + "'" +
                    "objectType_code eq '" + this.oMaintainRegulationObjecttype.objectTypeCode + "'";

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
            if (this.oEventPayloadData.RenewableEventType === RFS2ConstantValues.eventTypeGMCR) {
                this.addLog("FailedToReadMovementTypeFromMasterData", sErrorMsg, messageTypes.error);
            }
        }
    }

    // set mvt type relevance data
    async setMvtTypeTransationRelevance() {
        const aMvtTypeTransactionCatMappingMAP = { map: {}, transactionCategoryCategory: "" } as IMaintainMovementTypeToTransactionCategoryImpact;
        const { maintainMovementTypeToTransactionCategoryImpactApi } = regulationcompliancemasterserviceApi();
        try {
            if (this.oRFS2RegulationData && this.oMaintainRegulationObjecttype && this.oMaintainMovementType) {
                const sFilters = "regulationType_regulationType eq '" + this.oRFS2RegulationData.regulationType + "'" +
                    "objectType_code eq '" + this.oMaintainRegulationObjecttype.objectTypeCode + "'" +
                    "movementType_movementType eq '" + this.oMaintainMovementType.movementType + "'";

                (await maintainMovementTypeToTransactionCategoryImpactApi.requestBuilder().getAll()
                    .addCustomQueryParameters({
                        $filter: encodeURIComponent(sFilters)
                    }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).
                    forEach((oData) => {
                        this.oMaintainMovementTypeToTransactionCategoryImpact = oData;
                    });
            } else {
                (await maintainMovementTypeToTransactionCategoryImpactApi.requestBuilder().getAll()
                    .middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).
                    forEach((oData) => {
                        this.aMaintainMovementTypeToTransactionCategoryImpact.push(oData);
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
            if (this.oEventPayloadData.RenewableEventType === RFS2ConstantValues.eventTypeGMCR) {
                this.addLog("FailedToReadMovementTypeRelevanceFromMasterData", sErrorMsg, messageTypes.error);
            }
        }
        return aMvtTypeTransactionCatMappingMAP;
    }

    // set mat config data
    async setMaterialConfiguration() {
        const { maintainRenewableMaterialConfigurationApi } = regulationcompliancemasterserviceApi();
        try {
            if (this.oRFS2RegulationData && this.oMaintainRegulationObjecttype && this.oEventPayloadData._RenewableMaterialDocument.DocumentDate) {
                const sFilters = "regulationType_regulationType eq '" + this.oRFS2RegulationData.regulationType + "'" +
                    " and objectType_code eq '" + this.oMaintainRegulationObjecttype.objectTypeCode + "' and year eq " +
                    new Date(this.oEventPayloadData._RenewableMaterialDocument.DocumentDate).getFullYear().toString() + "'";

                this.aMaintainRenewableMaterialConfiguration = await maintainRenewableMaterialConfigurationApi.requestBuilder().getAll()
                    .addCustomQueryParameters({
                        $filter: encodeURIComponent(sFilters)
                    }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    });
            } else {
                this.aMaintainRenewableMaterialConfiguration = await maintainRenewableMaterialConfigurationApi.requestBuilder().getAll()
                    .middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
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
            if (this.oEventPayloadData.RenewableEventType === RFS2ConstantValues.eventTypeGMCR) {
                this.addLog("FailedToReadMaterialConfigurationFromMasterData", sErrorMsg, messageTypes.error);
            }
        }
    }

    // set regulation type
    async setRegulationTypes() {
        const { maintainRegulationTypeApi } = regulationcompliancemasterserviceApi();
        try {
            if (this.oRFS2RegulationData) {
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
            if (this.oEventPayloadData.RenewableEventType === RFS2ConstantValues.eventTypeGMCR) {
                this.addLog("FailedToReadRegulationTypeFromMasterData", sErrorMsg, messageTypes.error);
            }
        }
    }

    // set Regulation Transaction Types data
    async setRegulationTransactionTypeTs() {
        try {
            if (this.oRFS2RegulationData) {
                const { maintainRegulationTransactionTypeTsApi } = regulationcompliancemasterserviceApi(),
                    sFilters = "regulationType_regulationType eq '" + this.oRFS2RegulationData.regulationType + "'" +
                        "transactionCategory_category eq '" + this.oMaintainMovementTypeToTransactionCategoryImpact.transactionCategoryCategory + "'";

                (await maintainRegulationTransactionTypeTsApi.requestBuilder().getAll()
                    .addCustomQueryParameters({
                        $filter: encodeURIComponent(sFilters)
                    }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: destinationNames.regulationComplianceMasterService
                    })).
                    forEach((oData) => {
                        this.oMaintainRegulationTransactionTypeTs = oData;
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
            if (this.oEventPayloadData.RenewableEventType === RFS2ConstantValues.eventTypeGMCR) {
                this.addLog("FailedToReadRegulationTransactionTypesFromMasterData", sErrorMsg, messageTypes.error);
            }
        }
    }

    // set Transaction Type Data
    async setTransactiontype() {
        const { maintainRegulationTransactionTypeTsApi } = regulationcompliancemasterserviceApi();
        try {
            (await maintainRegulationTransactionTypeTsApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: destinationNames.regulationComplianceMasterService
                })).
            forEach(oData => {
                this.aMaintainTransactionType.push(oData);
                if(oData.regulationTypeRegulationType && oData.transactionCategoryCategory){
                    this.mMaintainTransactionType[oData.regulationTypeRegulationType+oData.transactionCategoryCategory] = oData;
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
            if (this.oEventPayloadData.RenewableEventType === RFS2ConstantValues.eventTypeGMCR) {
                this.addLog("FailedToReadTransactionTypeFromMasterData", sErrorMsg, messageTypes.error);
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
            if (this.oEventPayloadData.RenewableEventType === RFS2ConstantValues.eventTypeGMCR) {
                this.addLog("FailedToReadRFS2DebitTypeFromMasterData", sErrorMsg, messageTypes.error);
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
            if (this.oEventPayloadData.RenewableEventType === RFS2ConstantValues.eventTypeGMCR) {
                this.addLog("FailedToReadFuelCategoryFromMasterData", sErrorMsg, messageTypes.error);
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
            if (this.oEventPayloadData.RenewableEventType === RFS2ConstantValues.eventTypeGMCR) {
                this.addLog("FailedToReadFuelCategoryFromMasterData", sErrorMsg, messageTypes.error);
            }
        }
    }

    // set Adjustment Reason Code
    async setAdjustmentReasonCode() {
        const { maintainAdjustmentReasonCodeApi } = regulationcompliancemasterserviceApi();
        try {
            (await maintainAdjustmentReasonCodeApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: destinationNames.regulationComplianceMasterService
                })).
                forEach(oData => {
                    this.aMaintainAdjustmentReasonCode.push(oData);
                });
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType === RFS2ConstantValues.eventTypeGMCR) {
                this.addLog("FailedToReadAdjustmentReasonCodeFromMasterData", sErrorMsg, messageTypes.error);
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
            if (this.oEventPayloadData.RenewableEventType === RFS2ConstantValues.eventTypeGMCR) {
                this.addLog("FailedToReadObjectCategoryFromMasterData", sErrorMsg, messageTypes.error);
            }
        }
    }

    // set Unit of Measurement
    async setUOM() {
        const { uomApi } = regulationcompliancemasterserviceApi();
        try {
            (await uomApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: destinationNames.regulationComplianceMasterService
                })).
                forEach(oData => {
                    this.aUom.push(oData);
                });
        } catch (error) {
            console.log(error);
            let sErrorMsg = "";
            if (error instanceof Error) {
                // e is narrowed to Error!
                sErrorMsg = error.stack as string;
            }
            // in case of S4 event log the message
            if (this.oEventPayloadData.RenewableEventType === RFS2ConstantValues.eventTypeGMCR) {
                this.addLog("FailedToReadUnitOfMeasurementFromMasterData", sErrorMsg, messageTypes.error);
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
            if (this.oEventPayloadData.RenewableEventType === RFS2ConstantValues.eventTypeGMCR) {
                this.addLog("FailedToReadImpactFromMasterData", sErrorMsg, messageTypes.error);
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
    async addLog(message: string, technicalMessage: string, messageType: string) {
        if (message &&
            messageType &&
            this.oEventPayloadData.RenewableEventType &&
            this.oEventPayloadData._RenewableMaterialDocument.RenwableMaterialDocument &&
            this.oEventPayloadData._RenewableMaterialDocument.RenwableMaterialDocumentItem
        ) {
            const oResourceManager = new ResourceManager("../../_i18n/i18n"),
                  oBundle = oResourceManager.getTextBundle(language),
                  logObjectID = this.oEventPayloadData.RenewableEventType +
                    this.oEventPayloadData._RenewableMaterialDocument.RenwableMaterialDocument +
                    this.oEventPayloadData._RenewableMaterialDocument.RenwableMaterialDocumentItem,

                oLogData: ILogUtility = {
                    object: logObjectID,
                    message: oBundle.getText(message),
                    messageType: messageType,
                    regulationType: this.oRFS2RegulationData.regulationType as string,
                    regulationSubObjectType: this.oMaintainRegulationObjecttype.objectTypeCode as string,
                    applicationModule: this.oRFS2RegulationData.regulationType as string,
                    applicationSubModule: this.oMaintainRegulationSubScenarioToScenarioType.regulationSubScenarioCategory as string,
                    technicalMessage: technicalMessage
                },

                { logUtilityServiceApi } = logutilityserviceApi(),
                payload: LogUtilityService = logUtilityServiceApi.entityBuilder().fromJson(oLogData);

            await logUtilityServiceApi.requestBuilder().create(payload).middleware(resilience({ retry: 3, circuitBreaker: true })).execute({
                destinationName: "LogUtilityService"
            });
        }
    }
    // --------- End of Post methods ------------------

    async getManualAdjustmentData(sourceScenario: string) {
        const { RegulationComplianceTransaction } = cds.entities('com.sap.chs.com.regulationcompliancetransaction');
        const srv = await cds.connect.to('RegulationComplianceTransactionService');
        return await srv.read(RegulationComplianceTransaction).where({ sourceScenario: sourceScenario });
        // return srv.run(SELECT.from(RegulationComplianceTransaction).where({sourceScenario:sourceScenario}));
        // return await srv.run(
        //     SELECT("*")
        //       .from("RegulationComplianceTransaction")
        //       .where(
        //         `sourceScenario = '${sourceScenario}' `
        //       )
        //   );

        // SELECT.from(Books).where({author_ID:106})
        // return await srv.run(SELECT(RegulationComplianceTransaction).where({sourceScenario}));        

    }

}
