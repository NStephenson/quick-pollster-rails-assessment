app.filter('availablePoll', function(){
  return function(polls, current_user, setting){
    var filtered = [];
    if (setting === 'all') {
      return polls
    } else if (setting === 'responded') {
      return polls.filter(function(poll){
        
      })
    } else if (setting === 'unresponded'){

    }
  }
})


responded
unresponded
all