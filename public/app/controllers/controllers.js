"use strict";

var weddingControllers = angular.module('weddingControllers', []);

weddingControllers
    .controller('HomeController', ['$scope', '$location',
        function ($scope, $location) {
            $scope.welcome = "Invite you to celebrate at their wedding"
        }
    ])
    .controller('RsvpController', ['$scope', '$http',
        function ($scope, $http) {
            $scope.formData = {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                rsvp: ''
            }

            $scope.formState = {
                valid: true,
                message: '',
                complete: false
            }

            $scope.isAttending = function(response) {
                $scope.formData.rsvp = response ? 'true' : 'false';
                $scope.formState.valid = true;
                $scope.formState.message = '';
            }

            $scope.submit = function() {
                // Validate that they answered the RSVP radio
                if ( $scope.formData.rsvp.match(/^true|false$/) === null ) {
                    $scope.formState.message = 'Please indicate above whether you will be attending';
                    $scope.formState.valid = false;
                    return false;
                } else {
                    $scope.formState.valid = true;
                    $scope.formState.message = '';
                }

                // Send the formData to the RSVP endpoint
                $http({
                    method: 'POST',
                    url: '/rsvp',
                    data: $scope.formData
                })
                    .then(function successCallback(response) {
                        $scope.formState.complete = true;
                    }, function errorCallback(response) {
                        $scope.formState.message = 'Something went wrong while trying to submit.  Please contact us directly or try again later.'
                        $scope.formState.valid = false;
                    });
            }


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
