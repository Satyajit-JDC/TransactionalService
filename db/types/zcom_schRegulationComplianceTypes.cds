type ObjectCategory            : String(1) enum {
    renewablesDeficitObject                                    = 'D';
    renewablesCreditObject                                     = 'C';
}

type SourceScenario            : String(40) enum {
    goodsMovement                                              = 'GM';
    deal                                                       = 'DEAL';
    manualAdjustment                                           = 'MDJ';
    emts                                                       = 'EMTS';
}

type TransactionCategory       : String(3) enum {
    purchase                                                   = 'PUR';
    sale                                                       = 'SAL';
    export                                                     = 'EXP';
    import                                                     = 'IMP';
    production                                                 = 'PRD';
    regrade                                                    = 'REG';
    transfer                                                   = 'TRN';
    manualAdjustment                                           = 'MDJ';
}

type Impact                    : String(1) enum {
    increase                                                   = 'I';
    decrease                                                   = 'D';
}

type PassRetainIndicator       : String(1) enum {
    retain                                                     = 'R';
    pass                                                       = 'P';
    unAssigned                                                 = 'U';
}

type MovementScenario          : String(1) enum {
    intercompanyScenario                                       = '1';
    intracompanyScenario                                       = '2';
}

type SubmittedtoRegulation     : String(1) enum {
    submitted                                                  = '1';
    notSubmitted                                               = '0';
}


type Quarter                   : String(1) enum {
    quarter1                                                   = '1';
    quarter2                                                   = '2';
    quarter3                                                   = '3';
    quarter4                                                   = '4';
}

type CiOption                  : String(1) enum {
    ciSpecificValue                                            = 'S';
    ciMinimumOrMaximumValue                                    = 'M';
    ciAverage                                                  = 'A';
}

type CapNTradeObjectType       : String(1) enum {
    offsets                                                    = 'F';
    allowances                                                 = 'A';
    obligations                                                = 'O';
}

type Dcode                     : String(1) enum {
    cellulosicBioFuel                                          = '3'; //Cellulosic biofuel
    biomassBasedDiesel                                         = '4'; //Biomass based diesel
    advancedBioFuel                                            = '5'; //Advanced biofuel
    renewableFuel                                              = '6'; //Renewable fuel
    cellulosicDiesel                                           = '7'; //Cellulosic diesel
}

type EmtsQapServiceTypeCode    : String(2) enum {
    qrin                                                       = '10'; //Q-RIN
    unverified                                                 = '30'; //Unverified
}

type Rfs2ObligationType        : String(2) enum {
    cellulosicBioFuel                                          = '01'; //Cellulosic biofuel
    biomassBasedDiesel                                         = '02'; //Biomass-based diesel
    advancedBioFuel                                            = '03'; //Advanced biofuel
    renewableFuel                                              = '04'; // Renewable fuel
}

type EmtsFuelCategoryCode      : String(3) enum {
    nonCellulosicEthanolEV10                                   = '010'; // Non-cellulosic Ethanol (EV 1.0)
    bioDieselEV15                                              = '020'; //020: Biodiesel (EV 1.5)
    cellulosicDieselEVApplicationRequired                      = '030'; //Cellulosic Diesel (EV application required)
    nonEsterRenewableDieselEV17                                = '040'; //Non-ester Renewable Diesel (EV 1.7)
    nonEsterRenewableDieselEV16                                = '041'; //Non-ester Renewable Diesel (EV 1.6)
    nonEsterRenewableDieselEV15                                = '042'; //Non-ester Renewable Diesel (EV 1.5)
    cellulosicEthanolEV10                                      = '060 '; //Cellulosic Ethanol (EV 1.0)
    butanolEV13                                                = '070'; //Butanol (EV 1.3)
    biogas77000BtuLHV1Gallon                                   = '080'; // Biogas (77,000 Btu LHV/1 gallon)
    cellulosicJetFuelEVApplicationRequired                     = '090'; // Cellulosic Jet Fuel (EV application required)
    cellulosicHeatingOilEVApplicationRequired                  = '100'; // Cellulosic Heating Oil (EV application required)
    cellulosicNaphthaEVApplicationRequired                     = '110'; // Cellulosic Naphtha (EV application required)
    naphthaEV15                                                = '130'; //Naphtha (EV 1.5)
    renewableJetFuelEVApplicationRequired                      = '140'; //Renewable Jet Fuel (EV application required)
    renewableHeatingOilEV16                                    = '150'; // Renewable Heating Oil (EV 1.6)
    renewableHeatingOilEV11                                    = '151'; // Renewable Heating Oil (EV 1.1)
    renewableHeatingOilEV12                                    = '152'; // Renewable Heating Oil (EV 1.2)
    renewableHeatingOilEV17                                    = '153'; // Renewable Heating Oil (EV 1.7)
    lpgEVApplicationRequired                                   = '160'; // LPG (EV application required)
    cellulosicRenewableGasolineEVApplicationRequired           = '170'; //Cellulosic Renewable Gasoline (EV application required)
    cellulosicRenewableGasolineBlendStockEVApplicationRequired = '171'; //Cellulosic Renewable Gasoline Blendstock (EV application req)
    fattyAcidEthylEster                                        = '180'; //Fatty Acid Ethyl Ester
    renewableCompressedNaturalGas                              = '190'; // Renewable Compressed Natural Gas
    renewableLiquefiedNaturalGas                               = '200'; // Renewable Liquefied Natural Gas
    renewableElectricity                                       = '210'; //Renewable Electricity
    dimethylEther                                              = '220' // Dimethyl Ether
}

type EmtsCoProductCode         : String(3) enum {
    wetDistillersGrains                                        = '010';
    dryDistillersGrains                                        = '020';
}

type EmtsTransactionTypeCode   : String(2) enum {
    generate                                                   = '01';
    separate                                                   = '02';
    retire                                                     = '03';
    buy                                                        = '04';
    sell                                                       = '05';
    unretire                                                   = '06';
    lock                                                       = '07';
    unlock                                                     = '08';
}

type EmtsUnitofMeasureCode     : String(3) enum {
    cubicFeet                                                  = '010';
    cubicFeet100                                               = '020';
    cubicFeet1000000                                           = '030';
    gallon                                                     = '040';
    liter                                                      = '050';
    shortTon                                                   = '060';
    cubicMeters                                                = '070';
    therm                                                      = '080';
    decatherm                                                  = '090';
    bushel                                                     = '100';
    pounds                                                     = '110';
}

type EmtsTransactionStatusCode : String(2) enum {
    proposed                                                   = '01';
    checking                                                   = '02';
    pending                                                    = '05';
    processing                                                 = '06';
    completed                                                  = '07';
    failed                                                     = '08';
    expired                                                    = '09';
    canceled                                                   = '10';
    denied                                                     = '11';
    removing                                                   = '12';
    submissionFailed                                           = '13';
}

type EmtsBuyORSellReasonCode   : String(3) enum {
    standardTrade                                              = '010';
    remedialActionIncorrectTradingPartner                      = '030';
    denyTrade                                                  = '050';
    cancelTrade                                                = '060';
    remedialActionDuplicateTrade                               = '080';
    tollingAgreement                                           = '110';
    intraCompanyTransfer                                       = '120';
}

type EmtsSeparateReasonCode    : String(2) enum {

    receiptOfRenewableFuelByObligatedPartyAsPer40CFR8          = '10'; //Receipt of Renewable Fuel by Obligated Party as per 40 CFR 8
    blendingToProduceATransportationFuelAsPer40CFR801          = '20'; //Blending to Produce a Transportation Fuel as per 40 CFR 80.1
    designationOfRenewableFuelAsPer40CFR801429b4               = '30'; // Designation of Renewable Fuel as per 40 CFR 80.1429(b)(4)
    upstreamDelegationForBlendingTFAsPer40CFR801440            = '40'; // Upstream Delegation for Blending(TF) as per 40 CFR 80.1440
    exportOfRenewableFuelAsPer40CFR801429b3                    = '50'; // Export of Renewable Fuel as per 40 CFR 80.1429(b)(3)
    useasHeatingOilOrJetFuelAsPer40CFR801429b2                 = '60'; // Use as Heating Oil or Jet Fuel as per 40 CFR 80.1429(b)(2)
    useInaNonRoadEngineOrVehicle                               = '70'; // Use in a non-road engine or vehicle
    designationOfRenewableFuelHoAsPer40CFR801429b4             = '80'; // Designation of Renewable Fuel HO as per 40 CFR 80.1429(b)(4)

}

type EmtsRetireReasonCode      : String(3) enum {
    reportedSpill                                              = '010'; //Reported spill
    contaminatedOrSpoiledFuel                                  = '020'; //Contaminated or spoiled fuel
    importVolumeCorrection                                     = '030'; //Import volume correction
    renewableFuelUsedinAnOceanGoingVessel                      = '040'; //Renewable fuel used in an ocean-going vessel
    invalidRIN                                                 = '050'; //Invalid RIN
    volumeErrorCorrection                                      = '060'; //Volume error correction
    demonstrateAnnualCompliance                                = '080'; //Demonstrate annual compliance
    renewableFuelUsedOrDesignatedToBeUsedInAnyApplication      = '090'; //Renewable fuel used or designated to be used in any application
    remediationOfInvalidRINUseForCompliance                    = '130'; //Remediation of Invalid RIN Use for Compliance
    invalidCredit                                              = '140'; //Invalid Credit
    remediationOfInvalidCreditUseForCompliance                 = '150'; //Remediation of Invalid Credit Use for Compliance

}

type EmtsRinStatusCode         : String(1) enum {
    active                                                     = '1';
    manuallyLocked                                             = '3';
    pending                                                    = '4';
    expired                                                    = '6';
}

type EmtsAssignmentCode        : String(1) enum {
    assignedToFuel                                             = '1'; //Assigned to Fuel
    separatedPer40CFR801429                                    = '2'; //Separated per 40 CFR 80.1429
}

type EmtsBusinessActivityCode  : String(3) enum {
    domesticRenewableFuelProducer                              = '010'; //Domestic Renewable Fuel Producer
    foreignRenewableFuelProducer                               = '020'; //Foreign Renewable Fuel Producer
    renewableFuelImporter                                      = '030'; //Renewable Fuel Importer
    nonRenewableFuelImporter                                   = '040'; //Non-renewable Fuel Importer
    renewableFuelExporter                                      = '050'; //Renewable Fuel Exporter
    refiner                                                    = '060'; //Refiner
    smallRefiner                                               = '070'; //Small Refiner
    rinOwner                                                   = '080'; //RIN Owner
    smallBlender                                               = '090'; //Small Blender
    qualityAssuranceProvider                                   = '100'; //Quality Assurance Provider
}

type EmtsComplianceLevelCode   : String(3) enum {
    aggregatedImporterComplianceAgimp                          = '010'; //Aggregated Importer Compliance (AGIMP)
    aggregatedRefinerComplianceAgref                           = '020'; //Aggregated Refiner Compliance (AGREF)
    exporterComplianceExprt                                    = '030'; //Exporter Compliance (EXPRT)
    refinerByRefinery                                          = '050'; //Refiner by Refinery
}

type EmtsGenerateReasonCode    : String(3) enum {
    refineNonRenewableFuel                                     = '010'; // Refine non-renewable fuel
    importNonRenewableFuel                                     = '020'; //Import non-renewable fuel
    remedialActionRefinerCredits                               = '030'; //Remedial Action - Refiner Credits
    remedialActionImporterCredits                              = '040'; //Remedial Action - Importer Credits
}

type EmtsCreditStdCode         : String(2) enum {
    ppmSulfur30                                                = '10';
    ppmSulfur10                                                = '20';
    benzene062Percentage                                       = '30';
}

type EmtsCreditTypeCode        : String(2) enum {
    sulfur                                                     = '10';
    benzene                                                    = '20';
    sulfurTransitional                                         = '30';
}

type TimesTraded               : String(1) enum {
    trade0                                                     = '0';
    trade1                                                     = '1';
    trade2                                                     = '3';
}

type PriceStatus               : String(1) enum {
    priced                                                     = 'P';
    unPriced                                                   = 'U';
}

type MatchStatus               : String(1) enum {
    fullyMatched                                               = 'F';
    partiallyMatched                                           = 'P';
    unmatched                                                  = 'U';
}

type ProvFinalPrice            : String(1) enum {
    provisionalPrice                                           = 'P';
    finalPrice                                                 = 'F';
}

type YesorNo                   : String(1) enum {
    yes                                                        = '1';
    no                                                         = '0';
}

type DocumentType              : String(2) enum {
    salesOrder                                                 = 'A';
    salesContractSD                                            = 'B';
    purchaseOrder                                              = 'C';
    outboundDelivery                                           = 'D';
    inboundDelivery                                            = 'E';
    goodsMovementGigr                                          = 'G';
    purchaseContractMM                                         = 'N';
}

// Adjustment base
type AdjustmentBase            : String(1) enum {
    volume                                                     = 'V';
    quantity                                                   = 'Q';
}

aspect CapAndTradeStructure {

}

type Month                     : String(2) enum {
    JAN                                                        = '00';
    FEB                                                        = '01';
    MAR                                                        = '02';
    APR                                                        = '03';
    MAY                                                        = '04';
    JUN                                                        = '05';
    JUL                                                        = '06';
    AUG                                                        = '07';
    SEP                                                        = '08';
    OCT                                                        = '09';
    NOV                                                        = '10';
    DEC                                                        = '11';
};

aspect Valuation {
    valuationPool                            : String(1)      @title: '{i18n>RenewablesValuationPool}';
    dealStrategy                             : String(40)     @title: '{i18n>RenewablesDealStrategy}';
    dealStrategyDescription                  : String(225)    @title: '{i18n>RenewablesDealStrategyDescription}';
    valuationType                            : String(10)     @title: '{i18n>ValuationType}';
    exchangeAgreementNumber                  : String(10)     @title: '{i18n>ExchangeAgreementNumber}';
    provFinalPrice                           : ProvFinalPrice @title: '{i18n>ProvisionalorFinalPrice}';
    ignoreProvPrice                          : YesorNo        @title: '{i18n>IgnoreProvisionalPrice}';
    fuelGallonConditionAmountOrPercentScale  : Decimal(11, 2) @title: '{i18n>FuelGallonConditionAmountOrPercentScale}';
    fuelGallonConditionUnitCurrencyOrPercent : Decimal(5)     @title: '{i18n>FuelGallonConditionUnitCurrencyOrPercent}';
    fuelGallonConditionPricingUnit           : Decimal(5)     @title: '{i18n>ConditionPricingUnit}';
    fuelGallonConditionUnit                  : Decimal(3)     @title: '{i18n>ConditionUnit}';
    rinPriceConditionAmountOrPercentScale    : Decimal(11, 2) @title: '{i18n>RINPriceConditionAmountOrPercentScale}';
    rinPriceConditionUnitCurrencyOrPercent   : Decimal(5)     @title: '{i18n>RINPriceConditionUnitCurrencyOrPercent}';
    rinPriceConditionPricingUnit             : Decimal(5)     @title: '{i18n>ConditionPricingUnit}';
    rinPriceConditionUnit                    : Decimal(3)     @title: '{i18n>ConditionUnit}';
}


aspect RenewableDate {
    postingDate                             : Date       @assert.unique  @title: '{i18n>PostingDate}';
    renewablesPostingMonth                  : Month      @title: '{i18n>RenewablespostingMonth}';
    renewablesPostingQuarter                : Quarter    @title: '{i18n>RenewablespostingQuarter}';
    renewablesPostingComplianceYear         : String(4)  @title: '{i18n>RenewablespostingComplianceYear}';
    documentDate                            : Date       @assert.unique  @title: '{i18n>documentDate}';
    renewablesDocumentMonth                 : Month      @title: '{i18n>RenewablesdocumentMonth}';
    renewablesDocumentMonthDes              : String(10) @title: '{i18n>RenewablesdocumentMonthDes}';
    renewablesDocumentQuarter               : Quarter    @title: '{i18n>RenewablesdocumentQuarter}';
    renewablesDocumentComplianceYear        : String(4)  @title: '{i18n>RenewablesdocumentComplianceYear}';
    reversalPostingDate                     : Date       @assert.unique  @title: '{i18n>reversalPostingDate}';
    renewablesReversalPostingMonth          : Month      @title: '{i18n>RenewablesreversalPostingMonth}';
    renewablesReversalPostingQuarter        : Quarter    @title: '{i18n>RenewablesreversalPostingQuarter}';
    renewablesReversalPostingComplianceYear : String(4)  @title: '{i18n>RenewablesreversalPostingComplianceYear}';
    productiondate                          : Date       @assert.unique  @title: '{i18n>productiondate}';
    renewablesProductionMonth               : Month      @title: '{i18n>RenewablesproductionMonth}';
    renewablesProductionQuarter             : Quarter    @title: '{i18n>RenewablesproductionQuarter}';
    renewablesProductionComplianceYear      : String(4)  @title: '{i18n>RenewablesproductionComplianceYear}';
    transferDate                            : Date       @assert.unique  @title: '{i18n>transferDate}';
    renewablesTransferMonth                 : Month      @title: '{i18n>RenewablestransferMonth}';
    renewablesTransferQuarter               : Quarter    @title: '{i18n>RenewablestransferQuarter}';
    renewablesTransferComplianceYear        : String(4)  @title: '{i18n>RenewablestransferComplianceYear}';
    submissionDate                          : Date       @assert.unique  @title: '{i18n>submissionDate}';
    renewablesSubmissionMonth               : Month      @title: '{i18n>RenewablessubmissionMonth}';
    renewablesSubmissionQuarter             : Quarter    @title: '{i18n>RenewablessubmissionQuarter}';
    renewablesSubmissionComplianceYear      : String(4)  @title: '{i18n>RenewablessubmissionComplianceYear}';

}


aspect ABTBenzeneAndSulphur {
    emtsCreditStdCode  : EmtsCreditStdCode  @title: '{i18n>RenewablesEMTSCreditStandardCode}';
    emtsCreditTypeCode : EmtsCreditTypeCode @title: '{i18n>RenewablesEMTSCreditTypeCode}';
    timesTraded        : TimesTraded        @title: '{i18n>RenewablesTimesTraded}';
}

aspect LCFS {
    fuelPathwayCodeType              : String(15)    @title: '{i18n>RenewablesFuelPathwayCodeType}';
    physicalPathwayCodeType          : String(5)     @title: '{i18n>RenewablesPhysicalPathwayCodeType}';
    targetCIValue                    : Decimal(5, 0) @title: '{i18n>RenewablesTargetCIValue}';
    fuelApplicationType              : String(10)    @title: '{i18n>RenewablesFuelApplicationType}';
    fuelGroup                        : String(4)     @title: '{i18n>RenewablesFuelGroup}';
    energyDensity                    : Decimal(5, 0) @title: '{i18n>RenewablesEnergyDensity}';
    energyEfficiencyRatioValue       : Decimal(5, 0) @title: '{i18n>RenewablesEnergyEfficiencyRatioValue}';
    lcfsActualCarbonIntensity        : String(4)     @title: '{i18n>RenewablesLCFSActualCarbonIntensity}';
    fuelName                         : String(4)     @title: '{i18n>RenewablesFuelName}';
    aggregationIndicatorforReporting : String(1)     @title: '{i18n>RenewablesAggregationIndicatorforReporting}';
    ciOption                         : CiOption      @title: '{i18n>RenewablesCIOption}';
    ciSpecificValue                  : Decimal(5, 0) @title: '{i18n>RenewablesCISpecificValue}';
    ciMaximumValue                   : Decimal(5, 0) @title: '{i18n>RenewablesCIMaximumValue}';
    ciMinimumValue                   : Decimal(5, 0) @title: '{i18n>RenewablesCIMinimumValue}';
    ciAverageValue                   : Decimal(5, 0) @title: '{i18n>RenewablesCIAverageValue}';
}


aspect RFS2 {
    dcode                          : Dcode                     @title: '{i18n>RenewablesDCode}';
    dcodeDesc                      : String(50)                @title: '{i18n>RenewablesDCodeDesc}';
    rfs2ObligationType             : String(3)                 @title: '{i18n>RenewablesRFS2ObligationType}'; //Rfs2ObligationType
    rfs2ObligationTypeDesc         : String(100)               @title: '{i18n>RenewablesRFS2ObligationTypeDesc}';
    vintageYear                    : String(4)                 @title: '{i18n>RenewablesVintageYear}';
    rinMultiplier                  : Decimal(5)                @title: '{i18n>RenewablesRINMultiplier}';
    // generator          :
    // pricedIndicator                :
    qapCertified                   : String(50)                @title: '{i18n>qapCertified}';
    qapCertifiedDesc               : String(100)               @title: '{i18n>qapCertifiedDesc}';
    emtsQapServiceTypeCode         : EmtsQapServiceTypeCode    @title: '{i18n>RenewablesEMTSQAPServiceTypeCode}';
    emtsBatchNumberText            : String(20)                @title: '{i18n>RenewablesEMTSBatchNumberText}';
    emtsProcessCode                : String(3)                 @title: '{i18n>RenewablesEMTSProcessCode}';
    emtsFuelCategoryCode           : EmtsFuelCategoryCode      @title: '{i18n>RenewablesEMTSFuelCategoryCode}';
    emtsCoProductCode              : EmtsCoProductCode         @title: '{i18n>RenewablesEMTSCoProductCode}';
    emtsTransactionTypeCode        : EmtsTransactionTypeCode   @title: '{i18n>RenewablesEMTSTransactionTypeCode}';
    emtsUnitOfMeasureCode          : EmtsUnitofMeasureCode     @title: '{i18n>RenewablesEMTSUnitofMeasureCode}';
    emtsTransactionStatusCode      : EmtsTransactionStatusCode @title: '{i18n>RenewablesEMTSTransactionStatusCode}';
    emtsSeparateReasonCode         : EmtsSeparateReasonCode    @title: '{i18n>RenewablesEMTSSeparateReasonCode}';
    emtsRetireReasonCode           : EmtsRetireReasonCode      @title: '{i18n>RenewablesEMTSRetireReasonCode}';
    emtsRinStatusCode              : EmtsRinStatusCode         @title: '{i18n>RenewablesEMTSRINStatusCode}';
    emtsAssignmentCode             : EmtsAssignmentCode        @title: '{i18n>RenewablesEMTSAssignmentCode}';
    emtsBusinessActivityCode       : EmtsBusinessActivityCode  @title: '{i18n>RenewablesEMTSBusinessActivityCode}';
    emtsBuyOrSellReasonCode        : EmtsBuyORSellReasonCode   @title: '{i18n>RenewablesEMTSBuyorSellReasonCode}';
    emtsComplianceLevelCode        : EmtsComplianceLevelCode   @title: '{i18n>RenewablesEMTSComplianceLevelCode}';
    emtsTradingPartnerInvoice      : String(100)               @title: '{i18n>RenewablesEMTSTradingPartnerInvoice}';
    emtsTradingPartnerBillOfLading : String(100)               @title: '{i18n>RenewablesEMTSTradingPartnerBillofLading}';
    emtsTradingPartnerPTD          : String(100)               @title: '{i18n>RenewablesEMTSTradingPartnerPTD}';
    emtsGenerateReasonCode         : EmtsGenerateReasonCode    @title: '{i18n>RenewablesEMTSGenerateReasonCode}';
}

aspect Enterprise {
    organizationId                                : String(4)    @title: '{i18n>OrganizationId}';
    organizationFacilityIdentifier                : String(5)    @title: '{i18n>OrganizationFacilityId}';
    transactionPartnerOrgId                       : String(4)    @title: '{i18n>TransactionPartnerOrgId}';
    transactionPartnerFacilityId                  : String(5)    @title: '{i18n>TransactionPartnerFacilityId}';
    generateOrganizationId                        : String(4)    @title: '{i18n>GenerateOrganizationId}';
    generateFacilityId                            : String(5)    @title: '{i18n>GenerateFacilityId}';
    epaCompanyIdFPR                               : String(4)    @title: '{i18n>RenewablesEPACompanyID}';
    epafacilityIdFPR                              : String(5)    @title: '{i18n>RenewablesEPAFacilityID}';
    tprCompanyIdFPR                               : String(4)    @title: '{i18n>RenewablesTPRCompanyID}';
    tprFacilityIdFPR                              : String(5)    @title: '{i18n>RenewablesTPRFacilityID}';
    referenceContractDocumentType                 : DocumentType @title: '{i18n>RefContractDocType}';
    referenceContractGeneralDocumentNumber        : String(10)   @title: '{i18n>RefContractGenDocNumber}';
    referenceContractDocumentItemNumber           : String(6)    @title: '{i18n>RefContractDocItemNumber}}';
    referenceContractDocumentSubItem              : String(6)    @title: '{i18n>RefContractDocSubItem}';
    referenceContractMaterialDocumentYear         : String(4)    @title: '{i18n>RefContractMaterialDocYear}';
    referenceContractSequentialSegmentNumber      : String(10)   @title: '{i18n>RenewablesSequentialSegmentNumber}';
    rfOrderDocumentType                           : DocumentType @title: '{i18n>RfOrderDocType}';
    rfOrderGeneralDocumentNumber                  : String(10)   @title: '{i18n>RfOrderGenDocNumber}';
    rfOrderDocumentItemNumber                     : String(6)    @title: '{i18n>RfOrderDocItemNumber}';
    rfOrderDocumentSubItem                        : String(6)    @title: '{i18n>RfOrderDocSubItem}';
    rfOrderMaterialDocumentYear                   : String(4)    @title: '{i18n>RfOrderMaterialDocYear}';
    rfInboundDeliveryDocumentType                 : DocumentType @title: '{i18n>RfInboundDeliveryDocType}';
    rfInboundDeliveryGeneralDocumentNumber        : String(10)   @title: '{i18n>RfInboundDeliveryGenDocNumber}';
    rfInboundDeliveryDocumentItemNumber           : String(6)    @title: '{i18n>RfInboundDeliveryDocItemNumber}';
    rfInboundDeliveryDocumentSubItem              : String(6)    @title: '{i18n>RfInboundDeliveryDocSubItem}';
    rfInboundDeliveryMaterialDocumentYear         : String(4)    @title: '{i18n>RfInboundDeliveryMaterialDocYear}';
    rfOutboundDeliveryDocumentType                : DocumentType @title: '{i18n>RfOutboundDeliveryDocType}';
    rfOutboundDeliveryGeneralDocumentNumber       : String(10)   @title: '{i18n>RfOutboundDeliveryGenDocNumber}';
    rfOutboundDeliveryDocumentItemNumber          : String(6)    @title: '{i18n>RfOutboundDeliveryDocItemNumber}';
    rfOutboundDeliveryDocumentSubItem             : String(6)    @title: '{i18n>RfOutboundDeliveryDocSubItem}';
    rfOutboundDeliveryMaterialDocumentYear        : String(4)    @title: '{i18n>RfOutboundDeliveryMaterialDocYear}';
    fuelOnwardMaterialentType                     : DocumentType @title: '{i18n>FuelOnwardMaterialDocType}';
    fuelOnwardMaterialalDocumentNumber            : String(10)   @title: '{i18n>FuelOnwardMaterialGenDocNumber}';
    fuelOnwardMaterialentItemNumber               : String(6)    @title: '{i18n>FuelOnwardMaterialItemNumber}';
    fuelOnwardMaterialentSubItem                  : String(6)    @title: '{i18n>FuelOnwardMaterialDocSubItem}';
    fuelOnwardMaterialialDocumentYear             : String(4)    @title: '{i18n>FuelOnwardMaterialDocYear}';
    fuelReversalMaterialentType                   : DocumentType @title: '{i18n>FuelReversalMaterialDocType}';
    fuelReversalMaterialalDocumentNumber          : String(10)   @title: '{i18n>FuelReversalMaterialGenDocNumber}';
    fuelReversalMaterialentItemNumber             : String(6)    @title: '{i18n>FuelReversalMaterialDocItemNumber}';
    fuelReversalMaterialentSubItem                : String(6)    @title: '{i18n>FuelReversalMaterialDocSubItem}';
    fuelReversalMaterialialDocumentYear           : String(4)    @title: '{i18n>FuelReversalMaterialDocYear}';
    renewableOrderNoDocumentType                  : DocumentType @title: '{i18n>RenewableOrderDocType}';
    renewableOrderNoGeneralDocumentNumber         : String(10)   @title: '{i18n>RenewableOrderGenDocNumber}';
    renewableOrderNoDocumentItemNumber            : String(6)    @title: '{i18n>RenewableOrderDocItemNumber}';
    renewableOrderNoDocumentSubItem               : String(6)    @title: '{i18n>RenewableOrderDocSubItem}';
    renewableOrderNoMaterialDocumentYear          : String(4)    @title: '{i18n>RenewableOrderMaterialDocYear}';
    renewableDeliveryDocumentType                 : DocumentType @title: '{i18n>RenewableDeliveryDocType}';
    renewableDeliveryGeneralDocumentNumber        : String(10)   @title: '{i18n>RenewableDeliveryGenDocNumber}';
    renewableDeliveryDocumentItemNumber           : String(6)    @title: '{i18n>RenewableDeliveryDocItemNumber}';
    renewableDeliveryDocumentSubItem              : String(6)    @title: '{i18n>RenewableDeliveryDocSubItem}';
    renewableDeliveryMaterialDocumentYear         : String(4)    @title: '{i18n>RenewableDeliveryMaterialDocYear}';
    renewableMaterialDocumentType                 : DocumentType @title: '{i18n>RenewableMaterialDocType}';
    renewableMaterialGeneralDocumentNumber        : String(10)   @title: '{i18n>RenewableMaterialGenDocNumber}';
    renewableMaterialDocumentItemNumber           : String(6)    @title: '{i18n>RenewableMaterialDocItemNumber}';
    renewableMaterialDocumentSubItem              : String(6)    @title: '{i18n>RenewableMaterialDocSubItem}';
    renewableMaterialMaterialDocumentYear         : String(4)    @title: '{i18n>RenewableMaterialDocYear}';
    renewableReverseMaterialDocumentType          : DocumentType @title: '{i18n>RenewableReverseMaterialDocType}';
    renewableReverseMaterialGeneralDocumentNumber : String(10)   @title: '{i18n>RenewableReverseMaterialGenDocNumber}';
    renewableReverseMaterialDocumentItemNumber    : String(6)    @title: '{i18n>RenewableReverseMaterialDocItemNumber}';
    renewableReverseMaterialDocumentSubItem       : String(6)    @title: '{i18n>RenewableReverseMaterialDocSubItem}';
    renewableReverseMaterialMaterialDocumentYear  : String(4)    @title: '{i18n>RenewableReverseMaterialDocYear}';
    sourceOrgCompanyCode                          : String(4)    @assert.unique  @title: '{i18n>sourceOrgCompanyCode}';
    sourceOrgPlant                                : String(4)    @title: '{i18n>sourceOrgPlant}';
    sourceOrgStorageLocation                      : String(4)    @title: '{i18n>sourceOrgStorageLocation}';
    sourceOrgMaterialNumber                       : String(40)   @title: '{i18n>sourceOrgMaterialNumber}';
    sourceOrgMaterialNumberDesc                   : String(100)  @title: '{i18n>sourceOrgMaterialNumberDesc}';
    sourceOrgCountryKey                           : String(10)   @title: '{i18n>sourceOrgCountryKey}';
    sourceOrgRegion                               : String(3)    @title: '{i18n>sourceOrgRegion}';
    destinationOrgCompanyCode                     : String(4)    @assert.unique  @title: '{i18n>destinationOrgCompanyCode}';
    destinationOrgPlant                           : String(4)    @title: '{i18n>destinationOrgPlant}';
    destinationOrgStorageLocation                 : String(4)    @title: '{i18n>destinationOrgStorageLocation}';
    destinationOrgMaterialNumber                  : String(40)   @title: '{i18n>destinationOrgMaterialNumber}';
    destinationOrgCountryKey                      : String(10)   @title: '{i18n>destinationOrgCountryKey}';
    destinationOrgRegion                          : String(3)    @title: '{i18n>destinationOrgRegion}';
    fuelLogisticsCompanyCode                      : String(4)    @assert.unique  @title: '{i18n>fuelLogisticsCompanyCode}';
    fuelLogisticsPlant                            : String(4)    @title: '{i18n>fuelLogisticsPlant}';
    fuelLogisticsStorageLocation                  : String(4)    @title: '{i18n>fuelLogisticsStorageLocation}';
    fuelLogisticsMaterialNumber                   : String(40)   @title: '{i18n>fuelLogisticsMaterialNumber}';
    fuelLogisticsMaterialNumberDesc               : String(100)  @title: '{i18n>fuelLogisticsMaterialNumberDesc}';
    fuelLogisticsCountryKey                       : String(10)   @title: '{i18n>fuelLogisticsCountryKey}';
    fuelLogisticsRegion                           : String(3)    @title: '{i18n>fuelLogisticsRegion}';
    regulationLogisticsCompanyCode                : String(4)    @assert.unique  @title: '{i18n>regulationLogisticsCompanyCode}';
    regulationLogisticsPlant                      : String(4)    @title: '{i18n>regulationLogisticsPlant}';
    regulationLogisticsStorageLocation            : String(4)    @title: '{i18n>regulationLogisticsStorageLocation}';
    regulationLogisticsMaterialNumber             : String(40)   @title: '{i18n>regulationLogisticsMaterialNumber}';
    regulationLogisticsMaterialNumberDesc          : String(100)  @title: '{i18n>regulationLogisticsMaterialNumberDesc}';
    regulationLogisticsCountryKey                 : String(10)   @title: '{i18n>regulationLogisticsCountryKey}';
    regulationLogisticsRegion                     : String(3)    @title: '{i18n>regulationLogisticsRegion}';
    nominationNumber                              : String(20)   @assert.unique  @title: '{i18n>NominationNumber}';
    nominationKey                                 : String(20)   @title: '{i18n>NominationTechnicalKey}';
    nominationKeyItem                             : String(10)   @title: '{i18n>NominationKeyItem}';
    oilTswTicketKey                               : String(20)   @title: '{i18n>OilTswTicketKey}';
    oiltswTicketItemNumber                        : String(6)    @title: '{i18n>OilTswTicketItemNumber}';
    oiltswTicketVersion                           : String(3)    @title: '{i18n>OilTswTicketVersion}';
    oiltswTicketPurpose                           : String(1)    @title: '{i18n>OilTswTicketPurpose}';
    oiltswTicketType                              : String(3)    @title: '{i18n>OilTswTicketType}';
    oiltswExternalticketNumber                    : String(20)   @title: '{i18n>OilTswExternalTicketNumber}';
    externalPositionNumber                        : String(6)    @title: '{i18n>ExternalPositionNumber}';
    modeofTransport                               : String(2)    @title: '{i18n>ModeOfTransport}';
    truckNumber                                   : String(10)   @assert.unique  @title: '{i18n>TruckNumber}';
    externalBatchNumber                           : String(16)   @assert.unique  @title: '{i18n>BatchNumber}';
    oilFieldsForRenewablesOriginRegion            : String(3)    @title: '{i18n>oilFieldsForRenewablesOriginRegion}';
    oilFieldsForRenewablesDestinationRegion       : String(3)    @title: '{i18n>oilFieldsForRenewablesDestinationRegion}';
}

type UUID_Type : UUID;
type actionName : String(20);
type regSubScn : String(20);


