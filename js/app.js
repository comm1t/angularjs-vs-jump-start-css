var app = angular.module("app", ['ngRoute'])

app.config(function($routeProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'home.html'
  });

	$routeProvider.otherwise({ redirectTo: '/' });

});
