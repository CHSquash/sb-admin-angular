'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ChartCtrl', ['$scope', '$timeout' , '$http' , function ($scope, $timeout, $http) {

	  $http.get('http://104.197.187.27:3000/api/front_end/').then(function(response) {
		  $scope.frontList = response.data;
		  $scope.frontlabels = [];
		  $scope.frontpredata = [];
		  for (var i = 0; i < $scope.frontList.length; i++) {
			  $scope.frontlabels.push($scope.frontList[i].name);
			  $scope.frontpredata.push($scope.frontList[i].point);
		  };
		  $scope.frontdata = [$scope.frontpredata];
	  });

	  $http.get('http://104.197.187.27:3000/api/back_end/').then(function(response) {
		  $scope.backList = response.data;
		  $scope.backlabels = [];
		  $scope.backpredata = [];
		  for (var i = 0; i < $scope.backList.length; i++) {
			  $scope.backlabels.push($scope.backList[i].name);
			  $scope.backpredata.push($scope.backList[i].point);
		  };
		  $scope.backdata = [$scope.backpredata];
	  });

	  $http.get('http://104.197.187.27:3000/api/build_release/').then(function(response) {
		  $scope.buildList = response.data;
		  $scope.buildlabels = [];
		  $scope.buildpredata = [];
		  for (var i = 0; i < $scope.buildList.length; i++) {
			  $scope.buildlabels.push($scope.buildList[i].name);
			  $scope.buildpredata.push($scope.buildList[i].point);
		  };
		  $scope.builddata = [$scope.buildpredata];
	  });

	  $http.get('http://104.197.187.27:3000/api/infrastructure/').then(function(response) {
		  $scope.infraList = response.data;
		  $scope.infralabels = [];
		  $scope.infrapredata = [];
		  for (var i = 0; i < $scope.infraList.length; i++) {
			  $scope.infralabels.push($scope.infraList[i].name);
			  $scope.infrapredata.push($scope.infraList[i].point);
		  };
		  $scope.infradata = [$scope.infrapredata];
	  });

  }]);