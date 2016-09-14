'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope,$position,$http) {
    $http.get('http://ec2-54-210-8-236.compute-1.amazonaws.com:3000/api/companies/').then(function(response){
      $scope.listOfCompany = response.data;
    })
  });
