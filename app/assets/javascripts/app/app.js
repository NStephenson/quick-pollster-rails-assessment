angular
  .module('app', ['ui.router', 'templates'])
  .config(function($stateProvider){
    $stateProvider
    .state('polls', {
      url: '/polls',
      controller: 'PollsController as ctrl',
      templateUrl: 'app/templates/polls-index.html',
      resolve: {
        polls: function(PollsService){
          return PollsService.getPolls
        }
      }
    });
  });