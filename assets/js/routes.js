'use strict';

angular.module('myApp.routes', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'partials/buttons.html',
                controller: 'HomeCtrl'
            })
            .when('/benefits', {
                templateUrl: 'partials/buttons.html',
                controller: 'BenefitsCtrl'
            })
            .when('/work', {
                templateUrl: 'partials/buttons.html',
                controller: 'WorkCtrl'
            })
            .when('/debt', {
                templateUrl: 'partials/buttons.html',
                controller: 'DebtCtrl'
            })
            .when('/consumer', {
                templateUrl: 'partials/buttons.html',
                controller: 'ConsumerCtrl'
            })
            .when('/relationships', {
                templateUrl: 'partials/buttons.html',
                controller: 'RelationshipsCtrl'
            })
            .when('/housing', {
                templateUrl: 'partials/buttons.html',
                controller: 'HousingCtrl'
            })
            .when('/law', {
                templateUrl: 'partials/buttons.html',
                controller: 'LawCtrl'
            })
            .when('/discrimination', {
                templateUrl: 'partials/buttons.html',
                controller: 'DiscriminationCtrl'
            })
            .when('/tax', {
                templateUrl: 'partials/buttons.html',
                controller: 'TaxCtrl'
            })
            .when('/healthcare', {
                templateUrl: 'partials/buttons.html',
                controller: 'HealthcareCtrl'
            })
            .when('/education', {
                templateUrl: 'partials/buttons.html',
                controller: 'EducationCtrl'
            })
            .when('/local', {
                templateUrl: 'partials/buttons.html',
                controller: 'LocalCtrl'
            })
            .when('/adviser', {
                templateUrl: 'partials/adviser.html',
                controller: 'AdviserCtrl'
            })
            .otherwise({redirectTo: '/home'});
    });