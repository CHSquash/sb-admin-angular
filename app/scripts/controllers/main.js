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

      $http.get('http://104.197.187.27:3000/api/companies/').then(function(response){
        $scope.listOfCompany = response.data;
      });

      $http.get('http://104.197.187.27:3000/api/stats/').then(function(response){
          $scope.listOfStats = response.data;
      });  

  });
