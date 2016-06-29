app.service('PollsService', function PollsService($http){

  this.getPolls = function(){
    return $http.get('/polls.json');
  } 

  this.newPoll = function(poll){
    return $http.post('/polls.json', poll);
  } 

  this.getPoll = function(id){
    return $http.get('/polls/' + id + '.json');
  }

  this.submitResults = function(id, response){
    $http.post('/polls/' + id + '/results.json', response);
  }

  this.editPoll = function(id, edit){
    $http.patch('/polls/' + id + '.json', edit);
  }

});