function UserService($http){

  this.getUser = function(id){
    return $http.get('/users/' + id + '.json');
  } 

}

angular
  .module('app')
  .service('UserService', UserService)