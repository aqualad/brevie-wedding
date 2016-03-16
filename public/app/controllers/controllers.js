"use strict";

var weddingControllers = angular.module('weddingControllers', []);

weddingControllers
    .controller('HomeController', ['$scope',
        function ($scope) {
            $scope.welcome = 'Invite You to Celebrate At their Wedding';
        }
    ])
    .directive('weddingHeader', function() {
        return {
            templateUrl: '/app/views/directives/header.hbs'
        };
    })
    .directive('weddingFooter', function() {
        return {
            templateUrl: '/app/views/directives/footer.hbs'
        };
    });
