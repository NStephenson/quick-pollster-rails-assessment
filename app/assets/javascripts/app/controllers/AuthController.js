app.controller('AuthController', function AuthController($state, Auth){
  
  this.login = function(){
    Auth.login(this.creds);
  }

  this.signUp = function(){
    console.log(this.creds);
    Auth.register(this.creds).then(function(user){
      console.log(user);
    }, function(error){
      console.log(error);
    });
  }
});