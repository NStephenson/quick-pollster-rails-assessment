app.directive('qpNav', function(){
  return {
    restrict: 'E',
    templateUrl: 'app/templates/nav/navbar.html',
    controller: function(Auth){
      var ctrl = this;

      Auth.currentUser().then(function(user) { 
        ctrl.currentUser = user; 
      });
    },
    controllerAs: 'vm'
  }
});