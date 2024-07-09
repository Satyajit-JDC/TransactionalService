import cds from '@sap/cds';
// import { Query } from '@sap/cds';
// import { RFS2ComplianceClass } from './library/zcom_tsRFS2Compliance';
import { RegulationComplianceBaseClass } from './library/zcom_tsRegulationComplianceBase';

// import {} from './library/zcom_tsLCFSCompliance';
import { RegulationComplianceTransaction } from '#cds-models/com/sap/chs/com/regulationcompliancetransaction';
import { Quarter, Month } from '@cds-models';
import {
    IMaintainRegulationType, IMaintainRegulationObjecttype, IMaintainRegulationSubscenariotoScenario,
    IMaintainRegulationTransactionTypeTs, EventPayload, ILogUtility, EventPayloadMDJ
} from './library/utilities/zcom_tsRegulationComplicanceInterface';
import {
    MaintainRfs2Material
} from './external/regulationcompliancemasterservice_api';
// import { materialcharacteristicsApi } from './external/materialcharacteristics_api';
// import { queryObjects } from 'v8';
import { RFS2ComplianceClass } from './library/zcom_tsRFS2Compliance';
import { RFS2ConstantValues, messageTypes, createdStatus } from './library/utilities/zcom_tsConstants';

module.exports = class RegulationComplianceService extends cds.ApplicationService {
    async init() {
        const messaging = await cds.connect.to("RenewableEvents");
        // this.on("sendMessage", async msg => {
            messaging.on("ce/zcom/Renewable/RaiseEvent/v1", async msg => {
            if (msg.data) {
                const oEventData = msg.data;
                // fill data from payload to object
                const oEventPayloadData: EventPayload = {
                    RenewableMaterial: oEventData.RenewableMaterial,
                    RenewableEventType: oEventData.RenewableEventType,
                    RenewableFuelCategory: oEventData.RenewableFuelCategory,
                    RenewableTransactionType: oEventData.RenewableTransactionType,
                    RegulationGroupName: oEventData.RegulationGroupName,
                    RegulationMateGroup: oEventData.RegulationMateGroup,
                    MaterialDescription: oEventData.MaterialDescription,
                    _RenewableContract: {
                        RenewableMaterial: oEventData._RenewableContract.RenewableMaterial,
                        RenewableEventType: oEventData._RenewableContract.RenewableEventType,
                        RenwableContract: oEventData._RenewableContract.RenwableContract,
                        RenwableCotractItem: oEventData._RenewableContract.RenwableCotractItem,
                        DocumentType: oEventData._RenewableContract.DocumentType,
                        MovementType: oEventData._RenewableContract.MovementType,
                        Quantity: oEventData._RenewableContract.Quantity,
                        UnitOfMeasure: oEventData._RenewableContract.UnitOfMeasure
                    },
                    _RenewableDeal: {
                        RenewableMaterial: oEventData._RenewableDeal.RenewableMaterial,
                        RenewableEventType: oEventData._RenewableDeal.RenewableEventType,
                        RenwableDealDocument: oEventData._RenewableDeal.RenwableDealDocument,
                        RenwableDealItem: oEventData._RenewableDeal.RenwableDealItem,
                        DocumentType: oEventData._RenewableDeal.DocumentType,
                        MovementType: oEventData._RenewableDeal.MovementType,
                        AttachedIndicator: oEventData._RenewableDeal.AttachedIndicator,
                        Dcode: oEventData._RenewableDeal.Dcode,
                        VintageYear: oEventData._RenewableDeal.VintageYear,
                        Multiplier: oEventData._RenewableDeal.Multiplier,
                        RINObligation: oEventData._RenewableDeal.RINObligation,
                        RINsGenerator: oEventData._RenewableDeal.RINsGenerator,
                        RINspriced: oEventData._RenewableDeal.RINspriced,
                        QAPcertified: oEventData._RenewableDeal.QAPcertified,
                        Quantity: oEventData._RenewableDeal.Quantity,
                        UnitOfMeasure: oEventData._RenewableDeal.UnitOfMeasure,
                        RenewablePassRetainIndicator: oEventData._RenewableDeal.RenewablePassRetainIndicator,
                        RenewableDealNumber: oEventData._RenewableDeal.RenewableDealNumber,
                        RenewableDcodeription: oEventData._RenewableDeal.RenewableDcodeription,
                        RenewableVintageYearription: oEventData._RenewableDeal.RenewableVintageYearription,
                        RenewableRinMultiplierription: oEventData._RenewableDeal.RenewableRinMultiplierription,
                        RenewableQapCertifiedription: oEventData._RenewableDeal.RenewableQapCertifiedription
                    },
                    _RenewableDelivery: {
                        RenewableMaterial: oEventData._RenewableDelivery.RenewableMaterial,
                        RenewableEventType: oEventData._RenewableDelivery.RenewableEventType,
                        RenwableDelivery: oEventData._RenewableDelivery.RenwableDelivery,
                        RenwableDeliveryItem: oEventData._RenewableDelivery.RenwableDeliveryItem,
                        DocumentType: oEventData._RenewableDelivery.DocumentType,
                        MovementType: oEventData._RenewableDelivery.MovementType,
                        Quantity: oEventData._RenewableDelivery.Quantity,
                        UnitOfMeasure: oEventData._RenewableDelivery.UnitOfMeasure
                    },
                    _RenewableMaterialDocument: {
                        RenewableMaterial: oEventData._RenewableMaterialDocument.RenewableMaterial,
                        RenewableEventType: oEventData._RenewableMaterialDocument.RenewableEventType,
                        RenwableMaterialDocument: oEventData._RenewableMaterialDocument.RenwableMaterialDocument,
                        RenwableMaterialDocumentItem: oEventData._RenewableMaterialDocument.RenwableMaterialDocumentItem,
                        RenwableDocumentType: oEventData._RenewableMaterialDocument.RenwableDocumentType,
                        MovementType: oEventData._RenewableMaterialDocument.MovementType,
                        Plant: oEventData._RenewableMaterialDocument.Plant,
                        StorageLocation: oEventData._RenewableMaterialDocument.StorageLocation,
                        CompanyCode: oEventData._RenewableMaterialDocument.CompanyCode,
                        DocumentDate: oEventData._RenewableMaterialDocument.DocumentDate,
                        Quantity: oEventData._RenewableMaterialDocument.Quantity,
                        UnitOfMeasure: oEventData._RenewableMaterialDocument.UnitOfMeasure,
                        RenewableMaterialDocDocDte: oEventData._RenewableMaterialDocument.RenewableMaterialDocDocDte,
                        RenewableMaterialDocPostgDte: oEventData._RenewableMaterialDocument.RenewableMaterialDocPostgDte,
                        RenewableBillOfLading: oEventData._RenewableMaterialDocument.RenewableBillOfLading,
                        RenewableReasonReasonCode: oEventData._RenewableMaterialDocument.RenewableReasonReasonCode,
                        RenewableReversalPostingDate: oEventData._RenewableMaterialDocument.RenewableReversalPostingDate
                    },
                    _RenewableNominationData: {
                        RenewableMaterial: oEventData._RenewableNominationData.RenewableMaterial,
                        RenewableEventType: oEventData._RenewableNominationData.RenewableEventType,
                        RenwableNomination: oEventData._RenewableNominationData.RenwableNomination,
                        NominationKey: oEventData._RenewableNominationData.NominationKey,
                        RenwableNominationItem: oEventData._RenewableNominationData.RenwableNominationItem,
                        DocumentType: oEventData._RenewableNominationData.DocumentType,
                        MovementType: oEventData._RenewableNominationData.MovementType,
                        Quantity: oEventData._RenewableNominationData.Quantity,
                        UnitOfMeasure: oEventData._RenewableNominationData.UnitOfMeasure
                    },
                    _RenewableProductionOrder: {
                        RenewableMaterial: oEventData._RenewableProductionOrder.RenewableMaterial,
                        RenewableEventType: oEventData._RenewableProductionOrder.RenewableEventType,
                        RenwableProductionOrder: oEventData._RenewableProductionOrder.RenwableProductionOrder,
                        RenwableProductionOrderItem: oEventData._RenewableProductionOrder.RenwableProductionOrderItem,
                        DocumentType: oEventData._RenewableProductionOrder.DocumentType,
                        MovementType: oEventData._RenewableProductionOrder.MovementType,
                        Quantity: oEventData._RenewableProductionOrder.Quantity,
                        UnitOfMeasure: oEventData._RenewableProductionOrder.UnitOfMeasure,
                        RenewableBusinessPartnerNumber: oEventData._RenewableProductionOrder.RenewableBusinessPartnerNumber,
                        RenewableBusinessPartnerDesc: oEventData._RenewableProductionOrder.RenewableBusinessPartnerDesc,
                        RenewableIncoTerms1: oEventData._RenewableProductionOrder.RenewableIncoTerms1,
                        RenewableIncoTerms2: oEventData._RenewableProductionOrder.RenewableIncoTerms2,
                        RenewableContract: oEventData._RenewableProductionOrder.RenewableContract,
                        RenewableContractItem: oEventData._RenewableProductionOrder.RenewableContractItem
                    },
                    _RenewablePurchaseOrder: {
                        RenewableMaterial: oEventData._RenewablePurchaseOrder.RenewableMaterial,
                        RenewableEventType: oEventData._RenewablePurchaseOrder.RenewableEventType,
                        RenwablePurchaseOrder: oEventData._RenewablePurchaseOrder.RenwablePurchaseOrder,
                        RenwablePurchaseOrderItem: oEventData._RenewablePurchaseOrder.RenwablePurchaseOrderItem,
                        DocumentType: oEventData._RenewablePurchaseOrder.DocumentType,
                        MovementType: oEventData._RenewablePurchaseOrder.MovementType,
                        Quantity: oEventData._RenewablePurchaseOrder.Quantity,
                        UnitOfMeasure: oEventData._RenewablePurchaseOrder.UnitOfMeasure
                    },
                    _RenewableSalesOrder: {
                        RenewableMaterial: oEventData._RenewableSalesOrder.RenewableMaterial,
                        RenewableEventType: oEventData._RenewableSalesOrder.RenewableEventType,
                        RenwableSalesOrder: oEventData._RenewableSalesOrder.RenwableSalesOrder,
                        RenwableSalesOrderItem: oEventData._RenewableSalesOrder.RenwableSalesOrderItem,
                        DocumentType: oEventData._RenewableSalesOrder.DocumentType,
                        MovementType: oEventData._RenewableSalesOrder.MovementType,
                        Quantity: oEventData._RenewableSalesOrder.Quantity,
                        UnitOfMeasure: oEventData._RenewableSalesOrder.UnitOfMeasure
                    },
                    _RenewableTicketData: {
                        RenewableMaterial: oEventData._RenewableTicketData.RenewableMaterial,
                        RenewableEventType: oEventData._RenewableTicketData.RenewableEventType,
                        RenwableTicket: oEventData._RenewableTicketData.RenwableTicket,
                        RenwableTicketItem: oEventData._RenewableTicketData.RenwableTicketItem,
                        Ticketkey: oEventData._RenewableTicketData.Ticketkey,
                        TicketVersion: oEventData._RenewableTicketData.TicketVersion,
                        TicketPurpose: oEventData._RenewableTicketData.TicketPurpose,
                        Tickettype: oEventData._RenewableTicketData.Tickettype,
                        ExternalTicketNumber: oEventData._RenewableTicketData.ExternalTicketNumber,
                        ExternalPositionNumber: oEventData._RenewableTicketData.ExternalPositionNumber,
                        DocumentType: oEventData._RenewableTicketData.DocumentType,
                        MovementType: oEventData._RenewableTicketData.MovementType,
                        Quantity: oEventData._RenewableTicketData.Quantity,
                        UnitOfMeasure: oEventData._RenewableTicketData.UnitOfMeasure
                    }
                };
                // create Base Class Object with Event Data to identify Regulation
                const oRegulationComplianceBaseClassInstance = await new RegulationComplianceBaseClass(oEventPayloadData);

                // wait for promise to get regulations
                oRegulationComplianceBaseClassInstance.oRegulationDataIsReady.then((bResolved) => {
                    if (bResolved) {
                        // RFS2 Regulation is Active
                        if (oRegulationComplianceBaseClassInstance.oRFS2RegulationData.regulationType) {
                            oRegulationComplianceBaseClassInstance.setRFS2ComplianceClassObject = new RFS2ComplianceClass(oRegulationComplianceBaseClassInstance);
                        }
                    }
                });
            }
        })

        // On crreate of Manual adjustment for RVO/RIN
        // code revamp
        // this.on("OnCreateManualAdjustment", async (oDatarequest)=> {
        this.on('CREATE', 'ManualAdjRegulationComplianceTransaction', async (oDataRequest) => {
            const oMAdjPayloadData: EventPayload = {} as EventPayload,
                oMAdjReqPayload: EventPayloadMDJ = {} as EventPayloadMDJ;
            // To assign event type to divert to MDJ process
            oMAdjPayloadData.RenewableEventType = RFS2ConstantValues.eventTypeMDJ;
            // oMAdjPayloadData._RenewableMaterialDocument.DocumentDate = oDataRequest.data.documentDate as string;

            // manual adjustment payload
            oMAdjReqPayload.regulationType = oDataRequest.data.regulationType;
            oMAdjReqPayload.sourceScenario = RFS2ConstantValues.eventTypeMDJ;
            oMAdjReqPayload.objectType = oDataRequest.data.objectType;
            oMAdjReqPayload.transactionCategory = oDataRequest.data.transactionCategory;
            oMAdjReqPayload.impact = oDataRequest.data.impact;
            oMAdjReqPayload.documentDate = oDataRequest.data.documentDate;
            oMAdjReqPayload.businessPartnerNumber = oDataRequest.data.businessPartnerNumber;
            oMAdjReqPayload.reasonCode = oDataRequest.data.reasonCode;
            oMAdjReqPayload.reasonCodeDesc = oDataRequest.data.reasonCodeDesc;
            oMAdjReqPayload.renewablesDocumentComplianceYear = oDataRequest.data.renewablesDocumentComplianceYear;
            oMAdjReqPayload.sourceOrgPlant = oDataRequest.data.sourceOrgPlant;
            oMAdjReqPayload.adjustmentBase = oDataRequest.data.adjustmentBase;
            oMAdjReqPayload.billofLading = oDataRequest.data.billofLading;
            oMAdjReqPayload.fuelCategory = oDataRequest.data.fuelCategory;
            oMAdjReqPayload.regulationQuantity = oDataRequest.data.regulationQuantity;
            oMAdjReqPayload.regulationUnitOfMeasurement = oDataRequest.data.regulationUnitOfMeasurement;
            oMAdjReqPayload.regulationLogisticsMaterialNumber = oDataRequest.data.regulationLogisticsMaterialNumber;
            oMAdjReqPayload.sourceOrgMaterialNumber = oDataRequest.data.sourceOrgCompanyMaterialNumber;
            oMAdjReqPayload.fuelUnitofMeasurement = oDataRequest.data.fuelUnitofMeasurement;
            oMAdjReqPayload.fuelQuantity = oDataRequest.data.fuelQuantity;
            oMAdjReqPayload.renewablesEpaCompanyId = oDataRequest.data.renewablesEpaCompanyId;
            oMAdjReqPayload.renewablesEpaFacilityId = oDataRequest.data.renewablesEpaFacilityId;
            oMAdjReqPayload.fuelLogisticsMaterialNumber = oDataRequest.data.fuelLogisticsMaterialNumber;
       
            await this.processMDAJ(oMAdjReqPayload, oMAdjPayloadData);
            return oDataRequest.data;
        })

        // this.on('READ', 'GetMaintainRegulationTransactionTypeTs', async () => {
        //     const oRegulationComplianceBaseInstance = new RegulationComplianceBaseClass({} as EventPayload);
        //     await oRegulationComplianceBaseInstance.setRegulationTransactionTypeTs();
        //     return oRegulationComplianceBaseInstance.aMaintainRegulationTransactionType;
        // })
        this.on('READ', 'MaintainRegulationObjecttype', async () => {
            const oRegulationComplianceBaseInstance = new RegulationComplianceBaseClass({} as EventPayload);
            await oRegulationComplianceBaseInstance.setRegulationObjectType();
            return oRegulationComplianceBaseInstance.aMaintainRegulationObjectType;
        })
        // this.on('READ', 'MaintainRenewableMaterialConfiguration', async () => {
        //     const oRegulationComplianceBaseInstance = new RegulationComplianceBaseClass({} as EventPayload);
        //     await oRegulationComplianceBaseInstance.setMaterialConfiguration();
        //     return oRegulationComplianceBaseInstance.aMaintainRfs2Material;
        // })
        // this.on('READ', 'ManualAdjRegulationComplianceTransaction', async (request) => {
        //     const oManualAdjustment = await oRegulationComplianceBaseInstance.getManualAdjustmentData('MDJ');
        //     return oManualAdjustment;
        // })

        this.on('READ', 'GetReasonCode', async () => {
            const oRegulationComplianceBaseInstance = new RegulationComplianceBaseClass({} as EventPayload);
            await oRegulationComplianceBaseInstance.setAdjustmentReasonCode();
            return oRegulationComplianceBaseInstance.aMaintainAdjustmentReasonCode;
        })

        this.on('READ', ['GetObjectCategory','GetUOM','GetImpact','GetFuelCategory','GetTransactionType',
            'GetFuelSubCategory', 'GetMovementType', 'GetRegulationSubType', 'GetPlant', 'MaintainRegulationType','GetProcessingStatus',
            'GetMaintainRegulationTransactionTypeTs', 'MaintainRenewableMaterialConfiguration', 'GetRegulationSubscenario'], async (req) => {
            const service = await cds.connect.to('RegulationComplianceMasterService');
            return await service.run(req.query);
        })

        this.after("CREATE", 'RegulationComplianceTransaction', async (data) => {
            const oRegulationComplianceBaseInstance = new RegulationComplianceBaseClass({} as EventPayload),
                oLogData: ILogUtility = {} as ILogUtility;
            oLogData.message = "RINSCreatedSuccessfully";
            oLogData.messageType = messageTypes.success;
            console.log(oLogData.message);
            if (data.length) {
                for (let index = 0; index < data.length; index++) {
                    // generate next no
                    const oObjectID = await oRegulationComplianceBaseInstance.getNextRenewableId(data[index].subObjectScenario);
                    if (oObjectID) {
                        data[index].objectId = oObjectID;

                        // update transaction table
                        await UPDATE(RegulationComplianceTransaction).
                            set({ objectId: oObjectID }).
                            where({ ID: data[index].ID });

                        // update log with success
                        oLogData.object = oObjectID.toString();
                        oLogData.regulationType = oLogData.applicationModule = data[index].regulationType;
                        oLogData.regulationSubObjectType = data[index].objectType;
                        oLogData.applicationSubModule = data[index].subObjectScenario;
                        oRegulationComplianceBaseInstance.addLog(oLogData);
                    }
                }
            }
            else if ( data.sourceScenario === RFS2ConstantValues.eventTypeMDJ && data.processingStatus === createdStatus ) {
                // generate next no
                const oObjectID = await oRegulationComplianceBaseInstance.getNextRenewableId(data.subObjectScenario);
                if (oObjectID) {
                    data.objectId = oObjectID;

                    // update transaction table
                    await UPDATE(RegulationComplianceTransaction).
                        set({ objectId: oObjectID }).
                        where({ ID: data.ID });

                    // update log with success
                    oLogData.object = oObjectID.toString();
                    oLogData.regulationType = oLogData.applicationModule = data.regulationType;
                    oLogData.regulationSubObjectType = data.objectType;
                    oLogData.applicationSubModule = data.subObjectScenario;
                    oRegulationComplianceBaseInstance.addLog(oLogData);
                }
            }
        })

        this.on('READ', 'GetFuelMaterialS4', async () => {

            const oRegulationComplianceBaseInstance = new RegulationComplianceBaseClass({} as EventPayload);
            const aFuelMaterial = await oRegulationComplianceBaseInstance.getFuelMaterialS4API();
            return aFuelMaterial;
        })

        // this.on('READ', 'GetTransactionType', async () => {
        //     const oRegulationComplianceBaseInstance = new RegulationComplianceBaseClass({} as EventPayload);
        //     await oRegulationComplianceBaseInstance.setTransactiontype();
        //     return oRegulationComplianceBaseInstance.oMaintainRegulationTransactionType;
        // })

        return super.init()
    }

    async processMDAJ(oMAdjReqPayload: EventPayloadMDJ, oMAdjPayloadData: EventPayload) {
        // create Base Class Object with Event Data to identify Regulation
        // set Regulation master data
        const oRegulationComplianceBaseClassInstance = await new RegulationComplianceBaseClass(oMAdjPayloadData);
        oRegulationComplianceBaseClassInstance.oRFS2RegulationData.regulationType = oMAdjReqPayload.regulationType;
        // Manual adjustment request data
        oRegulationComplianceBaseClassInstance.oEventPayloadMDJData = oMAdjReqPayload;

        // oRegulationComplianceBaseClassInstance.setImpact
        // wait for promise to get regulations
        oRegulationComplianceBaseClassInstance.oRegulationDataIsReady.then((bResolved) => {
            if (bResolved) {
                // RFS2 Regulation is Active
                if (oRegulationComplianceBaseClassInstance.oRFS2RegulationData) {
                    // Set Debit/Credit objects
                    if (oMAdjReqPayload.objectType === RFS2ConstantValues.credit) {
                        oRegulationComplianceBaseClassInstance.oRFS2CreditData.regulationType = oMAdjReqPayload.regulationType;
                        oRegulationComplianceBaseClassInstance.oRFS2CreditData.category = RFS2ConstantValues.credit;
                    }
                    else if (oMAdjReqPayload.objectType === RFS2ConstantValues.debit) {
                        oRegulationComplianceBaseClassInstance.oRFS2DebitData.regulationType = oMAdjReqPayload.regulationType;
                        oRegulationComplianceBaseClassInstance.oRFS2DebitData.category = RFS2ConstantValues.debit;
                    }
                    oRegulationComplianceBaseClassInstance.setRFS2ComplianceClassObject = new RFS2ComplianceClass(oRegulationComplianceBaseClassInstance);
                }
            }
        });
        // var fn = oRegulationComplianceBaseClassInstance.resolveMDAJ;
        oRegulationComplianceBaseClassInstance.oResolveRFS2_MADJ_RVOCompliance = new Promise(function (fn, reject) {
            oRegulationComplianceBaseClassInstance.resolveMDAJ = fn;
        });
        await oRegulationComplianceBaseClassInstance.oResolveRFS2_MADJ_RVOCompliance.then(() => {
            debugger
        });
        // return oDataRequest.data;

    }

    resolvefn() {

    }

}