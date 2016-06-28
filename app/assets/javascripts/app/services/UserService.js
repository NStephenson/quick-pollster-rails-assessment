app.service('UserService', function UserService($http){

  this.getUser = function(id){
    return $http.get('/users/' + id + '.json');
  } 

});