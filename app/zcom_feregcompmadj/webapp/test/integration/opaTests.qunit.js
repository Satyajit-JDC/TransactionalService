sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/sap/chs/com/zcomferegcompmadj/test/integration/FirstJourney',
		'com/sap/chs/com/zcomferegcompmadj/test/integration/pages/ManualAdjRegulationComplianceTransactionList',
		'com/sap/chs/com/zcomferegcompmadj/test/integration/pages/ManualAdjRegulationComplianceTransactionObjectPage'
    ],
    function(JourneyRunner, opaJourney, ManualAdjRegulationComplianceTransactionList, ManualAdjRegulationComplianceTransactionObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/sap/chs/com/zcomferegcompmadj') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheManualAdjRegulationComplianceTransactionList: ManualAdjRegulationComplianceTransactionList,
					onTheManualAdjRegulationComplianceTransactionObjectPage: ManualAdjRegulationComplianceTransactionObjectPage
                }
            },
            opaJourney.run
        );
    }
);