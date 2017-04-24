'use strict';
angular.module('timeKeeper', ['ngRoute', 'ngMessages', 'ui.bootstrap'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'timeEntry/timeEntry.html',
                controller: 'timeEntry',
                resolve: {
                    // I will cause a delay
                    delay: function ($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 200);
                        return delay.promise;
                    }
                }
            });

        // configure html5 to remove #! routing
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    });