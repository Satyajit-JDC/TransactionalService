
import { UUID_Type, actionName } from '@cds-models/index';

import cds from '@sap/cds';



export class RegulationActionBase {



    private objectkey: UUID_Type;
    private actionName: actionName;
  


    constructor(objectKey: UUID_Type, actionName: actionName) {
        this.objectkey = objectKey; // Initialize objectkey property
        this.actionName = actionName; // Initialize actionName property
      
    }

    public getObjectKey(): UUID_Type {
        return this.objectkey;
    }
    public getActionName(): actionName {
        return this.actionName;
    }



    public async idValidAction(actionName: actionName): Promise<boolean> {
        const { Actions, RegulationComplianceTransaction } = cds.entities;
        try {
            const regulations = await SELECT.from(RegulationComplianceTransaction).where({ ID: this.objectkey });
            if (regulations.length > 0) {
                const actions = await SELECT.from(Actions).where({ actionName: actionName, regSubScn: regulations[0].subObjectScenario });
                if (actions.length > 0) {
                    return true;
                } else { return false; }
            } else {
                return false;
            }


        }

        catch (error: any) {
            return false;
        }
    }




    public async doPIP(): Promise<boolean> {

        return false;
    }
    public async PIT(): Promise<boolean> {

        return false;
    }
   


}
