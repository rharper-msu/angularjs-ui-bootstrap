(function () {
    angular.module('timeKeeper')
        .controller('timeEntry', function ($scope, $http) {

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

                if ($scope.timeEntryForm.$invalid) {
                    return;
                }

                if ($scope.startdate) {
                    console.log('Start date: ' + $scope.startdate);
                } else {
                    console.log('Invalid start date: ' + $scope.startdate);
                }
            };
        });
})();