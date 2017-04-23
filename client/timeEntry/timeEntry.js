(function () {
    angular.module('timeKeeper')
        .controller('timeEntry', function ($scope, $http) {

            $scope.StartTime = {
                opened: false
            };

            $scope.dateOptions = {
                formatYear: 'yyyy',
                maxDate: new Date(),
                minDate: new Date(2000, 1, 1),
                startingDay: 1
            };

            $scope.openStartTime = function () {
                $scope.StartTime.opened = true;
            };
        });
})();