var app = angular.module('appLab', ['ngRoute']);
  
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../app/views/home.html'
      })
      .when('/products', {
        templateUrl: '../app/views/products.html',
        controller: 'product'
      })
      .otherwise({ redirectTo: '/' })
  })