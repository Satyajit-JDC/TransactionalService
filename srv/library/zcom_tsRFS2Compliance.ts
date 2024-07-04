import { RegulationComplianceBaseClass } from '../library/zcom_tsRegulationComplianceBase';
import { RFS2_RF_RINCompliance } from './zcom_tsRFS2_RF_RINCompliance';
import { RFS2_RVOCompliance } from './zcom_tsRFS2_RVOCompliance';
import { RFS2_MADJ_RINCompliance } from './zcom_ts_RFS2_MADJ_RINCompliance';
import { RFS2_MADJ_RVOCompliance } from './zcom_ts_RFS2_MADJ_RVOCompliance';
import { regulationSubScenario } from '../library/utilities/zcom_tsConstants';

export class RFS2ComplianceClass {
    // private elements
    private _oRFS2_RF_RINComplianceClassInstance!: RFS2_RF_RINCompliance;
    private _oRFS2_RVOComplianceClassInstance!: RFS2_RVOCompliance;
    private _oRFS2_MADJ_RINComplianceClassInstance!: RFS2_MADJ_RINCompliance;
    private _oRFS2_MADJ_RVOComplianceClassInstance!: RFS2_MADJ_RVOCompliance;

    // public elements
    public oRegulationComplianceBaseClassInstance: RegulationComplianceBaseClass;

    //-------- Start of RFS2 constructor ------------------
    constructor(oRegulationComplianceBaseClassInstance:RegulationComplianceBaseClass){
        this.oRegulationComplianceBaseClassInstance = oRegulationComplianceBaseClassInstance;

        // check for subscenarion and create relavant object
        this._checkSubScenarioAndCreateObject();
    }
    //-------- End of RFS2 constructor ------------------

    //-------- Start of Private Methods ------------------
    // check for subscenarion and create relavant object
    async _checkSubScenarioAndCreateObject(){
        // check is object category not available
        if(!this.oRegulationComplianceBaseClassInstance.oRFS2CreditData && !this.oRegulationComplianceBaseClassInstance.oRFS2DebitData){
            // set material group data
            await this.oRegulationComplianceBaseClassInstance.setRegulationMaterialGroup();
        }

        // check is object category available now
        if(this.oRegulationComplianceBaseClassInstance.oRFS2CreditData || this.oRegulationComplianceBaseClassInstance.oRFS2DebitData){
            // set sub scenario data
            await this.oRegulationComplianceBaseClassInstance.setRgulationSubScnario();

            // check is subscenarion available
            if(this.oRegulationComplianceBaseClassInstance.oMaintainRegulationSubScenarioToScenarioType){
                const sRgulationSubScnario = this.oRegulationComplianceBaseClassInstance.oMaintainRegulationSubScenarioToScenarioType.regulationSubScenarioCategory;
                // RFS2_RVO scenario
                if(regulationSubScenario.RFS2_RVO === sRgulationSubScnario){
                    this._oRFS2_RVOComplianceClassInstance = new RFS2_RVOCompliance(this.oRegulationComplianceBaseClassInstance);
                }
                // RFS2_RIN_RF scenario
                if(regulationSubScenario.RFS2_RIN_RF === sRgulationSubScnario){
                    this._oRFS2_RF_RINComplianceClassInstance = new RFS2_RF_RINCompliance(this.oRegulationComplianceBaseClassInstance);
                }
                // RFS2_MADJ_RVO scenario
                if(regulationSubScenario.RFS2_MADJ_RVO === sRgulationSubScnario){
                    this._oRFS2_MADJ_RVOComplianceClassInstance = new RFS2_MADJ_RVOCompliance(this.oRegulationComplianceBaseClassInstance);
                }
                // RFS2_MADJ_RIN scenario
                if(regulationSubScenario.RFS2_MADJ_RIN === sRgulationSubScnario){
                    this._oRFS2_MADJ_RINComplianceClassInstance = new RFS2_MADJ_RINCompliance(this.oRegulationComplianceBaseClassInstance);
                }
            }
        }
    }
    //-------- End of Private Methods --------------------

}
