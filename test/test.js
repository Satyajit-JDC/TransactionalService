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