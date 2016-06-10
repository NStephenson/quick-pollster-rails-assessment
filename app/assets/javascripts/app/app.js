var pollsApp = angular.module('pollsApp', ['templates', 'ui.router']);

pollsApp.config(function($stateProvider){
  $stateProvider
    .state('polls', {
      url: '/polls',
      templateUrl: 'polls.html',
      controller: 'PollsController as ctrl'
    });
});