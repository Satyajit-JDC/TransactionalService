import { RegulationComplianceBaseClass } from '../library/zcom_tsRegulationComplianceBase';
import { RFS2CreditCompliance } from '../library/zcom_tsRFS2CreditCompliance';
import { RFS2DeditCompliance } from '../library/zcom_tsRFS2DebitCompliance';

export class RFS2ComplianceClass {
    // private elements
    private _oRFS2CreditComplianceClassInstance!: RFS2CreditCompliance;
    private _oRFS2DebitComplianceClassInstance!: RFS2DeditCompliance;

    // public elements
    public oRegulationComplianceBaseClassInstance: RegulationComplianceBaseClass;

    //-------- Start of RFS2 constructor ------------------
    constructor(oRegulationComplianceBaseClassInstance:RegulationComplianceBaseClass){
        this.oRegulationComplianceBaseClassInstance = oRegulationComplianceBaseClassInstance;
        // promise to set material group and object category
        new Promise( async (resolve) => {
            await this.oRegulationComplianceBaseClassInstance.setRegulationMaterialGroup();
            
            //RFS2 Credit(RIN) Scenario
            if(this.oRegulationComplianceBaseClassInstance.oRFS2CreditData){
                this._oRFS2CreditComplianceClassInstance = new RFS2CreditCompliance(this.oRegulationComplianceBaseClassInstance);
            }

            // RFS2 Debit (RVO Obligation) Scenario
            if(this.oRegulationComplianceBaseClassInstance.oRFS2DebitData){
                this._oRFS2DebitComplianceClassInstance = new RFS2DeditCompliance(this.oRegulationComplianceBaseClassInstance);
            }
            resolve(undefined);
        });
    }
    //-------- End of RFS2 constructor ------------------

}
