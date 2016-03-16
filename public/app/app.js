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
                    templateUrl: '/app/views/partials/home.hbs'
                });
        }
    ]);
