var myApp = angular.module('EmployeeApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: 'HomeController',
      controllerAs: 'hc'
    })
    .when('/employee', {
      templateUrl: '/views/employee.html',
      controller: 'EmployeeController',
      controllerAs: 'ec'
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
