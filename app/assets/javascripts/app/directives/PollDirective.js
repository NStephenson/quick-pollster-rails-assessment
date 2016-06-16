function QpPoll(){
  return {
    restrict: 'E',
    templateUrl: 'app/templates/poll_display.html',
    scope: {
      poll: '='
    },
    controller: function($scope){
      $scope.submitResponse = function(poll){
        debugger;
      }
      $scope.addSelection = function(response) {

      }
    }
  }
}

angular
  .module('app')
  .directive('qpPoll', QpPoll)