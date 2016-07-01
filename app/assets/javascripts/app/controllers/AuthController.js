app.controller('AuthController', function AuthController($state, Auth){
  var ctrl = this;
 
  ctrl.login = function(){
    Auth.login(ctrl.creds);
  }

  ctrl.signUp = function(){
    console.log(ctrl.creds);
    Auth.register(ctrl.creds).then(function(user){
      console.log(user);
    }, function(error){
      console.log(error);
    });
  }
});