import {
    MaintainRegulationGroupView, MaintainRegulationType, MaintainRegulationMaterialGroupView,
    MaintainMovementTypeToTransactionCategoryImpact,
    MaintainMovementType, MaintainRegulationObjecttype, MaintainRegulationSubScenarioToScenarioType,
    MaintainRegulationTransactionTypeTs, Rfs2DebitType, FuelCategory, FuelSubCategory
} from '../../external/regulationcompliancemasterservice_api';

export interface ILogUtility {
    object: string;
    message: string;
    messageType: string;
    regulationType: string;
    regulationSubObjectType: string;
    applicationModule: string;
    applicationSubModule: string;
    technicalMessage: string;
}

export interface IMaintainRegulationGroupView {
    map: { [index: string]: MaintainRegulationGroupView };
    regulationType_regulationType: string;
    regulationType: string;
    regulationTypeRegulationType: string;
    data: MaintainRegulationGroupView[];
}

export interface IMaintainRegulationType {
    map: { [index: string]: MaintainRegulationType };
    data: MaintainRegulationType[];
}

export interface IMaintainRegulationMaterialGroupView {
    map: { [index: string]: MaintainRegulationMaterialGroupView };
    objectCategory: string;
    objectCategory_category: string;
}

export interface IMaintainMovementTypeToTransactionCategoryImpact {
    map: { [index: string]: MaintainMovementTypeToTransactionCategoryImpact };
    transactionCategoryCategory: string;
    data: MaintainMovementTypeToTransactionCategoryImpact[]
}

export interface IMaintainMovementType {
    map: { [index: string]: MaintainMovementType };
    movementTypeMovementType: string;
    movementType_movementType: string;
    data: MaintainMovementType[];
}

export interface IMaintainRegulationObjecttype {
    map: { [index: string]: MaintainRegulationObjecttype };
    objectType: string;
    data: MaintainRegulationObjecttype[]
}

export interface IMaintainRegulationSubscenariotoScenario {
    map: { [index: string]: MaintainRegulationSubScenarioToScenarioType };
    data: MaintainRegulationSubScenarioToScenarioType[]
}

export interface IMaintainRegulationTransactionTypeTs {
    map: { [index: string]: MaintainRegulationTransactionTypeTs };
}

export interface IRfs2DebitType {
    map: { [index: string]: Rfs2DebitType };
    data: Rfs2DebitType[]
}

export interface IFuelCategory {
    map: { [index: string]: FuelCategory };
    data: FuelCategory[]
}

export interface IFuelSubCategory {
    map: { [index: string]: FuelSubCategory };
    data: FuelSubCategory[]
}
