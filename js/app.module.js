var app=angular.module('hdm', [ 'ngAnimate', 'ui.bootstrap']);

var app2=angular.module('hdmSite', ['ngRoute','angular.filter', 'ngAnimate', 'ui.bootstrap','ngSanitize',
  'btford.markdown']);

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
            when('/pic', {
                templateUrl: 'pic.html',
                controller: 'picCtrl'
            }).
            when('/kobi', {
                templateUrl: 'kobi.html',
                controller: 'kobiCtrl'
            }).
                 when('/contact', {
                templateUrl: 'contact.html',
                controller: 'contactCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
