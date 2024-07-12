// const expect = require('chai').expect
const  {expect} = require('@jest/globals');
const cds = require('@sap/cds')
// const { POST} = cds.test(__dirname+'/..')
const { GET,POST } = cds.test(__dirname + '/..');

describe('Manual Adjustment Customer Handler', () => {

  it('should send post request on manual adjustment - Pass', async () => {

    let response1 = await POST `/odata/v4/regulation-compliance-transaction/ManualAdjRegulationComplianceTransaction ${{
      regulationType: 'RFS2',
      regulationCategory: 'RFS2',
      objectCategory: 'D',
      sourceScenario: 'MDJ',
      transactionCategory: 'PRD',
      impact: 'I',
      documentDate: '2024-07-09',
      renewablesDocumentComplianceYear: '2024',
      businessPartnerNumber: '12',
      reasonCode: '01',
      reasonCodeDesc: 'Failed',
      sourceOrgPlant: '0560',
      regulationQuantity: 400,
      regulationUnitOfMeasurement: 'RIN',
      regulationLogisticsMaterialNumber: 'CELLULOSIC_2024',
      billofLading: '12',
      fuelCategory: 'GS',
      adjustmentBase: 'Q'
    }}`
    expect(response1.status).toEqual(201)
     console.log(response1.status);
  })

  it('should send post request on manual adjustment - Fail', async () => {

    let response2 = await POST `/odata/v4/regulation-compliance-transaction/ManualAdjRegulationComplianceTransaction ${{
      regulationType: 'RFS2',
      regulationCategory: 'RFS2',
      objectCategory: 'D',
      sourceScenario: 'MDJ',
      transactionCategory: 'PRD',
      impact: 'I',
      documentDate: '2024-07-09',
      renewablesDocumentComplianceYear: 2024,
      businessPartnerNumber: '12',
      reasonCode: '01',
      reasonCodeDesc: 'Failed',
      sourceOrgPlant: '0560',
      regulationQuantity: 400,
      regulationUnitOfMeasurement: 'RIN',
      regulationLogisticsMaterialNumber: 'CELLULOSIC_2024',
      billofLading: '12',
      fuelCategory: 'GS',
      adjustmentBase: 'Q'
    }}`
    expect(response2.status).toEqual(201)
     console.log(response2.status);
  })
})

describe('RFS2 Event Test', () => {
  it('should send post request on RFS2 RVO event and passed', async () => {
    let response = await POST `http://localhost:4004/odata/v4/regulation-compliance-transaction/sendMessage ${{
      "data":{
         "RenewableMaterial":"300003",
         "RenewableEventType":"GM-CR-ET",
         "RenewableFuelCategory":"GS",
         "RenewableTransactionType":"PRD",
         "RegulationGroupName":"R001",
         "RegulationMateGroup":"M001",
         "MaterialDescription":"UNLEADED PREMIUM 91",
         "_RenewableContract":{
            "RenewableMaterial":"",
            "RenewableEventType":"",
            "RenwableContract":"",
            "RenwableCotractItem":"0",
            "DocumentType":"",
            "MovementType":"",
            "Quantity":"0.000",
            "UnitOfMeasure":""
         },
         "_RenewableDeal":{
            "RenewableMaterial":"",
            "RenewableEventType":"",
            "RenwableDealDocument":"",
            "RenwableDealItem":"0",
            "DocumentType":"",
            "MovementType":"",
            "AttachedIndicator":"",
            "Dcode":"",
            "VintageYear":"0",
            "Multiplier":"",
            "RINObligation":"",
            "RINsGenerator":"",
            "RINspriced":"",
            "QAPcertified":"",
            "Quantity":"0.000",
            "UnitOfMeasure":"",
            "RenewablePassRetainIndicator":"false",
            "RenewableDealNumber":"",
            "RenewableDcodeription":"",
            "RenewableVintageYearription":"0",
            "RenewableRinMultiplierription":"0.000",
            "RenewableQapCertifiedDesc":""
         },
         "_RenewableDelivery":{
            "RenewableMaterial":"",
            "RenewableEventType":"",
            "RenwableDelivery":"",
            "RenwableDeliveryItem":"0",
            "DocumentType":"",
            "MovementType":"",
            "Quantity":"0.000",
            "UnitOfMeasure":""
         },
         "_RenewableMaterialDocument":{
            "RenewableMaterial":"300003",
            "RenewableEventType":"WA",
            "RenwableMaterialDocument":"4900000205",
            "RenwableMaterialDocumentItem":"1",
            "RenwableDocumentType":"",
            "MovementType":"521",
            "Plant":"0563",
            "StorageLocation":"BULK",
            "CompanyCode":"1000",
            "DocumentDate":"2024-07-03",
            "Quantity":"1.000",
            "UnitOfMeasure":"UG6",
            "RenewableMaterialDocDocDte":"2024-07-03",
            "RenewableMaterialDocPostgDte":"2024-07-03",
            "RenewableBillOfLading":"",
            "RenewableReasonReasonCode":"0",
            "RenewableReversalPostingDate":"2024-07-03"
         },
         "_RenewableNominationData":{
            "RenewableMaterial":"",
            "RenewableEventType":"",
            "RenwableNomination":"",
            "NominationKey":"",
            "RenwableNominationItem":"0",
            "DocumentType":"",
            "MovementType":"",
            "Quantity":"0.000",
            "UnitOfMeasure":""
         },
         "_RenewableProductionOrder":{
            "RenewableMaterial":"300003",
            "RenewableEventType":"WA",
            "RenwableProductionOrder":"",
            "RenwableProductionOrderItem":"0",
            "DocumentType":"",
            "MovementType":"521",
            "Quantity":"1.000",
            "UnitOfMeasure":"UG6",
            "RenewableBusinessPartnerNumber":"",
            "RenewableBusinessPartnerDesc":"",
            "RenewableIncoTerms1":"",
            "RenewableIncoTerms2":"",
            "RenewableContract":"",
            "RenewableContractItem":"0"
         },
         "_RenewablePurchaseOrder":{
            "RenewableMaterial":"",
            "RenewableEventType":"",
            "RenwablePurchaseOrder":"",
            "RenwablePurchaseOrderItem":"0",
            "DocumentType":"",
            "MovementType":"",
            "Quantity":"0.000",
            "UnitOfMeasure":""
         },
         "_RenewableSalesOrder":{
            "RenewableMaterial":"",
            "RenewableEventType":"",
            "RenwableSalesOrder":"",
            "RenwableSalesOrderItem":"0",
            "DocumentType":"",
            "MovementType":"",
            "Quantity":"0.000",
            "UnitOfMeasure":""
         },
         "_RenewableTicketData":{
            "RenewableMaterial":"",
            "RenewableEventType":"",
            "RenwableTicket":"",
            "RenwableTicketItem":"0",
            "Ticketkey":"",
            "TicketVersion":"0",
            "TicketPurpose":"",
            "Tickettype":"",
            "ExternalTicketNumber":"",
            "ExternalPositionNumber":"",
            "DocumentType":"",
            "MovementType":"",
            "Quantity":"0.000",
            "UnitOfMeasure":""
         }
      }
   }}`
    expect(response.status).toEqual(204)
     console.log(response.status);
  })
  it('should send post request on RFS2 RVO event and fail for wrong data', async () => {
    let response = await POST `http://localhost:4004/odata/v4/regulation-compliance-transaction/sendMessage ${{
      "data":{
         "RenewableMaterial":"300003",
         "RenewableEventType":"GM-CR-ET",
         "RenewableFuelCategory":"GS",
         "RenewableTransactionType":"PRD",
         "RegulationGroupName":"R001",
         "RegulationMateGroup":"M001",
         "MaterialDescription":"UNLEADED PREMIUM 91",
         "_RenewableContract":{
            "RenewableMaterial":"",
            "RenewableEventType":"",
            "RenwableContract":"",
            "RenwableCotractItem":"0",
            "DocumentType":"",
            "MovementType":"",
            "Quantity":0.000,
            "UnitOfMeasure":""
         },
         "_RenewableDeal":{
            "RenewableMaterial":"",
            "RenewableEventType":"",
            "RenwableDealDocument":"",
            "RenwableDealItem":"0",
            "DocumentType":"",
            "MovementType":"",
            "AttachedIndicator":"",
            "Dcode":"",
            "VintageYear":"0",
            "Multiplier":"",
            "RINObligation":"",
            "RINsGenerator":"",
            "RINspriced":"",
            "QAPcertified":"",
            "Quantity":"0.000",
            "UnitOfMeasure":"",
            "RenewablePassRetainIndicator":"false",
            "RenewableDealNumber":"",
            "RenewableDcodeription":"",
            "RenewableVintageYearription":"0",
            "RenewableRinMultiplierription":"0.000",
            "RenewableQapCertifiedDesc":""
         },
         "_RenewableDelivery":{
            "RenewableMaterial":"",
            "RenewableEventType":"",
            "RenwableDelivery":"",
            "RenwableDeliveryItem":"0",
            "DocumentType":"",
            "MovementType":"",
            "Quantity":"0.000",
            "UnitOfMeasure":""
         },
         "_RenewableMaterialDocument":{
            "RenewableMaterial":"300003",
            "RenewableEventType":"WA",
            "RenwableMaterialDocument":"4900000205",
            "RenwableMaterialDocumentItem":"1",
            "RenwableDocumentType":"",
            "MovementType":"521",
            "Plant":"0563",
            "StorageLocation":"BULK",
            "CompanyCode":"1000",
            "DocumentDate":"2024-07-03",
            "Quantity":"1.000",
            "UnitOfMeasure":"UG6",
            "RenewableMaterialDocDocDte":"2024-07-03",
            "RenewableMaterialDocPostgDte":"2024-07-03",
            "RenewableBillOfLading":"",
            "RenewableReasonReasonCode":"0",
            "RenewableReversalPostingDate":"2024-07-03"
         },
         "_RenewableNominationData":{
            "RenewableMaterial":"",
            "RenewableEventType":"",
            "RenwableNomination":"",
            "NominationKey":"",
            "RenwableNominationItem":"0",
            "DocumentType":"",
            "MovementType":"",
            "Quantity":"0.000",
            "UnitOfMeasure":""
         },
         "_RenewableProductionOrder":{
            "RenewableMaterial":"300003",
            "RenewableEventType":"WA",
            "RenwableProductionOrder":"",
            "RenwableProductionOrderItem":"0",
            "DocumentType":"",
            "MovementType":"521",
            "Quantity":"1.000",
            "UnitOfMeasure":"UG6",
            "RenewableBusinessPartnerNumber":"",
            "RenewableBusinessPartnerDesc":"",
            "RenewableIncoTerms1":"",
            "RenewableIncoTerms2":"",
            "RenewableContract":"",
            "RenewableContractItem":"0"
         },
         "_RenewablePurchaseOrder":{
            "RenewableMaterial":"",
            "RenewableEventType":"",
            "RenwablePurchaseOrder":"",
            "RenwablePurchaseOrderItem":"0",
            "DocumentType":"",
            "MovementType":"",
            "Quantity":"0.000",
            "UnitOfMeasure":""
         },
         "_RenewableSalesOrder":{
            "RenewableMaterial":"",
            "RenewableEventType":"",
            "RenwableSalesOrder":"",
            "RenwableSalesOrderItem":"0",
            "DocumentType":"",
            "MovementType":"",
            "Quantity":"0.000",
            "UnitOfMeasure":""
         },
         "_RenewableTicketData":{
            "RenewableMaterial":"",
            "RenewableEventType":"",
            "RenwableTicket":"",
            "RenwableTicketItem":"0",
            "Ticketkey":"",
            "TicketVersion":"0",
            "TicketPurpose":"",
            "Tickettype":"",
            "ExternalTicketNumber":"",
            "ExternalPositionNumber":"",
            "DocumentType":"",
            "MovementType":"",
            "Quantity":"0.000",
            "UnitOfMeasure":""
         }
      }
   }}`
    expect(response.status).toEqual(204)
     console.log(response.status);
  })
  it('should send post request on RFS2 RF RIN event and passed', async () => {
   let response = await POST `http://localhost:4004/odata/v4/regulation-compliance-transaction/sendMessage ${{
      "data":
      {
        "RenewableMaterial":"300004",
        "RenewableEventType":"GM-CR-ET",
        "RenewableFuelCategory":"GS",
        "RenewableTransactionType":"PUR",
        "RegulationGroupName":"R001",
        "RegulationMateGroup":"M002",
        "MaterialDescription":"ULSD15 #1 CLEAR",
        "_RenewableContract":
        {
         "RenewableMaterial":"",
         "RenewableEventType":"",
         "RenwableContract":"",
         "RenwableCotractItem":"0",
         "DocumentType":"",
         "MovementType":"",
         "Quantity":"0.000",
         "UnitOfMeasure":""
        },
        "_RenewableDeal":
        {
         "RenewableMaterial":"",
         "RenewableEventType":"",
         "RenwableDealDocument":"",
         "RenwableDealItem":"0",
         "DocumentType":"",
         "MovementType":"",
         "AttachedIndicator":"",
         "Dcode":"",
         "VintageYear":"2024",
         "Multiplier":"",
         "RINObligation":"",
         "RINsGenerator":"",
         "RINspriced":"",
         "QAPcertified":"",
         "Quantity":"0.000",
         "UnitOfMeasure":"",
         "RenewablePassRetainIndicator":"false",
         "RenewableDealNumber":"",
         "RenewableDcodeription":"",
         "RenewableVintageYearription":"0",
         "RenewableRinMultiplierription":"0.000",
         "RenewableQapCertifiedDesc":""
        },
        "_RenewableDelivery":
        {
         "RenewableMaterial":"",
         "RenewableEventType":"",
         "RenwableDelivery":"",
         "RenwableDeliveryItem":"0",
         "DocumentType":"",
         "MovementType":"",
         "Quantity":"0.000",
         "UnitOfMeasure":""
        },
        "_RenewableMaterialDocument":
        {
         "RenewableMaterial":"300004",
         "RenewableEventType":"WE",
         "RenwableMaterialDocument":"5000000082",
         "RenwableMaterialDocumentItem":"1",
         "RenwableDocumentType":"",
         "MovementType":"101",
         "Plant":"0563",
         "StorageLocation":"BULK",
         "CompanyCode":"1000",
         "DocumentDate":"2024-07-08",
         "Quantity":"1.000",
         "UnitOfMeasure":"UG6",
         "RenewableMaterialDocDocDte":"2024-07-08",
         "RenewableMaterialDocPostgDte":"2024-07-08",
         "RenewableBillOfLading":"",
         "RenewableReasonReasonCode":"0",
         "RenewableReversalPostingDate":"2024-07-08"
        },
        "_RenewableNominationData":
        {
         "RenewableMaterial":"",
         "RenewableEventType":"",
         "RenwableNomination":"",
         "NominationKey":"",
         "RenwableNominationItem":"0",
         "DocumentType":"",
         "MovementType":"",
         "Quantity":"0.000",
         "UnitOfMeasure":""
        },
        "_RenewableProductionOrder":
        {
         "RenewableMaterial":"",
         "RenewableEventType":"",
         "RenwableProductionOrder":"",
         "RenwableProductionOrderItem":"0",
         "DocumentType":"",
         "MovementType":"",
         "Quantity":"0.000",
         "UnitOfMeasure":"",
         "RenewableBusinessPartnerNumber":"",
         "RenewableBusinessPartnerDesc":"",
         "RenewableIncoTerms1":"",
         "RenewableIncoTerms2":"",
         "RenewableContract":"",
         "RenewableContractItem":"0"
        },
        "_RenewablePurchaseOrder":
        {
         "RenewableMaterial":"300004",
         "RenewableEventType":"WE",
         "RenwablePurchaseOrder":"4500000089",
         "RenwablePurchaseOrderItem":"10",
         "DocumentType":"",
         "MovementType":"101",
         "Quantity":"1.000",
         "UnitOfMeasure":"UG6"
        },
        "_RenewableSalesOrder":
        {
         "RenewableMaterial":"",
         "RenewableEventType":"",
         "RenwableSalesOrder":"",
         "RenwableSalesOrderItem":"0",
         "DocumentType":"",
         "MovementType":"",
         "Quantity":"0.000",
         "UnitOfMeasure":""
        },
        "_RenewableTicketData":
        {
         "RenewableMaterial":"",
         "RenewableEventType":"",
         "RenwableTicket":"",
         "RenwableTicketItem":"0",
         "Ticketkey":"",
         "TicketVersion":"0",
         "TicketPurpose":"",
         "Tickettype":"",
         "ExternalTicketNumber":"",
         "ExternalPositionNumber":"",
         "DocumentType":"",
         "MovementType":"",
         "Quantity":"0.000",
         "UnitOfMeasure":""
        }
      }
  }}`
   expect(response.status).toEqual(204)
    console.log(response.status);
 })
 it('should send post request on RFS2 RF RIN event and fail for wrong data', async () => {
   let response = await POST `http://localhost:4004/odata/v4/regulation-compliance-transaction/sendMessage ${{
      "data":
      {
        "RenewableMaterial":"300004",
        "RenewableEventType":"GM-CR-ET",
        "RenewableFuelCategory":"GS",
        "RenewableTransactionType":"PUR",
        "RegulationGroupName":"R001",
        "RegulationMateGroup":"M002",
        "MaterialDescription":"ULSD15 #1 CLEAR",
        "_RenewableContract":
        {
         "RenewableMaterial":"",
         "RenewableEventType":"",
         "RenwableContract":"",
         "RenwableCotractItem":"0",
         "DocumentType":"",
         "MovementType":"",
         "Quantity":"0.000",
         "UnitOfMeasure":""
        },
        "_RenewableDeal":
        {
         "RenewableMaterial":"",
         "RenewableEventType":"",
         "RenwableDealDocument":"",
         "RenwableDealItem":"0",
         "DocumentType":"",
         "MovementType":"",
         "AttachedIndicator":"",
         "Dcode":"",
         "VintageYear":"2024",
         "Multiplier":"",
         "RINObligation":"",
         "RINsGenerator":"",
         "RINspriced":"",
         "QAPcertified":"",
         "Quantity":"0.000",
         "UnitOfMeasure":"",
         "RenewablePassRetainIndicator":"false",
         "RenewableDealNumber":"",
         "RenewableDcodeription":"",
         "RenewableVintageYearription":"0",
         "RenewableRinMultiplierription":"0.000",
         "RenewableQapCertifiedDesc":""
        },
        "_RenewableDelivery":
        {
         "RenewableMaterial":"",
         "RenewableEventType":"",
         "RenwableDelivery":"",
         "RenwableDeliveryItem":"0",
         "DocumentType":"",
         "MovementType":"",
         "Quantity":"0.000",
         "UnitOfMeasure":""
        },
        "_RenewableMaterialDocument":
        {
         "RenewableMaterial":"300004",
         "RenewableEventType":"WE",
         "RenwableMaterialDocument":"5000000082",
         "RenwableMaterialDocumentItem":"1",
         "RenwableDocumentType":"",
         "MovementType":"101",
         "Plant":"0563",
         "StorageLocation":"BULK",
         "CompanyCode":"1000",
         "DocumentDate":"2024-07-08",
         "Quantity":"1.000",
         "UnitOfMeasure":"UG6",
         "RenewableMaterialDocDocDte":"2024-07-08",
         "RenewableMaterialDocPostgDte":"2024-07-08",
         "RenewableBillOfLading":"",
         "RenewableReasonReasonCode":"0",
         "RenewableReversalPostingDate":"2024-07-08"
        },
        "_RenewableNominationData":
        {
         "RenewableMaterial":"",
         "RenewableEventType":"",
         "RenwableNomination":"",
         "NominationKey":"",
         "RenwableNominationItem":"0",
         "DocumentType":"",
         "MovementType":"",
         "Quantity":"0.000",
         "UnitOfMeasure":""
        },
        "_RenewableProductionOrder":
        {
         "RenewableMaterial":"",
         "RenewableEventType":"",
         "RenwableProductionOrder":"",
         "RenwableProductionOrderItem":"0",
         "DocumentType":"",
         "MovementType":"",
         "Quantity":"0.000",
         "UnitOfMeasure":"",
         "RenewableBusinessPartnerNumber":"",
         "RenewableBusinessPartnerDesc":"",
         "RenewableIncoTerms1":"",
         "RenewableIncoTerms2":"",
         "RenewableContract":"",
         "RenewableContractItem":"0"
        },
        "_RenewablePurchaseOrder":
        {
         "RenewableMaterial":"300004",
         "RenewableEventType":"WE",
         "RenwablePurchaseOrder":"4500000089",
         "RenwablePurchaseOrderItem":"10",
         "DocumentType":"",
         "MovementType":"101",
         "Quantity":"1.000",
         "UnitOfMeasure":"UG6"
        },
        "_RenewableSalesOrder":
        {
         "RenewableMaterial":"",
         "RenewableEventType":"",
         "RenwableSalesOrder":"",
         "RenwableSalesOrderItem":"0",
         "DocumentType":"",
         "MovementType":"",
         "Quantity":"0.000",
         "UnitOfMeasure":""
        },
        "_RenewableTicketData":
        {
         "RenewableMaterial":"",
         "RenewableEventType":"",
         "RenwableTicket":"",
         "RenwableTicketItem":"0",
         "Ticketkey":"",
         "TicketVersion":"0",
         "TicketPurpose":"",
         "Tickettype":"",
         "ExternalTicketNumber":"",
         "ExternalPositionNumber":"",
         "DocumentType":"",
         "MovementType":"",
         "Quantity":0,
         "UnitOfMeasure":""
        }
      }
  }}`
   expect(response.status).toEqual(204)
    console.log(response.status);
 })
})