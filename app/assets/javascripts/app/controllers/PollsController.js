app.controller('PollsController', function PollsController(polls, $filter){


  this.polls = polls.data;

  this.search = '';

});