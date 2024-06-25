import cds from '@sap/cds';
import { RegulationComplianceTransaction } from '@cds-models/com/sap/chs/com/regulationcompliancetransaction';
import { oRegulationComplianceBaseInstance } from '../library/zcom_tsRegulationComplianceBase';
import { ILogUtility } from '../library/interfaces/zcom_tsRegulationComplicanceInterface';

class oRFS2ComplianceClass {
    async addRegulationCompliances(data:RegulationComplianceTransaction[]){
        const { RegulationComplianceTransaction } = cds.entities('com.sap.chs.com.regulationcompliancetransaction');
        const srv = await cds.connect.to ('RegulationComplianceTransactionService');
        let postMessage: string = '', successErrorFlag : string = 'S';
        try {
            await srv.post(RegulationComplianceTransaction, data);
            postMessage = "RINS Created Successfully";
            
        } catch (error) {
            console.log(error);
            postMessage = "Error during inserting data";
            successErrorFlag = "E";
        }
        data.forEach(element => {
            if(element.objectId){
                const oLogData: ILogUtility = {
                    object: element.objectId.toString(),
                    message: postMessage,
                    messageType: successErrorFlag,
                    regulationType: element.regulationType as ILogUtility["regulationType"],
                    regulationSubObjectType: element.objectType as ILogUtility["regulationSubObjectType"], //'RVO',
                    applicationModule: element.regulationType as ILogUtility["applicationModule"], //'RFS2',
                    applicationSubModule: element.subObjectScenario as ILogUtility["applicationSubModule"] //'RFS2_RVO'
                };
                oRegulationComplianceBaseInstance.addLog(oLogData);
            }
        });
    }
   
}

const oRFS2ComplianceInstance = new oRFS2ComplianceClass();
export { oRFS2ComplianceInstance };