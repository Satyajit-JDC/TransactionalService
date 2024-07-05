using {com.sap.chs.com.regulationcompliancetransaction as transaction} from '../db/zcom_schRegulationComplianceTransaction';
using {RegulationComplianceMasterService as master} from './external/RegulationComplianceMasterService';
// using {Za_}
using {MaterialCharacteristics as s4h} from './external/MaterialCharacteristics';
type returnData :{
    messageType: String;
    message: String(500);
};


service RegulationComplianceTransactionService {
    action actionTrigger(id: String(2), ObjectKey: UUID) returns many returnData;
    action sendMessage(data : transaction.EventData);

    entity RegulationComplianceTransaction @(Capabilities: {
        InsertRestrictions          : {
            $Type: 'Capabilities.InsertRestrictionsType',
            Insertable
        },

        DeleteRestrictions.Deletable: false,
        UpdateRestrictions.Updatable: false
    })                                                  as projection on transaction.RegulationComplianceTransaction
                                                           order by
                                                               objectId desc;

    @odata.draft.enabled
    entity ManualAdjRegulationComplianceTransaction     as projection on transaction.RegulationComplianceTransaction
                                                           order by
                                                               objectId desc;

    entity ManualAdjRegulationComplianceTransactionTest as projection on transaction.RegulationComplianceTransaction
                                                           order by
                                                               objectId desc;

    entity AdjustmentBaseValuelist                      as projection on transaction.AdjustmentBaseValuelist;
    // Master data entities

    entity MaintainRegulationType                       as projection on master.MaintainRegulationType;
    // entity MaintainTransactionType as projection on master.MaintainRegulationTransactionTypeTS;
    entity GetMaintainRegulationTransactionTypeTs       as projection on master.MaintainRegulationTransactionType;
    entity TransactionType                              as projection on master.TransactionCategory;
    entity MaintainRegulationTransactionType            as projection on master.MaintainRegulationTransactionType;
    entity MaintainRegulationObjecttype                 as projection on master.MaintainRegulationObjectType;
    entity MaintainRenewableMaterialConfiguration       as projection on master.MaintainRFS2Material;
    entity GetFuelCategory                              as projection on master.FuelCategory;
    entity GetReasonCode                                as projection on master.MaintainAdjustmentReasonCode;
    entity GetObjectCategory                            as projection on master.ObjectCategory;
    entity GetUOM                                       as projection on master.RegulationUOM;
    entity GetImpact                                    as projection on master.Impact;
    entity GetFuelSubCategory                           as projection on master.FuelSubCategory;
    entity GetMovementType                              as projection on master.MaintainMovementType;
    entity GetTransactionType                           as projection on master.MaintainTransactionType;
    entity GetRegulationSubType                         as projection on master.RegulationSubType;

    //S4 API
    entity GetFuelMaterialS4                            as
        projection on s4h.ZA_MaterialCharacteristics_R {
            ObjectKey,
            MaterialDescription,
            FuelCategory,
            RegulationGroup,
            RegulationMaterialGroup
        };

    // CDs View for aggregating Regulation Quantity by Plant

    define view MaintainWorkplaceAgggregationByPlantView as
        select from RegulationComplianceTransaction {
            sourceOrgPlant,
            regulationQuantity,
            sum(regulationQuantity) as TotalRegQuantityByPlant : Integer
        }
        group by
            sourceOrgPlant,
            regulationQuantity;

    // CDs View for aggregating Regulation Quantity by Month

    define view MaintainWorkplaceAgggregationByMonthView as
        select from RegulationComplianceTransaction {
            renewablesDocumentMonth,
            renewablesDocumentMonthDes,
            regulationQuantity,
            sum(regulationQuantity) as TotalRegQuantityByMonth : Integer
        }
        group by
            renewablesDocumentMonth,
            renewablesDocumentMonthDes,
            regulationQuantity;

    // CDS View for aggregating Regulation Quantity by Category
    define view MaintainWorkplaceAgggregationByCategoryView as
        select from RegulationComplianceTransaction {
            rfs2ObligationType,
            rfs2ObligationTypeDesc,
            regulationQuantity,
            sum(regulationQuantity) as TotalRegQuantityByCategory : Integer
        }
        group by
            regulationQuantity,
            rfs2ObligationTypeDesc,
            rfs2ObligationType;
    define view MaintainWorkplaceAgggregationByObjectTypeView as
        select from RegulationComplianceTransaction {
            regulationQuantity,
            objectType,
            objectTypeDesc,
            sum(regulationQuantity) as TotalRegQuantityByObjectType : Integer
        }
        group by
            regulationQuantity,
            objectType,
            objectTypeDesc;

    define view MaintainWorkplaceAgggregationByDcodeView as
        select from RegulationComplianceTransaction {
            regulationQuantity,
            dcode,
            dcodeDesc,
            sum(regulationQuantity) as TotalRegQuantityByDcode : Integer
        }
        group by
            regulationQuantity,
            dcode,
            dcodeDesc;

     define view MaintainWorkplaceAgggregationByStatusView as
        select from RegulationComplianceTransaction {
            regulationQuantity,
            processingStatus,
            sum(regulationQuantity) as TotalRegQuantityByStatus : Integer
        }
        group by
            regulationQuantity,
            processingStatus;

    // Action Status

    entity Actions as projection on transaction.Actions;        
}
