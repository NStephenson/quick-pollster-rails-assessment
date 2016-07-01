app.filter('filterPollByResponseStatus', function(){
  return function(polls, currentUser, setting){
    var filtered = [];
    if (setting === 'all') {

      return polls

    } else if (setting === 'responded') {

      polls.forEach(function(poll){
        var responded = currentUser.votes.find(function(vote){
          return poll.id === vote.poll.id;
        });
        if (responded){
          filtered.push(poll);
         }
      });
      return filtered;

    } else if (setting === 'unresponded'){

      polls.forEach(function(poll){
        var responded = currentUser.votes.find(function(vote){
          return poll.id === vote.poll.id;
        });
        if (!responded){
          filtered.push(poll);
         }
      });
      return filtered;
    }
  }
})