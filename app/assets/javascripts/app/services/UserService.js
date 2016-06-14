function UserService($http){

  this.getUser = function(id){
    return $http.get('/user/' + id + '.json');
  } 

}

angular
  .module('app')
  .service('UserService', UserService)