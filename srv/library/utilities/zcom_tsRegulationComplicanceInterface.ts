import {
    MaintainRegulationGroupView, MaintainRegulationType, MaintainRegulationMaterialGroupView,
    MaintainMovementTypeToTransactionCategoryMapping,
    MaintainMovementType, MaintainRegulationObjectType, MaintainRegulationSubScenarioToScenarioType,
    MaintainRegulationTransactionType, Rfs2DebitType, FuelCategory, FuelSubCategory
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
    map: { [index: string]: MaintainMovementTypeToTransactionCategoryMapping };
    transactionCategoryCategory: string;
    data: MaintainMovementTypeToTransactionCategoryMapping[]
}

export interface IMaintainMovementType {
    map: { [index: string]: MaintainMovementType };
    movementTypeMovementType: string;
    movementType_movementType: string;
    data: MaintainMovementType[];
}

export interface IMaintainRegulationObjecttype {
    map: { [index: string]: MaintainRegulationObjectType };
    objectType: string;
    data: MaintainRegulationObjectType[]
}

export interface IMaintainRegulationSubscenariotoScenario {
    map: { [index: string]: MaintainRegulationSubScenarioToScenarioType };
    data: MaintainRegulationSubScenarioToScenarioType[]
}

export interface IMaintainRegulationTransactionTypeTs {
    map: { [index: string]: MaintainRegulationTransactionType };
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

export interface EventPayload {
    RenewableMaterial: string;
    RenewableEventType: string;
    RenewableFuelCategory: string;
    RenewableTransactionType: string;
    RegulationGroupName: string;
    RegulationMateGroup: string;
    MaterialDescription: string;
    _RenewableContract: {
        RenewableMaterial: string;
        RenewableEventType: string;
        RenwableContract: string;
        RenwableCotractItem: string;
        DocumentType: string;
        MovementType: string;
        Quantity: string;
        UnitOfMeasure: string;
    },
    _RenewableDeal: {
        RenewableMaterial: string;
        RenewableEventType: string;
        RenwableDealDocument: string;
        RenwableDealItem: string;
        DocumentType: string;
        MovementType: string;
        AttachedIndicator: string;
        Dcode: string;
        VintageYear: string;
        Multiplier: string;
        RINObligation: string;
        RINsGenerator: string;
        RINspriced: string;
        QAPcertified: string;
        Quantity: string;
        UnitOfMeasure: string;
        RenewablePassRetainIndicator: string;
        RenewableDealNumber: string;
        RenewableDcodeription: string;
        RenewableVintageYearription: string;
        RenewableRinMultiplierription: string;
        RenewableQapCertifiedription: string;
    },
    _RenewableDelivery: {
        RenewableMaterial: string;
        RenewableEventType: string;
        RenwableDelivery: string;
        RenwableDeliveryItem: string;
        DocumentType: string;
        MovementType: string;
        Quantity: string;
        UnitOfMeasure: string;
    },
    _RenewableMaterialDocument: {
        RenewableMaterial: string;
        RenewableEventType: string;
        RenwableMaterialDocument: string;
        RenwableMaterialDocumentItem: string;
        DocumentType: string;
        MovementType: string;
        Plant: string;
        StorageLocation: string;
        CompanyCode: string;
        DocumentDate: string;
        Quantity: string;
        UnitOfMeasure: string;
        RenewableMaterialDocDocDte: string;
        RenewableMaterialDocPostgDte: string;
        RenewableBillOfLading: string;
        RenewableReasonReasonCode: string;
        RenewableReversalPostingDate: string;
    },
    _RenewableNominationData: {
        RenewableMaterial: string;
        RenewableEventType: string;
        RenwableNomination: string;
        NominationKey: string;
        RenwableNominationItem: string;
        DocumentType: string;
        MovementType: string;
        Quantity: string;
        UnitOfMeasure: string;
    },
    _RenewableProductionOrder: {
        RenewableMaterial: string;
        RenewableEventType: string;
        RenwableProductionOrder: string;
        RenwableProductionOrderItem: string;
        DocumentType: string;
        MovementType: string;
        Quantity: string;
        UnitOfMeasure: string;
        RenewableBusinessPartnerNumber: string;
        RenewableBusinessPartnerDesc: string;
        RenewableIncoTerms1: string;
        RenewableIncoTerms2: string;
        RenewableContract: string;
        RenewableContractItem: string;
    },
    _RenewablePurchaseOrder: {
        RenewableMaterial: string;
        RenewableEventType: string;
        RenwablePurchaseOrder: string;
        RenwablePurchaseOrderItem: string;
        DocumentType: string;
        MovementType: string;
        Quantity: string;
        UnitOfMeasure: string;
    },
    _RenewableSalesOrder: {
        RenewableMaterial: string;
        RenewableEventType: string;
        RenwableSalesOrder: string;
        RenwableSalesOrderItem: string;
        DocumentType: string;
        MovementType: string;
        Quantity: string;
        UnitOfMeasure: string;
    },
    _RenewableTicketData: {
        RenewableMaterial: string;
        RenewableEventType: string;
        RenwableTicket: string;
        RenwableTicketItem: string;
        Ticketkey: string;
        TicketVersion: string;
        TicketPurpose: string;
        Tickettype: string;
        ExternalTicketNumber: string;
        ExternalPositionNumber: string;
        DocumentType: string;
        MovementType: string;
        Quantity: string;
        UnitOfMeasure: string;
    }
}
