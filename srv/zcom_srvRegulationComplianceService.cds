using {com.sap.chs.com.regulationcompliancetransaction as transaction} from '../db/zcom_schRegulationComplianceTransaction';
using {RegulationComplianceMasterService as master} from './external/RegulationComplianceMasterService';
// using {Za_}
using {MaterialCharacteristics as s4h} from './external/MaterialCharacteristics';

service RegulationComplianceTransactionService {    
    action sendMessage();
    entity RegulationComplianceTransaction 
    @(Capabilities: {
        InsertRestrictions: {
            $Type: 'Capabilities.InsertRestrictionsType',
            Insertable
        },

        DeleteRestrictions.Deletable: false,
        UpdateRestrictions.Updatable: false
    })                                              as projection on transaction.RegulationComplianceTransaction
                                                       order by
                                                           objectId desc;

    @odata.draft.enabled
    entity ManualAdjRegulationComplianceTransaction as projection on transaction.RegulationComplianceTransaction
                                                       order by
                                                           objectId desc;

    entity AdjustmentBaseValuelist                  as projection on transaction.AdjustmentBaseValuelist;
    // Master data entities

    entity MaintainRegulationType                   as projection on master.MaintainRegulationType;

    // entity MaintainTransactionType as projection on master.MaintainRegulationTransactionTypeTS;
    entity GetMaintainRegulationTransactionTypeTs   as
        projection on master.MaintainRegulationTransactionTypeTS 
        {
            *,
            transactionCategory.category as categorytrans
        }
        ;

    entity TransactionType                          as projection on master.TransactionCategory;
 
    entity MaintainRegulationTransactionType as projection on master.MaintainRegulationTransactionTypeTS;
    entity MaintainRegulationObjecttype as projection on master.MaintainRegulationObjecttype;
    entity MaintainRenewableMaterialConfiguration as projection on master.MaintainRenewableMaterialConfiguration;
    entity GetFuelCategory as projection on master.FuelCategory;
    entity GetReasonCode as projection on master.MaintainAdjustmentReasonCode;
    entity GetObjectCategory as projection on master.ObjectCategory;
    entity GetUOM   as projection on master.UOM;
    entity GetImpact as projection on master.Impact;
    entity GetFuelSubCategory as projection on master.FuelSubCategory;
    entity GetMovementType as projection on master.MaintainMovementType;
    entity GetTransactionType as projection on master.MaintainTransactionType;
    //S4 API 
    entity GetFuelMaterialS4 as projection on s4h.ZA_MaterialCharacteristics_R
    {
        ObjectKey,
        MaterialDescription,
        FuelCategory,
        RegulationGroup,
        RegulationMaterialGroup
    };
    // CDs View for aggregating Regulation Quantity by Plant
    @cds.persistence.skip
    define view MaintainWorkplaceAgggregationByPlantView as select from RegulationComplianceTransaction {
    sourceOrgPlant,
    regulationQuantity,
    sum(regulationQuantity) as TotalRegQuantityByPlant:Integer
    } group by sourceOrgPlant;

   // CDs View for aggregating Regulation Quantity by Month
   @cds.persistence.skip
    define view MaintainWorkplaceAgggregationByMonthView as select from RegulationComplianceTransaction {
    renewablesDocumentMonth,
    regulationQuantity,
    sum(regulationQuantity) as TotalRegQuantityByMonth:Integer
    } group by renewablesDocumentMonthDes;

   // CDS View for aggregating Regulation Quantity by Category
   @cds.persistence.skip
    define view MaintainWorkplaceAgggregationByCategoryView as select from RegulationComplianceTransaction {
    rfs2ObligationType,
    regulationQuantity,
    sum(regulationQuantity) as TotalRegQuantityByCategory:Integer
    } group by rfs2ObligationTypeDesc;

  
   

}
