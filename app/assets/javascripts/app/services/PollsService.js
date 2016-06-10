var pollsApp = angular.module('pollsApp')
pollsApp.service('PollsService', function($http){


  var baseUrl = 'http://localhost:3000';

  this.getPolls = function(){
    return $http.get(baseUrl + '/polls.json');
  }

});