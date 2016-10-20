/* global angular */
(function(angular) {
  angular.module('headmonControllers').controller('viewCtrl', ViewCtrl);

  ViewCtrl.$inject = ['$scope'];

  function ViewCtrl($scope) {

    $scope.hello = "Hello";

  }

})(angular);
