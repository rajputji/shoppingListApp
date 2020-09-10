var myApp = angular.module('shoppingListApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "http://" + window.location.host + "/angularjs_SPA/views/home.html",
        })
        .when('/register', {
            templateUrl: "http://" + window.location.host + "/angularjs_SPA/views/register.html",
            controller: 'registerController'
        })
        .when('/login', {
            templateUrl: "http://" + window.location.host + "/angularjs_SPA/views/login.html",
            controller: 'loginController'
        })
        .when('/shoppinglist', {
            templateUrl: "http://" + window.location.host + "/angularjs_SPA/views/shoppinglist.html",
        })
        .when('/about', {
            templateUrl: "http://" + window.location.host + "/angularjs_SPA/views/about.html",
        });
});