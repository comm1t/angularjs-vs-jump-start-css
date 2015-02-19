var app = angular.module("app", ['ngRoute'])

app.config(function($routeProvider) {

  $routeProvider.when('/header-nav', {
    templateUrl: 'partials/header-nav.html'
  });

  $routeProvider.when('/items', {
    templateUrl: 'partials/items.html'
  });

	$routeProvider.otherwise({ redirectTo: '/items' });

});

app.directive('headernav', function(){
    return {
        restrict: 'AE',
        templateUrl: "partials/tpl/header-nav.tpl.html"
    };
});