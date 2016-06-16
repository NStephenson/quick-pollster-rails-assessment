function AuthController($scope, $state, Auth){
  
  $scope.login = function(){
    Auth.login($scope.user).then(function(){
      $state.go('manila.user');
    });
  };

  $scope.register = function(){
    Auth.register($scope.user).then(function(){
      $state.go('manila.user');
    });
  };
}

angular
  .module('app')
  .controller('AuthController', AuthController)