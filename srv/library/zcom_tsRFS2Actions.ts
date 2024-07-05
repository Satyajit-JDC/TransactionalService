import { RegulationActionBase } from './zcom_tsRegulationActionBase';
import { UUID_Type, actionName, regSubScn } from '@cds-models/index';

export class RFS2Actions extends RegulationActionBase {
    // Add your class members and methods here
    constructor(objectKey: UUID_Type, actionName: actionName, regSubScn: regSubScn) {

        super(objectKey, actionName, regSubScn);
        this.initialize();
    }
    private initialize() {
// Intialize RFS2 specific variables 
    }

}