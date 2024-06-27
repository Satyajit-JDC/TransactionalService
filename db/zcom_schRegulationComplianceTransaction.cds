namespace com.sap.chs.com.regulationcompliancetransaction;

using {
    cuid,
    managed
} from '@sap/cds/common';

using {Valuation} from './types/zcom_schRegulationComplianceTypes';
using {RenewableDate} from './types/zcom_schRegulationComplianceTypes';
using {RFS2} from './types/zcom_schRegulationComplianceTypes';
using {ABTBenzeneAndSulphur} from './types/zcom_schRegulationComplianceTypes';
using {LCFS} from './types/zcom_schRegulationComplianceTypes';
using {CapAndTradeStructure} from './types/zcom_schRegulationComplianceTypes';
using {Enterprise} from './types/zcom_schRegulationComplianceTypes';
using {ObjectCategory} from './types/zcom_schRegulationComplianceTypes';
using {SourceScenario} from './types/zcom_schRegulationComplianceTypes';
using {TransactionCategory} from './types/zcom_schRegulationComplianceTypes';
using {Impact} from './types/zcom_schRegulationComplianceTypes';
using {MovementScenario} from './types/zcom_schRegulationComplianceTypes';
using {SubmittedtoRegulation} from './types/zcom_schRegulationComplianceTypes';
using {PassRetainIndicator} from './types/zcom_schRegulationComplianceTypes';
using {PriceStatus} from './types/zcom_schRegulationComplianceTypes';
using {MatchStatus} from './types/zcom_schRegulationComplianceTypes';
using {YesorNo} from './types/zcom_schRegulationComplianceTypes';
using {AdjustmentBase} from './types/zcom_schRegulationComplianceTypes';
using {
    Dcode,
    Rfs2ObligationType
} from './types/zcom_schRegulationComplianceTypes';

@EndUserText.label: 'Renewable Object Common Data'

entity RegulationComplianceTransaction : cuid, RenewableDate, Enterprise, RFS2, ABTBenzeneAndSulphur, LCFS, CapAndTradeStructure, Valuation, managed {
    regulationType                               : String(4)             @title: '{i18n>RenewablesRegulationType}';
    regulationTypeDesc                           : String(100)           @title: '{i18n>RenewablesRegulationTypeDesc}';
    regulationCategory                           : String(4)             @title: '{i18n>RenewablesRegulationCategory}';
    objectCategory                               : ObjectCategory        @title: '{i18n>RenewablesObjectCategory}';
    objectCategoryDesc                           : String(100)           @title: '{i18n>RenewablesObjectCategoryDesc}';
    objectType                                   : String(3)             @title: '{i18n>RenewablesObjectType}';
    objectTypeDesc                               : String(100)           @title: '{i18n>RenewablesObjectTypeDesc}';
    sourceScenario                               : SourceScenario        @title: '{i18n>RenewablesSourceScenario}';
    subObjectScenario                            : String(40)            @title: '{i18n>RenewablesSub-ObjectScenario}';
    subObjectScenarioDesc                        : String(100)           @title: '{i18n>RenewablesSub-ObjectScenarioDesc}';
    objectId                                     : Integer               @title: '{i18n>RenewablesObjectNumber}'  @assert.unique;
    transactionCategory                          : String(4)             @title: '{i18n>RenewablesTransactionCategory}'; //TransactionCategory
    transactionType                              : String(4)             @title: '{i18n>RenewablesTransactionType}';
    transactionTypeDesc                          : String(100)           @title: '{i18n>RenewablesTransactionTypeDesc}';
    extTransactionNumber                         : String(50)            @title: '{i18n>RenewablesExtTransactionNumber}';
    matchedExtTransactionNumber                  : String(50)            @title: '{i18n>RenewablesMatchedExtTransactionNumber}';
    billofLading                                 : String(50)            @title: '{i18n>RenewablesBillOfLading}';
    impact                                       : Impact                @title: '{i18n>RenewablesImpact}';
    businessPartnerNumber                        : String(10)            @title: '{i18n>BusinessPartnerNumber}';
    businessPartnerDesc                          : String(100)           @title: '{i18n>BusinessPartnerDesc}';
    movementType                                 : String(3)             @title: '{i18n>MovementTypeInventoryManagement}';
    incotermsPart1                               : String(3)             @title: '{i18n>IncotermsPart1}';
    incotermsPart2                               : String(28)            @title: '{i18n>IncotermsPart2}';
    fuelCategory                                 : String(2)             @title: '{i18n>RenewablesFuelCategory}';
    fuelCategoryDesc                             : String(100)           @title: '{i18n>RenewablesFuelCategoryDesc}';
    fuelSubCategory                              : String(2)             @title: '{i18n>RenewablesFuelSubCategory}';
    fuelSubCategoryDesc                          : String(100)           @title: '{i18n>RenewablesFuelSubCategoryDesc}';
    feedStock                                    : String(3)             @title: '{i18n>RenewablesFeedstock}';
    negativeImpact                               : Boolean               @title: '{i18n>RenewablesNegativeImpact}';
    creditPercentage                             : String(5)             @title: '{i18n>RenewablesCreditPercentage}';
    movementScenario                             : MovementScenario      @title: '{i18n>MovementScenario}';
    productionType                               : String(2)             @title: '{i18n>RenewablesProductionType}';
    cancelledUser                                : String(1)             @title: '{i18n>RenewablesCancelledByUser}';
    submitted                                    : SubmittedtoRegulation @title: '{i18n>RenewablesSubmittedToRegulation}';
    passRetainIndicator                          : PassRetainIndicator   @title: '{i18n>RenewablesObligationIndicator-PassOrRetain}';
    dealNumber                                   : String(12)            @title: '{i18n>RenewablesDealNumber}';
    oi                                           : String(12)            @title: '{i18n>RenewablesOi}';
    contractItemNo                               : String(6)             @title: '{i18n>RenewablesContractItemNo}';
    processingStatus                             : String(2)             @title: '{i18n>RenewablesObjectStatus}';
    objectStatusDesc                             : String(100)           @title: '{i18n>RenewablesObjectStatusDesc}';
    priceStatus                                  : PriceStatus           @title: '{i18n>RenewablesObjectPricingStatus}';
    matchStatus                                  : MatchStatus           @title: '{i18n>RenewablesObjectMatchStatus}';
    reconcilliationGroupID                       : String(10)            @title: '{i18n>RenewablesreconcilliationGroupID}';
    autoMatch                                    : String(1)             @title: '{i18n>RenewablesMatchGroupAutoIndicator}';
    groupBalanced                                : YesorNo               @title: '{i18n>RenewablesIgnoreExpected}';
    renewablesEpaCompanyId                       : String(4)             @assert.unique                           @title: '{i18n>RenewablesEpaCompanyId}';
    renewablesEpaFacilityId                      : String(5)             @title: '{i18n>RenewablesEpaFacilityId}';
    fuelQuantity                                 : Decimal(13, 3)        @assert.unique                           @title: '{i18n>RenewablesFuelQuantity}';
    fuelQuantityRaw                              : String(34)            @title: '{i18n>RenewablesFuelQuantityRaw}';
    fuelUnitofMeasurement                        : String(3)             @title: '{i18n>RenewablesFuelUnitOfMeasurement}';
    fuelQuantityinAlternateUOM                   : Decimal(13, 3)        @title: '{i18n>RenewablesFuelQuantityinAlternateUOM}';
    fuelQuantityinAlternateUOMRaw                : String(34)            @title: '{i18n>RenewablesFuelQuantityInAlternateUomRaw}';
    fuelAlternateUnitofMeasurement               : String(3)             @title: '{i18n>RenewablesFuelAlternateUnitOfMeasurement}';
    numeratorforConversiontoBaseUnitsOfMeasure   : Decimal(5, 0)         @title: '{i18n>numeratorforConversiontoBaseUnitsofMeasure}';
    denominatorforConversiontoBaseUnitsOfMeasure : Decimal(5, 0)         @title: '{i18n>DenominatorForConversionToBaseUnitsOfMeasure}';
    regulationQuantity                           : Decimal(13, 3)        @title: '{i18n>RenewablesRegulationQuantity}';
    regulationQuantityWholeNumber                : Decimal(13, 3)        @title: '{i18n>RenewablesRegulationQuantityWholeNumber}';
    regulationUnitOfMeasurement                  : String(3)             @title: '{i18n>RenewablesRegulationUnitOfMeasurement}';
    originCountry                                : String(3)             @assert.unique                           @title: '{i18n>OriginCountry}';
    destinationCountry                           : String(2)             @assert.unique                           @title: '{i18n>DestinationCountry}';
    originRegion                                 : String(3)             @title: '{i18n>OriginRegion}';
    destinationRegion                            : String(3)             @title: '{i18n>DestinationRegion}';
    reasonCode                                   : String(2)             @title: '{i18n>RenewablesManualAdjustmentReasonCode}';
    reasonCodeDesc                               : String(100)           @title: '{i18n>reasonCodeDesc}';
    regulationCompanyName                        : String(30)            @title: '{i18n>regulationCompanyName}';
    internalComments                             : String                @title: '{i18n>internalComments}';
    externalComments                             : String                @title: '{i18n>externalComments}';
    regulatoryComments                           : String                @title: '{i18n>regulatoryComments}';
    // createdBy                                    : String(50)            @title: '{i18n>ChangedBy}';
    // createdOn                                    : Date                  @title: '{i18n>ChangedOn}';
    // changedBy                                    : String(50)            @title: '{i18n>ChangedBy}';
    // changedOn                                    : Date                  @title: '{i18n>ChangedOn}';
    renewableRootGUID                            : UUID                  @title: '{i18n>RenewablesRootObjectGUID}';
    renewablepParentROGUID                       : UUID                  @title: '{i18n>RenewablesParentROGUID}';
    internalObjectGUID                           : UUID                  @title: '{i18n>RenewablesInternalObjectGUIDGeneratedfromGMCAK}';
    externalObjectGUID                           : UUID                  @title: '{i18n>RenewablesExternalObjectFromUploadsEMTSPTD}';
    dealUUID                                     : UUID                  @title: '{i18n>UUIDinXformbinary}';
    dealItemUUID                                 : UUID                  @title: '{i18n>UUIDinXformbinary}';
    adjustmentBase                               : AdjustmentBase        @title: '{i18n>adjustmentBase}';
}

entity AdjustmentBaseValuelist {
    adjustmentBase : AdjustmentBase @title: '{i18n>adjustmentBase}';
    descriptionAdj : String(20)     @title: '{i18n>adjustmentBasedesc}';
}
