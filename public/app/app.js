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
                .when('/', {
                    controller: 'HomeController',
                    controllerAs: 'home',
                    templateUrl: '/app/templates/partials/home.hbs'
                })
                .when('/#photos', {
                    controller: 'PhotosController',
                    controllerAs: 'photos',
                    // templateUrl: '/app/templates/partials/photos.hbs'
                    templateUrl: '/app/templates/partials/home.hbs'
                })
                .when('/#gifts', {
                    controller: 'GiftsController',
                    controllerAs: 'gifts',
                    // templateUrl: '/app/templates/partials/gifts.hbs'
                    templateUrl: '/app/templates/partials/home.hbs'
                })
                .when('/#rsvp', {
                    controller: 'RsvpController',
                    controllerAs: 'rsvp',
                    // templateUrl: '/app/templates/partials/rsvp.hbs'
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
