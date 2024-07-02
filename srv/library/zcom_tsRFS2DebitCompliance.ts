import { promises } from 'dns';
import { RegulationComplianceBaseClass } from './zcom_tsRegulationComplianceBase'
export class RFS2DeditCompliance {
    // private elements
    public _regulationComplianceBaseClassInstance: RegulationComplianceBaseClass;

    // public elements

    //-------- Start of RFS2 Debit constructor ------------------
    constructor(oRegulationComplianceBaseClassInstance:RegulationComplianceBaseClass){
        this._regulationComplianceBaseClassInstance = oRegulationComplianceBaseClassInstance;
        
        new Promise( async (resolve) => {
            // validate data
            await this._validateData();
        });
    }
    //-------- End of RFS2 Debit constructor ------------------

    //-------- Start of private methods ------------------
    private async _validateData() {
        // set sub scenario data
        await this._regulationComplianceBaseClassInstance.setRgulationSubScnario();
        if(this._regulationComplianceBaseClassInstance.oMaintainRegulationSubScenarioToScenarioType){
            // data available
        } else {
            return false;
        }

        // set reg object type data
        await this._regulationComplianceBaseClassInstance.setRegulationObjectType();
        if(this._regulationComplianceBaseClassInstance.oMaintainRegulationObjecttype){
            // data available
        } else {
            return false;
        }

        // set movement type data
        await this._regulationComplianceBaseClassInstance.setRegulationObjectType();
        if(this._regulationComplianceBaseClassInstance.oMaintainMovementType){
            if(this._regulationComplianceBaseClassInstance.oMaintainMovementType.movementType !== this._regulationComplianceBaseClassInstance.oEventPayloadData._RenewableMaterialDocument.MovementType){
                return false;
            }
            // data available
        } else {
            return false;
        }

        // set mvt type relevance data
        await this._regulationComplianceBaseClassInstance.setMvtTypeTransationRelevance();
        if(this._regulationComplianceBaseClassInstance.oMaintainMovementTypeToTransactionCategoryImpact){
            // data available
        } else {
            return false;
        }

        // set mat config data
        await this._regulationComplianceBaseClassInstance.setMaterialConfiguration();
        if(this._regulationComplianceBaseClassInstance.aMaintainRenewableMaterialConfiguration){
            // data available
        } else {
            return false;
        }

        // set regulation type
        await this._regulationComplianceBaseClassInstance.setRegulationTypes();
        if(this._regulationComplianceBaseClassInstance.oMaintainRegulationType){
            // data available
        } else {
            return false;
        }

        // set Regulation Transaction Types data
        await this._regulationComplianceBaseClassInstance.setRegulationTransactionTypeTs();
        if(this._regulationComplianceBaseClassInstance.oMaintainRegulationTransactionTypeTs){
            // data available
        } else {
            return false;
        }

        // set Transaction Type Data
        await this._regulationComplianceBaseClassInstance.setTransactiontype();
        if(this._regulationComplianceBaseClassInstance.aMaintainTransactionType){
            // data available
        } else {
            return false;
        }

        // set RFS2 Debit Type data
        await this._regulationComplianceBaseClassInstance.setRFS2DebitType();
        if(this._regulationComplianceBaseClassInstance.aRfs2DebitType){
            // data available
        } else {
            return false;
        }

        // set Fuel Category data
        await this._regulationComplianceBaseClassInstance.setFuelCategory();
        if(this._regulationComplianceBaseClassInstance.aFuelCategory){
            // data available
        } else {
            return false;
        }

        // set Fuel Sub Category data
        await this._regulationComplianceBaseClassInstance.setFuelSubCategory();
        if(this._regulationComplianceBaseClassInstance.aFuelSubCategory){
            // data available
        } else {
            return false;
        }
        
    }
    //-------- End of private methods --------------------
}