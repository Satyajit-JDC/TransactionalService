import cds from '@sap/cds';
import { RegulationComplianceTransaction } from '@cds-models/com/sap/chs/com/regulationcompliancetransaction';
import { RegulationComplianceBaseClass } from '../library/zcom_tsRegulationComplianceBase';
import { RFS2CreditCompliance } from '../library/zcom_tsRFS2CreditCompliance';
import { RFS2DeditCompliance } from '../library/zcom_tsRFS2DebitCompliance';
import { ILogUtility } from './utilities/zcom_tsRegulationComplicanceInterface';

export class RFS2ComplianceClass {
    // private elements
    private _oRFS2CreditCompliance!: RFS2CreditCompliance;
    private _oRFS2DebitCompliance!: RFS2DeditCompliance;

    // public elements
    public regulationComplianceBaseClassInstance: RegulationComplianceBaseClass;

    //-------- Start of RFS2 constructor ------------------
    constructor(oRegulationComplianceBaseClassInstance:RegulationComplianceBaseClass){
        this.regulationComplianceBaseClassInstance = oRegulationComplianceBaseClassInstance;
        // promise to set material group and object category
        new Promise( async (resolve) => {
            await this.regulationComplianceBaseClassInstance.setRegulationMaterialGroup();
            
            //RFS2 Credit(RIN) Scenario
            if(this.regulationComplianceBaseClassInstance.oRFS2CreditData){
                this._oRFS2CreditCompliance = new RFS2CreditCompliance(this.regulationComplianceBaseClassInstance);
            }

            // RFS2 Debit (RVO Obligation) Scenario
            if(this.regulationComplianceBaseClassInstance.oRFS2DebitData){
                this._oRFS2DebitCompliance = new RFS2DeditCompliance(this.regulationComplianceBaseClassInstance);
            }
            resolve(undefined);
        });
    }
    //-------- End of RFS2 constructor ------------------

    async addRegulationCompliances(data:RegulationComplianceTransaction[],logObjectID:string){
        const { RegulationComplianceTransaction } = cds.entities('com.sap.chs.com.regulationcompliancetransaction');
        const srv = await cds.connect.to ('RegulationComplianceTransactionService');
        let postMessage: string = "", successErrorFlag : string = "S", technicalMessage: string = "";
        var TextBundle = require('@sap/textbundle').TextBundle;
        var bundle = new TextBundle('test/properties/i18n', 'en_EN');
        try {
            await srv.post('RegulationComplianceTransaction', data);
            // postMessage = bundle.getText("RINSCreatedSuccessfully");
            
        } catch (error) {
            console.log(error);
            // postMessage = bundle.getText("ErrorDuringInsertingData");
            successErrorFlag = "E";
            technicalMessage = error as string;
        }
        data.forEach(element => {
            if(element.objectId){
                const oLogData: ILogUtility = {
                    object: logObjectID,
                    message: postMessage,
                    messageType: successErrorFlag,
                    regulationType: element.regulationType as ILogUtility["regulationType"],
                    regulationSubObjectType: element.objectType as ILogUtility["regulationSubObjectType"], //'RVO',
                    applicationModule: element.regulationType as ILogUtility["applicationModule"], //'RFS2',
                    applicationSubModule: element.subObjectScenario as ILogUtility["applicationSubModule"], //'RFS2_RVO'
                    technicalMessage: technicalMessage
                };
                // oRegulationComplianceBaseInstance.addLog(oLogData);
            }
        });
    }
   
}

// const oRFS2ComplianceInstance = new oRFS2ComplianceClass();
// export { oRFS2ComplianceInstance };