var myApp = angular.module('shoppingListApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "/views/home.html",
        })
        .when('/register', {
            templateUrl: "/views/register.html",
            controller: 'registerController'
        })
        .when('/login', {
            templateUrl: "/views/login.html",
            controller: 'loginController'
        })
        .when('/shoppinglist', {
            templateUrl: "/views/shoppinglist.html",
        })
        .when('/about', {
            templateUrl: "/views/about.html",
        });
});
