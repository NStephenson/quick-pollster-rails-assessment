function PollsService($http){

  this.getPolls = function(){
    return $http.get('/polls.json');
  } 

  this.submitResults = function(poll){
    $http.post('/add_results', poll);
  }

}

angular
  .module('app')
  .service('PollsService', PollsService)