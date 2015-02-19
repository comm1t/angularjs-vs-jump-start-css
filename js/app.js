var app = angular.module("app", ['ngRoute'])

app.config(function($routeProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'home.html'
  });

  $routeProvider.when('/headernav', {
    templateUrl: 'header-nav.html'
  });

  $routeProvider.when('/items', {
    templateUrl: 'items.html'
  });

	$routeProvider.otherwise({ redirectTo: '/items' });

});

app.directive('headernav', function(){
    return {
        restrict: 'AE',
        templateUrl: "header-nav.html"
    };
});