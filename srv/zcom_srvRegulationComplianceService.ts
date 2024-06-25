import cds from '@sap/cds';
import { oRFS2ComplianceInstance } from './library/zcom_tsRFS2Compliance';
import { oRegulationComplianceBaseInstance } from './library/zcom_tsRegulationComplianceBase';

// import {} from './library/zcom_tsLCFSCompliance';
import { RegulationComplianceTransaction } from '@cds-models/com/sap/chs/com/regulationcompliancetransaction';
import { Quarter, Month } from '@cds-models';
import {
    IMaintainRegulationGroupView, IMaintainRegulationType,
    IMaintainRegulationMaterialGroupView, IMaintainMovementTypeToTransactionCategoryImpact,
    IMaintainMovementType, IMaintainRegulationObjecttype, IMaintainRegulationSubscenariotoScenario, IMaintainRegulationTransactionTypeTs
} from './library/interfaces/zcom_tsRegulationComplicanceInterface';
import {
    MaintainRenewableMaterialConfiguration
} from './external/regulationcompliancemasterservice_api';
// import { resilience } from '@sap-cloud-sdk/resilience';
module.exports = class RegulationComplianceService extends cds.ApplicationService {
    async init() {
        const messaging = await cds.connect.to("RenewableEvents");
        // const { RegulationComplianceTransaction } = cds.entities('com.sap.chs.com.regulationcompliancetransaction')
        // this.on("processEvent", async ({ data: EventData }) => {
        messaging.on("zcom/Renewable/RaiseEvent/v1", async msg => {
            if (msg.data) {
                const oEventData = msg.data;
                let oYear: string = "", sRegGroups: string = "",
                    aRegulationGroups: IMaintainRegulationGroupView = {
                        map: {}, regulationType: "", regulationType_regulationType: "",
                        regulationTypeRegulationType: ""
                    },
                    aRegulationMaterialGrp: IMaintainRegulationMaterialGroupView = { map: {}, objectCategory: "", objectCategory_category: "" },
                    aRegObjectType: IMaintainRegulationObjecttype = { map: {}, objectType: "", data: [] },
                    aMovementTypes: IMaintainMovementType = { map: {}, movementTypeMovementType: "", movementType_movementType: "", data: [] },
                    aRegulationType: IMaintainRegulationType = { map: {}, data: [] },
                    aMvtTypeRelevance: IMaintainMovementTypeToTransactionCategoryImpact = { map: {}, transactionCategoryCategory: "", data: [] },
                    aIMaintainRegulationTransactionTypeTsMAP: IMaintainRegulationTransactionTypeTs = { map: {} },
                    aRegulationSubscenario: IMaintainRegulationSubscenariotoScenario = { map: {} };

                const aFinalData: RegulationComplianceTransaction[] = [];
                oEventData.documentDate = "2024-06-19"; //HC
                oEventData.postingDate = "2024-06-19"; //HC
                oYear = new Date(oEventData.documentDate).getFullYear().toString(); //HC

                // build regulation group array
                // EventData.eventData.forEach(function (oEventData: EventData) {
                //     sRegGroups = sRegGroups ? sRegGroups + ' and ' : "";
                //     sRegGroups += "regulationGroup_regulationGroup eq '" + oEventData.RegulationGroupName + "'";
                //     if (!oYear && oEventData.documentDate) {
                //         oYear = new Date(oEventData.documentDate).getFullYear().toString();
                //     }
                // });
                if (oEventData.RegulationGroupName) {
                    sRegGroups += "regulationGroup_regulationGroup eq '" + oEventData.RegulationGroupName + "'";
                }

                // read regulation groups
                if (sRegGroups) {
                    aRegulationGroups = await oRegulationComplianceBaseInstance.getRegulations(sRegGroups);
                }

                // get material group code
                if (aRegulationGroups.regulationType) {
                    aRegulationMaterialGrp = await oRegulationComplianceBaseInstance.getRegulationMaterialGroup(aRegulationGroups.regulationType);//"regulationType eq 'RFS2'");
                }

                // get reg object type
                // aRegulationGroups.regulationType_regulationType = "regulationType_regulationType eq 'RFS2'";
                // aRegulationMaterialGrp.objectCategory_category = "objectCategory_category eq 'D'";

                if (aRegulationGroups.regulationType_regulationType && aRegulationMaterialGrp.objectCategory_category) {
                    aRegObjectType = await oRegulationComplianceBaseInstance.getRegulationObjectType(aRegulationGroups.regulationType_regulationType + " and " + aRegulationMaterialGrp.objectCategory_category);//"regulationType_regulationType eq 'RFS2' and objectCategory eq 'RVO'");
                }

                // get movement type
                if (aRegulationGroups.regulationType_regulationType && aRegObjectType.objectType) {
                    aMovementTypes = await oRegulationComplianceBaseInstance.getMovementType(aRegulationGroups.regulationType_regulationType + " and " + aRegObjectType.objectType); //"regulationType_regulationType eq 'RFS2' and objectType_code eq 'RIN'");
                }

                // get mvt type relevance
                // aRegulationGroups.regulationType_regulationType = "regulationType_regulationType eq 'RFS2'";
                if (aRegulationGroups.regulationType_regulationType && aRegObjectType.objectType && aMovementTypes.movementType_movementType) {
                    aMvtTypeRelevance = await oRegulationComplianceBaseInstance.readMvtTypeTransationRelevance(aRegulationGroups.regulationType_regulationType + " and " + aRegObjectType.objectType + " and " + aMovementTypes.movementType_movementType); //"regulationTypeRegulationType eq 'RFS2' and objectTypeCode eq 'RIN and movementTypeMovementType eq '101'");
                }

                // // read mat config
                let aMaterialConfig: MaintainRenewableMaterialConfiguration[] = [];
                // if(aRegulationGroups.regType.length>0 && aRegulationMaterialGrp.objectCategory.length>0 && oYear){
                if (aRegulationGroups.regulationType_regulationType && aRegulationMaterialGrp.objectCategory && oYear) {
                    // const sMatConfigFilters = "regulationType_regulationType eq 'RFS2' and objectType_code eq 'RIN and year eq '" + oYear + "'";
                    // aMaterialConfig = await oRegulationComplianceBaseInstance.getMaterialConfiguration(aRegulationGroups.regulationType_regulationType +" and "+ aRegulationMaterialGrp.objectCategory +" and year eq '"+ oYear + "'");
                    aMaterialConfig = await oRegulationComplianceBaseInstance.getMaterialConfiguration(aRegulationGroups.regulationType_regulationType + " and objectType_code eq 'RVO' and year eq " + oYear);
                }

                // get regulation type
                // aRegulationGroups.regulationType = "regulationType eq 'RFS2'";
                if (aRegulationGroups.regulationType) {
                    aRegulationType = await oRegulationComplianceBaseInstance.getRegulationTypes(aRegulationGroups.regulationType); //"regulationType eq 'RFS2'");
                }

                // get Regulation Transaction Types
                if (aMvtTypeRelevance.transactionCategoryCategory && aRegulationGroups.regulationType_regulationType) {
                    aIMaintainRegulationTransactionTypeTsMAP = await oRegulationComplianceBaseInstance.getRegulationTransactionTypeTs(aRegulationGroups.regulationType_regulationType + " and " + aMvtTypeRelevance.transactionCategoryCategory);
                }

                // get sub scenario
                // aRegulationMaterialGrp.objectCategory_category = "objectCategory_category eq 'D'";
                const sfilterSubObjectScenario = aRegulationGroups.regulationType_regulationType + " and transactionSourceScenario_category eq 'GM' and " + aRegulationMaterialGrp.objectCategory_category;
                aRegulationSubscenario = await oRegulationComplianceBaseInstance.getRgulationSubScnario(sfilterSubObjectScenario);

                // const oObjectID = await oRegulationComplianceBaseInstance.getNextRenewableId("RFS2_RVO_RF"); //"RFS2_RVO_RF");

                // build output array
                if (aMaterialConfig.length > 0 && aRegulationGroups.regulationType && aRegulationMaterialGrp.objectCategory &&
                    aRegObjectType.objectType && aMovementTypes.movementTypeMovementType && aMvtTypeRelevance && aRegulationType) {
                    // read RFS2DebitType
                    const aRFS2DebitType = await oRegulationComplianceBaseInstance.getRFS2DebitType("");
                    // read FuelCategory
                    const aFuelCategory = await oRegulationComplianceBaseInstance.getFuelCategory("");
                    // read SubFuelCategory
                    const aFuelSubCategory = await oRegulationComplianceBaseInstance.getFuelSubCategory("");

                    // for (let eventIndex = 0; eventIndex < EventData.eventData.length; eventIndex++) {
                    //     const oEventData = EventData.eventData[eventIndex];

                    // }
                    // EventData.eventData.forEach(function (oEventData: EventData) {
                    // read reg group data
                    if (oEventData.RegulationGroupName) {
                        const oRegulationGroupsData = aRegulationGroups.map[oEventData.RegulationGroupName];

                        // read material group
                        if (oRegulationGroupsData.regulationType) {
                            const oRegulationMaterialGrpData = aRegulationMaterialGrp.map[oRegulationGroupsData.regulationType];

                            // read object type
                            if (oRegulationMaterialGrpData.regulationType && oRegulationMaterialGrpData.category) {
                                const oRegObjectTypeData = aRegObjectType.map[oRegulationMaterialGrpData.regulationType + oRegulationMaterialGrpData.category];

                                // read movement type
                                if (oRegObjectTypeData.regulationTypeRegulationType && oRegObjectTypeData.objectTypeCode) {
                                    const oMovementTypesData = aMovementTypes.map[oRegObjectTypeData.regulationTypeRegulationType + oRegObjectTypeData.objectTypeCode];

                                    // read movement type relevance
                                    if (oMovementTypesData.regulationTypeRegulationType && oMovementTypesData.objectTypeCode && oMovementTypesData.movementType) {
                                        const oMvtTypeRelevanceData = aMvtTypeRelevance.map[oMovementTypesData.regulationTypeRegulationType + oMovementTypesData.objectTypeCode + oMovementTypesData.movementType];

                                        // read regulation type
                                        const oRegulationTypeData = aRegulationType.map[oMovementTypesData.regulationTypeRegulationType];

                                        // get Regulation Transaction Types
                                        const oIMaintainRegulationTransactionTypeTsData = aIMaintainRegulationTransactionTypeTsMAP.map[oMovementTypesData.regulationTypeRegulationType + oMvtTypeRelevanceData.transactionCategoryCategory];

                                        // get sub scenarion
                                        const oRegulationSubscenario = aRegulationSubscenario.map[oRegulationGroupsData.regulationType + 'GM' + oRegulationMaterialGrpData.category];

                                        // get FuelCategoryDes
                                        let sFuelCategoryDes: RegulationComplianceTransaction["fuelCategoryDesc"];
                                        try {
                                            sFuelCategoryDes = aFuelCategory.map[oEventData.RenewableFuelCategory].description;
                                        } catch (error) {

                                        }

                                        // get FuelSubCategoryDes
                                        let sFuelSubCategoryDes: RegulationComplianceTransaction["fuelSubCategoryDesc"];
                                        try {
                                            // sFuelSubCategoryDes = aFuelSubCategory.map[oEventData.fuelSubCategory].description;
                                            sFuelSubCategoryDes = aFuelSubCategory.map["BD"].description;
                                        } catch (error) {

                                        }

                                        // get material doc data
                                        let oMatDocData;
                                        if (oEventData._RenewableMaterialDocument) {
                                            oMatDocData = oEventData._RenewableMaterialDocument[0];
                                        }

                                        let sMonthDes;
                                        switch (new Date(oEventData.documentDate).getMonth().toString().padStart(2, "0")) {
                                            case "00":
                                                sMonthDes = "JAN";
                                                break;

                                            case "01":
                                                sMonthDes = "FEB";
                                                break;

                                            case "02":
                                                sMonthDes = "MAR";
                                                break;

                                            case "03":
                                                sMonthDes = "APR";
                                                break;

                                            case "04":
                                                sMonthDes = "MAY";
                                                break;

                                            case "05":
                                                sMonthDes = "JUN";
                                                break;

                                            case "06":
                                                sMonthDes = "JUL";
                                                break;

                                            case "07":
                                                sMonthDes = "AUG";
                                                break;

                                            case "08":
                                                sMonthDes = "SEP";
                                                break;

                                            case "09":
                                                sMonthDes = "OCT";
                                                break;

                                            case "10":
                                                sMonthDes = "NOV";
                                                break;

                                            case "11":
                                                sMonthDes = "DEC";
                                                break;
                                        }

                                        for (let index = 0; index < aMaterialConfig.length; index++) {
                                            const oMaterialConfig = aMaterialConfig[index];
                                            // aMaterialConfig.forEach(async function (oMaterialConfig) {
                                            if (oRegulationGroupsData.regulationType === oMaterialConfig.regulationTypeRegulationType && oRegulationSubscenario.regulationSubScenarioCategory &&
                                                oMaterialConfig.rvoTypeCategory
                                            ) {  // type is eq
                                                const oObjectID = await oRegulationComplianceBaseInstance.getNextRenewableId(oRegulationSubscenario.regulationSubScenarioCategory); //"RFS2_RVO_RF");
                                                if (oObjectID && oMaterialConfig.obligationPercent) {
                                                    aFinalData.push({
                                                        objectId: oObjectID,
                                                        regulationType: oRegulationGroupsData.regulationType,
                                                        regulationTypeDesc: oRegulationGroupsData.description,
                                                        regulationCategory: oRegulationMaterialGrpData.category,
                                                        // objectCategory: oRegulationMaterialGrpData.category,
                                                        objectCategoryDesc: oRegulationMaterialGrpData.description,
                                                        objectType: oRegObjectTypeData.objectTypeCode,
                                                        objectTypeDesc: oRegObjectTypeData.description,
                                                        // sourceScenario: oMovementTypesData.sourceScenario, //master have to update
                                                        subObjectScenario: oRegulationSubscenario.regulationSubScenarioCategory, //oMovementTypesData.subObjectScenario,
                                                        subObjectScenarioDesc: oRegulationSubscenario.description,
                                                        transactionCategory: oMvtTypeRelevanceData.transactionCategoryCategory, //master have to update
                                                        transactionType: oIMaintainRegulationTransactionTypeTsData.transactionType,
                                                        transactionTypeDesc: oIMaintainRegulationTransactionTypeTsData.description,
                                                        // extTransactionNumber
                                                        // matchedExtTransactionNumber
                                                        billofLading: "99123",  //oEventData.billofLading,
                                                        // impact: oMovementTypesData.impactCategory,   //master have to update
                                                        // businessPartnerNumber: oEventData.businessPartnerNumber,
                                                        // businessPartnerDesc: oEventData.businessPartnerDesc,
                                                        movementType: oMovementTypesData.movementType,
                                                        // incotermsPart1: oEventData.incotermsPart1,
                                                        // incotermsPart2: oEventData.incotermsPart2,
                                                        fuelCategory: oEventData.RenewableFuelCategory,
                                                        fuelCategoryDesc: sFuelCategoryDes, //oEventData.fuelCategoryDesc master
                                                        fuelSubCategory: "BD", //HC oEventData.fuelSubCategory, //Maintain Fuel Mapping
                                                        fuelSubCategoryDesc: sFuelSubCategoryDes,
                                                        // feedStock: oEventData.feedStock,
                                                        // negativeImpact: oMovementTypesData.negativeImpact, //master have to update
                                                        // creditPercentage: oEventData.creditPercentage,
                                                        // movementScenario: oEventData.movementScenario,
                                                        // productionType: oEventData.productionType,
                                                        // cancelledUser: oEventData.cancelledUser,
                                                        // submitted: oEventData.submitted,
                                                        // passRetainIndicator: oEventData.passRetainIndicator,
                                                        // dealNumber: oEventData.dealNumber,
                                                        // oi: oEventData.oi,
                                                        // Contract: 
                                                        // contractItemNo: oEventData.contractItemNo,
                                                        processingStatus: '01',
                                                        objectStatusDesc: 'Created',
                                                        // priceStatus
                                                        // matchStatus
                                                        // reconcilliationGroupID: oEventData.reconcilliationGroupID,
                                                        // autoMatch: oEventData.autoMatch,
                                                        // groupBalanced: oEventData.groupBalanced,
                                                        // renewablesEpaCompanyId: oEventData.renewablesEpaCompanyId,
                                                        // renewablesEpaFacilityId: oEventData.renewablesEpaFacilityId,
                                                        fuelQuantity: oMatDocData.Quantity, //oEventData.fuelQuantity,
                                                        // fuelQuantityRaw: oEventData.fuelQuantityRaw,
                                                        fuelUnitofMeasurement: oMatDocData.UnitOfMeasure, //oEventData.fuelUnitofMeasurement,
                                                        // fuelQuantityinAlternateUOM: (oEventData.fuelQuantity * Number(oMaterialConfig.obligationPercent)),
                                                        // fuelQuantityinAlternateUOMRaw: (oEventData.fuelQuantity * Number(oMaterialConfig.obligationPercent)),
                                                        fuelAlternateUnitofMeasurement: oRegulationTypeData.fuelAlternateUom,
                                                        // numeratorforConversiontoBaseUnitsOfMeasure: Number(oEventData.fuelQuantity * Number(oMaterialConfig.obligationPercent)),
                                                        // denominatorforConversiontoBaseUnitsOfMeasure: (oEventData.fuelQuantity * Number(oMaterialConfig.obligationPercent)),
                                                        regulationQuantity: Math.round(oMatDocData.Quantity * Number(oMaterialConfig.obligationPercent)),
                                                        regulationQuantityWholeNumber: (oMatDocData.Quantity * Number(oMaterialConfig.obligationPercent)),
                                                        regulationUnitOfMeasurement: oRegulationTypeData.regulationUoMCategory,
                                                        originCountry: oRegulationTypeData.countryCode,
                                                        // destinationCountry: oRegulationTypeData.countryCode,
                                                        originRegion: oRegulationTypeData.regionCode,
                                                        // destinationRegion:
                                                        // reasonCode: oEventData.
                                                        // reasonCodeDesc
                                                        regulationCompanyName: "1000", //oEventData.sourceOrgCompanyCode,
                                                        // internalComments
                                                        // externalComments
                                                        // regulatoryComments
                                                        // renewableRootGUID
                                                        // renewablepParentROGUID
                                                        // internalObjectGUID
                                                        // externalObjectGUID
                                                        // dealUUID
                                                        // dealItemUUID
                                                        // adjustmentBase
                                                        // valuationPool
                                                        // dealStrategy
                                                        // dealStrategyDescription
                                                        // valuationType
                                                        // exchangeAgreementNumber
                                                        // provFinalPrice
                                                        // ignoreProvPrice
                                                        // fuelGallonConditionAmountOrPercentScale
                                                        // fuelGallonConditionUnitCurrencyOrPercent
                                                        // fuelGallonConditionPricingUnit
                                                        // fuelGallonConditionUnit
                                                        // rinPriceConditionAmountOrPercentScale
                                                        // rinPriceConditionUnitCurrencyOrPercent
                                                        // rinPriceConditionPricingUnit
                                                        // rinPriceConditionUnit
                                                        postingDate: oEventData.postingDate,
                                                        renewablesPostingMonth: new Date(oEventData.postingDate).getMonth().toString().padStart(2, "0") as Month,
                                                        renewablesPostingQuarter: (Math.floor((new Date(oEventData.postingDate).getMonth() + 3) / 3)).toString() as Quarter,
                                                        renewablesPostingComplianceYear: new Date(oEventData.postingDate).getFullYear().toString(),
                                                        documentDate: oEventData.documentDate,
                                                        renewablesDocumentMonth: new Date(oEventData.documentDate).getMonth().toString().padStart(2, "0") as Month,
                                                        renewablesDocumentMonthDes: sMonthDes,
                                                        renewablesDocumentQuarter: (Math.floor((new Date(oEventData.documentDate).getMonth() + 3) / 3)).toString() as Quarter,
                                                        renewablesDocumentComplianceYear: new Date(oEventData.documentDate).getFullYear().toString(),
                                                        // reversalPostingDate: oEventData.reversalPostingDate,
                                                        // renewablesReversalPostingMonth: new Date(oEventData.reversalPostingDate).getMonth().toString().padStart(2, "0") as Month,
                                                        // renewablesReversalPostingQuarter: (Math.floor((new Date(oEventData.reversalPostingDate).getMonth() + 3) / 3)).toString() as Quarter,
                                                        // renewablesReversalPostingComplianceYear: new Date(oEventData.reversalPostingDate).getFullYear().toString(),
                                                        // productiondate: oEventData.prod
                                                        // renewablesProductionMonth
                                                        // renewablesProductionQuarter
                                                        // renewablesProductionComplianceYear
                                                        // transferDate: oEventData.tr
                                                        // renewablesTransferMonth
                                                        // renewablesTransferQuarter
                                                        // renewablesTransferComplianceYear
                                                        // submissionDate: oEventData.sub
                                                        // renewablesSubmissionMonth
                                                        // renewablesSubmissionQuarter
                                                        // renewablesSubmissionComplianceYear
                                                        // emtsCreditStdCode
                                                        // emtsCreditTypeCode
                                                        // timesTraded
                                                        // fuelPathwayCodeType
                                                        // physicalPathwayCodeType
                                                        // targetCIValue
                                                        // fuelApplicationType
                                                        // fuelGroup
                                                        // energyDensity
                                                        // energyEfficiencyRatioValue
                                                        // lcfsActualCarbonIntensity
                                                        // fuelName
                                                        // aggregationIndicatorforReporting
                                                        // ciOption
                                                        // ciSpecificValue
                                                        // ciMaximumValue
                                                        // ciMinimumValue
                                                        // ciAverageValue
                                                        // dcode: oEventData.dcode,
                                                        // dcodeDesc master des
                                                        rfs2ObligationType: oMaterialConfig.rvoTypeCategory, //master have to correct MaintainRenewableMaterialConfiguration
                                                        rfs2ObligationTypeDesc: aRFS2DebitType.map[oMaterialConfig.rvoTypeCategory].description,
                                                        // vintageYear: oEventData.vintageYear,
                                                        // rinMultiplier: oEventData.rinMultiplier,
                                                        // qapCertified: oEventData.qapCertified,
                                                        // qapCertifiedDesc: oEventData.qa
                                                        // emtsQapServiceTypeCode
                                                        // emtsBatchNumberText
                                                        // emtsProcessCode
                                                        // emtsFuelCategoryCode
                                                        // emtsCoProductCode
                                                        // emtsTransactionTypeCode
                                                        // emtsUnitOfMeasureCode
                                                        // emtsTransactionStatusCode
                                                        // emtsSeparateReasonCode
                                                        // emtsRetireReasonCode
                                                        // emtsRinStatusCode
                                                        // emtsAssignmentCode
                                                        // emtsBusinessActivityCode
                                                        // emtsBuyOrSellReasonCode
                                                        // emtsComplianceLevelCode
                                                        // emtsTradingPartnerInvoice
                                                        // emtsTradingPartnerBillOfLading
                                                        // emtsTradingPartnerPTD
                                                        // emtsGenerateReasonCode
                                                        // epaCompanyIdFPR
                                                        // epafacilityIdFPR: oEventData.ep
                                                        // tprCompanyIdFPR
                                                        // tprFacilityIdFPR
                                                        // referenceContractDocumentType: oEventData.co
                                                        referenceContractGeneralDocumentNumber: oMatDocData.RenwableMaterialDocument, //oEventData.referenceContractGeneralDocumentNumber,
                                                        referenceContractDocumentItemNumber: oMatDocData.RenwableMaterialDocumentItem, //oEventData.referenceContractDocumentItemNumber,
                                                        // referenceContractDocumentSubItem: oEventData.ref
                                                        // referenceContractMaterialDocumentYear: oEventData.ref
                                                        // referenceContractSequentialSegmentNumber
                                                        // rfOrderDocumentType: oEventData.rf
                                                        // rfOrderGeneralDocumentNumber
                                                        // rfOrderDocumentItemNumber
                                                        // rfOrderDocumentSubItem
                                                        // rfOrderMaterialDocumentYear
                                                        // rfInboundDeliveryDocumentType
                                                        // rfInboundDeliveryGeneralDocumentNumber
                                                        // rfInboundDeliveryDocumentItemNumber
                                                        // rfInboundDeliveryDocumentSubItem
                                                        // rfInboundDeliveryMaterialDocumentYear
                                                        // rfOutboundDeliveryDocumentType
                                                        // rfOutboundDeliveryGeneralDocumentNumber
                                                        // rfOutboundDeliveryDocumentItemNumber
                                                        // rfOutboundDeliveryDocumentSubItem
                                                        // rfOutboundDeliveryMaterialDocumentYear
                                                        // fuelOnwardMaterialDocNoDocumentType: oEventData.fu
                                                        // fuelOnwardMaterialDocNoGeneralDocumentNumber
                                                        // fuelOnwardMaterialDocNoDocumentItemNumber
                                                        // fuelOnwardMaterialDocNoDocumentSubItem
                                                        // fuelOnwardMaterialDocNoMaterialDocumentYear
                                                        // fuelReversalMaterialDocNoDocumentType
                                                        // fuelReversalMaterialDocNoGeneralDocumentNumber
                                                        // fuelReversalMaterialDocNoDocumentItemNumber
                                                        // fuelReversalMaterialDocNoDocumentSubItem
                                                        // fuelReversalMaterialDocNoMaterialDocumentYear
                                                        // renewableOrderNoDocumentType: oEventData.rene
                                                        // renewableOrderNoGeneralDocumentNumber
                                                        // renewableOrderNoDocumentItemNumber
                                                        // renewableOrderNoDocumentSubItem
                                                        // renewableOrderNoMaterialDocumentYear
                                                        // renewableDeliveryDocNoDocumentType
                                                        // renewableDeliveryDocNoGeneralDocumentNumber
                                                        // renewableDeliveryDocNoDocumentItemNumber
                                                        // renewableDeliveryDocNoDocumentSubItem
                                                        // renewableDeliveryDocNoMaterialDocumentYear
                                                        renewableMaterialDocNoDocumentType: 'G',
                                                        renewableMaterialDocNoGeneralDocumentNumber: oMatDocData.RenwableMaterialDocument, //oEventData.obligationMaterialDocumentNumber,
                                                        renewableMaterialDocNoDocumentItemNumber: oMatDocData.RenwableMaterialDocumentItem, //oEventData.obligationMaterialDocumentItemNumber,
                                                        // renewableMaterialDocNoDocumentSubItem
                                                        // renewableMaterialDocNoMaterialDocumentYear
                                                        // renewableReverseMaterialDocNoDocumentType
                                                        // renewableReverseMaterialDocNoGeneralDocumentNumber
                                                        // renewableReverseMaterialDocNoDocumentItemNumber
                                                        // renewableReverseMaterialDocNoDocumentSubItem
                                                        // renewableReverseMaterialDocNoMaterialDocumentYear
                                                        sourceOrgCompanyCode: "1000", //HC oEventData.sourceOrgCompanyCode,
                                                        sourceOrgCompanyPlant: "0563", //HC oEventData.sourceOrgCompanyPlant,
                                                        sourceOrgCompanyStorageLocation: "Bulk", //HC oEventData.sourceOrgCompanyStorageLocation,
                                                        sourceOrgCompanyMaterialNumber: oMatDocData.RenewableMaterial, //oEventData.sourceOrgCompanyMaterialNumber,
                                                        sourceOrgCompanyMaterialNumberDesc: "UNLEADED PREMIUM 91", //HC oEventData.sourceOrgCompanyMaterialNumberDesc,
                                                        sourceOrgCompanyCountryKey: "1000", //HC oRegulationTypeData.countryCode,
                                                        // sourceOrgCompanyRegion: oRegulationTypeData.regionCode,
                                                        // destinationOrgCompanyCode: 
                                                        // destinationOrgCompanyPlant
                                                        // destinationOrgCompanyStorageLocation
                                                        // destinationOrgCompanyMaterialNumber
                                                        // destinationOrgCompanyCountryKey
                                                        // destinationOrgCompanyRegion
                                                        // fuelLogisticsCompanyCode
                                                        // fuelLogisticsCompanyPlant
                                                        // fuelLogisticsCompanyStorageLocation
                                                        fuelLogisticsCompanyMaterialNumber: oMatDocData.RenewableMaterial, //oEventData.sourceOrgCompanyMaterialNumber,
                                                        fuelLogisticsCompanyMaterialNumberDesc: "UNLEADED PREMIUM 91", //HC oEventData.sourceOrgCompanyMaterialNumberDesc,
                                                        // fuelLogisticsCompanyCountryKey
                                                        // fuelLogisticsCompanyRegion
                                                        regulationLogisticsCompanyCode: "1000", //HC oEventData.sourceOrgCompanyCode,
                                                        regulationLogisticsCompanyPlant: "0563", //HC oEventData.sourceOrgCompanyPlant,
                                                        regulationLogisticsCompanyStorageLocation: "Bulk", //HC oEventData.sourceOrgCompanyStorageLocation,
                                                        regulationLogisticsCompanyMaterialNumber: oMatDocData.RenewableMaterial, // oMaterialConfig.material,
                                                        regulationLogisticsCompanyMaterialNumberDes: "UNLEADED PREMIUM 91", //HC oMaterialConfig.description,
                                                        regulationLogisticsCompanyCountryKey: oRegulationTypeData.countryCode,
                                                        regulationLogisticsCompanyRegion: oRegulationTypeData.regionCode,
                                                        // nominationNumber
                                                        // nominationKey
                                                        // nominationKeyItem
                                                        // oilTswTicketKey
                                                        // oiltswTicketItemNumber
                                                        // oiltswTicketVersion
                                                        // oiltswTicketPurpose
                                                        // oiltswTicketType
                                                        // oiltswExternalticketNumber
                                                        // externalPositionNumber
                                                        // modeofTransport: oEventData.modeofTransport,
                                                        // truckNumber: oEventData.tr
                                                        // externalBatchNumber: oEventData.ex
                                                        // oilFieldsForRenewablesOriginRegion
                                                        // oilFieldsForRenewablesDestinationRegion
                                                    });
                                                }
                                                // aFinalData.push({
                                                //     regulationObjectNumber: JSON.stringify(iReneableNumber),
                                                //     complianceYear: oEventData.regYear,
                                                //     transactionCategory: oMvtTypeRelevanceData.transactionCategory, //'PROD',
                                                //     plant: oEventData.regPlant,
                                                //     storage: oEventData.regStorage,
                                                //     status: '01',
                                                //     statusDes: 'Created',
                                                //     RVOType: oMaterialConfig.type,
                                                //     RVOTypeDes: oMaterialConfig.description,
                                                //     RVOMaterial: oMaterialConfig.material,
                                                //     RVOMaterialDescription: oMaterialConfig.description,
                                                //     RVOPercentage: oMaterialConfig.obligationPercent,
                                                //     RVOUnit: oRegulationTypeData.regUoM, //'RIN',
                                                //     fuelAltUom: oRegulationTypeData.fuelAltUom, //'BBL',
                                                //     fuelVolume: (oEventData.fuelVolume * oMaterialConfig.obligationPercent) / 100,
                                                //     fuelUnit: oEventData.fuelUnit,
                                                //     fuelMaterial: oEventData.fuelMaterial,
                                                //     materialDocument: oEventData.materialDocument,
                                                //     productionOrder: oEventData.productionOrder,
                                                //     productionDate: oEventData.productionDate
                                                // });



                                                // const oObjectID = await oRegulationComplianceBaseInstance.getNextRenewableId("RFS2_RVO_RF");
                                                // if (oObjectID) {
                                                // aFinalData.push({
                                                //     objectId: oObjectID,    //'800',
                                                //     regulationType: 'RFS2',
                                                //     regulationCategory: 'RFS2',
                                                //     objectCategory: 'D',
                                                //     objectType: 'RVO',
                                                //     sourceScenario: 'GM',
                                                //     subObjectScenario: 'RFS2_RVO',
                                                //     transactionCategory: 'PUR',
                                                //     transactionType: 'PUR1',
                                                //     impact: 'I',
                                                //     movementType: '101',
                                                //     fuelLogisticsCompanyMaterialNumber: '5000',
                                                //     fuelQuantity: 10,
                                                //     fuelQuantityRaw: '10',
                                                //     fuelUnitofMeasurement: 'RIN',
                                                //     fuelQuantityinAlternateUOM: 10,
                                                //     regulationQuantity: 10,
                                                //     regulationUnitOfMeasurement: 'RIN'
                                                // });
                                                // }


                                                //                 iReneableNumber++;
                                                //             }
                                                //         });
                                                //     });
                                                // }

                                            }
                                            // });
                                        }
                                    }
                                }

                            }
                        }
                        // }
                        // }

                        // });
                    }
                }
                if (aFinalData.length > 0) {
                    await oRFS2ComplianceInstance.addRegulationCompliances(aFinalData);
                }
            }
        })
        // On crreate of Manual adjustment for RVO/RIN
        this.on('CREATE', 'ManualAdjRegulationComplianceTransaction', async (ODataRequest) => {
            let aFinalData: RegulationComplianceTransaction[] = [],
                aRegulationType: IMaintainRegulationType = { map: {}, data: [] },
                aTransactionTypeTs: IMaintainRegulationTransactionTypeTs = { map: {} },
                aRegulationSubscenario: IMaintainRegulationSubscenariotoScenario = { map: {} },
                aMaterialConfig: MaintainRenewableMaterialConfiguration[] = [],
                aRegulationObjectCategory: IMaintainRegulationObjecttype = { map: {}, objectType: "", data: [] };
            let oObjectID: number;
            // comment while deploy
            //SourceScenario.manualAdjustment;
            // debugger;
            // comment this code while deploying
            // let vadjustmentBase: string = 'V';
            // let sregulationType: string = 'RFS2', sobjectType: string = 'RVO';
            // let stransactionCategory: string = 'PUR', sobjectCategory: string = 'D', syear: string = '2024';
            // // end of comment
            // let objectType:string = 'RVO';
            const { regulationType,
                objectType,
                transactionCategory,
                impact,
                documentDate,
                businessPartnerNumber,
                reasonCode,
                reasonCodeDesc,
                renewablesDocumentComplianceYear,
                sourceOrgCompanyPlant,
                adjustmentBase,
                billofLading,
                fuelCategory
            } = ODataRequest.data;
            // Get regulations( This would be needed when we UOM conversion to happen currently using for regulation object type and category)
            const sFilterUom = `regulationType eq '${regulationType}' and regulationCategory_category eq '${regulationType}'`;// and fuelAlternateUom eq 'BBL'`;
            aRegulationType = await oRegulationComplianceBaseInstance.getRegulationTypes(sFilterUom);
            const oRegulationType = aRegulationType.map[regulationType];

            //Get object Type code i.e RIN or RVO
            if (regulationType && objectType) {
                aRegulationObjectCategory = await oRegulationComplianceBaseInstance.getRegulationObjectType("regulationType_regulationType eq '" + regulationType + "' and objectCategory_category eq '" + objectType + "'");
                const oRegObjectCateory = aRegulationObjectCategory.map[regulationType + objectType];
                
                // read RFS2DebitType
                const aRFS2DebitType = await oRegulationComplianceBaseInstance.getRFS2DebitType("");
                if (oRegObjectCateory.objectCategoryCategory) {

                    //Maintain Regulation Transaction Types
                    aTransactionTypeTs = await oRegulationComplianceBaseInstance.getRegulationTransactionTypeTs("regulationType_regulationType eq '" + regulationType + "' and transactionCategory_category eq '" + transactionCategory + "'");
                    const oTransactionTypeTs = aTransactionTypeTs.map[regulationType + transactionCategory];

                    if (oTransactionTypeTs.transactionCategoryCategory) {
                        // Fetch regulation subscenario
                        // const sfilterSubObjectScenario = "regulationType_regulationType eq '" + regulationType + "' and transactionSourceScenario_category eq 'MDJ' and objectCategory_category eq '" + objectType + "'";
                        aRegulationSubscenario = await oRegulationComplianceBaseInstance.getRgulationSubScnario("regulationType_regulationType eq '" + regulationType + "' and transactionSourceScenario_category eq 'MDJ' and objectCategory_category eq '" + objectType + "'");
                        const oRegualtionSubscenario = aRegulationSubscenario.map[regulationType + "MDJ" + objectType]

                       
                        if (oRegualtionSubscenario.regulationSubScenarioCategory) {

                            // Month desc
                            let sMonthDes;
                            switch (new Date(documentDate).getMonth().toString().padStart(2, "0")) {
                                case "04":
                                    sMonthDes = "MAY";
                                    break;

                                case "05":
                                    sMonthDes = "JUN";
                                    break;

                                case "06":
                                    sMonthDes = "JUL";
                                    break;

                                case "07":
                                    sMonthDes = "AUG";
                                    break;
                            }

                            // Adjustment base is by Volume
                            if (adjustmentBase === "V") {
                                // Fields configured while Volumne based is configured
                                const {
                                    fuelUnitofMeasurement,
                                    fuelQuantity,
                                    renewablesEpaCompanyId,
                                    renewablesEpaFacilityId,
                                    fuelLogisticsCompanyMaterialNumber,
                                } = ODataRequest.data;

                                // Fetch material configuration
                                if (oRegulationType.regulationType && objectType && renewablesDocumentComplianceYear) {
                                    const sfilterMaterialConfig = "regulationType_regulationType eq '" + oRegulationType.regulationType + "' and objectType_code eq '" + oRegObjectCateory.objectTypeCode + "' and year eq " + renewablesDocumentComplianceYear;
                                    aMaterialConfig = await oRegulationComplianceBaseInstance.getMaterialConfiguration(sfilterMaterialConfig);
                                }
                                if (aMaterialConfig.length > 0) {
                                    // Get Fuel Unit of Measure if alternate UOM is BBL
                                    if (fuelUnitofMeasurement === 'BBL') {
                                    }
                                    // For each material config
                                    for (let iMatConfig = 0; iMatConfig < aMaterialConfig.length; iMatConfig++) {
                                        const oMaterialConfig = aMaterialConfig[iMatConfig];
                                        oObjectID = await oRegulationComplianceBaseInstance.getNextRenewableId("RFS2_MADJ_RVO");

                                        if (oObjectID && oMaterialConfig.obligationPercent) {
                                            aFinalData.push({
                                                objectId: oObjectID,
                                                regulationType: regulationType,
                                                regulationCategory: regulationType,// check if these two are same
                                                objectCategory: objectType,
                                                objectType: oRegObjectCateory.objectCategoryCategory,
                                                sourceScenario: 'MDJ',
                                                subObjectScenario: oRegualtionSubscenario.regulationSubScenarioCategory,//get from material subscenariosubScenario[0].regulationSubScenario,//
                                                transactionType: oTransactionTypeTs.transactionType,
                                                transactionTypeDesc: oTransactionTypeTs.description,
                                                transactionCategory: transactionCategory,//'PUR',//Maintain Regulation Transaction Types
                                                impact: impact,
                                                documentDate: documentDate,//'2024-06-01',
                                                renewablesDocumentMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
                                                renewablesDocumentQuarter: (Math.floor((new Date(documentDate).getMonth() + 3) / 3)).toString() as Quarter,
                                                renewablesDocumentComplianceYear: renewablesDocumentComplianceYear,
                                                businessPartnerNumber: businessPartnerNumber,
                                                reasonCode: reasonCode,
                                                reasonCodeDesc: reasonCodeDesc,
                                                sourceOrgCompanyPlant: sourceOrgCompanyPlant,
                                                regulationQuantity: Math.round(fuelQuantity * Number(oMaterialConfig.obligationPercent)),
                                                regulationQuantityWholeNumber: Math.floor(fuelQuantity * Number(oMaterialConfig.obligationPercent)),
                                                // regulationUnitOfMeasurement: regulationUoMCategory,  
                                                renewablesEpaCompanyId: renewablesEpaCompanyId,
                                                renewablesEpaFacilityId: renewablesEpaFacilityId,
                                                fuelUnitofMeasurement: fuelUnitofMeasurement, //'BBL',
                                                fuelAlternateUnitofMeasurement: fuelUnitofMeasurement,
                                                sourceOrgCompanyMaterialNumber: oMaterialConfig.material,//'CELLULOSIC_2024'
                                                regulationLogisticsCompanyMaterialNumber: oMaterialConfig.material,//'CELLULOSIC_2024',
                                                billofLading: billofLading,
                                                fuelCategory: fuelCategory,
                                                fuelQuantity: fuelQuantity,
                                                adjustmentBase: adjustmentBase,
                                                fuelLogisticsCompanyMaterialNumber: fuelLogisticsCompanyMaterialNumber,
                                                renewablesPostingMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
                                                renewablesReversalPostingMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
                                                renewablesProductionMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
                                                renewablesTransferMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
                                                renewablesSubmissionMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
                                                renewablesDocumentMonthDes: sMonthDes,
                                                rfs2ObligationType: oMaterialConfig.rvoTypeCategory, //master have to correct MaintainRenewableMaterialConfiguration
                                                // rfs2ObligationTypeDesc: aRFS2DebitType.map[oMaterialConfig.rvoTypeCategory].description, error
                                                regulationUnitOfMeasurement: "RIN"
                                            })
                                        }//if (oObjectID...
                                        else {
                                            aFinalData = [];
                                            break;
                                        }
                                    }//for (let iMatConfig...
                                }
                            }//if (vadjustmentBase..
                            else {
                                const {
                                    regulationQuantity,
                                    regulationUnitOfMeasurement,
                                    regulationLogisticsCompanyMaterialNumber,
                                    sourceOrgCompanyMaterialNumber
                                } = ODataRequest.data;
                                oObjectID = await oRegulationComplianceBaseInstance.getNextRenewableId("RFS2_MADJ_RVO");//(oRegualtionSubscenario.regulationSubScenario).toString());
                                if (oRegulationType.regulationType && objectType && renewablesDocumentComplianceYear) {
                                    const sfilterMaterialConfig = "regulationType_regulationType eq '" + oRegulationType.regulationType + "' and objectType_code eq '" + oRegObjectCateory.objectTypeCode + "' and year eq " + renewablesDocumentComplianceYear + " and material eq '" + regulationLogisticsCompanyMaterialNumber + "'";
                                    aMaterialConfig = await oRegulationComplianceBaseInstance.getMaterialConfiguration(sfilterMaterialConfig);
                                }
                                if (aMaterialConfig.length > 0) {
                                    // oObjectID = 435;
                                    if (oObjectID) {
                                        aFinalData.push({
                                            objectId: oObjectID,
                                            regulationType: regulationType,
                                            regulationCategory: regulationType,// check if these two are same
                                            objectCategory: objectType,
                                            objectType: oRegObjectCateory.objectCategoryCategory,//'RVO',
                                            sourceScenario: 'MDJ',
                                            subObjectScenario: oRegualtionSubscenario.regulationSubScenarioCategory,//get from material subscenariosubScenario[0].regulationSubScenario,//
                                            transactionType: oTransactionTypeTs.transactionType,
                                            transactionTypeDesc: oTransactionTypeTs.description,
                                            transactionCategory: transactionCategory,//'PUR',//Maintain Regulation Transaction Types
                                            impact: impact,
                                            documentDate: documentDate,//'2024-06-01',
                                            renewablesDocumentMonth: new Date(documentDate).getMonth().toString().padStart(2, "0") as Month,
                                            renewablesDocumentQuarter: (Math.floor((new Date(documentDate).getMonth() + 3) / 3)).toString() as Quarter,
                                            renewablesDocumentComplianceYear: renewablesDocumentComplianceYear,
                                            businessPartnerNumber: businessPartnerNumber,
                                            reasonCode: reasonCode,
                                            reasonCodeDesc: reasonCodeDesc,
                                            sourceOrgCompanyPlant: sourceOrgCompanyPlant,
                                            regulationQuantity: regulationQuantity,
                                            regulationUnitOfMeasurement: regulationUnitOfMeasurement,
                                            regulationLogisticsCompanyMaterialNumber: regulationLogisticsCompanyMaterialNumber,
                                            billofLading: billofLading,
                                            fuelCategory: fuelCategory,
                                            adjustmentBase: adjustmentBase,
                                            renewablesPostingMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
                                            renewablesReversalPostingMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
                                            renewablesProductionMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
                                            renewablesTransferMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
                                            renewablesSubmissionMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
                                            renewablesDocumentMonthDes: sMonthDes,
                                            rfs2ObligationType: aMaterialConfig[0].rvoTypeCategory, //master have to correct MaintainRenewableMaterialConfiguration
                                            // rfs2ObligationTypeDesc: aRFS2DebitType.map[aMaterialConfig[0].rvoTypeCategory].description, error
                                        });
                                    }//if (oObjectID...
                                }//if (aMaterialConfig
                            }//else of if (vadjustmentBase...
                        }//if (oRegualtionSubscenario
                    }//if (oTransactionTypeTs
                }//if (oRegObjectCateory
            }//if (regulationType
            if (aFinalData.length > 0) {
                await oRFS2ComplianceInstance.addRegulationCompliances(aFinalData);
            }
            return ODataRequest.data;
        })
        this.on('READ', 'MaintainRegulationType', async () => {
            const oRegulationTypes = await oRegulationComplianceBaseInstance.getRegulationTypes('');
            return oRegulationTypes.data;
        })
        // this.on('READ', 'MaintainTransactionTyp', async (request) => {
        //     const oRegulationTransactionTypeTsData = await oRegulationComplianceBaseInstance.getTransactiontype('');
        //     return oRegulationTransactionTypeTsData;
        // })
        this.on('READ', 'MaintainRegulationTransactionType', async () => {
            const oRegulationTransactionTypeTsData = await oRegulationComplianceBaseInstance.getTransactiontype('');
            return oRegulationTransactionTypeTsData;
        })
        this.on('READ', 'MaintainRegulationObjecttype', async () => {
            const oRegulaionObjectType = await oRegulationComplianceBaseInstance.getRegulationObjectType('')
            return oRegulaionObjectType.data;
        })
        this.on('READ', 'MaintainRenewableMaterialConfiguration', async () => {
            return await oRegulationComplianceBaseInstance.getMaterialConfiguration('');
        })
        // this.on('READ', 'ManualAdjRegulationComplianceTransaction', async (request) => {
        //     const oManualAdjustment = await oRegulationComplianceBaseInstance.getManualAdjustmentData('MDJ');
        //     return oManualAdjustment;
        // })
        this.on('READ', 'GetFuelCategory', async () => {
            const oFuelCategory = await oRegulationComplianceBaseInstance.getFuelCategory('');
            return oFuelCategory.data;
        })
        this.on('READ', 'GetReasonCode', async () => {
            const oReasonCode = await oRegulationComplianceBaseInstance.getAdjustmentReasonCode();
            return oReasonCode;
        })
        this.on('READ', 'GetObjectCategory', async () => {
            const oObjectCategory = await oRegulationComplianceBaseInstance.getObjectCategory();
            return oObjectCategory;
        })
        this.on('READ', 'GetUOM', async () => {
            const oUnitofMeasure = await oRegulationComplianceBaseInstance.getUOM();
            return oUnitofMeasure;
        })
        this.on('READ', 'GetImpact', async () => {
            const oImpact = await oRegulationComplianceBaseInstance.getImpact();
            return oImpact;
        })
        // this.on('READ', 'MaterialCharacteristics', async (request) => {
        //     debugger;
        //     let sJWT: any ;
        //     // sJWT = getJwtPair();
        //     const { za_MaterialCharacteristics_RApi } = materialcharacteristicsApi();
        //     return (await za_MaterialCharacteristics_RApi.requestBuilder().getAll()
        //         .middleware(resilience({ retry: 3, circuitBreaker: true }))
        //         .execute({
        //             destinationName: "dn1clnt200-bas"
        //             // jwt: sJWT
        //         }));
        // })
        return super.init()
    }
}