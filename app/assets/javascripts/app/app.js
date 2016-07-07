var app = angular.module('app', ['ui.router', 'templates', 'Devise', 'ngMessages']);
  // .config([
  //   "$httpProvider", function($httpProvider) {
  //     $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  //   }
  // ])
app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('welcome', {
      url: '/',
      templateUrl: 'app/templates/welcome.html'
    })
    .state('welcome.newPoll', {
      url: 'newpoll',
      controller: 'PollsController as vm',
      templateUrl: 'app/templates/new_poll.html',
      resolve: {
        polls: function(){
          return {};
        }
      }
    })
    .state('welcome.login',{
      url: 'login',
      controller: 'AuthController as vm',
      templateUrl: 'app/templates/auth/login.html'
    })
    .state('welcome.signUp',{
      url: 'signup',
      controller: 'AuthController as vm',
      templateUrl: 'app/templates/auth/registration.html'
    })
    .state('polls', {
      url: '/polls',
      controller: 'PollsController as vm',
      templateUrl: 'app/templates/polls-index.html',
      resolve: {
        polls: function(PollsService){
          return PollsService.getPolls();
        }
      }
    })
    .state('poll', {
      url: '/polls/:id',
      controller: 'PollsController as vm',
      templateUrl: 'app/templates/poll_show.html',
      resolve: {
        polls: function(PollsService, $stateParams){
          return PollsService.getPoll($stateParams.id);
        }
      }
    })
    .state('login',{
      url: '/login',
      controller: 'AuthController as vm',
      templateUrl: 'app/templates/auth/login.html'
    })
    .state('signUp',{
      url: '/signup',
      controller: 'AuthController as vm',
      templateUrl: 'app/templates/auth/registration.html'
    })
    .state('newPoll', {
      url: '/newpoll',
      controller: "PollsController as vm",
      resolve: {
        polls: function(){
          return {};
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

    $urlRouterProvider.otherwise('/');
  });