var app = angular.module('app', ['ui.router', 'templates', 'Devise', 'ngMessages']);
  // .config([
  //   "$httpProvider", function($httpProvider) {
  //     $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  //   }
  // ])
app.config(function($stateProvider){
    $stateProvider
    .state('polls', {
      url: '/polls',
      controller: 'PollsController as ctrl',
      templateUrl: 'app/templates/polls-index.html',
      resolve: {
        polls: function(PollsService){
          return PollsService.getPolls();
        }
      }
    })
    .state('user.newPoll', {
      url: '/newpoll',
      controller: function($scope, PollsService){
        $scope.newPoll = {};
        $scope.newPoll.poll = {};
        $scope.newPoll.poll.responses_attributes = [ { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' } ];
        $scope.createNewPoll = function(){
          PollsService.newPoll($scope.newPoll);
        }
      },
      templateUrl: 'app/templates/new_poll.html'
    })
    .state('poll', {
      url: '/polls/:id',
      controller: 'PollsController as ctrl',
      templateUrl: 'app/templates/poll_show.html',
      resolve: {
        polls: function(PollsService, $stateParams){
          return PollsService.getPoll($stateParams.id);
        }
      }
    })
    .state('login',{
      url: '/login',
      controller: 'AuthController as ctrl',
      templateUrl: 'app/templates/auth/login.html'
    })
    .state('signUp',{
      url: '/signup',
      controller: 'AuthController as ctrl',
      templateUrl: 'app/templates/auth/registration.html'
    })
    .state('newPoll', {
      url: '/polls/new',
      controller: function($scope, PollsService){
        $scope.newPoll = {};
        $scope.newPoll.poll = {};
        $scope.newPoll.poll.responses_attributes = [ { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' } ];
        $scope.createNewPoll = function(){
          PollsService.newPoll($scope.newPoll);
        }
      },
      templateUrl: 'app/templates/new_poll.html'
    })
    .state('user', {
      url: '/user/:id',
      controller: 'UsersController as ctrl',
      templateUrl: 'app/templates/user.html',
      resolve: {
        user: function(UserService, $stateParams){
          return UserService.getUser($stateParams.id);
        }
      }
    });
  });