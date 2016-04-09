var app=angular.module('hdm', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

var app2=angular.module('hdmSite', ['ngRoute','angular.filter', 'ngAnimate', 'ui.bootstrap']);

app2.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/people', {
                templateUrl: 'people.html',
                controller: 'peopleCtrl'
            }).
            when('/uprojects', {
                templateUrl: 'uprojects.html',
                controller: 'projectCtrl'
            }).
            // when('/faq', {
            //     templateUrl: 'faq.html',
            //     controller: 'faqCtrl'
            // }).
            // when('/contact', {
            //     templateUrl: 'contact.html',
            //     //controller: 'contactCtrl'
            // }).
            otherwise({
                redirectTo: '/'
            });
    }]);
