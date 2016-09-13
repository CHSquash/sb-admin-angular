angular.module('sbAdminApp')
    .directive('companylist',function() {
        return {
            templateUrl:'scripts/directives/company/companies.html',
            restrict: 'E',
            replace: true
        }
    });
