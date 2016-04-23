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
                .when('/our-story', {
                    controller: 'OurStoryController',
                    controllerAs: 'our-story',
                    templateUrl: '/app/templates/partials/ourStory.hbs'
                })
                .when('/photos', {
                    controller: 'PhotosController',
                    controllerAs: 'photos',
                    templateUrl: '/app/templates/partials/photos.hbs'
                })
                .when('/groomsmen', {
                    controller: 'GroomsmenController',
                    controllerAs: 'groomsmen',
                    templateUrl: '/app/templates/partials/groomsmen.hbs'
                })
                .when('/bridesmaids', {
                    controller: 'BridesmaidsController',
                    controllerAs: 'bridesmaids',
                    templateUrl: '/app/templates/partials/bridesmaids.hbs'
                })
                .when('/gifts', {
                    controller: 'GiftsController',
                    controllerAs: 'gifts',
                    templateUrl: '/app/templates/partials/gifts.hbs'
                })
                .when('/rsvp', {
                    controller: 'RsvpController',
                    controllerAs: 'rsvp',
                    templateUrl: '/app/templates/partials/rsvp.hbs'
                })
                .when('/save-the-date', {
                    controller: 'SaveTheDateController',
                    controllerAs: 'savethedate',
                    templateUrl: '/app/templates/partials/saveTheDate.hbs'
                });
        }
    ]);
