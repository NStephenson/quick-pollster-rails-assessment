function PollsController(polls){


  this.polls = polls.data;

  this.submitResponse = function(){
    debugger;
  }

  this.createPoll = function(){}

  this.editPoll = function(){}


}

angular
  .module('app')
  .controller('PollsController', PollsController)