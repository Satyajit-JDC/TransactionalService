using {com.sap.chs.com.regulationcompliancetransaction as transaction} from '../db/zcom_schRegulationComplianceTransaction';
using {RegulationComplianceMasterService as master} from './external/RegulationComplianceMasterService';
// using {Za_}
using {MaterialCharacteristics as s4h} from './external/MaterialCharacteristics';

service RegulationComplianceTransactionService {
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
    entity GetPlant                                     as projection on master.MaintainCompanyIdToPlantMapping;
    entity GetProcessingStatus                          as projection on master.ProcessingStatus;
    entity GetRegulationSubscenario                     as projection on master.MaintainRegulationSubScenarioToScenario;

    //S4 API
    entity GetFuelMaterialS4                            as
        projection on s4h.ZA_MaterialCharacteristics_R {
            ObjectKey,
            MaterialDescription,
            FuelCategory,
            RegulationGroup,
            RegulationMaterialGroup
        };
    entity MaintainWorkplaceAggregationByPlantView as projection on transaction.MaintainWorkplaceAggregationByPlantView;
    entity MaintainWorkplaceAggregationByMonthView as projection on transaction.MaintainWorkplaceAggregationByMonthView;
    entity MaintainWorkplaceAggregationByCategoryView as projection on transaction.MaintainWorkplaceAggregationByCategoryView;
    entity MaintainWorkplaceAggregationByObjectTypeView as projection on transaction.MaintainWorkplaceAggregationByObjectTypeView;
    entity MaintainWorkplaceAggregationByDcodeView as projection on transaction.MaintainWorkplaceAggregationByDcodeView;
    entity MaintainWorkplaceAggregationByStatusView as projection on transaction.MaintainWorkplaceAggregationByStatusView;
}

