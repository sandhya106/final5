(function () {
    'use strict';
  
    angular.module('public', ['ngRoute'])
      .config(function ($routeProvider) {
        $routeProvider
          .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'SignUpController as signUpCtrl'
          })
          .when('/myinfo', {
            templateUrl: 'views/myinfo.html',
            controller: 'MyInfoController as myInfoCtrl'
          })
          .otherwise({
            redirectTo: '/signup'
          });
      });
  })();
  