function PollsService($http){

  this.getPolls = function(){
    return $http.get('/polls.json');
  } 

  this.newPoll = function(poll){
    console.log(poll);
    return $http.post('/polls.json', poll);
  } 

  this.getPoll = function(id){
    return $http.get('/polls/' + id + '.json');
  } 

  this.submitResults = function(id, response){
    $http.post('/polls/' + id + '/results.json', response);
  }

}

angular
  .module('app')
  .service('PollsService', PollsService)