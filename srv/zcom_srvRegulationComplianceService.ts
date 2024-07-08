import cds from '@sap/cds';
// import { Query } from '@sap/cds';
// import { RFS2ComplianceClass } from './library/zcom_tsRFS2Compliance';
import { RegulationComplianceBaseClass } from './library/zcom_tsRegulationComplianceBase';

// import {} from './library/zcom_tsLCFSCompliance';
import { RegulationComplianceTransaction } from '#cds-models/com/sap/chs/com/regulationcompliancetransaction';
import { Quarter, Month } from '@cds-models';
import {
    IMaintainRegulationType, IMaintainRegulationObjecttype, IMaintainRegulationSubscenariotoScenario, 
    IMaintainRegulationTransactionTypeTs, EventPayload, ILogUtility,EventPayloadMDJ
} from './library/utilities/zcom_tsRegulationComplicanceInterface';
import {
    MaintainRfs2Material
} from './external/regulationcompliancemasterservice_api';
// import { materialcharacteristicsApi } from './external/materialcharacteristics_api';
// import { queryObjects } from 'v8';
import { RFS2ComplianceClass } from './library/zcom_tsRFS2Compliance';
import { RFS2ConstantValues, messageTypes } from './library/utilities/zcom_tsConstants';

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
            // oMAdjPayloadData._RenewableMaterialDocument.DocumentDate = oDataRequest.data.documentDate,
            // oMAdjPayloadData._RenewableProductionOrder.RenewableBusinessPartnerNumber = oDataRequest.data.businessPartnerNumber,
            // oMAdjPayloadData._RenewableMaterialDocument.RenewableReasonReasonCode = oDataRequest.data.reasonCode,
            // oMAdjPayloadData._RenewableMaterialDocument.Plant = oDataRequest.data.sourceOrgCompanyPlant,
            // oMAdjPayloadData._RenewableMaterialDocument.RenewableBillOfLading = oDataRequest.data.billofLading,
            // oMAdjPayloadData.RenewableFuelCategory = oDataRequest.data.fuelCategory
            
            await this.processMDAJ(oMAdjReqPayload,oMAdjPayloadData);
            return oDataRequest.data;
        })

        // this.on('CREATE', 'ManualAdjRegulationComplianceTransaction', async (ODataRequest) => {
        //     let aFinalData: RegulationComplianceTransaction[] = [],
        //         aRegulationType: IMaintainRegulationType = { map: {}, data: [] },
        //         aTransactionTypeTs: IMaintainRegulationTransactionTypeTs = { map: {} },
        //         aRegulationSubscenario: IMaintainRegulationSubscenariotoScenario = { map: {}, data: [] },
        //         aMaterialConfig: MaintainRfs2Material[] = [],
        //         aRegulationObjectCategory: IMaintainRegulationObjecttype = { map: {}, objectType: "", data: [] },
        //         logObjectID: string = "";
        //     let oObjectID: number;
        //     const oReqData: RegulationComplianceTransaction = {};
        //     const { regulationType,
        //         objectType,
        //         transactionCategory,
        //         impact,
        //         documentDate,
        //         businessPartnerNumber,
        //         reasonCode,
        //         reasonCodeDesc,
        //         renewablesDocumentComplianceYear,
        //         sourceOrgPlant,
        //         adjustmentBase,
        //         billofLading,
        //         fuelCategory
        //     } = ODataRequest.data;
        //     const oRegulationComplianceBaseInstance = new RegulationComplianceBaseClass({} as EventPayload);
        //     const oRFS2ComplianceInstance = new RFS2ComplianceClass(oRegulationComplianceBaseInstance);
        //     // Get regulations( This would be needed when we UOM conversion to happen currently using for regulation object type and category)
        //     const sFilterUom = `regulationType eq '${regulationType}' and regulationCategory_category eq '${regulationType}'`;// and fuelAlternateUom eq 'BBL'`;
        //     // aRegulationType = await oRegulationComplianceBaseInstance.getRegulationTypes(sFilterUom,
        //     //     {} as ILogUtility);
        //     const oRegulationType = aRegulationType.map[regulationType];

        //     //Get object Type code i.e RIN or RVO
        //     if (regulationType && objectType) {

        //         aRegulationObjectCategory = await oRegulationComplianceBaseInstance.setObjectCategory();
        //         const oRegObjectCateory = aRegulationObjectCategory.map[regulationType + objectType];


        //         // read RFS2DebitType
        //         await oRegulationComplianceBaseInstance.setRFS2DebitType();
        //         const aRFS2DebitType = oRegulationComplianceBaseInstance.aRfs2DebitType;
        //         if (oRegObjectCateory.objectCategoryCategory) {

        //             //Maintain Regulation Transaction Types
        //             // aTransactionTypeTs = await oRegulationComplianceBaseInstance.getRegulationTransactionTypeTs("regulationType_regulationType eq '" +
        //             //     regulationType + "' and transactionCategory_category eq '" + transactionCategory + "'",
        //             //     {} as ILogUtility);
        //             const oTransactionTypeTs = aTransactionTypeTs.map[regulationType + transactionCategory];

        //             if (oTransactionTypeTs.transactionCategoryCategory) {
        //                 // Fetch regulation subscenario
        //                 // const sfilterSubObjectScenario = "regulationType_regulationType eq '" + regulationType + "' and transactionSourceScenario_category eq 'MDJ' and objectCategory_category eq '" + objectType + "'";
        //                 // aRegulationSubscenario = await oRegulationComplianceBaseInstance.getRgulationSubScnario("regulationType_regulationType eq '" +
        //                 //     regulationType + "' and transactionSourceScenario_category eq 'MDJ' and objectCategory_category eq '" + objectType + "'",
        //                 //     {} as ILogUtility);
        //                 const oRegualtionSubscenario = aRegulationSubscenario.map[regulationType + "MDJ" + objectType]


        //                 if (oRegualtionSubscenario.regulationSubScenarioCategory) {

        //                     // Month desc
        //                     let sMonthDes;
        //                     switch (new Date(documentDate).getMonth().toString().padStart(2, "0")) {
        //                         case "04":
        //                             sMonthDes = "MAY";
        //                             break;

        //                         case "05":
        //                             sMonthDes = "JUN";
        //                             break;

        //                         case "06":
        //                             sMonthDes = "JUL";
        //                             break;

        //                         case "07":
        //                             sMonthDes = "AUG";
        //                             break;
        //                     }

        //                     // Adjustment base is by Volume
        //                     if (adjustmentBase === "V") {
        //                         // Fields configured while Volumne based is configured
        //                         const {
        //                             fuelUnitofMeasurement,
        //                             fuelQuantity,
        //                             renewablesEpaCompanyId,
        //                             renewablesEpaFacilityId,
        //                             fuelLogisticsMaterialNumber,
        //                         } = ODataRequest.data;

        //                         // Fetch material configuration
        //                         if (oRegulationType.regulationType && objectType && renewablesDocumentComplianceYear) {
        //                             const sfilterMaterialConfig = "regulationType_regulationType eq '" + oRegulationType.regulationType + "' and objectType_code eq '" + oRegObjectCateory.objectTypeCode + "' and year eq " + renewablesDocumentComplianceYear;
        //                             // aMaterialConfig = await oRegulationComplianceBaseInstance.getMaterialConfiguration(sfilterMaterialConfig,
        //                             //     {} as ILogUtility);
        //                         }
        //                         if (aMaterialConfig.length > 0) {
        //                             // Get Fuel Unit of Measure if alternate UOM is BBL
        //                             if (fuelUnitofMeasurement === 'BBL') {
        //                             }
        //                             // For each material config
        //                             for (let iMatConfig = 0; iMatConfig < aMaterialConfig.length; iMatConfig++) {
        //                                 const oMaterialConfig = aMaterialConfig[iMatConfig];
        //                                 oObjectID = await oRegulationComplianceBaseInstance.getNextRenewableId("RFS2_MADJ_RVO");

        //                                 if (oObjectID && oMaterialConfig.obligationPercent) {
        //                                     aFinalData.push({
        //                                         objectId: oObjectID,
        //                                         regulationType: regulationType,
        //                                         regulationCategory: regulationType,// check if these two are same
        //                                         objectCategory: objectType,
        //                                         objectType: oRegObjectCateory.objectCategoryCategory,
        //                                         sourceScenario: 'MDJ',
        //                                         subObjectScenario: oRegualtionSubscenario.regulationSubScenarioCategory,//get from material subscenariosubScenario[0].regulationSubScenario,//
        //                                         // transactionType: oTransactionTypeTs.transactionType,
        //                                         // transactionTypeDesc: oTransactionTypeTs.description,
        //                                         transactionCategory: transactionCategory,//'PUR',//Maintain Regulation Transaction Types
        //                                         impact: impact,
        //                                         documentDate: documentDate,//'2024-06-01',
        //                                         renewablesDocumentMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
        //                                         renewablesDocumentQuarter: (Math.floor((new Date(documentDate).getMonth() + 3) / 3)).toString() as Quarter,
        //                                         renewablesDocumentComplianceYear: renewablesDocumentComplianceYear,
        //                                         businessPartnerNumber: businessPartnerNumber,
        //                                         reasonCode: reasonCode,
        //                                         reasonCodeDesc: reasonCodeDesc,
        //                                         sourceOrgPlant: sourceOrgPlant,
        //                                         regulationQuantity: Math.round(fuelQuantity * Number(oMaterialConfig.obligationPercent)),
        //                                         regulationQuantityWholeNumber: Math.floor(fuelQuantity * Number(oMaterialConfig.obligationPercent)),
        //                                         // regulationUnitOfMeasurement: regulationUoMCategory,  
        //                                         renewablesEpaCompanyId: renewablesEpaCompanyId,
        //                                         renewablesEpaFacilityId: renewablesEpaFacilityId,
        //                                         fuelUnitofMeasurement: fuelUnitofMeasurement, //'BBL',
        //                                         fuelAlternateUnitofMeasurement: fuelUnitofMeasurement,
        //                                         sourceOrgMaterialNumber: oMaterialConfig.material,//'CELLULOSIC_2024'
        //                                         regulationLogisticsMaterialNumber: oMaterialConfig.material,//'CELLULOSIC_2024',
        //                                         billofLading: billofLading,
        //                                         fuelCategory: fuelCategory,
        //                                         fuelQuantity: fuelQuantity,
        //                                         adjustmentBase: adjustmentBase,
        //                                         fuelLogisticsMaterialNumber: fuelLogisticsMaterialNumber,
        //                                         renewablesPostingMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
        //                                         renewablesReversalPostingMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
        //                                         renewablesProductionMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
        //                                         renewablesTransferMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
        //                                         renewablesSubmissionMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
        //                                         renewablesDocumentMonthDes: sMonthDes,
        //                                         rfs2ObligationType: oMaterialConfig.rvoTypeCategory, //master have to correct MaintainRfs2Material
        //                                         // rfs2ObligationTypeDesc: aRFS2DebitType.map[oMaterialConfig.rvoTypeCategory].description, error
        //                                         regulationUnitOfMeasurement: "RIN"
        //                                     })
        //                                 }//if (oObjectID...
        //                                 else {
        //                                     aFinalData = [];
        //                                     break;
        //                                 }
        //                             }//for (let iMatConfig...
        //                         }
        //                     }//if (vadjustmentBase..
        //                     else {
        //                         const {
        //                             regulationQuantity,
        //                             regulationUnitOfMeasurement,
        //                             regulationLogisticsMaterialNumber
        //                         } = ODataRequest.data;
        //                         oObjectID = await oRegulationComplianceBaseInstance.getNextRenewableId("RFS2_MADJ_RVO");//(oRegualtionSubscenario.regulationSubScenario).toString());
        //                         if (oRegulationType.regulationType && objectType && renewablesDocumentComplianceYear) {
        //                             const sfilterMaterialConfig = "regulationType_regulationType eq '" + oRegulationType.regulationType + "' and objectType_code eq '" +
        //                              oRegObjectCateory.objectTypeCode + "' and year eq " + renewablesDocumentComplianceYear + " and material eq '" +
        //                               regulationLogisticsMaterialNumber + "'";
        //                             // aMaterialConfig = await oRegulationComplianceBaseInstance.getMaterialConfiguration(sfilterMaterialConfig,
        //                             //     {} as ILogUtility);
        //                         }
        //                         if (aMaterialConfig.length > 0) {
        //                             // oObjectID = 435;
        //                             if (oObjectID) {
        //                                 aFinalData.push({
        //                                     objectId: oObjectID,
        //                                     regulationType: regulationType,
        //                                     regulationCategory: regulationType,// check if these two are same
        //                                     objectCategory: objectType,
        //                                     objectType: oRegObjectCateory.objectCategoryCategory,//'RVO',
        //                                     sourceScenario: 'MDJ',
        //                                     subObjectScenario: oRegualtionSubscenario.regulationSubScenarioCategory,//get from material subscenariosubScenario[0].regulationSubScenario,//
        //                                     // transactionType: oTransactionTypeTs.transactionType,
        //                                     // transactionTypeDesc: oTransactionTypeTs.description,
        //                                     transactionCategory: transactionCategory,//'PUR',//Maintain Regulation Transaction Types
        //                                     impact: impact,
        //                                     documentDate: documentDate,//'2024-06-01',
        //                                     renewablesDocumentMonth: new Date(documentDate).getMonth().toString().padStart(2, "0") as Month,
        //                                     renewablesDocumentQuarter: (Math.floor((new Date(documentDate).getMonth() + 3) / 3)).toString() as Quarter,
        //                                     renewablesDocumentComplianceYear: renewablesDocumentComplianceYear,
        //                                     businessPartnerNumber: businessPartnerNumber,
        //                                     reasonCode: reasonCode,
        //                                     reasonCodeDesc: reasonCodeDesc,
        //                                     sourceOrgPlant: sourceOrgPlant,
        //                                     regulationQuantity: regulationQuantity,
        //                                     regulationUnitOfMeasurement: regulationUnitOfMeasurement,
        //                                     regulationLogisticsMaterialNumber: regulationLogisticsMaterialNumber,
        //                                     billofLading: billofLading,
        //                                     fuelCategory: fuelCategory,
        //                                     adjustmentBase: adjustmentBase,
        //                                     renewablesPostingMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
        //                                     renewablesReversalPostingMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
        //                                     renewablesProductionMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
        //                                     renewablesTransferMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
        //                                     renewablesSubmissionMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
        //                                     renewablesDocumentMonthDes: sMonthDes,
        //                                     rfs2ObligationType: aMaterialConfig[0].rvoTypeCategory, //master have to correct MaintainRfs2Material
        //                                     // rfs2ObligationTypeDesc: aRFS2DebitType.map[aMaterialConfig[0].rvoTypeCategory].description, error
        //                                 });
        //                             }//if (oObjectID...
        //                         }//if (aMaterialConfig
        //                     }//else of if (vadjustmentBase...
        //                 }//if (oRegualtionSubscenario
        //             }//if (oTransactionTypeTs
        //         }//if (oRegObjectCateory
        //     }//if (regulationType
        //     if (aFinalData.length > 0) {
        //         // await oRFS2ComplianceInstance.addRegulationCompliances(aFinalData);
        //     }
        //     return ODataRequest.data;
        // })

        // this.on('READ', 'MaintainRegulationType', async (req) => {

        // this.on('READ', 'MaintainTransactionTyp', async (request) => {
        //     const oRegulationTransactionTypeTsData = await oRegulationComplianceBaseInstance.getTransactiontype('');
        //     return oRegulationTransactionTypeTsData;
        // })
        this.on('READ', 'GetMaintainRegulationTransactionTypeTs', async () => {
            const oRegulationComplianceBaseInstance = new RegulationComplianceBaseClass({} as EventPayload);
            await oRegulationComplianceBaseInstance.setRegulationTransactionTypeTs();
            return oRegulationComplianceBaseInstance.aMaintainRegulationTransactionType;
        })
        this.on('READ', 'MaintainRegulationObjecttype', async () => {
            const oRegulationComplianceBaseInstance = new RegulationComplianceBaseClass({} as EventPayload);
            await oRegulationComplianceBaseInstance.setRegulationObjectType();
            return oRegulationComplianceBaseInstance.aMaintainRegulationObjectType;
        })
        this.on('READ', 'MaintainRenewableMaterialConfiguration', async () => {
            const oRegulationComplianceBaseInstance = new RegulationComplianceBaseClass({} as EventPayload);
            await oRegulationComplianceBaseInstance.setMaterialConfiguration();
            return oRegulationComplianceBaseInstance.aMaintainRfs2Material;
        })
        // this.on('READ', 'ManualAdjRegulationComplianceTransaction', async (request) => {
        //     const oManualAdjustment = await oRegulationComplianceBaseInstance.getManualAdjustmentData('MDJ');
        //     return oManualAdjustment;
        // })

        this.on('READ', 'GetReasonCode', async () => {
            const oRegulationComplianceBaseInstance = new RegulationComplianceBaseClass({} as EventPayload);
            await oRegulationComplianceBaseInstance.setAdjustmentReasonCode();
            return oRegulationComplianceBaseInstance.aMaintainAdjustmentReasonCode;
        })

        this.on('READ', ['GetObjectCategory','GetUOM','GetImpact','GetFuelCategory','TransactionType',
            'GetFuelSubCategory', 'GetMovementType', 'GetRegulationSubType', 'GetPlant', 'MaintainRegulationType'
        ], async (req) => {
            const service = await cds.connect.to('RegulationComplianceMasterService');
            return await service.run(req.query);
        })
        
        this.after("CREATE", 'RegulationComplianceTransaction', async (data) => {
            const oRegulationComplianceBaseInstance = new RegulationComplianceBaseClass({} as EventPayload),
                oLogData: ILogUtility = {} as ILogUtility;
            oLogData.message = "RINSCreatedSuccessfully";
            oLogData.messageType = messageTypes.success;
            console.log(oLogData.message);
            for (let index = 0; index < data.length; index++) {
                // generate next no
                const oObjectID = await oRegulationComplianceBaseInstance.getNextRenewableId(data[index].subObjectScenario);
                if(oObjectID){
                    data[index].objectId = oObjectID;
                    
                    // update transaction table
                    await UPDATE(RegulationComplianceTransaction).
                        set({ objectId: oObjectID}).
                        where({ ID: data[index].ID});
                    
                    // update log with success
                    oLogData.object = oObjectID.toString();
                    oLogData.regulationType = oLogData.applicationModule = data[index].regulationType;
                    oLogData.regulationSubObjectType = data[index].objectType;
                    oLogData.applicationSubModule = data[index].subObjectScenario;
                    oRegulationComplianceBaseInstance.addLog(oLogData);
                }
            }
        })
        
        this.on('READ', 'GetFuelMaterialS4', async () => {
          
            const oRegulationComplianceBaseInstance = new RegulationComplianceBaseClass({} as EventPayload);
            const aFuelMaterial = await oRegulationComplianceBaseInstance.getFuelMaterialS4API();
            return aFuelMaterial;
        })

        this.on('READ', 'GetTransactionType', async () => {
            const oRegulationComplianceBaseInstance = new RegulationComplianceBaseClass({} as EventPayload);
            await oRegulationComplianceBaseInstance.setTransactiontype();
            return oRegulationComplianceBaseInstance.oMaintainRegulationTransactionType;
        })

        return super.init()
    }
    
    async processMDAJ(oMAdjReqPayload:EventPayloadMDJ,oMAdjPayloadData:EventPayload){
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
                            oRegulationComplianceBaseClassInstance.oRFS2DebitData.regulationType = oMAdjReqPayload.regulationType;
                            oRegulationComplianceBaseClassInstance.oRFS2DebitData.category = RFS2ConstantValues.credit;
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
            oRegulationComplianceBaseClassInstance.oResolveRFS2_MADJ_RVOCompliance =  new Promise(function(fn,reject){
                oRegulationComplianceBaseClassInstance.resolveMDAJ = fn;
            });
            await oRegulationComplianceBaseClassInstance.oResolveRFS2_MADJ_RVOCompliance.then(() => {
                debugger
            });
            // return oDataRequest.data;

    }

    resolvefn(){

    }

}