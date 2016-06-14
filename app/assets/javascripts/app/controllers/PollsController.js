function PollsController(polls){


  this.polls = polls.data;


}

angular
  .module('app')
  .controller('PollsController', PollsController)