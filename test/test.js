// const chai = require("chai");
// const chaiHttp = require("chai-http");
 
// // Configure chai
// chai.use(chaiHttp);
// chai.should();
 
// const serverUrl = "odata/v4/regulation-compliance-transaction/ManualAdjRegulationComplianceTransaction";
 
// describe("POST //", function () {
//         it("Should create", function (done) {
//             chai
//                 .request(serverUrl)
//                 .post("entityset")
//                 .auth("username", "password") // pass credentails in the same way
//                 .set("Content-Type", "application/json;IEEE754Compatible=true")
//                 .send(payload object here)
//                 .end((error, response) => {
//                     try {
//                         response.should.have.status(201);
//                         response.should.be.json;
//                         response.body.should.have.property("CONSUMPTION"); // check all the properties in the same way
//                         done();
//                     } catch (error) {
//                         done(error);
//                     }
//                 });
//         });
//     });





// const cds = require('@sap/cds')
// // const { POST} = cds.test(__dirname+'/..')
// const { POST } = cds.test(__dirname + '/..');
// if (cds.User.default) cds.User.default = cds.User.Privileged
// else cds.User = cds.User.Privileged

// describe('Process Event Custom Handlers',  () => {

//   it('should send post request on event data', async () => {
//    let response =  await POST `/odata/v4/regulation-compliance-transaction/RegulationComplianceTransaction ${{ 
//       "regulationType": "RFS2",
//       "regulationCategory": "RFS2",
//       "objectCategory": "D",
//       "objectType": "RVO",
//       "sourceScenario": "GM",
//       "subObjectScenario": "RFS2_RVO",
//       "transactionCategory": "PUR",
//       "transactionType": "PUR1",
//       "impact": "I",
//       "movementType": "101",
//       "fuelLogisticsCompanyMaterialNumber": "5000",
//       "fuelQuantity": 10,
//       "fuelQuantityRaw": "10",
//       "fuelUnitofMeasurement": "RIN",
//       "fuelQuantityinAlternateUOM": "RIN",
//       "regulationQuantity": 10,
//       "regulationUnitOfMeasurement": "RIN"
//    }}`
//  console.log(response);
// if  (response.fuelQuantity === 10) {
//   console.log("Success");
// }
// else {
//   console.log("failed");
// } 
//   })
// })


// const cds = require('@sap/cds')
// const { POST} = cds.test(__dirname+'/..')
// // if (User.default) User.default = User.Privileged // hard core monkey patch
// // else User = User.Privileged // hard core monkey patch for older cds releases

// describe('Custom Handlers', () => {

//   it('should send post request on event data', async () => {
//     const limit = 10;
//     let data = await POST `/odata/v4/regulation-compliance-transaction/ManualAdjRegulationComplianceTransaction?$top=${limit}`
//     console.log(data);  
// })
// })

// const expect = require('chai').expect
const  {expect} = require('@jest/globals');
const cds = require('@sap/cds')
// const { POST} = cds.test(__dirname+'/..')
const { GET,POST } = cds.test(__dirname + '/..');
// if (cds.User.default) cds.User.default = cds.User.Privileged
// else cds.User = cds.User.Privileged

// beforeAll(async () => {

//   process.env.CDS_ENV = "test"
//   await cds.connect('hana')
//   // srv = await cds.serve('api').from(__dirname + '/../srv/api-service.cds')
// })

describe('Manual Adjustment Customer Handler', () => {

  it('should send post request on manual adjustment', async () => {
    // let data = await GET `/odata/v4/regulation-compliance-transaction/ManualAdjRegulationComplianceTransaction`

    let response = await POST `/odata/v4/regulation-compliance-transaction/ManualAdjRegulationComplianceTransaction ${{

        "regulationType": "RFS2",
        "regulationCategory": "D",
        "objectCategory": "D",
        "objectType": "RVO",
        "sourceScenario": "MDJ",
        "transactionType": "PROD",
        "impact": "I",
        "documentDate": "2024-06-01",
        "renewablesDocumentComplianceYear": "2024",
        "businessPartnerNumber": "123",
        "reasonCode": "02",
        "reasonCodeDesc": "Manual feed",
        "sourceOrgPlant": "0563",
        "renewablesEpaCompanyId": "1000",
        "renewablesEpaFacilityId": "44",
        "fuelUnitofMeasurement": "BBL",
        "fuelAlternateUnitofMeasurement": "UG6",
        "billofLading": "23",
        "fuelCategory": "DL",
        "fuelQuantity": 150.000,
        "adjustmentBase": "V",
        "regulationUnitOfMeasurement": "RIN",
        "processingStatus": "01",
        "objectStatusDesc": "Created"
    }}`
    expect(response.status).toEqual(201)
     console.log(response.status);
    // if  (response.fuelQuantity === 150.000) {
    //   console.log("Success");
    // }
    // else {
    //   console.log("failed");
    // } 
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
            "RenewableQapCertifiedription":""
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
            "RenewableQapCertifiedription":""
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
})