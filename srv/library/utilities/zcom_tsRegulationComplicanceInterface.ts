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
        RenewableQapCertifiedDesc: string;
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
        RenwableDocumentType: string;
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
export interface EventPayloadMDJ {
    regulationType: string;
    objectCategory:string;
    objectCategoryDesc: string;
    objectType: string;
    sourceScenario: string;
    sourceOrgCompanyCode: string;
    transactionCategory: string;
    impact: string;
    documentDate: Date;
    businessPartnerNumber: string;
    reasonCode: string;
    reasonCodeDesc: string;
    renewablesDocumentComplianceYear: string;
    sourceOrgPlant: string;
    adjustmentBase: string;
    billofLading: string;
    fuelCategory: string;
    regulationQuantity: string;
    regulationUnitOfMeasurement: string;
    regulationLogisticsMaterialNumber: string;
    sourceOrgMaterialNumber: string;
    fuelUnitofMeasurement: string;
    fuelQuantity: string;
    renewablesEpaCompanyId: string;
    renewablesEpaFacilityId: string;
    fuelLogisticsMaterialNumber: string;
    fuelLogisticsMaterialNumberDesc: string;
    internalComments: string;
}