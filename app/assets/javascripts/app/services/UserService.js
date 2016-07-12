app.service('UserService', function UserService($http, Auth){

  this.getUser = function(id){
    return $http.get('/users/' + id + '.json');
  } 

  this.getCurrentUser = function(){
    Auth.currentUser().then(function(user){
      return user;
    });
  }

});