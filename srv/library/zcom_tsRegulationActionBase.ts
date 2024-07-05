import { Actions } from '#cds-models/com/sap/chs/com/regulationcompliancetransaction';
import { UUID_Type, actionName,regSubScn } from '@cds-models/index';

import cds from '@sap/cds';



export class RegulationActionBase {


    
    private objectkey: UUID_Type; 
    private actionName: actionName;
    private regSubScn: regSubScn;
;

    constructor(objectKey: UUID_Type, actionName:actionName,regSubScn:regSubScn) {
        this.objectkey = objectKey; // Initialize objectkey property
        this.actionName = actionName; // Initialize actionName property
        this.regSubScn = regSubScn; // Initialize regSubScn property
    }

    public getObjectKey(): UUID_Type {
        return this.objectkey;
    }
    public getActionName(): actionName {
        return this.actionName;
    }

    public getRegSubScn(): regSubScn {
        return this.regSubScn;
    }

    public async idValidAction(actionName: actionName, regSubScn:regSubScn): Promise<boolean> {  
        const { Actions } = cds.entities;

        await SELECT.from(Actions).where({ actionName: actionName, regSubScn: regSubScn });

        
        return false;
    }

    public doPIP(): boolean {
        return false;
    }

}
