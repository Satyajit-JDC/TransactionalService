// constants related to RFS2 Regulation Compliances
export const RFS2ConstantValues = {
    RFS2: "RFS2",
    credit: "C",
    debit: "D",
    eventTypeMDJ: "MDJ"
} as const;

// constants related to LCFS Regulation Compliances

// destination names
export const destinationNames = {
    regulationComplianceMasterService: "RegulationComplianceMasterService"
} as const;

// message types
export const messageTypes = {
    error: "E",
    success: "S"
} as const;

// language
export const language = "en_EN";

// Created Status
export const createdStatus = {
    key: "01",
    value: "Created"
} as const;

// Regulation sub scenario
export const regulationSubScenario = {
    RFS2_RVO: "RFS2_RVO",
    RFS2_RIN_RF: "RFS2_RIN_RF",
    RFS2_MADJ_RVO: "RFS2_MADJ_RVO",
    RFS2_MADJ_RIN: "RFS2_MADJ_RIN"
} as const;