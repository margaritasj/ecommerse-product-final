angular.module('appLab', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateURL: 'inicio.html'
      })
      .when('/oli', {
        templateURL: 'prueba.html'
      })
      .otherwise({ redirectTo: '/' })
  })