var app = angular.module('appLab', ['ngRoute', 'ngAnimate']);

// Config -> funcion ejecutada en el modulo principal de angular
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
		templateUrl: '../app/views/home.html'
    })
    .when('/categories', {
		templateUrl: '../app/views/categories.html',
		controller: 'categorie'
    })
    .when('/checkout', {
    	
    })
    .otherwise({ redirectTo: '/' })
})
