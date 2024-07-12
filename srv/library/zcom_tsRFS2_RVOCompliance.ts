import { RegulationComplianceBaseClass } from './zcom_tsRegulationComplianceBase';
import { RegulationComplianceTransaction } from '@cds-models/com/sap/chs/com/regulationcompliancetransaction';
import { createdStatus,rvoReversalMovementType } from './utilities/zcom_tsConstants';
import { CdsDate } from '@cds-models/_/index';
import { Quarter, Month, Dcode, DocumentType } from '@cds-models';
export class RFS2_RVOCompliance {
    // private elements
    public _oRegulationComplianceBaseClassInstance: RegulationComplianceBaseClass;

    // public elements

    //-------- Start of RFS2 Debit constructor ------------------
    constructor(oRegulationComplianceBaseClassInstance: RegulationComplianceBaseClass) {
        this._oRegulationComplianceBaseClassInstance = oRegulationComplianceBaseClassInstance;

        new Promise(async (resolve) => {
            // validate data
            if (await this._validateData()) {
                await this._postRFS2Debit();
            }
            resolve(true);
        });
    }
    //-------- End of RFS2 Debit constructor ------------------

    //-------- Start of private methods ------------------
    private async _validateData(): Promise<boolean> {
        // set reg object type data
        await this._oRegulationComplianceBaseClassInstance.setRegulationObjectType();
        if (this._oRegulationComplianceBaseClassInstance.oMaintainRegulationObjectType.objectCategoryCategory) {
            // data available
        } else {
            return false;
        }

        // set movement type data
        await this._oRegulationComplianceBaseClassInstance.setMovementType();
        if (this._oRegulationComplianceBaseClassInstance.oMaintainMovementType.movementType) {
            if (this._oRegulationComplianceBaseClassInstance.oMaintainMovementType.movementType !== this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableMaterialDocument.MovementType) {
                return false;
            }
            // data available
        } else {
            return false;
        }

        // set mvt type relevance data
        await this._oRegulationComplianceBaseClassInstance.setMvtTypeTransationRelevance();
        if (this._oRegulationComplianceBaseClassInstance.oMaintainMovementTypeToTransactionCategoryMapping.transactionCategoryCategory) {
            // data available
        } else {
            return false;
        }

        // set mat config data
        await this._oRegulationComplianceBaseClassInstance.setMaterialConfiguration();
        if (this._oRegulationComplianceBaseClassInstance.aMaintainRfs2Material.length>0) {
            // data available
        } else {
            return false;
        }

        // set regulation type
        await this._oRegulationComplianceBaseClassInstance.setRegulationTypes();
        if (this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.regulationType) {
            // data available
        } else {
            return false;
        }

        // set Regulation Transaction Types data
        await this._oRegulationComplianceBaseClassInstance.setRegulationTransactionTypeTs();
        if (this._oRegulationComplianceBaseClassInstance.oMaintainRegulationTransactionType.regulationTypeRegulationType) {
            // data available
        } else {
            return false;
        }

        // set Transaction Type Data
        await this._oRegulationComplianceBaseClassInstance.setTransactiontype();
        if (this._oRegulationComplianceBaseClassInstance.aMaintainTransactionType.length>0) {
            // data available
        } else {
            return false;
        }

        // set RFS2 Debit Type data
        await this._oRegulationComplianceBaseClassInstance.setRFS2DebitType();
        if (this._oRegulationComplianceBaseClassInstance.aRfs2DebitType.length>0) {
            // data available
        } else {
            return false;
        }

        // set Fuel Category data
        await this._oRegulationComplianceBaseClassInstance.setFuelCategory();
        if (this._oRegulationComplianceBaseClassInstance.aFuelCategory.length>0) {
            // data available
        } else {
            return false;
        }

        // set Fuel Sub Category data
        await this._oRegulationComplianceBaseClassInstance.setFuelSubCategory();
        if (this._oRegulationComplianceBaseClassInstance.aFuelSubCategory.length>0) {
            // data available
        } else {
            return false;
        }

        // set Adjustment Reason Code
        await this._oRegulationComplianceBaseClassInstance.setAdjustmentReasonCode();
        if (this._oRegulationComplianceBaseClassInstance.oMaintainAdjustmentReasonCode.reasonCode) {
            // data available
        }

        // set processing status
        await this._oRegulationComplianceBaseClassInstance.setProcessingStatus();
        if (this._oRegulationComplianceBaseClassInstance.mProcessingStatus[createdStatus]) {
            // data available
        } else {
            return false;
        }

        // set CompanyId Or Plant To FacilityId Mapping
        await this._oRegulationComplianceBaseClassInstance.setCompanyIdOrPlantToFacilityIdMapping();
        if (this._oRegulationComplianceBaseClassInstance.aMaintainCompanyIdOrPlantToFacilityIdMapping.length>0) {
            // data available
        }

        return true;
    }

    private async _postRFS2Debit() {
        const aFinalData: RegulationComplianceTransaction[] = [];
        // find month description
        let sMonthDes;
        switch (new Date(this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableMaterialDocument.DocumentDate).getMonth().toString().padStart(2, "0")) {
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

        // get Material Config data
        const aMaterialConfig = this._oRegulationComplianceBaseClassInstance.aMaintainRfs2Material;
        for (let index = 0; index < aMaterialConfig.length; index++) {
            const oMaterialConfig = aMaterialConfig[index],
                oMatDocData = this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableMaterialDocument,
                sMovementType = oMatDocData.MovementType;
            if (oMaterialConfig.obligationPercent) {
                aFinalData.push({
                    regulationType: this._oRegulationComplianceBaseClassInstance.oRFS2RegulationData.regulationType,
                    regulationTypeDesc: this._oRegulationComplianceBaseClassInstance.oRFS2RegulationData.description,
                    regulationCategory: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.regulationCategoryCategory,
                    objectCategory: this._oRegulationComplianceBaseClassInstance.oRFS2DebitData.category,
                    objectCategoryDesc: this._oRegulationComplianceBaseClassInstance.oRFS2DebitData.description,
                    objectType: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationObjectType.objectTypeCode,
                    objectTypeDesc: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationObjectType.description,
                    sourceScenario: this._oRegulationComplianceBaseClassInstance.oMaintainMovementType.sourceScenario,
                    subObjectScenario: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationSubScenarioToScenarioType.regulationSubScenarioCategory,
                    subObjectScenarioDesc: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationSubScenarioToScenarioType.description,
                    transactionCategory: this._oRegulationComplianceBaseClassInstance.oMaintainMovementTypeToTransactionCategoryMapping.transactionCategoryCategory, //master have to update
                    transactionType: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationTransactionType.transactionTypeTransactionType,
                    transactionTypeDesc: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationTransactionType.transactionType?.description,
                    // extTransactionNumber
                    // matchedExtTransactionNumber
                    billofLading: oMatDocData.RenewableBillOfLading,
                    impact: this._oRegulationComplianceBaseClassInstance.oMaintainMovementType.impactCategory,
                    businessPartnerNumber: this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableProductionOrder.RenewableBusinessPartnerNumber,
                    businessPartnerDesc: this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableProductionOrder.RenewableBusinessPartnerDesc,
                    movementType: sMovementType,
                    incotermsPart1: this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableProductionOrder.RenewableIncoTerms1,
                    incotermsPart2: this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableProductionOrder.RenewableIncoTerms2,
                    fuelCategory: this._oRegulationComplianceBaseClassInstance.oEventPayloadData.RenewableFuelCategory,
                    fuelCategoryDesc: this._oRegulationComplianceBaseClassInstance.mFuelCategory[this._oRegulationComplianceBaseClassInstance.oEventPayloadData.RenewableFuelCategory].description,
                    fuelSubCategory: "BD", //HC oEventData.fuelSubCategory, //Maintain Fuel Mapping
                    fuelSubCategoryDesc: this._oRegulationComplianceBaseClassInstance.mFuelSubCategory["BD"].description,
                    // feedStock: oEventData.feedStock,
                    // negativeImpact: this._oRegulationComplianceBaseClassInstance.oMaintainMovementType.negativeImpact, //master have to update
                    // creditPercentage: oEventData.creditPercentage,
                    // movementScenario: oEventData.movementScenario,
                    // productionType: oEventData.productionType,
                    // cancelledUser: oEventData.cancelledUser,
                    // submitted: oEventData.submitted,
                    passRetainIndicator: this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableDeal.RenewablePassRetainIndicator.toString(), //trns have to update to String(6)
                    dealNumber: this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableDeal.RenwableDealDocument,
                    contractDocumentNo: this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableContract.RenwableContract,
                    contractItemNo: this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableContract.RenwableCotractItem,
                    processingStatus: createdStatus,
                    objectStatusDesc: this._oRegulationComplianceBaseClassInstance.mProcessingStatus[createdStatus].description,
                    // priceStatus
                    // matchStatus
                    // reconcilliationGroupID: this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableDeal., //not avilable in payload
                    // autoMatch: oEventData.autoMatch,
                    // groupBalanced: oEventData.groupBalanced,
                    // renewablesEpaCompanyId: oEventData.renewablesEpaCompanyId,
                    // renewablesEpaFacilityId: oEventData.renewablesEpaFacilityId,
                    fuelQuantity: parseFloat(oMatDocData.Quantity),
                    // fuelQuantityRaw: oEventData.fuelQuantityRaw, //payload field required
                    fuelUnitofMeasurement: oMatDocData.UnitOfMeasure, //oEventData.fuelUnitofMeasurement,
                    // fuelQuantityinAlternateUOM: (oEventData.fuelQuantity * Number(oMaterialConfig.obligationPercent)),   //qty API required from S4
                    // fuelQuantityinAlternateUOMRaw: (oEventData.fuelQuantity * Number(oMaterialConfig.obligationPercent)), //qty API required from S4
                    fuelAlternateUnitofMeasurement: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.fuelAlternateUom,
                    // numeratorforConversiontoBaseUnitsOfMeasure: Number(oEventData.fuelQuantity * Number(oMaterialConfig.obligationPercent)),
                    // denominatorforConversiontoBaseUnitsOfMeasure: (oEventData.fuelQuantity * Number(oMaterialConfig.obligationPercent)),
                    regulationQuantity: Math.round(parseFloat(oMatDocData.Quantity) * Number(oMaterialConfig.obligationPercent)),
                    regulationQuantityWholeNumber: (parseFloat(oMatDocData.Quantity) * Number(oMaterialConfig.obligationPercent)),
                    regulationUnitOfMeasurement: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.regulationUoMCategory,
                    originCountry: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.countryCode,
                    destinationCountry: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.countryCode,
                    originRegion: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.regionCode,
                    destinationRegion: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.regionCode,
                    reasonCode: oMatDocData.RenewableReasonReasonCode,
                    reasonCodeDesc: this._oRegulationComplianceBaseClassInstance.oMaintainAdjustmentReasonCode?.description,
                    regulationCompanyName: oMatDocData.CompanyCode,
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
                    // dealStrategy //deal section no mapping
                    // dealStrategyDescription
                    // valuationType    //S4
                    // exchangeAgreementNumber  //S4
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
                    postingDate: oMatDocData.RenewableMaterialDocPostgDte as unknown as CdsDate,
                    renewablesPostingMonth: new Date(oMatDocData.RenewableMaterialDocPostgDte).getMonth().toString().padStart(2, "0") as Month,
                    renewablesPostingQuarter: (Math.floor((new Date(oMatDocData.RenewableMaterialDocPostgDte).getMonth() + 3) / 3)).toString() as Quarter,
                    renewablesPostingComplianceYear: new Date(oMatDocData.RenewableMaterialDocPostgDte).getFullYear().toString(),
                    documentDate: oMatDocData.DocumentDate as unknown as CdsDate,
                    renewablesDocumentMonth: new Date(oMatDocData.DocumentDate).getMonth().toString().padStart(2, "0") as Month,
                    renewablesDocumentMonthDes: sMonthDes,
                    renewablesDocumentQuarter: (Math.floor((new Date(oMatDocData.DocumentDate).getMonth() + 3) / 3)).toString() as Quarter,
                    renewablesDocumentComplianceYear: new Date(oMatDocData.DocumentDate).getFullYear().toString(),
                    // reversalPostingDate: oEventData.reversalPostingDate,
                    // renewablesReversalPostingMonth: new Date(oEventData.reversalPostingDate).getMonth().toString().padStart(2, "0") as Month,
                    // renewablesReversalPostingQuarter: (Math.floor((new Date(oEventData.reversalPostingDate).getMonth() + 3) / 3)).toString() as Quarter,
                    // renewablesReversalPostingComplianceYear: new Date(oEventData.reversalPostingDate).getFullYear().toString(),
                    // productiondate: this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableProductionOrder.
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
                    dcode: this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableDeal.Dcode as Dcode,
                    dcodeDesc: this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableDeal.RenewableDcodeription,
                    rfs2ObligationType: oMaterialConfig.rvoTypeCategory,
                    rfs2ObligationTypeDesc: oMaterialConfig.rvoTypeCategory ? this._oRegulationComplianceBaseClassInstance.mRfs2DebitType[oMaterialConfig.rvoTypeCategory].description : "",
                    vintageYear: this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableDeal.VintageYear,
                    rinMultiplier: Number(this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableDeal.RenewableRinMultiplierription),
                    qapCertified: this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableDeal.QAPcertified,
                    qapCertifiedDesc: this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableDeal.RenewableQapCertifiedDesc,
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
                    generateFacilityId: this._oRegulationComplianceBaseClassInstance?.mMaintainCompanyIdOrPlantToFacilityIdMapping[oMatDocData.Plant+oMatDocData.CompanyCode]?.facilityId,
                    // referenceContractDocumentType: oEventData.co
                    // referenceContractGeneralDocumentNumber: oMatDocData.RenwableMaterialDocument,
                    // referenceContractDocumentItemNumber: oMatDocData.RenwableMaterialDocumentItem,
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
                    renewableMaterialDocumentType: rvoReversalMovementType !== sMovementType ? oMatDocData.RenwableDocumentType as DocumentType : "" as DocumentType,
                    renewableMaterialGeneralDocumentNumber: rvoReversalMovementType !== sMovementType ? oMatDocData.RenwableMaterialDocument : "",
                    renewableMaterialDocumentItemNumber: rvoReversalMovementType !== sMovementType ? oMatDocData.RenwableMaterialDocumentItem : "",
                    // renewableMaterialDocNoDocumentSubItem
                    // renewableMaterialDocNoMaterialDocumentYear
                    renewableReverseMaterialDocumentType: rvoReversalMovementType === sMovementType ? oMatDocData.RenwableDocumentType as DocumentType : "" as DocumentType,
                    renewableReverseMaterialGeneralDocumentNumber: rvoReversalMovementType === sMovementType ? oMatDocData.RenwableMaterialDocument : "",
                    renewableReverseMaterialDocumentItemNumber: rvoReversalMovementType === sMovementType ? oMatDocData.RenwableMaterialDocumentItem : "",
                    // renewableReverseMaterialDocumentSubItem
                    // renewableReverseMaterialMaterialDocumentYear
                    sourceOrgCompanyCode: oMatDocData.CompanyCode,
                    sourceOrgPlant: oMatDocData.Plant,
                    sourceOrgStorageLocation: oMatDocData.StorageLocation,
                    sourceOrgMaterialNumber: oMatDocData.RenewableMaterial,
                    sourceOrgMaterialNumberDesc: this._oRegulationComplianceBaseClassInstance.oEventPayloadData.MaterialDescription,
                    sourceOrgCountryKey: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.countryCode,
                    sourceOrgRegion: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.regionCode,
                    destinationOrgCompanyCode: oMatDocData.CompanyCode,
                    destinationOrgPlant: oMatDocData.Plant,
                    destinationOrgStorageLocation: oMatDocData.StorageLocation,
                    destinationOrgMaterialNumber: oMatDocData.RenewableMaterial,
                    destinationOrgMaterialNumberDes: this._oRegulationComplianceBaseClassInstance.oEventPayloadData.MaterialDescription,
                    destinationOrgCountryKey: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.countryCode,
                    destinationOrgRegion: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.regionCode,
                    fuelLogisticsCompanyCode: oMatDocData.CompanyCode,
                    fuelLogisticsPlant: oMatDocData.Plant,
                    fuelLogisticsStorageLocation: oMatDocData.StorageLocation,
                    fuelLogisticsMaterialNumber: oMatDocData.RenewableMaterial,
                    fuelLogisticsMaterialNumberDesc: this._oRegulationComplianceBaseClassInstance.oEventPayloadData.MaterialDescription,
                    fuelLogisticsCountryKey: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.countryCode,
                    fuelLogisticsRegion: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.regionCode,
                    regulationLogisticsCompanyCode: oMatDocData.CompanyCode,
                    regulationLogisticsPlant: oMatDocData.Plant,
                    regulationLogisticsStorageLocation: oMatDocData.StorageLocation,
                    regulationLogisticsMaterialNumber: oMatDocData.RenewableMaterial,
                    regulationLogisticsMaterialNumberDesc: this._oRegulationComplianceBaseClassInstance.oEventPayloadData.MaterialDescription,
                    regulationLogisticsCountryKey: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.countryCode,
                    regulationLogisticsRegion: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.regionCode,
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
        if (aFinalData.length > 0) {
            await this._oRegulationComplianceBaseClassInstance.addRegulationCompliances(aFinalData);
        }
    }
    //-------- End of private methods --------------------
}