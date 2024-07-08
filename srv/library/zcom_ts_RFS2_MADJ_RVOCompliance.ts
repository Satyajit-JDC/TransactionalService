import { RegulationComplianceBaseClass } from './zcom_tsRegulationComplianceBase'
import { RegulationComplianceTransaction } from '@cds-models/com/sap/chs/com/regulationcompliancetransaction';
import { createdStatus } from './utilities/zcom_tsConstants';
import { CdsDate } from '@cds-models/_/index';
import { Quarter, Month } from '@cds-models';
import { RFS2ConstantValues, adjustmentBaseMDJ, messageTypes, language } from './utilities/zcom_tsConstants';
import { MaintainRfs2Material } from 'srv/external/regulationcompliancemasterservice_api';

export class RFS2_MADJ_RVOCompliance {
    // private elements
    public _oRegulationComplianceBaseClassInstance: RegulationComplianceBaseClass;

    // public elements

    //-------- Start of RFS2 Credit constructor ------------------
    constructor(oRegulationComplianceBaseClassInstance: RegulationComplianceBaseClass) {
        this._oRegulationComplianceBaseClassInstance = oRegulationComplianceBaseClassInstance;
        new Promise(async (resolve) => {
            // validate data
            if (await this._validateData()) {
                await this._postRFS2MDJDebit();
            }
            resolve(true);
            this._oRegulationComplianceBaseClassInstance.resolveMDAJ(true);
        });
    }
    //-------- End of RFS2 Debit constructor ------------------

    //-------- Start of private methods ------------------
    private async _validateData(): Promise<boolean> {

        // set regulation type
        await this._oRegulationComplianceBaseClassInstance.setRegulationTypes();
        if (this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType) {
            // data available
        } else {
            return false;
        }

        // set reg object catefory
        await this._oRegulationComplianceBaseClassInstance.setRegulationObjectType();
        if (this._oRegulationComplianceBaseClassInstance.oMaintainRegulationObjectType) {
            // data available
        } else {
            return false;
        }

        // // Get object category
        // await this._oRegulationComplianceBaseClassInstance.setObjectCategory();
        // if (this._oRegulationComplianceBaseClassInstance.aObjectCategory) {
        //     // data available
        // } else {
        //     return false;
        // }


        // set mat config data
        await this._oRegulationComplianceBaseClassInstance.setMaterialConfiguration();
        if (this._oRegulationComplianceBaseClassInstance.aMaintainRfs2Material) {
            // data available
        } else {
            return false;
        }


        // set Regulation Transaction Types data
        await this._oRegulationComplianceBaseClassInstance.setRegulationTransactionTypeTs();
        if (this._oRegulationComplianceBaseClassInstance.aMaintainRegulationTransactionType) {
            // data available
        } else {
            return false;
        }


        // set RFS2 Debit Type data
        await this._oRegulationComplianceBaseClassInstance.setRFS2DebitType();
        if (this._oRegulationComplianceBaseClassInstance.aRfs2DebitType) {
            // data available
        } else {
            return false;
        }

        await this._oRegulationComplianceBaseClassInstance.getProcessingStatus();
        if (this._oRegulationComplianceBaseClassInstance.aProcesssingStatus) {

        } else {
            return false;
        }
        return true;
    }

    private async _postRFS2MDJDebit() {
        const aFinalData: RegulationComplianceTransaction[] = [];
        const dDocDate: Date = this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.documentDate;
        // find month description
        let sMonthDes;
        switch (new Date(this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.documentDate).getMonth().toString().padStart(2, "0")) {
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
        const aMaterialConfig = this._oRegulationComplianceBaseClassInstance.aMaintainRfs2Material;
        if (this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.adjustmentBase === adjustmentBaseMDJ.volume) {
            for (let index = 0; index < aMaterialConfig.length; index++) {
                const oMaterialConfig = aMaterialConfig[index],
                    oMatVolumeBased = this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData;
                if (oMaterialConfig.obligationPercent) {
                    aFinalData.push({
                        regulationType: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.regulationType,
                        // regulationTypeDesc: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.description,
                        regulationCategory: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.regulationType,
                        objectCategory: this._oRegulationComplianceBaseClassInstance.oRFS2DebitData.category,
                        objectType: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationObjectType.objectTypeCode,
                        sourceScenario: RFS2ConstantValues.eventTypeMDJ,
                        subObjectScenario: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationSubScenarioToScenarioType.regulationSubScenarioCategory,
                        subObjectScenarioDesc: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationSubScenarioToScenarioType.description,
                        transactionType: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationTransactionType.transactionTypeTransactionType,
                        // transactionTypeDesc: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationTransactionType,
                        transactionCategory: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.transactionCategory,//'PUR',//Maintain Regulation Transaction Types
                        impact: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.impact,
                        documentDate: dDocDate as unknown as CdsDate,//'2024-06-01',
                        renewablesDocumentMonth: new Date(dDocDate).getMonth().toString().padStart(2, "0") as Month,
                        renewablesDocumentMonthDes: sMonthDes,
                        renewablesDocumentQuarter: (Math.floor((new Date(dDocDate).getMonth() + 3) / 3)).toString() as Quarter,
                        renewablesDocumentComplianceYear: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.renewablesDocumentComplianceYear,
                        businessPartnerNumber: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.businessPartnerNumber,
                        reasonCode: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.reasonCode,
                        reasonCodeDesc: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.reasonCodeDesc,
                        sourceOrgPlant: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.sourceOrgPlant,
                        regulationQuantity: Math.round(parseFloat(oMatVolumeBased.fuelQuantity) * Number(oMaterialConfig.obligationPercent)),
                        regulationQuantityWholeNumber: Math.floor(parseFloat(oMatVolumeBased.fuelQuantity) * Number(oMaterialConfig.obligationPercent)),
                        // regulationUnitOfMeasurement: regulationUoMCategory,  
                        renewablesEpaCompanyId: oMatVolumeBased.renewablesEpaCompanyId,
                        renewablesEpaFacilityId: oMatVolumeBased.renewablesEpaFacilityId,
                        fuelUnitofMeasurement: oMatVolumeBased.fuelUnitofMeasurement, //'BBL',
                        // fuelAlternateUnitofMeasurement: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.fuelAlternateUom,
                        // ,                   sourceOrgCompanyMaterialNumber: oMaterialConfig.material,//'CELLULOSIC_2024'
                        regulationLogisticsMaterialNumber: oMatVolumeBased.fuelLogisticsMaterialNumber,//'CELLULOSIC_2024',need to confirm
                        billofLading: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.billofLading,
                        fuelCategory: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.fuelCategory,
                        fuelQuantity: parseFloat(oMatVolumeBased.fuelQuantity),
                        adjustmentBase: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.adjustmentBase,
                        fuelLogisticsMaterialNumber: oMatVolumeBased.fuelLogisticsMaterialNumber,
                        renewablesPostingMonth: new Date(dDocDate).getMonth().toString().padStart(2, "0") as Month,
                        renewablesReversalPostingMonth: new Date(dDocDate).getMonth().toString().padStart(2, "0") as Month,
                        renewablesProductionMonth: new Date(dDocDate).getMonth().toString().padStart(2, "0") as Month,
                        renewablesTransferMonth: new Date(dDocDate).getMonth().toString().padStart(2, "0") as Month,
                        renewablesSubmissionMonth: new Date(dDocDate).getMonth().toString().padStart(2, "0") as Month,
                        rfs2ObligationType: oMaterialConfig.rvoTypeCategory,
                        rfs2ObligationTypeDesc: oMaterialConfig.description,
                        processingStatus: this._oRegulationComplianceBaseClassInstance.oProcessingStatus[createdStatus.key].category,
                        objectStatusDesc: this._oRegulationComplianceBaseClassInstance.oProcessingStatus[createdStatus.key].description
                        // rfs2ObligationTypeDesc: aRFS2DebitType.map[oMaterialConfig.rvoTypeCategory].description, error
                        // regulationUnitOfMeasurement: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.regulationUoMCategory,
                    })

                }
            }
        }
        else {
            const oMatQtyBased = this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData;
            let oMaterialConfig: MaintainRfs2Material[] = [];
            oMaterialConfig = aMaterialConfig.filter(mc => mc.material === this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.regulationLogisticsMaterialNumber &&
                mc.regulationTypeRegulationType === this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.regulationType &&
                mc.year === this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.renewablesDocumentComplianceYear &&
                mc.objectTypeCode === this._oRegulationComplianceBaseClassInstance.oMaintainRegulationObjectType.objectTypeCode
            )

            aFinalData.push({
                regulationType: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.regulationType,
                // regulationTypeDesc: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationType.description,
                regulationCategory: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.regulationType,
                objectCategory: this._oRegulationComplianceBaseClassInstance.oRFS2DebitData.category,
                objectType: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationObjectType.objectTypeCode,
                sourceScenario: RFS2ConstantValues.eventTypeMDJ,
                subObjectScenario: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationSubScenarioToScenarioType.regulationSubScenarioCategory,
                subObjectScenarioDesc: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationSubScenarioToScenarioType.description,
                transactionType: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationTransactionType.transactionTypeTransactionType,
                transactionTypeDesc: this._oRegulationComplianceBaseClassInstance.oMaintainRegulationTransactionType.transactionType?.description,
                transactionCategory: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.transactionCategory,//'PUR',//Maintain Regulation Transaction Types
                impact: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.impact,
                documentDate: dDocDate as unknown as CdsDate,//'2024-06-01',
                renewablesDocumentMonth: new Date(dDocDate).getMonth().toString().padStart(2, "0") as Month,
                renewablesDocumentMonthDes: sMonthDes,

                renewablesDocumentQuarter: (Math.floor((new Date(dDocDate).getMonth() + 3) / 3)).toString() as Quarter,
                renewablesDocumentComplianceYear: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.renewablesDocumentComplianceYear,
                businessPartnerNumber: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.businessPartnerNumber,
                reasonCode: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.reasonCode,
                reasonCodeDesc: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.reasonCodeDesc,
                sourceOrgPlant: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.sourceOrgPlant,
                regulationQuantity: Math.floor(parseFloat(oMatQtyBased.regulationQuantity)),
                regulationQuantityWholeNumber: Math.floor(parseFloat(oMatQtyBased.regulationQuantity)),
                regulationUnitOfMeasurement: oMatQtyBased.regulationUnitOfMeasurement,
                // ,                   sourceOrgCompanyMaterialNumber: oMaterialConfig.material,//'CELLULOSIC_2024'
                regulationLogisticsMaterialNumber: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.regulationLogisticsMaterialNumber,//'CELLULOSIC_2024',
                billofLading: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.billofLading,
                fuelCategory: this._oRegulationComplianceBaseClassInstance.oEventPayloadMDJData.fuelCategory,
                adjustmentBase: adjustmentBaseMDJ.quantity,
                renewablesPostingMonth: new Date(dDocDate).getMonth().toString().padStart(2, "0") as Month,
                renewablesReversalPostingMonth: new Date(dDocDate).getMonth().toString().padStart(2, "0") as Month,
                renewablesProductionMonth: new Date(dDocDate).getMonth().toString().padStart(2, "0") as Month,
                renewablesTransferMonth: new Date(dDocDate).getMonth().toString().padStart(2, "0") as Month,
                renewablesSubmissionMonth: new Date(dDocDate).getMonth().toString().padStart(2, "0") as Month,
                rfs2ObligationType: oMaterialConfig[0].rvoTypeCategory,
                rfs2ObligationTypeDesc: oMaterialConfig[0].description,
                processingStatus: this._oRegulationComplianceBaseClassInstance.oProcessingStatus[createdStatus.key].category,
                objectStatusDesc: this._oRegulationComplianceBaseClassInstance.oProcessingStatus[createdStatus.key].description
            });

        }
        console.log(aFinalData);
        if (aFinalData.length > 0) {
            await this._oRegulationComplianceBaseClassInstance.addRegulationCompliances(aFinalData);
        }
    }
    //-------- End of private methods --------------------
}