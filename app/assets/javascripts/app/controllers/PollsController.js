app.controller('PollsController', function PollsController(polls, $filter, Auth, $scope){

  this.filterOptions = ['all', 'responded', 'unresponded'];

  Auth.currentUser().then(function(user) { 
    $scope.currentUser = user; 
  });

  this.polls = polls.data;

  this.setting = 'all';


  this.refilter = function() {
    this.filteredPolls = $filter('filterPollByResponseStatus')(this.polls, $scope.currentUser, this.setting);
  }

  this.refilter();

  this.test = function(){
    console.log($scope.currentUser);
  }

});