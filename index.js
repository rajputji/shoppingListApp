var myApp = angular.module('shoppingListApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "/shoppingListApp/views/home.html",
        })
        .when('/register', {
            templateUrl: "/shoppingListApp/views/register.html",
            controller: 'registerController'
        })
        .when('/login', {
            templateUrl: "/shoppingListApp/views/login.html",
            controller: 'loginController'
        })
        .when('/shoppinglist', {
            templateUrl: "/shoppingListApp/views/shoppinglist.html",
        })
        .when('/about', {
            templateUrl: "/shoppingListApp/views/about.html",
        });
});
