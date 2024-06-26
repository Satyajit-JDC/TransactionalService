import cds from '@sap/cds';
import { regulationcompliancemasterserviceApi } from '../external/regulationcompliancemasterservice_api/service';
import { MaintainRenewableMaterialConfiguration, MaintainTransactionType, MaintainAdjustmentReasonCode, Uom, 
    Impact, ObjectCategory, 
    MaintainRegulationTransactionTypeTs} from '../external/regulationcompliancemasterservice_api';
import {
    IMaintainRegulationGroupView, IMaintainRegulationType,
    IMaintainRegulationMaterialGroupView, IMaintainMovementTypeToTransactionCategoryImpact,
    IMaintainMovementType, IMaintainRegulationObjecttype, IMaintainRegulationTransactionTypeTs,
    IMaintainRegulationSubscenariotoScenario, IRfs2DebitType, IFuelCategory, IFuelSubCategory
} from './interfaces/zcom_tsRegulationComplicanceInterface';
import { LogUtilityService, logutilityserviceApi } from '../external/logutilityservice_api';
import { ILogUtility } from '../library/interfaces/zcom_tsRegulationComplicanceInterface';
import { resilience } from '@sap-cloud-sdk/resilience';
// import { Impact, ObjectCategory } from '@cds-models';

class RegulationComplianceBaseClass {
    public async getRegulations(sFilters: string): Promise<IMaintainRegulationGroupView> {
        const aRegulationGroupMAP = { map: {}, regulationType: "", regulationType_regulationType: "" } as IMaintainRegulationGroupView;
        if (sFilters) {
            try {
                const { maintainRegulationGroupViewApi } = regulationcompliancemasterserviceApi(),
                    encodedFilterValue = encodeURIComponent(sFilters);
                (await maintainRegulationGroupViewApi.requestBuilder().getAll()
                    .addCustomQueryParameters({
                        $filter: encodedFilterValue
                    }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                    .execute({
                        destinationName: "RegulationComplianceMasterService"
                    })).
                    forEach((oData) => {
                        if (oData.regulationType && oData.regulationGroupRegulationGroup) {
                            aRegulationGroupMAP.map[oData.regulationGroupRegulationGroup] = oData;
                            const sRegulationType_regulationType = "regulationType_regulationType eq '" + oData.regulationType + "'";
                            const sRegulationType = "regulationType eq '" + oData.regulationType + "'";
                            const sRegulationTypeRegulationType = "regulationTypeRegulationType eq '" + oData.regulationType + "'";
                            aRegulationGroupMAP.regulationType_regulationType = aRegulationGroupMAP.regulationType_regulationType ? aRegulationGroupMAP.regulationType_regulationType + " or " + sRegulationType_regulationType : sRegulationType_regulationType;
                            aRegulationGroupMAP.regulationType = aRegulationGroupMAP.regulationType ? aRegulationGroupMAP.regulationType + " or " + sRegulationType : sRegulationType;
                            aRegulationGroupMAP.regulationTypeRegulationType = aRegulationGroupMAP.regulationTypeRegulationType ? aRegulationGroupMAP.regulationTypeRegulationType + " or " + sRegulationTypeRegulationType : sRegulationTypeRegulationType;
                        }
                    });
            } catch (error) {
                console.log(error);
                // let oLogData: ILogUtility = {
                //     object: "",
                //     message: "Failed to read MaintainRegulationGroupView for " + sFilters,
                //     messageType: "E",
                //     regulationType: "RFS2",
                //     regulationSubObjectType: 'RVO',
                //     applicationModule: 'RFS2',
                //     applicationSubModule: 'RFS2_RVO'
                // }
                // oRegulationComplianceBaseInstance.addLog(oLogData);
            }
        }
        return aRegulationGroupMAP;
    }

    async getRegulationTypes(sFilters: string): Promise<IMaintainRegulationType> {
        const { maintainRegulationTypeApi } = regulationcompliancemasterserviceApi(),
             aRegulationTypeMAP = { map: {}, data: [] } as IMaintainRegulationType;
        if (sFilters) {
            const encodedFilterValue = encodeURIComponent(sFilters);
            // const encodedFilterValue = encodeURIComponent("regulationType eq 'RFS2'");
            // const data = 
            (await maintainRegulationTypeApi.requestBuilder().getAll()
                .addCustomQueryParameters({
                    $filter: encodedFilterValue
                }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                })).forEach((oData) => {
                    if (oData.regulationType) {
                        aRegulationTypeMAP.map[oData.regulationType] = oData;
                        aRegulationTypeMAP.data.push(oData);
                    }
                });
        }
        else {
            (await maintainRegulationTypeApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                })).forEach((oData) => {
                    if (oData.regulationType) {
                        aRegulationTypeMAP.map[oData.regulationType] = oData;
                        aRegulationTypeMAP.data.push(oData);
                    }
                });
        }
        return aRegulationTypeMAP;
    }

    async getRegulationMaterialGroup(sFilters: string): Promise<IMaintainRegulationMaterialGroupView> {
        const aRegulartionMaterialGroupMAP = { map: {}, objectCategory: "" } as IMaintainRegulationMaterialGroupView;
        if (sFilters) {
            const { maintainRegulationMaterialGroupViewApi } = regulationcompliancemasterserviceApi();
            const encodedFilterValue = encodeURIComponent(sFilters);
            (await maintainRegulationMaterialGroupViewApi.requestBuilder().getAll()
                .addCustomQueryParameters({
                    $filter: encodedFilterValue
                }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                })).forEach((oData) => {
                    if (oData.category && oData.regulationMaterialGroupRegulationMaterialGroup && oData.regulationType) {
                        aRegulartionMaterialGroupMAP.map[oData.regulationType] = oData;
                        const sObjectCategory = "objectCategory eq '" + oData.category + "'";
                        aRegulartionMaterialGroupMAP.objectCategory = aRegulartionMaterialGroupMAP.objectCategory ? aRegulartionMaterialGroupMAP.objectCategory + " or " + sObjectCategory : sObjectCategory;
                        const sObjectCategory_category = "objectCategory_category eq '" + oData.category + "'";
                        aRegulartionMaterialGroupMAP.objectCategory_category = aRegulartionMaterialGroupMAP.objectCategory_category ? aRegulartionMaterialGroupMAP.objectCategory + " or " + sObjectCategory_category : sObjectCategory_category;
                    }
                });
        }
        return aRegulartionMaterialGroupMAP;
    }

    async getRegulationObjectType(sFilters: string): Promise<IMaintainRegulationObjecttype> {
        const aRegulartionObjectTypeMAP = { map: {}, objectType: "", data: [] } as IMaintainRegulationObjecttype;
        const { maintainRegulationObjecttypeApi } = regulationcompliancemasterserviceApi();
        if (sFilters) {
            const encodedFilterValue = encodeURIComponent(sFilters);
            (await maintainRegulationObjecttypeApi.requestBuilder().getAll()
                .addCustomQueryParameters({
                    $filter: encodedFilterValue
                }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                })).
                forEach((oData) => {
                    if (oData.regulationTypeRegulationType && oData.objectCategoryCategory && oData.objectTypeCode) {
                        aRegulartionObjectTypeMAP.map[oData.regulationTypeRegulationType + oData.objectCategoryCategory] = oData;
                        const sObjectType = "objectType_code eq '" + oData.objectTypeCode + "'";
                        aRegulartionObjectTypeMAP.objectType = aRegulartionObjectTypeMAP.objectType = aRegulartionObjectTypeMAP.objectType ? aRegulartionObjectTypeMAP.objectType + " or " + sObjectType : sObjectType;
                    }
                });
        } else {
            const { maintainRegulationObjecttypeApi } = regulationcompliancemasterserviceApi();
            (await maintainRegulationObjecttypeApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                })).
                forEach((oData) => {
                    if (oData.regulationTypeRegulationType && oData.objectCategoryCategory && oData.objectTypeCode) {
                        aRegulartionObjectTypeMAP.map[oData.regulationTypeRegulationType + oData.objectCategoryCategory] = oData;
                        aRegulartionObjectTypeMAP.data.push(oData);
                    }
                });
        }
        return aRegulartionObjectTypeMAP;
    }

    async getMovementType(sFilters: string): Promise<IMaintainMovementType> {
        const aMovementTypeMAP = { map: {}, movementTypeMovementType: "" ,movementType_movementType:"", data: [] } as IMaintainMovementType;
        if (sFilters) {
            const { maintainMovementTypeApi } = regulationcompliancemasterserviceApi(),
                encodedFilterValue = encodeURIComponent(sFilters);
            (await maintainMovementTypeApi.requestBuilder().getAll()
                .addCustomQueryParameters({
                    $filter: encodedFilterValue
                }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                })).forEach((oData) => {
                    if (oData.regulationTypeRegulationType && oData.objectTypeCode) {
                        aMovementTypeMAP.map[oData.regulationTypeRegulationType + oData.objectTypeCode] = oData;
                        const sMovementTypeMovementType = "movementTypeMovementType eq '" + oData.movementType + "'";
                        aMovementTypeMAP.movementTypeMovementType = aMovementTypeMAP.movementTypeMovementType ? aMovementTypeMAP.movementTypeMovementType + " or " + sMovementTypeMovementType : sMovementTypeMovementType;
                        const sMovementType_movementType = "movementType_movementType eq '" + oData.movementType + "'";
                        aMovementTypeMAP.movementType_movementType = aMovementTypeMAP.movementType_movementType ? aMovementTypeMAP.movementType_movementType + " or " + sMovementType_movementType : sMovementType_movementType;
                        aMovementTypeMAP.data.push(oData);
                    }
                });
        } else {
            const { maintainMovementTypeApi } = regulationcompliancemasterserviceApi();
            (await maintainMovementTypeApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                })).forEach((oData) => {
                    if (oData.regulationTypeRegulationType && oData.objectTypeCode) {
                        aMovementTypeMAP.map[oData.regulationTypeRegulationType + oData.objectTypeCode] = oData;
                        aMovementTypeMAP.data.push(oData);
                    }
                });
        }
        return aMovementTypeMAP;
    }

    async readMvtTypeTransationRelevance(sFilters: string): Promise<IMaintainMovementTypeToTransactionCategoryImpact> {
        const aMvtTypeTransactionCatMappingMAP = { map: {}, transactionCategoryCategory: "" } as IMaintainMovementTypeToTransactionCategoryImpact;
        if (sFilters) {
            const { maintainMovementTypeToTransactionCategoryImpactApi } = regulationcompliancemasterserviceApi(),
                encodedFilterValue = encodeURIComponent(sFilters);
            (await maintainMovementTypeToTransactionCategoryImpactApi.requestBuilder().getAll()
                .addCustomQueryParameters({
                    $filter: encodedFilterValue
                }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                })).
                forEach((oData) => {
                    if (oData.regulationTypeRegulationType && oData.objectTypeCode && oData.movementTypeMovementType) {
                        aMvtTypeTransactionCatMappingMAP.map[oData.regulationTypeRegulationType + oData.objectTypeCode + oData.movementTypeMovementType] = oData;
                        const sTransactionCategoryCategory = "transactionCategory_category eq '" + oData.transactionCategoryCategory + "'";
                        aMvtTypeTransactionCatMappingMAP.transactionCategoryCategory = aMvtTypeTransactionCatMappingMAP.transactionCategoryCategory ? aMvtTypeTransactionCatMappingMAP.transactionCategoryCategory + " or " + sTransactionCategoryCategory : sTransactionCategoryCategory;
                    }
                });
        } else {
            const { maintainMovementTypeToTransactionCategoryImpactApi } = regulationcompliancemasterserviceApi();
            (await maintainMovementTypeToTransactionCategoryImpactApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                })).
                forEach((oData) => {
                    if (oData) {
                        aMvtTypeTransactionCatMappingMAP.data.push(oData);
                    }
                });
        }
        return aMvtTypeTransactionCatMappingMAP;
    }

    async getRgulationSubScnario(sFilters: string): Promise<IMaintainRegulationSubscenariotoScenario> {
        const aMaintainRegulationSubscenariotoScenarioMAP = { map: {} } as IMaintainRegulationSubscenariotoScenario;
        if (sFilters) {
            const { maintainRegulationSubScenarioToScenarioApi } = regulationcompliancemasterserviceApi(),
                encodedFilterValue = encodeURIComponent(sFilters);
            (await maintainRegulationSubScenarioToScenarioApi.requestBuilder().getAll()
                .addCustomQueryParameters({
                    $filter: encodedFilterValue
                })
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                })).
                forEach((oData) => {
                    if (oData.regulationTypeRegulationType && oData.objectCategoryCategory) {
                        aMaintainRegulationSubscenariotoScenarioMAP.map[oData.regulationTypeRegulationType + oData.transactionSourceScenarioCategory + oData.objectCategoryCategory] = oData;
                    }
                });
        } else {
            const { maintainRegulationSubScenarioToScenarioApi } = regulationcompliancemasterserviceApi();
            (await maintainRegulationSubScenarioToScenarioApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                })).
                forEach((oData) => {
                    if (oData.regulationTypeRegulationType && oData.objectCategoryCategory) {
                        aMaintainRegulationSubscenariotoScenarioMAP.map[oData.regulationTypeRegulationType + oData.objectCategoryCategory] = oData;
                    }
                });
        }
        return aMaintainRegulationSubscenariotoScenarioMAP;
        // return await SELECT.from(RegulationSubScenario).where({ regType: { in: regType } });
    }

    async getMaterialConfiguration(sFilters: string): Promise<MaintainRenewableMaterialConfiguration[]> {
        if (sFilters) {
            const { maintainRenewableMaterialConfigurationApi } = regulationcompliancemasterserviceApi();
            const encodedFilterValue = encodeURIComponent(sFilters);
            // const data = 
            return await maintainRenewableMaterialConfigurationApi.requestBuilder().getAll()
                .addCustomQueryParameters({
                    $filter: encodedFilterValue
                }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                });
        } else {
            const { maintainRenewableMaterialConfigurationApi } = regulationcompliancemasterserviceApi();
            return await maintainRenewableMaterialConfigurationApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                });
        }
        // return await SELECT.from(MaintainRenewableMaterialConfiguration).where({ regType: { in: regType }, and: { objectType: { in: objectType }, and: { year: year } } });
    }

    async getTransactiontype(sFilters: string): Promise<MaintainRegulationTransactionTypeTs[]> {

        const { maintainRegulationTransactionTypeTsApi } = regulationcompliancemasterserviceApi();
        if (sFilters) {
            const encodedFilterValue = encodeURIComponent(sFilters);
            // const data = 
            return await maintainRegulationTransactionTypeTsApi.requestBuilder().getAll()
                .addCustomQueryParameters({
                    $filter: encodedFilterValue
                }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                });
        } else {
            return await maintainRegulationTransactionTypeTsApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                });
        }
        // return await SELECT.from(MaintainRenewableMaterialConfiguration).where({ regType: { in: regType }, and: { objectType: { in: objectType }, and: { year: year } } });
    }

    async getRegulationTransactionTypeTs(sFilters: string): Promise<IMaintainRegulationTransactionTypeTs> {
        const aIMaintainRegulationTransactionTypeTsMAP = { map: {} } as IMaintainRegulationTransactionTypeTs;
        if (sFilters) {
            const { maintainRegulationTransactionTypeTsApi } = regulationcompliancemasterserviceApi(),
                encodedFilterValue = encodeURIComponent(sFilters);
            (await maintainRegulationTransactionTypeTsApi.requestBuilder().getAll()
                .addCustomQueryParameters({
                    $filter: encodedFilterValue
                }).middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                })).
                forEach((oData) => {
                    if (oData.regulationTypeRegulationType && oData.transactionCategoryCategory) {
                        aIMaintainRegulationTransactionTypeTsMAP.map[oData.regulationTypeRegulationType + oData.transactionCategoryCategory] = oData;
                    }
                });
        }
        return aIMaintainRegulationTransactionTypeTsMAP;
    }

    async getRFS2DebitType(sFilters: string): Promise<IRfs2DebitType> {
        const aRfs2DebitTypeMAP = { map: {}, data: [] } as IRfs2DebitType,
         { rfs2DebitTypeApi } = regulationcompliancemasterserviceApi();
        if (sFilters) {
            const encodedFilterValue = encodeURIComponent(sFilters);
            (await rfs2DebitTypeApi.requestBuilder().getAll()
                .addCustomQueryParameters({
                    $filter: encodedFilterValue
                })
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                })).
                forEach((oData) => {
                    if (oData.category) {
                        aRfs2DebitTypeMAP.map[oData.category] = oData;
                        aRfs2DebitTypeMAP.data.push(oData);
                    }
                });
        } else {
            (await rfs2DebitTypeApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                })).
                forEach((oData) => {
                    if (oData.category) {
                        aRfs2DebitTypeMAP.map[oData.category] = oData;
                        aRfs2DebitTypeMAP.data.push(oData);
                    }
                });
        }
        return aRfs2DebitTypeMAP;
    }

    async getFuelCategory(sFilters: string): Promise<IFuelCategory> {
        const aIFuelCategoryMAP = { map: {}, data: [] } as IFuelCategory,
         { fuelCategoryApi } = regulationcompliancemasterserviceApi();
        if (sFilters) {
            const encodedFilterValue = encodeURIComponent(sFilters);
            (await fuelCategoryApi.requestBuilder().getAll()
                .addCustomQueryParameters({
                    $filter: encodedFilterValue
                })
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                })).
                forEach((oData) => {
                    if (oData.category) {
                        aIFuelCategoryMAP.map[oData.category] = oData;
                        aIFuelCategoryMAP.data.push(oData);
                    }
                });
        } else {
            (await fuelCategoryApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                })).
                forEach((oData) => {
                    if (oData.category) {
                        aIFuelCategoryMAP.map[oData.category] = oData;
                        aIFuelCategoryMAP.data.push(oData);
                    }
                });
        }
        return aIFuelCategoryMAP;
    }

    async getFuelSubCategory(sFilters: string): Promise<IFuelSubCategory> {
        const aIFuelSubCategoryMAP = { map: {}, data: [] } as IFuelSubCategory,
         { fuelSubCategoryApi } = regulationcompliancemasterserviceApi();
        if (sFilters) {
            const encodedFilterValue = encodeURIComponent(sFilters);
            (await fuelSubCategoryApi.requestBuilder().getAll()
                .addCustomQueryParameters({
                    $filter: encodedFilterValue
                })
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                })).
                forEach((oData) => {
                    if (oData.category) {
                        aIFuelSubCategoryMAP.map[oData.category] = oData;
                        aIFuelSubCategoryMAP.data.push(oData);
                    }
                });
        } else {
            (await fuelSubCategoryApi.requestBuilder().getAll()
                .middleware(resilience({ retry: 3, circuitBreaker: true }))
                .execute({
                    destinationName: "RegulationComplianceMasterService"
                })).
                forEach((oData) => {
                    if (oData.category) {
                        aIFuelSubCategoryMAP.map[oData.category] = oData;
                        aIFuelSubCategoryMAP.data.push(oData);
                    }
                });
        }
        return aIFuelSubCategoryMAP;
    }

    async getNextRenewableId(RegulationSubScenario: string): Promise<number> {
        if (RegulationSubScenario) {
            const { operations: {
                getNextRenewableId
            } } = regulationcompliancemasterserviceApi();
            const payload = {
                "regulationSubScenario": RegulationSubScenario
            };
            const oCurrentSeqence = await getNextRenewableId(payload).middleware(resilience({ retry: 3, circuitBreaker: true })).execute({
                destinationName: "RegulationComplianceMasterService"
            });

            return Number(oCurrentSeqence);
        } else {
            return 0;
        }
    }

    async addLog(LogUtilityService: ILogUtility) {
        if (LogUtilityService) {
            const { logUtilityServiceApi } = logutilityserviceApi();
            const payload: LogUtilityService = logUtilityServiceApi.entityBuilder().fromJson(LogUtilityService);
            // await logUtilityServiceApi.requestBuilder().create(payload).execute({
            await logUtilityServiceApi.requestBuilder().create(payload).middleware(resilience({ retry: 3, circuitBreaker: true })).execute({
                destinationName: "LogUtilityService"
            });
        }
    }
    async getManualAdjustmentData(sourceScenario: string) {
        const { RegulationComplianceTransaction } = cds.entities('com.sap.chs.com.regulationcompliancetransaction');
        const srv = await cds.connect.to('RegulationComplianceTransactionService');
        return await srv.read(RegulationComplianceTransaction).where({ sourceScenario: sourceScenario });
        // return srv.run(SELECT.from(RegulationComplianceTransaction).where({sourceScenario:sourceScenario}));
        // return await srv.run(
        //     SELECT("*")
        //       .from("RegulationComplianceTransaction")
        //       .where(
        //         `sourceScenario = '${sourceScenario}' `
        //       )
        //   );

        // SELECT.from(Books).where({author_ID:106})
        // return await srv.run(SELECT(RegulationComplianceTransaction).where({sourceScenario}));        

    }
    async getAdjustmentReasonCode(): Promise<MaintainAdjustmentReasonCode[]> {
        const { maintainAdjustmentReasonCodeApi } = regulationcompliancemasterserviceApi();
        return await maintainAdjustmentReasonCodeApi.requestBuilder().getAll()
            .middleware(resilience({ retry: 3, circuitBreaker: true }))
            .execute({
                destinationName: "RegulationComplianceMasterService"
            });
    }
    async getObjectCategory(): Promise<ObjectCategory[]> {
        const { objectCategoryApi } = regulationcompliancemasterserviceApi();
        return await objectCategoryApi.requestBuilder().getAll()
            .middleware(resilience({ retry: 3, circuitBreaker: true }))
            .execute({
                destinationName: "RegulationComplianceMasterService"
            });
    }
    async getUOM(): Promise<Uom[]> {
        const { uomApi } = regulationcompliancemasterserviceApi();
        return await uomApi.requestBuilder().getAll()
            .middleware(resilience({ retry: 3, circuitBreaker: true }))
            .execute({
                destinationName: "RegulationComplianceMasterService"
            });
    }
    async getImpact(): Promise<Impact[]> {
        const { impactApi } = regulationcompliancemasterserviceApi();
        return await impactApi.requestBuilder().getAll()
            .middleware(resilience({ retry: 3, circuitBreaker: true }))
            .execute({
                destinationName: "RegulationComplianceMasterService"
            });
    }


}

const oRegulationComplianceBaseInstance = new RegulationComplianceBaseClass();
export { oRegulationComplianceBaseInstance };