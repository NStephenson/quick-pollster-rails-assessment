function PollsService($http){

  this.getPolls = function(){
    return $http.get('/polls.json')
  } 

}

angular
  .module('app')
  .service('PollsService', PollsService)