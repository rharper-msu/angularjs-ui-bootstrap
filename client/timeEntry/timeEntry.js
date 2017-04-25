/* global angular */
(function () {
    'use strict';
    angular.module('timeKeeper')
        .controller('timeEntry', function ($scope) {

            $scope.requiredValidation = function (controlName) {                                
                var frm = $scope.timeEntryForm;
                var ctl = frm[controlName];
                return ctl.$invalid && (frm.$submitted || ctl.$touched);
            };

            $scope.StartTime = {
                opened: false
            };

            $scope.formats = ['MM/dd/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            $scope.format = $scope.formats[0];
            $scope.altInputFormats = ['M!/d!/yyyy'];

            $scope.dateOptions = {
                formatYear: 'yyyy',
                maxDate: new Date(),
                minDate: new Date(2000, 0, 1),
                startingDay: 0,
                showWeeks: false
            };

            $scope.openStartTime = function () {
                $scope.StartTime.opened = true;
            };

            $scope.submitForm = function () {

                // Don't process an invalid form.
                if ($scope.timeEntryForm.$invalid) {
                    console.log("Operation cancelled. Invalid form.")
                    return;
                }

                if ($scope.startdate) {
                    console.log('Start date: ' + $scope.startdate);
                } else {
                    console.log('Invalid start date: ' + $scope.startdate);
                }
            };

            $scope.resetForm = function () {
                $scope.timeEntryForm.$setUntouched();
                $scope.timeEntryForm.$setPristine();
                $scope.timeEntryForm.startDate.$invalid = true;
                console.log('reset form');
            };
        });
})();