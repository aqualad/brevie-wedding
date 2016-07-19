"use strict";

var weddingApp = angular.module('weddingApp', [
    'ngRoute',
    'weddingControllers'
]);

weddingApp
    .config([
        '$logProvider',
        '$locationProvider',
        '$routeProvider', function ($logProvider, $locationProvider, $routeProvider) {
            $logProvider.debugEnabled(true);
            $locationProvider.html5Mode(true);

            $routeProvider
                .when('/ittybittybaby/ittybittyboat', {
                    controller: 'HomeController',
                    controllerAs: 'home',
                    templateUrl: '/app/templates/partials/home.hbs'
                })
                .when('/save-the-date', {
                    controller: 'SaveTheDateController',
                    controllerAs: 'savethedate',
                    templateUrl: '/app/templates/partials/saveTheDate.hbs'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);
