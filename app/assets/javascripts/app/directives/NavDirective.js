app.directive('qpNav', function(){
  return {
    restrict: 'E',
    templateUrl: 'app/templates/nav/navbar.html',
    controller: function(Auth, $state){
      var ctrl = this;

      Auth.currentUser().then(function(user) { 
        ctrl.currentUser = user; 
      });

      ctrl.logout = function(){
        Auth.logout().then(function(a,b,c){
          $state.go('login');
        });
      }

    },
    controllerAs: 'vm'
  }
});