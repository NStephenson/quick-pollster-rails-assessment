angular
  .module('app', ['ui.router', 'templates'])
  .config(function($stateProvider){
    $stateProvider
    .state('polls', {
      url: '/polls',
      templateUrl: 'views/polls/index.html',
      controller: 'PollsController as polls',
      resolve: {
        polls: function(PollsService){
          return PollsService.getPolls
        }
      }
    })
  })]