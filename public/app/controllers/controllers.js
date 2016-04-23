"use strict";

var weddingControllers = angular.module('weddingControllers', []);

weddingControllers
    .controller('HomeController', ['$scope', '$location',
        function ($scope, $location) {

        }
    ])
    .controller('OurStoryController', ['$scope',
        function ($scope) {

        }
    ])
    .controller('PhotosController', ['$scope',
        function ($scope) {

        }
    ])
    .controller('GroomsmenController', ['$scope',
        function ($scope) {

        }
    ])
    .controller('BridesmaidsController', ['$scope',
        function ($scope) {

        }
    ])
    .controller('GiftsController', ['$scope',
        function ($scope) {

        }
    ])
    .controller('RsvpController', ['$scope',
        function ($scope) {

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
