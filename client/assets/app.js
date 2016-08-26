var app = angular.module("noteApp", ["ngRoute", "ngCookies"]);

app.config(function($routeProvider){ $routeProvider
    .when('/', {
        templateUrl: "partials/login.html",
        controller: "loginController"
    })
    .when('/profile/:id', {
        templateUrl: 'partials/profile.html',
        controller: 'profileController'
    })
    .when('/collection/:id', {
        templateUrl:'partials/one_collection.html',
        controller: 'collectionController'
    })
    .when('/subject/:id', {
        templateUrl:'partials/subjects.html',
        controller: 'subjectController'
    })
    .when('/find_collection' , {
        templateUrl:'partials/find.html',
        controller: 'findController'
    })
    .when('/user_collections', {
        templateUrl:'partials/all_user_collections.html',
        controller: 'collectionController'
    })
    .when('/card/:id', {
        templateUrl:'partials/flashcard.html',
        controller: 'notecardController'
    })
    .when('/editcard/:id',{
        templateUrl:'partials/edit_card.html',
        controller: 'notecardController'
    })
    .when('/test/:id' , {
        templateUrl:'partials/test.html',
        controller: 'notecardController'
    })
    .when('/addcard/:id', {
        templateUrl: 'partials/add_card.html',
        controller: 'notecardController'
    })
    .when('/addcard/:colid/:cardid',{
        templateUrl: 'partials/addcardatindex.html',
        controller: 'notecardController'
    })
    .otherwise({
        redirectTo: '/'
    });
})
