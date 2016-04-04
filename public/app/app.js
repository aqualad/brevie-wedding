"use strict";

var weddingApp = angular.module('weddingApp', [
    'ngRoute',
    'weddingControllers'
]);

weddingApp
    .config([
        '$logProvider',
        '$routeProvider', function ($logProvider, $routeProvider) {
            $logProvider.debugEnabled(true);

            $routeProvider
                .when('/', {
                    controller: 'HomeController',
                    controllerAs: 'home',
                    templateUrl: '/app/templates/partials/home.hbs'
                })
                .when('/save-the-date', {
                    controller: 'SaveTheDateController',
                    controllerAs: 'savethedate',
                    templateUrl: '/app/templates/partials/saveTheDate.hbs'
                });
        }
    ]);
