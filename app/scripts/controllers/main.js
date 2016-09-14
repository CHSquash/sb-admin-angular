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
    $http.get('node/api/companies/').then(function(response){
      $scope.listOfCompany = response.data;
    })
  });
