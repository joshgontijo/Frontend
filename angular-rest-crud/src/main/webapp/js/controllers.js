'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
        .controller('MyCtrl1', ['$scope', 'Resources', function ($scope, Resources) {

                angular.element(document).ready(function () {
                    $scope.getAll();
                });

                $scope.users = [];
                $scope.foundUser = null;
                $scope.user = {};
                $scope.userScope = {uuid: null, fname: 'asas', lname: 'nulsdl', age: null};
                $scope.lastCreatedUser = {};

                $scope.getAll = function () {
                    Resources.user.query(function (response) {

                        $scope.users = [];
                        console.log(response);
                        for (var key in response[0]) {
                            if (response[0].hasOwnProperty(key)) {
                                console.log(key + ' -> ' + response[0][key]);
                                $scope.users.push(response[0][key]);
                            }
                        }
//                        $scope.users = response[0];
                    });

                };
                $scope.getById = function (uuid) {
                    Resources.user.get({uuid: uuid}, function (response) { //success
                        $scope.foundUser = response;
                        console.log(response);
                    },
                            function (response) { // error
                                console.log(response);
                                alert('ERROR: ' + response.status);
                            });
                };

                $scope.create = function () {
                    Resources.user.create($scope.user, function (response) {
                        console.log(response);
                        console.log($scope.users);
                        $scope.lastCreatedUser = response;
                        $scope.getAll();
                        $scope.user = {};

                    });
                };

                $scope.update = function () {
                    Resources.user.update($scope.foundUser);
                    $scope.foundUser = null;
                    $scope.users = [];
                    $scope.getAll();
                };

                $scope.delete = function () {
                    Resources.user.delete({uuid: $scope.foundUser.uuid});
                    $scope.users = [];
                    $scope.getAll();
                    $scope.foundUser = null;
                };

            }])
        .controller('MyCtrl2', ['$scope', function ($scope) {

            }]);
