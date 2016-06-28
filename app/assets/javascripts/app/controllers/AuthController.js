app.controller('AuthController', function AuthController($scope, $state, Auth){
  
  $scope.login = function(){
    Auth.login($scope.creds);
  }

  $scope.signUp = function(){
    console.log($scope.creds);
    Auth.register($scope.creds).then(function(user){
      console.log(user);
    }, function(error){
      console.log(error);
    });
  }
});