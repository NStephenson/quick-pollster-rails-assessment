app.directive('qpPoll', function QpPoll(){
  return {
    restrict: 'E',
    templateUrl: 'app/templates/poll_display.html',
    scope: {
      poll: '='
    },
    controller: function($scope, PollsService){
      $scope.showEdit = false;

      $scope.submitResponse = function(id, response){
        PollsService.submitResults(id, response);
      }

      $scope.toggleEdit = function(){
        if ($scope.showEdit === false) {
          $scope.showEdit = true;
        } else if($scope.showEdit === true){
          $scope.showEdit = false;
        }
      }

      $scope.submitEdit = function(){
        PollsService.editPoll($scope.poll.id, $scope.poll);
        $scope.toggleEdit();
      }

    }
  }
});