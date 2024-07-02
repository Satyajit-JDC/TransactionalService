import { RegulationComplianceBaseClass } from './zcom_tsRegulationComplianceBase';
import { RegulationComplianceTransaction } from '@cds-models/com/sap/chs/com/regulationcompliancetransaction';
import { createdStatus } from './utilities/zcom_tsConstants';
import { CdsDate } from '@cds-models/_/index';
import { Quarter, Month } from '@cds-models';
export class RFS2DeditCompliance {
    // private elements
    public _regulationComplianceBaseClassInstance: RegulationComplianceBaseClass;

    // public elements

    //-------- Start of RFS2 Debit constructor ------------------
    constructor(oRegulationComplianceBaseClassInstance: RegulationComplianceBaseClass) {
        this._regulationComplianceBaseClassInstance = oRegulationComplianceBaseClassInstance;

        new Promise(async (resolve) => {
            // validate data
            if (await this._validateData()) {
                await this._buildData();
            }
        });
    }
    //-------- End of RFS2 Debit constructor ------------------

    //-------- Start of private methods ------------------
    private async _validateData(): Promise<boolean> {
        // set sub scenario data
        await this._regulationComplianceBaseClassInstance.setRgulationSubScnario();
        if (this._regulationComplianceBaseClassInstance.oMaintainRegulationSubScenarioToScenarioType) {
            // data available
        } else {
            return false;
        }

        // set reg object type data
        await this._regulationComplianceBaseClassInstance.setRegulationObjectType();
        if (this._regulationComplianceBaseClassInstance.oMaintainRegulationObjecttype) {
            // data available
        } else {
            return false;
        }

        // set movement type data
        await this._regulationComplianceBaseClassInstance.setRegulationObjectType();
        if (this._regulationComplianceBaseClassInstance.oMaintainMovementType) {
            if (this._regulationComplianceBaseClassInstance.oMaintainMovementType.movementType !== this._regulationComplianceBaseClassInstance.oEventPayloadData._RenewableMaterialDocument.MovementType) {
                return false;
            }
            // data available
        } else {
            return false;
        }

        // set mvt type relevance data
        await this._regulationComplianceBaseClassInstance.setMvtTypeTransationRelevance();
        if (this._regulationComplianceBaseClassInstance.oMaintainMovementTypeToTransactionCategoryImpact) {
            // data available
        } else {
            return false;
        }

        // set mat config data
        await this._regulationComplianceBaseClassInstance.setMaterialConfiguration();
        if (this._regulationComplianceBaseClassInstance.aMaintainRenewableMaterialConfiguration) {
            // data available
        } else {
            return false;
        }

        // set regulation type
        await this._regulationComplianceBaseClassInstance.setRegulationTypes();
        if (this._regulationComplianceBaseClassInstance.oMaintainRegulationType) {
            // data available
        } else {
            return false;
        }

        // set Regulation Transaction Types data
        await this._regulationComplianceBaseClassInstance.setRegulationTransactionTypeTs();
        if (this._regulationComplianceBaseClassInstance.oMaintainRegulationTransactionTypeTs) {
            // data available
        } else {
            return false;
        }

        // set Transaction Type Data
        await this._regulationComplianceBaseClassInstance.setTransactiontype();
        if (this._regulationComplianceBaseClassInstance.aMaintainTransactionType) {
            // data available
        } else {
            return false;
        }

        // set RFS2 Debit Type data
        await this._regulationComplianceBaseClassInstance.setRFS2DebitType();
        if (this._regulationComplianceBaseClassInstance.aRfs2DebitType) {
            // data available
        } else {
            return false;
        }

        // set Fuel Category data
        await this._regulationComplianceBaseClassInstance.setFuelCategory();
        if (this._regulationComplianceBaseClassInstance.aFuelCategory) {
            // data available
        } else {
            return false;
        }

        // set Fuel Sub Category data
        await this._regulationComplianceBaseClassInstance.setFuelSubCategory();
        if (this._regulationComplianceBaseClassInstance.aFuelSubCategory) {
            // data available
        } else {
            return false;
        }
        return true;
    }

    private async _buildData() {
        const aFinalData: RegulationComplianceTransaction[] = [];
        // find month description
        let sMonthDes;
        switch (new Date(this._regulationComplianceBaseClassInstance.oEventPayloadData._RenewableMaterialDocument.DocumentDate).getMonth().toString().padStart(2, "0")) {
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
        const aMaterialConfig = this._regulationComplianceBaseClassInstance.aMaintainRenewableMaterialConfiguration;
        for (let index = 0; index < aMaterialConfig.length; index++) {
            const oMaterialConfig = aMaterialConfig[index],
                  oObjectID = await this._regulationComplianceBaseClassInstance.getNextRenewableId(this._regulationComplianceBaseClassInstance.oMaintainRegulationSubScenarioToScenarioType.regulationSubScenarioCategory as string),
                  oMatDocData = this._regulationComplianceBaseClassInstance.oEventPayloadData._RenewableMaterialDocument;
            if (oObjectID && oMaterialConfig.obligationPercent) {
                aFinalData.push({
                    // objectId: oObjectID,
                    regulationType: this._regulationComplianceBaseClassInstance.oRFS2RegulationData.regulationType,
                    regulationTypeDesc: this._regulationComplianceBaseClassInstance.oRFS2RegulationData.description,
                    regulationCategory: this._regulationComplianceBaseClassInstance.oRFS2DebitData.category,
                    // objectCategory: oRegulationMaterialGrpData.category,
                    objectCategoryDesc: this._regulationComplianceBaseClassInstance.oRFS2DebitData.description,
                    objectType: this._regulationComplianceBaseClassInstance.oMaintainRegulationObjecttype.objectTypeCode,
                    objectTypeDesc: this._regulationComplianceBaseClassInstance.oMaintainRegulationObjecttype.description,
                    // sourceScenario: oMovementTypesData.sourceScenario, //master have to update
                    subObjectScenario: this._regulationComplianceBaseClassInstance.oMaintainRegulationSubScenarioToScenarioType.regulationSubScenarioCategory,
                    subObjectScenarioDesc: this._regulationComplianceBaseClassInstance.oMaintainRegulationSubScenarioToScenarioType.description,
                    transactionCategory: this._regulationComplianceBaseClassInstance.oMaintainMovementTypeToTransactionCategoryImpact.transactionCategoryCategory, //master have to update
                    transactionType: this._regulationComplianceBaseClassInstance.oMaintainRegulationTransactionTypeTs.transactionType,
                    transactionTypeDesc: this._regulationComplianceBaseClassInstance.oMaintainRegulationTransactionTypeTs.description,
                    // extTransactionNumber
                    // matchedExtTransactionNumber
                    // billofLading: this._regulationComplianceBaseClassInstance.oEventPayloadData.bi,  //oEventData.billofLading,
                    // impact: oMovementTypesData.impactCategory,   //master have to update
                    // businessPartnerNumber: oEventData.businessPartnerNumber,
                    // businessPartnerDesc: oEventData.businessPartnerDesc,
                    movementType: this._regulationComplianceBaseClassInstance.oMaintainMovementTypeToTransactionCategoryImpact.movementTypeMovementType,
                    // incotermsPart1: oEventData.incotermsPart1,
                    // incotermsPart2: oEventData.incotermsPart2,
                    fuelCategory: this._regulationComplianceBaseClassInstance.oEventPayloadData.RenewableFuelCategory,
                    fuelCategoryDesc: this._regulationComplianceBaseClassInstance.mFuelCategory[this._regulationComplianceBaseClassInstance.oEventPayloadData.RenewableFuelCategory].description,
                    fuelSubCategory: "BD", //HC oEventData.fuelSubCategory, //Maintain Fuel Mapping
                    fuelSubCategoryDesc: this._regulationComplianceBaseClassInstance.mFuelSubCategory["BD"].description,
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
                    fuelQuantity: oMatDocData.Quantity,
                    // fuelQuantityRaw: oEventData.fuelQuantityRaw,
                    fuelUnitofMeasurement: oMatDocData.UnitOfMeasure, //oEventData.fuelUnitofMeasurement,
                    // fuelQuantityinAlternateUOM: (oEventData.fuelQuantity * Number(oMaterialConfig.obligationPercent)),
                    // fuelQuantityinAlternateUOMRaw: (oEventData.fuelQuantity * Number(oMaterialConfig.obligationPercent)),
                    fuelAlternateUnitofMeasurement: this._regulationComplianceBaseClassInstance.oMaintainRegulationType.fuelAlternateUom,
                    // numeratorforConversiontoBaseUnitsOfMeasure: Number(oEventData.fuelQuantity * Number(oMaterialConfig.obligationPercent)),
                    // denominatorforConversiontoBaseUnitsOfMeasure: (oEventData.fuelQuantity * Number(oMaterialConfig.obligationPercent)),
                    regulationQuantity: Math.round(oMatDocData.Quantity * Number(oMaterialConfig.obligationPercent)),
                    regulationQuantityWholeNumber: (oMatDocData.Quantity * Number(oMaterialConfig.obligationPercent)),
                    regulationUnitOfMeasurement: this._regulationComplianceBaseClassInstance.oMaintainRegulationType.regulationUoMCategory,
                    originCountry: this._regulationComplianceBaseClassInstance.oMaintainRegulationType.countryCode,
                    // destinationCountry: oRegulationTypeData.countryCode,
                    originRegion: this._regulationComplianceBaseClassInstance.oMaintainRegulationType.regionCode,
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
                    rfs2ObligationTypeDesc: oMaterialConfig.rvoTypeCategory ? this._regulationComplianceBaseClassInstance.mRfs2DebitType[oMaterialConfig.rvoTypeCategory].description : "",
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
                    sourceOrgCompanyMaterialNumberDesc: this._regulationComplianceBaseClassInstance.oEventPayloadData.MaterialDescription, //HC oEventData.sourceOrgCompanyMaterialNumberDesc,
                    sourceOrgCompanyCountryKey: this._regulationComplianceBaseClassInstance.oMaintainRegulationType.countryCode,
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
                    fuelLogisticsCompanyMaterialNumberDesc: this._regulationComplianceBaseClassInstance.oEventPayloadData.MaterialDescription,
                    // fuelLogisticsCompanyCountryKey
                    // fuelLogisticsCompanyRegion
                    regulationLogisticsCompanyCode: oMatDocData.CompanyCode,
                    regulationLogisticsCompanyPlant: oMatDocData.Plant,
                    regulationLogisticsCompanyStorageLocation: oMatDocData.StorageLocation,
                    regulationLogisticsCompanyMaterialNumber: oMatDocData.RenewableMaterial,
                    regulationLogisticsCompanyMaterialNumberDes: this._regulationComplianceBaseClassInstance.oEventPayloadData.MaterialDescription,
                    regulationLogisticsCompanyCountryKey: this._regulationComplianceBaseClassInstance.oMaintainRegulationType.countryCode,
                    regulationLogisticsCompanyRegion: this._regulationComplianceBaseClassInstance.oMaintainRegulationType.regionCode,
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
        // if (aFinalData.length > 0) {
        //     await oRFS2ComplianceInstance.addRegulationCompliances(aFinalData, logObjectID);
        // }
    }
    //-------- End of private methods --------------------
}