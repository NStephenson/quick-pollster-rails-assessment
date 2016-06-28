app.directive('qpPoll', function QpPoll(){
  return {
    restrict: 'E',
    templateUrl: 'app/templates/poll_display.html',
    scope: {
      poll: '='
    },
    controller: function($scope, PollsService){
      $scope.response = {};
      $scope.response.ids = [];
      $scope.addResponse = function(id){
        $scope.response.ids.push(id);
      }
      $scope.submitResponse = function(id, response){
        PollsService.submitResults(id, response);
      }
      $scope.addSelection = function(response) {

      }
    }
  }
});