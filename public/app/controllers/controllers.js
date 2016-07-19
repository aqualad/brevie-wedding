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

            // Call global function to create the Google Map
            initialize_map();

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

            if ( $.cookie('rsvp') === "true" ) {
                $scope.formState.complete = true;
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
                        // Set a cookie to avoid duplicate RSVP
                        $.cookie('rsvp', "true", { expires: 365 });

                        // Display a success message
                        $scope.formState.complete = true;

                    }, function errorCallback(response) {
                        $scope.formState.message = 'Something went wrong while trying to submit.  Please contact us directly or try again later.'
                        $scope.formState.valid = false;
                    });
            }
        }
    ])
    .controller('PhotosController', ['$scope',
        function ($scope) {

        }
    ])
    .controller('CeremonyController', ['$scope',
        function ($scope) {

        }
    ])
    .controller('ReceptionController', ['$scope',
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
