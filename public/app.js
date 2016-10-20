/* global angular */
(function(angular) {
  angular.module('headmonApp', ['ngResource', 'ui.bootstrap', 'angular.filter', 'headmonControllers']);

  angular.module('headmonApp').config(function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
  });

  angular.module('headmonApp').config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);

  //angular.module('headmonServices', []);
  angular.module('headmonControllers', []);
  //angular.module('headmonDirectives', []);

})(angular);
