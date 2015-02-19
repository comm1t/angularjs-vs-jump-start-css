var app = angular.module("app", ['ngRoute'])

app.config(function($routeProvider) {

  $routeProvider.when('/header-nav', {
    templateUrl: 'partials/header-nav.html'
  });

    $routeProvider.when('/promo', {
    templateUrl: 'partials/tpl/promo.tpl.html'
  });

    $routeProvider.when('/main', {
    templateUrl: 'partials/tpl/main.tpl.html'
  });

    $routeProvider.when('/footer', {
    templateUrl: 'partials/tpl/footer-inside.tpl.html'
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

app.directive('promo', function(){
    return {
        restrict: 'AE',
        templateUrl: "partials/tpl/promo.tpl.html"
    };
});

app.directive('main', function(){
    return {
        restrict: 'AE',
        templateUrl: "partials/tpl/main.tpl.html"
    };
});

app.directive('latest', function(){
    return {
        restrict: 'AE',
        templateUrl: "partials/tpl/latest.tpl.html"
    };
});

app.directive('sidebar', function(){
    return {
        restrict: 'AE',
        templateUrl: "partials/tpl/sidebar.tpl.html"
    };
});

app.directive('footerinside', function(){
    return {
        restrict: 'AE',
        templateUrl: "partials/tpl/footer-inside.tpl.html"
    };
});