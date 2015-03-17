
(function () {

  'use strict';

  // Declare app level module which depends on views, and components
  var app =  angular.module('firstApp', [
    'ngRoute',
    //'firstApp.view1',
    //'firstApp.view2',
    //'firstApp.version'
  ]);

      app.config(function($routeProvider) {
        $routeProvider
            .when ('/', {
              redirectTo: '/myApp'
            })
            .when('/view1', {
                templateUrl: 'app/view1/view1.html',
                controller: 'view1Ctrl'
            })
            .when('/view2', {
                templateUrl: 'app/view2/view2.html',
                controller: 'view2Ctrl'
            })
            .otherwise({
              redirectTo: '/myApp'
            });
      });


}());