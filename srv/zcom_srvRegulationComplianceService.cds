using {com.sap.chs.com.regulationcompliancetransaction as transaction} from '../db/zcom_schRegulationComplianceTransaction';
using {RegulationComplianceMasterService as master} from './external/RegulationComplianceMasterService';


service RegulationComplianceTransactionService {    
    action processEvent(eventData : many transaction.EventData);
    entity RegulationComplianceTransaction 
    @(Capabilities: {
        InsertRestrictions: {
            $Type: 'Capabilities.InsertRestrictionsType',
            Insertable
        },

        DeleteRestrictions.Deletable: false,
        UpdateRestrictions.Updatable: false
    })as projection on transaction.RegulationComplianceTransaction order by objectId desc ;

    @odata.draft.enabled
    entity ManualAdjRegulationComplianceTransaction as projection on transaction.RegulationComplianceTransaction order by objectId desc;
    
    entity AdjustmentBaseValuelist as projection on transaction.AdjustmentBaseValuelist;
    // Master data entities
   
    entity MaintainRegulationType as projection on master.MaintainRegulationType;
    // entity MaintainTransactionType as projection on master.MaintainRegulationTransactionTypeTS;
    entity MaintainRegulationTransactionType as projection on master.MaintainRegulationTransactionTypeTS;
    entity MaintainRegulationObjecttype as projection on master.MaintainRegulationObjecttype;
    entity MaintainRenewableMaterialConfiguration as projection on master.MaintainRenewableMaterialConfiguration;
    entity GetFuelCategory as projection on master.FuelCategory;
    entity GetReasonCode as projection on master.MaintainAdjustmentReasonCode;
    entity GetObjectCategory as projection on master.ObjectCategory;
    entity GetUOM   as projection on master.UOM;
    entity GetImpact as projection on master.Impact;
}
