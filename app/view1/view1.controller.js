(function () {
    'use strict';
    var app = angular.module('firstApp');

    app.controller('view1Ctrl', function ($scope, $http){

      //create a blank object to hold data from form
      //$scope allow to pass between controller and view
      //<!--use ng-model in the html to bind a specific input into a variable-->
      $scope.formData = {};



      //process the form
      $scope.processForm = function() {
        console.log($scope.formData);

        $http.post('http://www.google.com', $scope.formData)
            .success(function(data) {
              alert('form sent successfully');

            })
            .error(function(data, status, headers, config) {
              alert('something didn\'t go well');
            });


      };

    });

}());




//angular.module('view1', ['ngRoute'])
//
//.config(['$routeProvider', function($routeProvider) {
//  $routeProvider.when('/view1', {
//    templateUrl: 'view1/view1.html',
//    controller: 'View1Ctrl'
//  });
//}])
//
//.controller('View1Ctrl', [function() {

//}]);