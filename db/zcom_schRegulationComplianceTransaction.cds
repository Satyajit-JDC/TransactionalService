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
using {MovementScenario} from './types/zcom_schRegulationComplianceTypes';
using {SubmittedtoRegulation} from './types/zcom_schRegulationComplianceTypes';
using {PassRetainIndicator} from './types/zcom_schRegulationComplianceTypes';
using {PriceStatus} from './types/zcom_schRegulationComplianceTypes';
using {MatchStatus} from './types/zcom_schRegulationComplianceTypes';
using {YesorNo} from './types/zcom_schRegulationComplianceTypes';
using {AdjustmentBase} from './types/zcom_schRegulationComplianceTypes';

@EndUserText.label: 'Renewable Object Common Data'

entity RegulationComplianceTransaction : cuid, RenewableDate, Enterprise, RFS2, ABTBenzeneAndSulphur, LCFS, CapAndTradeStructure, Valuation, managed {
    regulationType                               : String(4)             @title: '{i18n>RenewablesRegulationType}';
    regulationTypeDesc                           : String(100)           @title: '{i18n>RenewablesRegulationTypeDesc}';
    regulationCategory                           : String(5)             @title: '{i18n>RenewablesRegulationCategory}';
    objectCategory                               : String(3)             @title: '{i18n>RenewablesObjectCategory}';
    objectCategoryDesc                           : String(100)           @title: '{i18n>RenewablesObjectCategoryDesc}';
    objectType                                   : String(3)             @title: '{i18n>RenewablesObjectType}';
    objectTypeDesc                               : String(100)           @title: '{i18n>RenewablesObjectTypeDesc}';
    sourceScenario                               : String(40)        @title: '{i18n>RenewablesSourceScenario}';
    subObjectScenario                            : String(40)            @title: '{i18n>RenewablesSub-ObjectScenario}';
    subObjectScenarioDesc                        : String(100)           @title: '{i18n>RenewablesSub-ObjectScenarioDesc}';
    objectId                                     : Integer               @title: '{i18n>RenewablesObjectNumber}'  @assert.unique;
    transactionCategory                          : String(4)             @title: '{i18n>RenewablesTransactionCategory}'; //TransactionCategory
    transactionType                              : String(5)             @title: '{i18n>RenewablesTransactionType}';
    transactionTypeDesc                          : String(100)           @title: '{i18n>RenewablesTransactionTypeDesc}';
    extTransactionNumber                         : String(50)            @title: '{i18n>RenewablesExtTransactionNumber}';
    // matchedExtTransactionNumber                  : String(50)            @title: '{i18n>RenewablesMatchedExtTransactionNumber}';
    billofLading                                 : String(50)            @title: '{i18n>RenewablesBillOfLading}';
    impact                                       : String(2)             @title: '{i18n>RenewablesImpact}';
    businessPartnerNumber                        : String(10)            @title: '{i18n>BusinessPartnerNumber}';
    businessPartnerDesc                          : String(100)           @title: '{i18n>BusinessPartnerDesc}';
    movementType                                 : String(3)             @title: '{i18n>MovementTypeInventoryManagement}';
    incotermsPart1                               : String(3)             @title: '{i18n>IncotermsPart1}';
    incotermsPart2                               : String(28)            @title: '{i18n>IncotermsPart2}';
    fuelCategory                                 : String(3)             @title: '{i18n>RenewablesFuelCategory}';
    fuelCategoryDesc                             : String(100)           @title: '{i18n>RenewablesFuelCategoryDesc}';
    fuelSubCategory                              : String(3)             @title: '{i18n>RenewablesFuelSubCategory}';
    fuelSubCategoryDesc                          : String(100)           @title: '{i18n>RenewablesFuelSubCategoryDesc}';
    feedStock                                    : String(3)             @title: '{i18n>RenewablesFeedstock}';
    negativeImpact                               : Boolean               @title: '{i18n>RenewablesNegativeImpact}';
    creditPercentage                             : String(5)             @title: '{i18n>RenewablesCreditPercentage}';
    movementScenario                             : MovementScenario      @title: '{i18n>MovementScenario}';
    productionType                               : String(2)             @title: '{i18n>RenewablesProductionType}';
    cancelledUser                                : String(1)             @title: '{i18n>RenewablesCancelledByUser}';
    submitted                                    : SubmittedtoRegulation @title: '{i18n>RenewablesSubmittedToRegulation}';
    passRetainIndicator                          : String(6)   @title: '{i18n>RenewablesObligationIndicator-PassOrRetain}';
    dealNumber                                   : String(12)            @title: '{i18n>RenewablesDealNumber}';
    contractDocumentNo                           : String(12)            @title: '{i18n>ContractDocumentNo}';
    contractItemNo                               : String(6)             @title: '{i18n>RenewablesContractItemNo}';
    processingStatus                             : String(2)             @title: '{i18n>RenewablesObjectStatus}';
    objectStatusDesc                             : String(100)           @title: '{i18n>RenewablesObjectStatusDesc}';
    priceStatus                                  : PriceStatus           @title: '{i18n>RenewablesObjectPricingStatus}';
    lockStatus                                   : String(1)             @title : '{i18n>Blocked}';
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
    renewableParentGUID                       : UUID                  @title: '{i18n>RenewablesParentGUID}';
    internalObjectGUID                           : UUID                  @title: '{i18n>RenewablesInternalObjectGUIDGeneratedfromGMCAK}';
    externalObjectGUID                           : UUID                  @title: '{i18n>RenewablesExternalObjectFromUploadsEMTSPTD}';
    dealUUID                                     : UUID                  @title: '{i18n>UUIDinXformbinary}';
    dealItemUUID                                 : UUID                  @title: '{i18n>UUIDinXformbinary}';
    adjustmentBase                               : AdjustmentBase        @title: '{i18n>adjustmentBase}';
    tenantID                                     : String(40)            @title: '{i18n>tenantID}';
}

entity AdjustmentBaseValuelist {
    adjustmentBase : AdjustmentBase @title: '{i18n>adjustmentBase}';
    descriptionAdj : String(20)     @title: '{i18n>adjustmentBasedesc}';
}

type EventData {
    RenewableMaterial                  : String;
    RenewableEventType                 : String;
    RenewableFuelCategory              : String;
    RenewableTransactionType           : String;
    RegulationGroupName                : String;
    RegulationMateGroup                : String;
    MaterialDescription                : String;
    _RenewableContract                 : {
        RenewableMaterial              : String;
        RenewableEventType             : String;
        RenwableContract               : String;
        RenwableCotractItem            : String;
        DocumentType                   : String;
        MovementType                   : String;
        Quantity                       : String;
        UnitOfMeasure                  : String;
    };
    _RenewableDeal                     : {
        RenewableMaterial              : String;
        RenewableEventType             : String;
        RenwableDealDocument           : String;
        RenwableDealItem               : String;
        DocumentType                   : String;
        MovementType                   : String;
        AttachedIndicator              : String;
        Dcode                          : String;
        VintageYear                    : String;
        Multiplier                     : String;
        RINObligation                  : String;
        RINsGenerator                  : String;
        RINspriced                     : String;
        QAPcertified                   : String;
        Quantity                       : String;
        UnitOfMeasure                  : String;
        RenewablePassRetainIndicator   : String;
        RenewableDealNumber            : String;
        RenewableDcodeription          : String;
        RenewableVintageYearription    : String;
        RenewableRinMultiplierription  : String;
        RenewableQapCertifiedription   : String;
    };
    _RenewableDelivery                 : {
        RenewableMaterial              : String;
        RenewableEventType             : String;
        RenwableDelivery               : String;
        RenwableDeliveryItem           : String;
        DocumentType                   : String;
        MovementType                   : String;
        Quantity                       : String;
        UnitOfMeasure                  : String;
    };
    _RenewableMaterialDocument         : {
        RenewableMaterial              : String;
        RenewableEventType             : String;
        RenwableMaterialDocument       : String;
        RenwableMaterialDocumentItem   : String;
        RenwableDocumentType           : String;
        MovementType                   : String;
        Plant                          : String;
        StorageLocation                : String;
        CompanyCode                    : String;
        DocumentDate                   : String;
        Quantity                       : String;
        UnitOfMeasure                  : String;
        RenewableMaterialDocDocDte     : String;
        RenewableMaterialDocPostgDte   : String;
        RenewableBillOfLading          : String;
        RenewableReasonReasonCode      : String;
        RenewableReversalPostingDate   : String;
    };
    _RenewableNominationData           : {
        RenewableMaterial              : String;
        RenewableEventType             : String;
        RenwableNomination             : String;
        NominationKey                  : String;
        RenwableNominationItem         : String;
        DocumentType                   : String;
        MovementType                   : String;
        Quantity                       : String;
        UnitOfMeasure                  : String;
    };
    _RenewableProductionOrder          : {
        RenewableMaterial              : String;
        RenewableEventType             : String;
        RenwableProductionOrder        : String;
        RenwableProductionOrderItem    : String;
        DocumentType                   : String;
        MovementType                   : String;
        Quantity                       : String;
        UnitOfMeasure                  : String;
        RenewableBusinessPartnerNumber : String;
        RenewableBusinessPartnerDesc   : String;
        RenewableIncoTerms1            : String;
        RenewableIncoTerms2            : String;
        RenewableContract              : String;
        RenewableContractItem          : String;
    };
    _RenewablePurchaseOrder            : {
        RenewableMaterial              : String;
        RenewableEventType             : String;
        RenwablePurchaseOrder          : String;
        RenwablePurchaseOrderItem      : String;
        DocumentType                   : String;
        MovementType                   : String;
        Quantity                       : String;
        UnitOfMeasure                  : String;
    };
    _RenewableSalesOrder               : {
        RenewableMaterial              : String;
        RenewableEventType             : String;
        RenwableSalesOrder             : String;
        RenwableSalesOrderItem         : String;
        DocumentType                   : String;
        MovementType                   : String;
        Quantity                       : String;
        UnitOfMeasure                  : String;
    };
    _RenewableTicketData               : {
        RenewableMaterial              : String;
        RenewableEventType             : String;
        RenwableTicket                 : String;
        RenwableTicketItem             : String;
        Ticketkey                      : String;
        TicketVersion                  : String;
        TicketPurpose                  : String;
        Tickettype                     : String;
        ExternalTicketNumber           : String;
        ExternalPositionNumber         : String;
        DocumentType                   : String;
        MovementType                   : String;
        Quantity                       : String;
        UnitOfMeasure                  : String;
    }
}

 // CDs View for aggregating Regulation Quantity by Plant
define view MaintainWorkplaceAggregationByPlantView as
    select from RegulationComplianceTransaction {
        key sourceOrgPlant,
        sum ( regulationQuantity ) as TotalRegQuantityByPlant : Integer
        
    } group by sourceOrgPlant
        order by sourceOrgPlant desc limit 4;
			
    // CDs View for aggregating Regulation Quantity by Month
   define view MaintainWorkplaceAggregationByMonthView as
        select from RegulationComplianceTransaction {
           key renewablesDocumentMonth,
            renewablesDocumentMonthDes,
            sum( regulationQuantity ) as TotalRegQuantityByMonth : Integer
        }
        group by
            renewablesDocumentMonth,renewablesDocumentMonthDes
        order by renewablesDocumentMonth desc limit 4;
          

    // CDS View for aggregating Regulation Quantity by Category
    define view MaintainWorkplaceAggregationByCategoryView as
        select from RegulationComplianceTransaction {
            key rfs2ObligationType,
            rfs2ObligationTypeDesc,
            sum(regulationQuantity) as TotalRegQuantityByCategory : Integer
        }
        group by
            rfs2ObligationType,rfs2ObligationTypeDesc
        order by rfs2ObligationType desc limit 4;

    // CDS View for aggregating Regulation Quantity by ObjectType   
   define view MaintainWorkplaceAggregationByObjectTypeView as
        select from RegulationComplianceTransaction {
            key objectType,
            objectTypeDesc,
            sum(regulationQuantity) as TotalRegQuantityByObjectType : Integer
        }
        group by objectType, objectTypeDesc
        order by objectType desc limit 4;

 // CDs View for aggregating Regulation Quantity by Dcode
   define view MaintainWorkplaceAggregationByDcodeView as
        select from RegulationComplianceTransaction {
          key dcode,
            dcodeDesc,
            sum(regulationQuantity) as TotalRegQuantityByDcode : Integer
        }
        group by
            dcode,dcodeDesc
        order by dcode desc limit 4;
 // CDs View for aggregating Regulation Quantity by Status
     define view MaintainWorkplaceAggregationByStatusView as
        select from RegulationComplianceTransaction {
            key processingStatus,
            sum(regulationQuantity) as TotalRegQuantityByStatus : Integer
        }
        group by
            processingStatus
        order by processingStatus desc limit 4;