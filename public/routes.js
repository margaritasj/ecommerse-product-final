angular.module('appLab', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'inicio.html'
      })
      .when('/oli', {
        templateUrl: 'prueba.html'
      })
      .otherwise({ redirectTo: '/' })
  })