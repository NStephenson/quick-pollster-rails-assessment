app.filter('filterPollByResponseStatus', function(){
  return function(polls, currentUser, setting){
    var filtered = [];
    if (setting === 'all') {

      return polls

    } else if (setting === 'responded') {

      currentUser.votes.forEach(function(votedPoll){
        var responded = polls.find(function(poll){
          return poll.id === votedPoll.id;
        });
        if (responded){
          filtered.push(value);
         }
      });
      return filtered;

    } else if (setting === 'unresponded'){

      currentUser.votes.forEach(function(votedPoll){
        var responded = polls.find(function(poll){
          return poll.id !== votedPoll.id;
        });
        if (responded){
          filtered.push(value);
         }
      });
      return filtered;
    }
  }
})