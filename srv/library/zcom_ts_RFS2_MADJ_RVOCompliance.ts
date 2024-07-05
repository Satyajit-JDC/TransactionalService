import { RegulationComplianceBaseClass } from './zcom_tsRegulationComplianceBase'
import { EventPayloadMDJ } from './utilities/zcom_tsRegulationComplicanceInterface';
import { RegulationComplianceTransaction } from '@cds-models/com/sap/chs/com/regulationcompliancetransaction';
import { createdStatus } from './utilities/zcom_tsConstants';
import { CdsDate } from '@cds-models/_/index';
import { Quarter, Month } from '@cds-models';
export class RFS2_MADJ_RVOCompliance {
    // private elements
    public _oRegulationComplianceBaseClassInstance: RegulationComplianceBaseClass;

    // public elements

    //-------- Start of RFS2 Credit constructor ------------------
    constructor(oRegulationComplianceBaseClassInstance:RegulationComplianceBaseClass){
        this._oRegulationComplianceBaseClassInstance = oRegulationComplianceBaseClassInstance;
        new Promise(async (resolve) => {
            // validate data
            if (await this._validateData()) {
                await this._postRFS2Debit();
            }
        });
    }
    //-------- End of RFS2 Debit constructor ------------------

    //-------- Start of private methods ------------------
    private async _validateData(): Promise<boolean> {
        // set reg object catefory
        await this._oRegulationComplianceBaseClassInstance.setObjectCategory();
        if (this._oRegulationComplianceBaseClassInstance.aObjectCategory) {
            // data available
        } else {
            return false;
        }

      
        
        // set mat config data
        await this._oRegulationComplianceBaseClassInstance.setMaterialConfiguration();
        // if (this._oRegulationComplianceBaseClassInstance.aMaintainRenewableMaterialConfiguration) {
        //     // data available
        // } else {
        //     return false;
        // }

        // set regulation type
        await this._oRegulationComplianceBaseClassInstance.setRegulationTypes();
        if (this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType) {
            // data available
        } else {
            return false;
        }

        // set Regulation Transaction Types data
        await this._oRegulationComplianceBaseClassInstance.setRegulationTransactionTypeTs();
        // if (this._oRegulationComplianceBaseClassInstance.oMaintainRegulationTransactionTypeTs) {
        //     // data available
        // } else {
        //     return false;
        // }

        // // set Regulation Sub scenario
        // await this._oRegulationComplianceBaseClassInstance.setTransactiontype();
        // // if (this._oRegulationComplianceBaseClassInstance.aMaintainTransactionType) {
        // //     // data available
        // // } else {
        // //     return false;
        // // }

        // set RFS2 Debit Type data
        await this._oRegulationComplianceBaseClassInstance.setRFS2DebitType();
        if (this._oRegulationComplianceBaseClassInstance.aRfs2DebitType) {
            // data available
        } else {
            return false;
        }

        // set Fuel Category data
        // await this._oRegulationComplianceBaseClassInstance.setFuelCategory();
        // if (this._oRegulationComplianceBaseClassInstance.aFuelCategory) {
        //     // data available
        // } else {
        //     return false;
        // }

        // set Fuel Sub Category data
        // await this._oRegulationComplianceBaseClassInstance.setFuelSubCategory();
        // if (this._oRegulationComplianceBaseClassInstance.aFuelSubCategory) {
        //     // data available
        // } else {
        //     return false;
        // }
        return true;
    }

    private async _postRFS2Debit() {
        const aFinalData: RegulationComplianceTransaction[] = [];
        // find month description
        let sMonthDes;
        switch (new Date(this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableMaterialDocument.DocumentDate).getMonth().toString().padStart(2, "0")) {
            case "00":
                sMonthDes = "JAN";
                break;

            case "01":
                sMonthDes = "FEB";
                break;

            case "02":
                sMonthDes = "MAR";
                break;

            case "03":
                sMonthDes = "APR";
                break;

            case "04":
                sMonthDes = "MAY";
                break;

            case "05":
                sMonthDes = "JUN";
                break;

            case "06":
                sMonthDes = "JUL";
                break;

            case "07":
                sMonthDes = "AUG";
                break;

            case "08":
                sMonthDes = "SEP";
                break;

            case "09":
                sMonthDes = "OCT";
                break;

            case "10":
                sMonthDes = "NOV";
                break;

            case "11":
                sMonthDes = "DEC";
                break;
        }

        // get Material Config data
        const aMaterialConfig = this._oRegulationComplianceBaseClassInstance.aMaintainRenewableMaterialConfiguration;
        for (let index = 0; index < aMaterialConfig.length; index++) {
            const oMaterialConfig = aMaterialConfig[index],
                oMatDocData = this._oRegulationComplianceBaseClassInstance.oEventPayloadData._RenewableMaterialDocument;
            if (oMaterialConfig.obligationPercent) {
                // aFinalData.push({
                //     objectId: oObjectID,
                //     regulationType: regulationType,
                //     regulationCategory: regulationType,// check if these two are same
                //     objectCategory: objectType,
                //     objectType: oRegObjectCateory.objectCategoryCategory,
                //     sourceScenario: 'MDJ',
                //     subObjectScenario: oRegualtionSubscenario.regulationSubScenarioCategory,//get from material subscenariosubScenario[0].regulationSubScenario,//
                //     transactionType: oTransactionTypeTs.transactionType,
                //     transactionTypeDesc: oTransactionTypeTs.description,
                //     transactionCategory: transactionCategory,//'PUR',//Maintain Regulation Transaction Types
                //     impact: impact,
                //     documentDate: documentDate,//'2024-06-01',
                //     renewablesDocumentMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
                //     renewablesDocumentQuarter: (Math.floor((new Date(documentDate).getMonth() + 3) / 3)).toString() as Quarter,
                //     renewablesDocumentComplianceYear: renewablesDocumentComplianceYear,
                //     businessPartnerNumber: businessPartnerNumber,
                //     reasonCode: reasonCode,
                //     reasonCodeDesc: reasonCodeDesc,
                //     sourceOrgCompanyPlant: sourceOrgCompanyPlant,
                //     regulationQuantity: Math.round(fuelQuantity * Number(oMaterialConfig.obligationPercent)),
                //     regulationQuantityWholeNumber: Math.floor(fuelQuantity * Number(oMaterialConfig.obligationPercent)),
                //     // regulationUnitOfMeasurement: regulationUoMCategory,  
                //     renewablesEpaCompanyId: renewablesEpaCompanyId,
                //     renewablesEpaFacilityId: renewablesEpaFacilityId,
                //     fuelUnitofMeasurement: fuelUnitofMeasurement, //'BBL',
                //     fuelAlternateUnitofMeasurement: fuelUnitofMeasurement,
                //     sourceOrgCompanyMaterialNumber: oMaterialConfig.material,//'CELLULOSIC_2024'
                //     regulationLogisticsCompanyMaterialNumber: oMaterialConfig.material,//'CELLULOSIC_2024',
                //     billofLading: billofLading,
                //     fuelCategory: fuelCategory,
                //     fuelQuantity: fuelQuantity,
                //     adjustmentBase: adjustmentBase,
                //     fuelLogisticsCompanyMaterialNumber: fuelLogisticsCompanyMaterialNumber,
                //     renewablesPostingMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
                //     renewablesReversalPostingMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
                //     renewablesProductionMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
                //     renewablesTransferMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
                //     renewablesSubmissionMonth: new Date(documentDate).getMonth().toString().padStart(1, "0") as Month,
                //     renewablesDocumentMonthDes: sMonthDes,
                //     rfs2ObligationType: oMaterialConfig.rvoTypeCategory, //master have to correct MaintainRenewableMaterialConfiguration
                //     // rfs2ObligationTypeDesc: aRFS2DebitType.map[oMaterialConfig.rvoTypeCategory].description, error
                //     regulationUnitOfMeasurement: "RIN"
                // })

            }
        }
        if (aFinalData.length > 0) {
            await this._oRegulationComplianceBaseClassInstance.addRegulationCompliances(aFinalData);
        }
    }
    //-------- End of private methods --------------------
}