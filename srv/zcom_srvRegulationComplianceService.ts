import cds from '@sap/cds';
import { oRFS2ComplianceInstance } from './library/zcom_tsRFS2Compliance';
import { oRegulationComplianceBaseInstance } from './library/zcom_tsRegulationComplianceBase';

// import {} from './library/zcom_tsLCFSCompliance';
import { RegulationComplianceTransaction } from '@cds-models/com/sap/chs/com/regulationcompliancetransaction';
import { Quarter, Month } from '@cds-models';
import {
    IMaintainRegulationGroupView, IMaintainRegulationType,
    IMaintainRegulationMaterialGroupView, IMaintainMovementTypeToTransactionCategoryImpact,
    IMaintainMovementType, IMaintainRegulationObjecttype, IMaintainRegulationSubscenariotoScenario, IMaintainRegulationTransactionTypeTs,
    IRfs2DebitType,IFuelCategory,IFuelSubCategory
} from './library/interfaces/zcom_tsRegulationComplicanceInterface';
import {
    MaintainRenewableMaterialConfiguration
} from './external/regulationcompliancemasterservice_api';
import { ILogUtility } from './library/interfaces/zcom_tsRegulationComplicanceInterface';

module.exports = class RegulationComplianceService extends cds.ApplicationService {
    async init() {
        const messaging = await cds.connect.to("RenewableEvents");
        // const { RegulationComplianceTransaction } = cds.entities('com.sap.chs.com.regulationcompliancetransaction')
        // this.on("processEvent", async ({ data: EventData }) => {
        messaging.on("ce/zcom/Renewable/RaiseEvent/v1", async msg => {
            if (msg.data) {
                const oEventData = msg.data;
                let oYear: string = "", sRegGroups: string = "",
                    aRegulationGroups: IMaintainRegulationGroupView = {
                        map: {}, regulationType: "", regulationType_regulationType: "",
                        regulationTypeRegulationType: "", data: []
                    },
                    aRegulationMaterialGrp: IMaintainRegulationMaterialGroupView = { map: {}, objectCategory: "", objectCategory_category: "" },
                    aRegObjectType: IMaintainRegulationObjecttype = { map: {}, objectType: "", data: [] },
                    aMovementTypes: IMaintainMovementType = { map: {}, movementTypeMovementType: "", movementType_movementType: "", data: [] },
                    aRegulationType: IMaintainRegulationType = { map: {}, data: [] },
                    aMvtTypeRelevance: IMaintainMovementTypeToTransactionCategoryImpact = { map: {}, transactionCategoryCategory: "", data: [] },
                    aIMaintainRegulationTransactionTypeTsMAP: IMaintainRegulationTransactionTypeTs = { map: {} },
                    aRegulationSubscenario: IMaintainRegulationSubscenariotoScenario = { map: {},data:[] },
                    logObjectID:string = "",
                    oLogData: ILogUtility = {} as ILogUtility,
                    aRFS2DebitType = { map: {}, data: [] } as IRfs2DebitType,
                    aFuelCategory = { map: {}, data: [] } as IFuelCategory,
                    aFuelSubCategory = { map: {}, data: [] } as IFuelSubCategory;

                const aFinalData: RegulationComplianceTransaction[] = [];
                oEventData.documentDate = "2024-06-19"; //HC
                oEventData.postingDate = "2024-06-19"; //HC
                oYear = new Date(oEventData.documentDate).getFullYear().toString(); //HC
                if(oEventData.RenewableEventType && oEventData._RenewableMaterialDocument){
                    logObjectID = oEventData.RenewableEventType + oEventData._RenewableMaterialDocument.RenwableMaterialDocument +
                                oEventData._RenewableMaterialDocument.RenwableMaterialDocumentItem;
                }

                if (oEventData.RegulationGroupName) {
                    sRegGroups += "regulationGroup_regulationGroup eq '" + oEventData.RegulationGroupName + "'";
                } else {    //regulation group not populated from API
                    oLogData = {
                        object: logObjectID,
                        message: "RegulationGroupValueIsEmptyInEventMessage",
                        messageType: "E",
                        regulationType: "",
                        regulationSubObjectType: "",
                        applicationModule: "",
                        applicationSubModule: "",
                        technicalMessage: ""
                    };
                }

                // read regulation groups
                if (sRegGroups && !oLogData.messageType) {
                    aRegulationGroups = await oRegulationComplianceBaseInstance.getRegulations(sRegGroups,{
                        object: logObjectID,
                        message: "RegulationGroupValueIsEmptyInEventMessage",
                        messageType: "E",
                        regulationType: "",
                        regulationSubObjectType: "",
                        applicationModule: "",
                        applicationSubModule: "",
                        technicalMessage: ""
                    });
                }

                // get material group code
                if (aRegulationGroups.regulationType && !oLogData.messageType) {
                    aRegulationMaterialGrp = await oRegulationComplianceBaseInstance.getRegulationMaterialGroup(aRegulationGroups.regulationType,{
                        object: logObjectID,
                        message: "FailedToReadRegulationTypeFromMasterData",
                        messageType: "E",
                        regulationType: aRegulationGroups.data[0].regulationType as string,
                        regulationSubObjectType: "",
                        applicationModule: aRegulationGroups.data[0].regulationType as string,
                        applicationSubModule: "",
                        technicalMessage: ""
                    });
                }

                // get sub scenario
                const sfilterSubObjectScenario = aRegulationGroups.regulationType_regulationType + " and transactionSourceScenario_category eq 'GM' and " + aRegulationMaterialGrp.objectCategory_category;
                if(aRegulationGroups.regulationType_regulationType && aRegulationMaterialGrp.objectCategory_category && !oLogData.messageType){
                    aRegulationSubscenario = await oRegulationComplianceBaseInstance.getRgulationSubScnario(sfilterSubObjectScenario,{
                        object: logObjectID,
                        message: "FailedToReadRegulationTypeFromMasterData",
                        messageType: "E",
                        regulationType: aRegulationGroups.data[0].regulationType as string,
                        regulationSubObjectType: "",
                        applicationModule: aRegulationGroups.data[0].regulationType as string,
                        applicationSubModule: "",
                        technicalMessage: ""
                    });
                }

                // get reg object type
                if (aRegulationGroups.regulationType_regulationType && aRegulationMaterialGrp.objectCategory_category && 
                        !oLogData.messageType && aRegulationSubscenario.data.length>0) {
                    aRegObjectType = await oRegulationComplianceBaseInstance.getRegulationObjectType(aRegulationGroups.regulationType_regulationType + " and " +
                     aRegulationMaterialGrp.objectCategory_category,{
                        object: logObjectID,
                        message: "FailedToReadRegulationTypeFromMasterData",
                        messageType: "E",
                        regulationType: aRegulationGroups.data[0].regulationType as string,
                        regulationSubObjectType: "",
                        applicationModule: aRegulationGroups.data[0].regulationType as string,
                        applicationSubModule: aRegulationSubscenario.data[0].regulationSubScenarioCategory as string,
                        technicalMessage: ""
                    });
                }

                // get movement type
                if (aRegulationGroups.regulationType_regulationType && aRegObjectType.objectType && !oLogData.messageType
                    && aRegulationSubscenario.data.length>0
                ) {
                    aMovementTypes = await oRegulationComplianceBaseInstance.getMovementType(aRegulationGroups.regulationType_regulationType + " and " + 
                    aRegObjectType.objectType,{
                        object: logObjectID,
                        message: "FailedToReadRegulationTypeFromMasterData",
                        messageType: "E",
                        regulationType: aRegulationGroups.data[0].regulationType as string,
                        regulationSubObjectType: aRegObjectType.data[0].objectTypeCode as string,
                        applicationModule: aRegulationGroups.data[0].regulationType as string,
                        applicationSubModule: aRegulationSubscenario.data[0].regulationSubScenarioCategory as string,
                        technicalMessage: ""
                    });
                }

                // get mvt type relevance
                if (aRegulationGroups.regulationType_regulationType && aRegObjectType.objectType && aMovementTypes.movementType_movementType 
                    && !oLogData.messageType && aRegulationSubscenario.data.length>0) {
                    aMvtTypeRelevance = await oRegulationComplianceBaseInstance.readMvtTypeTransationRelevance(aRegulationGroups.regulationType_regulationType + " and " +
                     aRegObjectType.objectType + " and " + aMovementTypes.movementType_movementType,{
                        object: logObjectID,
                        message: "FailedToReadRegulationTypeFromMasterData",
                        messageType: "E",
                        regulationType: aRegulationGroups.data[0].regulationType as string,
                        regulationSubObjectType: aRegObjectType.data[0].objectTypeCode as string,
                        applicationModule: aRegulationGroups.data[0].regulationType as string,
                        applicationSubModule: aRegulationSubscenario.data[0].regulationSubScenarioCategory as string,
                        technicalMessage: ""
                    });
                }

                // // read mat config
                let aMaterialConfig: MaintainRenewableMaterialConfiguration[] = [];
                // if(aRegulationGroups.regType.length>0 && aRegulationMaterialGrp.objectCategory.length>0 && oYear){
                if (aRegulationGroups.regulationType_regulationType && aRegulationMaterialGrp.objectCategory && oYear && !oLogData.messageType
                    && aRegulationSubscenario.data.length>0
                ) {
                    aMaterialConfig = await oRegulationComplianceBaseInstance.getMaterialConfiguration(aRegulationGroups.regulationType_regulationType + 
                        " and objectType_code eq 'RVO' and year eq " + oYear,{
                            object: logObjectID,
                            message: "FailedToReadRegulationTypeFromMasterData",
                            messageType: "E",
                            regulationType: aRegulationGroups.data[0].regulationType as string,
                            regulationSubObjectType: aRegObjectType.data[0].objectTypeCode as string,
                            applicationModule: aRegulationGroups.data[0].regulationType as string,
                            applicationSubModule: aRegulationSubscenario.data[0].regulationSubScenarioCategory as string,
                            technicalMessage: ""
                        });
                }

                // get regulation type
                if (aRegulationGroups.regulationType && !oLogData.messageType
                    && aRegulationSubscenario.data.length>0
                ) {
                    aRegulationType = await oRegulationComplianceBaseInstance.getRegulationTypes(aRegulationGroups.regulationType,{
                        object: logObjectID,
                        message: "FailedToReadRegulationTypeFromMasterData",
                        messageType: "E",
                        regulationType: aRegulationGroups.data[0].regulationType as string,
                        regulationSubObjectType: aRegObjectType.data[0].objectTypeCode as string,
                        applicationModule: aRegulationGroups.data[0].regulationType as string,
                        applicationSubModule: aRegulationSubscenario.data[0].regulationSubScenarioCategory as string,
                        technicalMessage: ""
                    });
                }

                // get Regulation Transaction Types
                if (aMvtTypeRelevance.transactionCategoryCategory && aRegulationGroups.regulationType_regulationType && !oLogData.messageType
                    && aRegulationSubscenario.data.length>0
                ) {
                    aIMaintainRegulationTransactionTypeTsMAP = await oRegulationComplianceBaseInstance.getRegulationTransactionTypeTs(aRegulationGroups.regulationType_regulationType + 
                        " and " + aMvtTypeRelevance.transactionCategoryCategory,{
                            object: logObjectID,
                            message: "FailedToReadRegulationTypeFromMasterData",
                            messageType: "E",
                            regulationType: aRegulationGroups.data[0].regulationType as string,
                            regulationSubObjectType: aRegObjectType.data[0].objectTypeCode as string,
                            applicationModule: aRegulationGroups.data[0].regulationType as string,
                            applicationSubModule: aRegulationSubscenario.data[0].regulationSubScenarioCategory as string,
                            technicalMessage: ""
                        });
                }
                
                if(aRegulationGroups.data.length>0 && aRegObjectType.data.length>0 && aRegulationSubscenario.data.length>0){
                    // read RFS2DebitType
                    aRFS2DebitType = await oRegulationComplianceBaseInstance.getRFS2DebitType("",{
                        object: logObjectID,
                        message: "FailedToReadRegulationTypeFromMasterData",
                        messageType: "E",
                        regulationType: aRegulationGroups.data[0].regulationType as string,
                        regulationSubObjectType: aRegObjectType.data[0].objectTypeCode as string,
                        applicationModule: aRegulationGroups.data[0].regulationType as string,
                        applicationSubModule: aRegulationSubscenario.data[0].regulationSubScenarioCategory as string,
                        technicalMessage: ""
                    });
                    // read FuelCategory
                    aFuelCategory = await oRegulationComplianceBaseInstance.getFuelCategory("",{
                        object: logObjectID,
                        message: "FailedToReadRegulationTypeFromMasterData",
                        messageType: "E",
                        regulationType: aRegulationGroups.data[0].regulationType as string,
                        regulationSubObjectType: aRegObjectType.data[0].objectTypeCode as string,
                        applicationModule: aRegulationGroups.data[0].regulationType as string,
                        applicationSubModule: aRegulationSubscenario.data[0].regulationSubScenarioCategory as string,
                        technicalMessage: ""
                    });
                    // read SubFuelCategory
                    aFuelSubCategory = await oRegulationComplianceBaseInstance.getFuelSubCategory("",{
                        object: logObjectID,
                        message: "FailedToReadRegulationTypeFromMasterData",
                        messageType: "E",
                        regulationType: aRegulationGroups.data[0].regulationType as string,
                        regulationSubObjectType: aRegObjectType.data[0].objectTypeCode as string,
                        applicationModule: aRegulationGroups.data[0].regulationType as string,
                        applicationSubModule: aRegulationSubscenario.data[0].regulationSubScenarioCategory as string,
                        technicalMessage: ""
                    });
                }

                // build output array
                if (aMaterialConfig.length > 0 && aRegulationGroups.regulationType && aRegulationMaterialGrp.objectCategory &&
                    aRegObjectType.objectType && aMovementTypes.movementTypeMovementType && aMvtTypeRelevance && aRegulationType && !oLogData.messageType
                    && aRFS2DebitType.data.length>0 && aFuelCategory.data.length>0 && aFuelSubCategory.data.length>0
                ) {

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
                                            sFuelSubCategoryDes = aFuelSubCategory.map["BD"].description;
                                        } catch (error) {

                                        }

                                        // get material doc data
                                        let oMatDocData;
                                        if (oEventData._RenewableMaterialDocument) {
                                            oMatDocData = oEventData._RenewableMaterialDocument;
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
                                                        // objectId: oObjectID,
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

                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                }
                if (aFinalData.length > 0) {
                    await oRFS2ComplianceInstance.addRegulationCompliances(aFinalData,logObjectID);
                }
                if(oLogData.messageType){   //log message
                    oRegulationComplianceBaseInstance.addLog(oLogData);
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
                aRegulationObjectCategory: IMaintainRegulationObjecttype = { map: {}, objectType: "", data: [] },
                logObjectID:string = "";
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
                aRegulationObjectCategory = await oRegulationComplianceBaseInstance.getRegulationObjectType("regulationType_regulationType eq '" + regulationType + "' and objectCategory_category eq '" + objectType + "'",
                {} as ILogUtility
                );
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
                await oRFS2ComplianceInstance.addRegulationCompliances(aFinalData,logObjectID);
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
            const oRegulaionObjectType = await oRegulationComplianceBaseInstance.getRegulationObjectType('',{} as ILogUtility)
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

        // this.on('sendMessage', async () => {
        //     // const { message } = req.data;
        //     await messaging.emit('sap/dev/1/zcom/Renewable/RaiseEvent/v1', {
        //         "type":"zcom.Renewable.RaiseEvent.v1",
        //         "specversion":"1.0",
        //         "source":"/default/sap.s4.custom/DN1CLNT300",
        //         "id":"332351c2-6acc-1edf-8bc5-8a853f66cb82",
        //         "time":"2024-06-19T11:08:59Z",
        //         "datacontenttype":"application/json",
        //         "data":
        //         {
        //           "MaterialUUID":"00000000-0000-0000-0000-000000000000",
        //           "RenewableMaterial":"300003",
        //           "RenewableEventType":"GM-CR-ET",
        //           "RenewableFuelCategory":"GS",
        //           "RenewableTransactionType":"PROD",
        //           "RegulationGroupName":"R001",
        //           "RegulationMateGroup":"M001",
        //           "_RenewableContract":
        //           [],
        //           "_RenewableDeal":
        //           [],
        //           "_RenewableDelivery":
        //           [],
        //           "_RenewableMaterialDocument":
        //           [
        //            {
        //             "RenewableMaterial":"300003",
        //             "RenewableEventType":"WA",
        //             "RenwableMaterialDocument":"4900000071",
        //             "RenwableMaterialDocumentItem":"1",
        //             "DocumentType":"",
        //             "MovementType":"101",
        //             "Quantity":1.000,
        //             "UnitOfMeasure":"UG6"
        //            }
        //           ],
        //           "_RenewableNominationData":
        //           [],
        //           "_RenewableProductionOrder":
        //           [
        //            {
        //             "RenewableMaterial":"300003",
        //             "RenewableEventType":"WA",
        //             "RenwableProductionOrder":"",
        //             "RenwableProductionOrderItem":"0",
        //             "DocumentType":"",
        //             "MovementType":"101",
        //             "Quantity":1.000,
        //             "UnitOfMeasure":"UG6"
        //            }
        //           ],
        //           "_RenewablePurchaseOrder":
        //           [],
        //           "_RenewableSalesOrder":
        //           [],
        //           "_RenewableTicketData":
        //           []
        //         }
        //         });
        //     return 'Message sent to Event Mesh';
        // })

        this.after("CREATE", 'RegulationComplianceTransaction', async (data,req) => {
           debugger;
            // console.log("debugging")
            for (let index = 0; index < data.length; index++) {
                const oObjectID = await oRegulationComplianceBaseInstance.getNextRenewableId(data[index].subObjectScenario);
                data[index].objectId = oObjectID;
            }
        })
        return super.init()
    }
}