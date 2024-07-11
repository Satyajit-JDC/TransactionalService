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




