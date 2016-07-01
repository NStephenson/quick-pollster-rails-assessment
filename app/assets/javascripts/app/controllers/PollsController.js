app.controller('PollsController', function PollsController(polls, $filter, Auth){

  this.filterOptions = ['all', 'responded', 'unresponded'];

  this.currentUser = '';

  Auth.currentUser().then(function(user) { 
    this.currentUser = user; 
  });

  this.polls = polls.data;

  this.setting = 'all';


  this.refilter = function() {
    this.filteredPolls = $filter('filterPollByResponseStatus')(this.polls, this.currentUser, this.setting);
  }

  this.refilter();

  this.test = function(){
    console.log(Auth.currentUser().then(function(person) { 
      this.currentUser = person; 
    }));
  }

});