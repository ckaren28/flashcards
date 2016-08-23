var app = angular.module("myApp", ["ngRoute", "ngCookies"]);

app.config(function($routeProvider){ $routeProvider
    .when('/', {
        templateUrl: "partials/login.html",
        controller: "loginController"
    })
    .when('/home', {
        templateUrl: 'partials/wall.html',
        controller: 'wallController'
    })
    .otherwise({
        redirectTo: '/'
    });

})
