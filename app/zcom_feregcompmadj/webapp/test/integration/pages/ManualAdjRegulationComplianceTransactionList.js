sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.sap.chs.com.zcomferegcompmadj',
            componentId: 'ManualAdjRegulationComplianceTransactionList',
            contextPath: '/ManualAdjRegulationComplianceTransaction'
        },
        CustomPageDefinitions
    );
});