/* global angular */
(function(angular) {
  angular.module('headmonServices').factory('entryService', EntryService);

  EntryService.$inject = ['$resource'];

  function EntryService($resource) {

    var BASE_URI = '/api';

    var service = {
      api : api
    }

    return service;

    ///////////////

    function api() {
      checkURI();
      return $resource(BASE_URI + '/entry', {isArray: true});
    }


    function checkURI() {
      if (!BASE_URI || BASE_URI == '') {
        var e =  new Exception('BASE_URI IS NOT SET');
        throw e.message;
      }
    }
  }

})(angular);
