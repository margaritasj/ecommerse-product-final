var app = angular.module('appLab', ['ngRoute']);

// Config -> funcion ejecutada en el modulo principal de angular
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../app/views/home.html'
    })
    .when('/categories', {
      templateUrl: '../app/views/categories.html',
      controller: 'categories'
    })
    .when('/products', {
      templateUrl: '../app/views/products.html',
      controller: 'product'
    })
    .otherwise({
      redirectTo: '/'
    });
});