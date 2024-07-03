import { RegulationComplianceBaseClass } from './zcom_tsRegulationComplianceBase';
import { RegulationComplianceTransaction } from '@cds-models/com/sap/chs/com/regulationcompliancetransaction';
import { createdStatus } from './utilities/zcom_tsConstants';
import { CdsDate } from '@cds-models/_/index';
import { Quarter, Month } from '@cds-models';
export class RFS2DeditCompliance {
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
        });
    }
    //-------- End of RFS2 Debit constructor ------------------

    //-------- Start of private methods ------------------
    private async _validateData(): Promise<boolean> {
        // set sub scenario data
        await this._oRegulationComplianceBaseClassInstance.setRgulationSubScnario();
        if (this._oRegulationComplianceBaseClassInstance.oMaintainRegulationSubScenarioToScenarioType) {
            // data available
        } else {
            return false;
        }

        // set reg object type data
        await this._oRegulationComplianceBaseClassInstance.setRegulationObjectType();
        if (this._oRegulationComplianceBaseClassInstance.oMaintainRegulationObjecttype) {
            // data available
        } else {
            return false;
        }

        // set movement type data
        await this._oRegulationComplianceBaseClassInstance.setRegulationObjectType();
        if (this._oRegulationComplianceBaseClassInstance.oMaintainMovementType) {
            if (this._oRegulationComplianceBaseClassInstance.oMaintainMovementType.movementType !== this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableMaterialDocument.MovementType) {
                return false;
            }
            // data available
        } else {
            return false;
        }

        // set mvt type relevance data
        await this._oRegulationComplianceBaseClassInstance.setMvtTypeTransationRelevance();
        if (this._oRegulationComplianceBaseClassInstance.oMaintainMovementTypeToTransactionCategoryImpact) {
            // data available
        } else {
            return false;
        }

        // set mat config data
        await this._oRegulationComplianceBaseClassInstance.setMaterialConfiguration();
        if (this._oRegulationComplianceBaseClassInstance.aMaintainRenewableMaterialConfiguration) {
            // data available
        } else {
            return false;
        }

        // set regulation type
        await this._oRegulationComplianceBaseClassInstance.setRegulationTypes();
        if (this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType) {
            // data available
        } else {
            return false;
        }

        // set Regulation Transaction Types data
        await this._oRegulationComplianceBaseClassInstance.setRegulationTransactionTypeTs();
        if (this._oRegulationComplianceBaseClassInstance.oMaintainRegulationTransactionTypeTs) {
            // data available
        } else {
            return false;
        }

        // set Transaction Type Data
        await this._oRegulationComplianceBaseClassInstance.setTransactiontype();
        if (this._oRegulationComplianceBaseClassInstance.aMaintainTransactionType) {
            // data available
        } else {
            return false;
        }

        // set RFS2 Debit Type data
        await this._oRegulationComplianceBaseClassInstance.setRFS2DebitType();
        if (this._oRegulationComplianceBaseClassInstance.aRfs2DebitType) {
            // data available
        } else {
            return false;
        }

        // set Fuel Category data
        await this._oRegulationComplianceBaseClassInstance.setFuelCategory();
        if (this._oRegulationComplianceBaseClassInstance.aFuelCategory) {
            // data available
        } else {
            return false;
        }

        // set Fuel Sub Category data
        await this._oRegulationComplianceBaseClassInstance.setFuelSubCategory();
        if (this._oRegulationComplianceBaseClassInstance.aFuelSubCategory) {
            // data available
        } else {
            return false;
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
        const aMaterialConfig = this._oRegulationComplianceBaseClassInstance.aMaintainRenewableMaterialConfiguration;
        for (let index = 0; index < aMaterialConfig.length; index++) {
            const oMaterialConfig = aMaterialConfig[index],
                oMatDocData = this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableMaterialDocument;
            if (oMaterialConfig.obligationPercent) {
                aFinalData.push({
                    // objectId: oObjectID,
                    regulationType: this._oRegulationComplianceBaseClassInstance.oRFS2RegulationData.regulationType,
                    regulationTypeDesc: this._oRegulationComplianceBaseClassInstance.oRFS2RegulationData.description,
                    regulationCategory: this._oRegulationComplianceBaseClassInstance.oRFS2DebitData.category,
                    // objectCategory: oRegulationMaterialGrpData.category,
                    objectCategoryDesc: this._oRegulationComplianceBaseClassInstance.oRFS2DebitData.description,
                    objectType: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationObjecttype.objectTypeCode,
                    objectTypeDesc: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationObjecttype.description,
                    // sourceScenario: oMovementTypesData.sourceScenario, //master have to update
                    subObjectScenario: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationSubScenarioToScenarioType.regulationSubScenarioCategory,
                    subObjectScenarioDesc: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationSubScenarioToScenarioType.description,
                    transactionCategory: this._oRegulationComplianceBaseClassInstance.oMaintainMovementTypeToTransactionCategoryImpact.transactionCategoryCategory, //master have to update
                    transactionType: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationTransactionTypeTs.transactionType,
                    transactionTypeDesc: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationTransactionTypeTs.description,
                    // extTransactionNumber
                    // matchedExtTransactionNumber
                    // billofLading: this._oRegulationComplianceBaseClassInstance.oEventPayloadData.bi,  //oEventData.billofLading,
                    // impact: oMovementTypesData.impactCategory,   //master have to update
                    // businessPartnerNumber: oEventData.businessPartnerNumber,
                    // businessPartnerDesc: oEventData.businessPartnerDesc,
                    movementType: this._oRegulationComplianceBaseClassInstance.oMaintainMovementTypeToTransactionCategoryImpact.movementTypeMovementType,
                    // incotermsPart1: oEventData.incotermsPart1,
                    // incotermsPart2: oEventData.incotermsPart2,
                    fuelCategory: this._oRegulationComplianceBaseClassInstance.oEventPayloadData.RenewableFuelCategory,
                    fuelCategoryDesc: this._oRegulationComplianceBaseClassInstance.mFuelCategory[this._oRegulationComplianceBaseClassInstance.oEventPayloadData.RenewableFuelCategory].description,
                    fuelSubCategory: "BD", //HC oEventData.fuelSubCategory, //Maintain Fuel Mapping
                    fuelSubCategoryDesc: this._oRegulationComplianceBaseClassInstance.mFuelSubCategory["BD"].description,
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
                    processingStatus: createdStatus.key,
                    objectStatusDesc: createdStatus.value,
                    // priceStatus
                    // matchStatus
                    // reconcilliationGroupID: oEventData.reconcilliationGroupID,
                    // autoMatch: oEventData.autoMatch,
                    // groupBalanced: oEventData.groupBalanced,
                    // renewablesEpaCompanyId: oEventData.renewablesEpaCompanyId,
                    // renewablesEpaFacilityId: oEventData.renewablesEpaFacilityId,
                    fuelQuantity: parseFloat(oMatDocData.Quantity),
                    // fuelQuantityRaw: oEventData.fuelQuantityRaw,
                    fuelUnitofMeasurement: oMatDocData.UnitOfMeasure, //oEventData.fuelUnitofMeasurement,
                    // fuelQuantityinAlternateUOM: (oEventData.fuelQuantity * Number(oMaterialConfig.obligationPercent)),
                    // fuelQuantityinAlternateUOMRaw: (oEventData.fuelQuantity * Number(oMaterialConfig.obligationPercent)),
                    fuelAlternateUnitofMeasurement: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.fuelAlternateUom,
                    // numeratorforConversiontoBaseUnitsOfMeasure: Number(oEventData.fuelQuantity * Number(oMaterialConfig.obligationPercent)),
                    // denominatorforConversiontoBaseUnitsOfMeasure: (oEventData.fuelQuantity * Number(oMaterialConfig.obligationPercent)),
                    regulationQuantity: Math.round(parseFloat(oMatDocData.Quantity) * Number(oMaterialConfig.obligationPercent)),
                    regulationQuantityWholeNumber: (parseFloat(oMatDocData.Quantity) * Number(oMaterialConfig.obligationPercent)),
                    regulationUnitOfMeasurement: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.regulationUoMCategory,
                    originCountry: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.countryCode,
                    // destinationCountry: oRegulationTypeData.countryCode,
                    originRegion: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.regionCode,
                    // destinationRegion:
                    // reasonCode: oEventData.
                    // reasonCodeDesc
                    regulationCompanyName: oMatDocData.CompanyCode, //oEventData.sourceOrgCompanyCode,
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
                    rfs2ObligationTypeDesc: oMaterialConfig.rvoTypeCategory ? this._oRegulationComplianceBaseClassInstance.mRfs2DebitType[oMaterialConfig.rvoTypeCategory].description : "",
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
                    sourceOrgCompanyCode: oMatDocData.CompanyCode,
                    sourceOrgCompanyPlant: oMatDocData.Plant,
                    sourceOrgCompanyStorageLocation: oMatDocData.StorageLocation,
                    sourceOrgCompanyMaterialNumber: oMatDocData.RenewableMaterial, //oEventData.sourceOrgCompanyMaterialNumber,
                    sourceOrgCompanyMaterialNumberDesc: this._oRegulationComplianceBaseClassInstance.oEventPayloadData.MaterialDescription, //HC oEventData.sourceOrgCompanyMaterialNumberDesc,
                    sourceOrgCompanyCountryKey: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.countryCode,
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
                    fuelLogisticsCompanyMaterialNumber: oMatDocData.RenewableMaterial,
                    fuelLogisticsCompanyMaterialNumberDesc: this._oRegulationComplianceBaseClassInstance.oEventPayloadData.MaterialDescription,
                    // fuelLogisticsCompanyCountryKey
                    // fuelLogisticsCompanyRegion
                    regulationLogisticsCompanyCode: oMatDocData.CompanyCode,
                    regulationLogisticsCompanyPlant: oMatDocData.Plant,
                    regulationLogisticsCompanyStorageLocation: oMatDocData.StorageLocation,
                    regulationLogisticsCompanyMaterialNumber: oMatDocData.RenewableMaterial,
                    regulationLogisticsCompanyMaterialNumberDes: this._oRegulationComplianceBaseClassInstance.oEventPayloadData.MaterialDescription,
                    regulationLogisticsCompanyCountryKey: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.countryCode,
                    regulationLogisticsCompanyRegion: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.regionCode,
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