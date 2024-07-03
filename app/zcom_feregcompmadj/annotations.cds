using RegulationComplianceTransactionService as service from '../../srv/zcom_srvRegulationComplianceService';
annotate service.ManualAdjRegulationComplianceTransaction with @(
    UI.HeaderInfo                    : {
        TypeName      : 'Regulation Objects',
        TypeNamePlural: 'Regulation Objects',
        Title         : {Value: objectId}
    },
    UI.FieldGroup #HeaderInfo        : {
        $Type: 'UI.FieldGroupType',
        Data : [{Value: regulationType}]
    },
    UI.FieldGroup #HeaderGroup       : {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: regulationType,
                Label: '{i18n>Regulation}'
            },
            {
                $Type: 'UI.DataField',
                Value: objectType,
                Label: '{i18n>CategoryType}'
            },
            {
                $Type: 'UI.DataField',
                Value: documentDate,
                Label: '{i18n>DocumentDate}'
            },
            {
                $Type: 'UI.DataField',
                Value: renewablesDocumentComplianceYear,
                Label: '{i18n>ComplianceYear/Quarter}'
            },
            {
                $Type: 'UI.DataField',
                Value: businessPartnerNumber,
                Label: '{i18n>BusinessPartner}'
            },
            {
                $Type: 'UI.DataField',
                Value: renewablesEpaCompanyId,
                Label: '{i18n>EPACompanyID/Name}'
            },
            {
                $Type: 'UI.DataField',
                Value: reasonCode,
                Label: '{i18n>ReasonCode}'
            },
            {
                $Type: 'UI.DataField',
                Value: reasonCodeDesc,
                Label: '{i18n>ReasonCodeDescription}'
            },
 
            // {
            //     $Type: 'UI.DataField',
            //     Value: adjustmentBase,
            //     Label: '{i18n>AdjustmentBase}'
            // },
            {
                $Type: 'UI.DataField',
                Value: transactionCategory,
                Label: '{i18n>TransactionType}'
            },
            {
                $Type: 'UI.DataField',
                Value: impact,
                Label: '{i18n>Impact}'
            },
            {
                $Type: 'UI.DataField',
                Value: sourceOrgPlant,
                Label: '{i18n>Plant}'
            },
            {
                $Type : 'UI.DataField',
                Value : adjustmentBase,
                Label: '{i18n>AdjustmentBase}'
            },
            {
                $Type : 'UI.DataField',
                Value : billofLading,
                Label: '{i18n>BillOfLadding}'
            },
            {
                $Type : 'UI.DataField',
                Value : fuelCategory,
                Label: '{i18n>FuelCategory}'
            },
        ],
    },
 
    UI.FieldGroup #QuantityBasedGroup: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: regulationLogisticsMaterialNumber,
                Label: '{i18n>RVOMaterial}'
            },
            {
                $Type: 'UI.DataField',
                Value: regulationQuantity,
                Label: '{i18n>Quantity}'
            },
            {
                $Type: 'UI.DataField',
                Value: regulationUnitOfMeasurement,
                Label: '{i18n>UoM}'
            },
 
        ],
    },
 
    UI.FieldGroup #VolumeBasedGroup  : {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: fuelLogisticsMaterialNumber,
                Label: '{i18n>FuelMaterial}'
            },
            {
                $Type: 'UI.DataField',
                Value: fuelQuantity,
                Label: '{i18n>Volume}'
            },
            {
                $Type: 'UI.DataField',
                Value: fuelUnitofMeasurement,
                Label: '{i18n>UoM}'
            },
            {
                $Type: 'UI.DataField',
                Value: renewablesEpaCompanyId,
                Label: '{i18n>ProducerCompanyID}'
            },
            {
                $Type: 'UI.DataField',
                Value: renewablesEpaFacilityId,
                Label: '{i18n>ProducerFacilityID}'
            },
        ],
    },
    UI.HeaderFacets                  : [{
        $Type : 'UI.ReferenceFacet',
        Target: '@UI.FieldGroup#HeaderInfo',
    }],
    UI.Facets                        : [
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'HeaderFacet',
            Label : 'Header',
            Target: '@UI.FieldGroup#HeaderGroup',
        },
        {
             
            $Type : 'UI.ReferenceFacet',
            ID    : 'QuantityBasedFacet2',
            Label : 'Quantity Based',
            Target: '@UI.FieldGroup#QuantityBasedGroup',
            ![@UI.Hidden]: { $edmJson : {$If : [ { $Eq : [ { $Path : 'adjustmentBase'}, 'Q' ]}, false, true ]}}
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'VolumeBasedFacet',
            Label : 'Volume Based',
            Target: '@UI.FieldGroup#VolumeBasedGroup',
            ![@UI.Hidden]: { $edmJson : {$If : [ { $Eq : [ { $Path : 'adjustmentBase'}, 'V' ]}, false, true ]}}
        },
    ],
    UI.LineItem                      : [
        {
            $Type: 'UI.DataField',
            Value: objectId,
            Label: '{i18n>RenewableID}',
        },
        {
            $Type: 'UI.DataField',
            Value: regulationType,
            Label: '{i18n>RegulationType}',
        },
        {
            $Type: 'UI.DataField',
            Value: subObjectScenario,
            Label: '{i18n>SubObjectScenario}',
        },
        {
            $Type: 'UI.DataField',
            Value: transactionType,
            Label: '{i18n>TransactionType}',
        },
        {
            $Type: 'UI.DataField',
            Value: billofLading,
            Label: '{i18n>BillOfLadding}',
        },
        {
            $Type: 'UI.DataField',
            Value: fuelCategory,
            Label: '{i18n>FuelCategory}',
        },
        {
            $Type: 'UI.DataField',
            Value: regulationLogisticsMaterialNumber,
            Label: '{i18n>RVOMaterial}',
        },
        {
            $Type: 'UI.DataField',
            Value: sourceOrgPlant,
            Label: '{i18n>Plant}',
        },
        {
            $Type: 'UI.DataField',
            Value: renewablesDocumentComplianceYear,
            Label: '{i18n>ComplianceYear}',
        },
        {
            $Type: 'UI.DataField',
            Value: regulationQuantity,
            Label: '{i18n>RVOQty}',
        },
        {
            $Type: 'UI.DataField',
            Value: regulationUnitOfMeasurement,
            Label: '{i18n>UoM}',
        },
        {
            $Type: 'UI.DataField',
            Value: documentDate,
            Label: '{i18n>RVODocDate}',
        },
        {
            $Type: 'UI.DataField',
            Value: adjustmentBase,
            Label: '{i18n>AdjustmentBase}',
        },{
            $Type: 'UI.DataField',
            Value: createdAt,
            Label: '{i18n>Createdon}',
        }
    ],
);
 
annotate service.ManualAdjRegulationComplianceTransaction with @(UI.SelectionFields: [
    objectId,
    regulationType,
    objectCategory,
    subObjectScenario
]);
 
annotate service.ManualAdjRegulationComplianceTransaction with {
    objectId @Common.Label : '{i18n>RenewableID}'
};
annotate service.ManualAdjRegulationComplianceTransaction with {
    objectCategory @Common.Label : '{i18n>CategoryType}'
};
annotate service.ManualAdjRegulationComplianceTransaction with {
    regulationType @Common.Label : '{i18n>RegulationType}'
};
annotate service.ManualAdjRegulationComplianceTransaction with {
    subObjectScenario @Common.Label : '{i18n>SubObjectScenario}'
};
annotate service.ManualAdjRegulationComplianceTransaction with {
    @Common.FilterDefaultValue : 'RFS2_MADJ_RVO'
    subObjectScenario
};
// annotate service.MaintainRegulationTransactionType with {
//     transactionType @Common.Text : {
//             $value : description,
//             ![@UI.TextArrangement] : #TextFirst,
//         }
// };
annotate service.ManualAdjRegulationComplianceTransaction with {
    regulationType @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'MaintainRegulationType',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : regulationType,
                    ValueListProperty : 'regulationType',
                },
            ],
            Label : 'Regulation Type',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.ManualAdjRegulationComplianceTransaction with @(
    UI.Identification : []
);
annotate service.ManualAdjRegulationComplianceTransaction with {
    regulationLogisticsMaterialNumber @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'MaintainRenewableMaterialConfiguration',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : regulationLogisticsMaterialNumber,
                    ValueListProperty : 'material',
                },
                {
                    $Type : 'Common.ValueListParameterIn',
                    ValueListProperty : 'regulationType/regulationType',
                    LocalDataProperty : regulationType,
                },
            ],
            Label : 'RVO Material',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.MaintainRenewableMaterialConfiguration with @(
    UI.PresentationVariant #vh_ManualAdjRegulationComplianceTransaction_sourceOrgCompanyMaterialNumber : {
        $Type : 'UI.PresentationVariantType',
        SortOrder : [
            {
                $Type : 'Common.SortOrderType',
                Property : material,
                Descending : false,
            },
        ],
    }
);
annotate service.MaintainRenewableMaterialConfiguration with {
    material @Common.Text : {
            $value : description,
            ![@UI.TextArrangement] : #TextFirst,
        }
};
annotate service.ManualAdjRegulationComplianceTransaction with {
    regulationCompanyName @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'MaintainRegulationObjecttype',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : regulationCompanyName,
                    ValueListProperty : 'objectCategory_category',
                },
            ],
            Label : 'Category Type',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.MaintainRegulationObjecttype with {
    objectCategory_category @Common.Text : description
};
annotate service.ManualAdjRegulationComplianceTransaction with {
    regulationCategory @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'MaintainRegulationType',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : regulationCategory,
                    ValueListProperty : 'regulationType',
                },
            ],
            Label : 'Regulation',
        },
        Common.ValueListWithFixedValues : true
)};
 
annotate service.ManualAdjRegulationComplianceTransaction with {
    objectCategory @Common.Text : objectType
};
annotate service.ManualAdjRegulationComplianceTransaction with {
    reasonCode @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'GetReasonCode',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : reasonCode,
                    ValueListProperty : 'reasonCode',
                },
                {
                    $Type : 'Common.ValueListParameterInOut',
                    ValueListProperty : 'description',
                    LocalDataProperty : reasonCodeDesc,
                },
            ],
            Label : '{i18n>ReasonCode}',
        },
        Common.ValueListWithFixedValues : true
)};
 
 
annotate service.GetReasonCode with {
    reasonCode @Common.Text : {
        $value : description,
        ![@UI.TextArrangement] : #TextFirst,
    }
};
annotate service.ManualAdjRegulationComplianceTransaction with {
    fuelCategory @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'GetFuelCategory',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : fuelCategory,
                    ValueListProperty : 'category',
                },
            ],
            Label : '{i18n>FuelCategory}',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.GetFuelCategory with {
    category @Common.Text : {
        $value : description,
        ![@UI.TextArrangement] : #TextFirst,
    }
};
annotate service.ManualAdjRegulationComplianceTransaction with {
    adjustmentBase @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'AdjustmentBaseValuelist',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : adjustmentBase,
                    ValueListProperty : 'adjustmentBase',
                },
            ],
            Label : '{i18n>AdjustmentBase}',
        },
        Common.ValueListWithFixedValues : true
)};


annotate service.AdjustmentBaseValuelist with {
    adjustmentBase @Common.Text : {
        $value : descriptionAdj,
        ![@UI.TextArrangement] : #TextFirst,
    }
};
annotate service.ManualAdjRegulationComplianceTransaction with {
    impact @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'GetImpact',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : impact,
                    ValueListProperty : 'category',
                },
            ],
            Label : '{i18n>Impact}',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.GetImpact with {
    category @Common.Text : {
        $value : description,
        ![@UI.TextArrangement] : #TextFirst,
    }
};
annotate service.ManualAdjRegulationComplianceTransaction with {
    regulationUnitOfMeasurement @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'GetUOM',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : regulationUnitOfMeasurement,
                    ValueListProperty : 'category',
                },
            ],
            Label : '{i18n>UoM}',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.GetUOM with {
    category @Common.Text : {
        $value : description,
        ![@UI.TextArrangement] : #TextFirst,
    }
};

annotate service.ManualAdjRegulationComplianceTransaction with {
    fuelUnitofMeasurement @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'GetUOM',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : fuelUnitofMeasurement,
                    ValueListProperty : 'category',
                },
            ],
            Label : '{i18n>UoM}',
        },
        Common.ValueListWithFixedValues : true
)};

annotate service.ManualAdjRegulationComplianceTransaction with {
    objectType @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'GetObjectCategory',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : objectType,
                    ValueListProperty : 'category',
                },
            ],
            Label : '{i18n>CategoryType}',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.GetObjectCategory with {
    category @Common.Text : {
        $value : description,
        ![@UI.TextArrangement] : #TextFirst,
    }
};
annotate service.ManualAdjRegulationComplianceTransaction with {
    transactionCategory @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'GetMaintainRegulationTransactionTypeTs',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : transactionCategory,
                    ValueListProperty : 'transactionCategory/category',
                },
                
                {
                    $Type : 'Common.ValueListParameterIn',
                    ValueListProperty : 'regulationType/regulationType',
                    LocalDataProperty : regulationType,
                },
            ],
            Label : '{i18n>TransactionType}',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.ManualAdjRegulationComplianceTransaction with {
    fuelLogisticsMaterialNumber @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'GetFuelMaterialS4',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : fuelLogisticsMaterialNumber,
                    ValueListProperty : 'ObjectKey',
                },
                {
                    $Type : 'Common.ValueListParameterIn',
                    ValueListProperty : 'FuelCategory',
                    LocalDataProperty : fuelCategory,
                },
            ],
            Label : '{i18n>FuelMaterial}',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.GetFuelMaterialS4 with {
    ObjectKey @Common.Text : {
        $value : MaterialDescription,
        ![@UI.TextArrangement] : #TextFirst,
    }
};
