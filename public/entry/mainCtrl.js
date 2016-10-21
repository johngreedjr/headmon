/* global angular */
(function(angular) {
  angular.module('headmonControllers').controller('mainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', 'entryService'];

  function MainCtrl($scope, entry) {

    //display entries
    $scope.entries = entry.api().query();

    $scope.submit = function(model) {
      entry.api().save(model, function(){
        $scope.entries = entry.api().query();
      });
    }
  }

})(angular);
