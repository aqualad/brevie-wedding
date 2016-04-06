"use strict";

var weddingControllers = angular.module('weddingControllers', []);

weddingControllers
    .controller('HomeController', ['$scope', '$location',
        function ($scope, $location) {
            $scope.welcome = 'Invite You to Celebrate At their Wedding';
        }
    ])
    .controller('SaveTheDateController', ['$scope',
        function ($scope) {

        }
    ])
    .directive('weddingHeader', function() {
        return {
            templateUrl: '/app/templates/directives/header.hbs'
        };
    })
    .directive('weddingFooter', function() {
        return {
            templateUrl: '/app/templates/directives/footer.hbs'
        };
    });
