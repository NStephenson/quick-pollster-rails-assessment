app.directive('qpPollForm', function QpPoll(){
  return {
    restrict: 'E',
    templateUrl: 'app/templates/poll_form.html',
    scope: {},
    controller: function(PollsService, Auth){
      var ctrl = this;

      Auth.currentUser().then(function(user) { 
        ctrl.currentUser = user; 
      });

      ctrl.submitResponse = function(id, response){
        PollsService.submitResults(id, response);
      }

    },
    controllerAs: 'vm',
    bindToController: {poll: '='}
  }
});