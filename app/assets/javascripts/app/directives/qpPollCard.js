app.directive('qpPollCard', function(){
  return {
    restrict: 'E',
    templateUrl: 'app/templates/poll-card.html',
    scope: {},
    controller: function(PollsService, Auth){
      var ctrl = this;

      ctrl.isAvailable = true;

      ctrl.checkResponded = function(){
        ctrl.currentUser.votes.forEach(function(vote){
          if (vote.poll.id === ctrl.poll.id) {
            ctrl.isAvailable = false;
          }
        })
      }

      Auth.currentUser().then(function(user) { 
        ctrl.currentUser = user; 
        ctrl.checkResponded();
      });

      if (!ctrl.poll.open) {
        ctrl.isAvailable = false;
      }

      ctrl.deletePoll = function(){
        PollsService.deletePoll(ctrl.poll);
      }

      ctrl.showEdit = false;

      ctrl.toggleEdit = function(){
        // add function to clear any input
        if (ctrl.showEdit === false) {
          ctrl.showEdit = true;
        } else if(ctrl.showEdit === true){
          ctrl.showEdit = false;
        }
        // add logic to set the setting to whatever is actually saved
      }

      ctrl.submitEdit = function(){
        PollsService.editPoll(ctrl.poll.id, ctrl.poll);
        ctrl.toggleEdit();
      }
    },
    controllerAs: 'vm',
    bindToController: {poll: '='}
  }
})