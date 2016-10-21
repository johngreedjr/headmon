/* global angular */
(function(angular) {
  angular.module('headmonControllers').controller('mainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', 'entryService'];

  function MainCtrl($scope, entry) {

    //display entries
    $scope.entries = entry.api().query();

  }

})(angular);
