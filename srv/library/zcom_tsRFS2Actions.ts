import { RegulationActionBase } from './zcom_tsRegulationActionBase';
import { UUID_Type, actionName } from '@cds-models/index';

export class RFS2Actions extends RegulationActionBase {
    // Add your class members and methods here
    constructor(objectKey: UUID_Type, actionName: actionName) {

        super(objectKey, actionName);
        this.initialize();
    }
    private initialize() {
// Intialize RFS2 specific variables 
    }

    public async executeAction(actionName: actionName): Promise<boolean> {
       
        await this.doPIP();
      switch (actionName) {
        case "PIT":
            await this.PIT();
            break;
      
        default:
            break;
      }
        return false;
    }

}