'use strict';

getCurrentUser();

var authToken = $('meta[name="csrf-token"]').attr('content');
var currentUser;
var allPolls = [];

class Poll {
  constructor(id, question, published, selectMultiple, publicResults, open, responses, user) {
    this.id = id;
    this.question = question;
    this.published = published;
    this.selectMultiple = selectMultiple;
    this.publicResults = publicResults;
    this.open = open;
    this.responses = responses;
    this.user = user;
  }

  buildPollHtml(){
    var poll = this;
    var pollHtml = '<div id="poll_card_'+ this.id +'">';
    pollHtml += '<a href="/polls/'+ this.id +'"><h2>' + this.question + '</h2></a>';
    if (poll.user && poll.user.id != currentUser.id){
      pollHtml += '<h5>by <a href="/users/'+ poll.user.id +'">'+ poll.user.username +'</a></h5>';
    } else if(poll.user && poll.user.id === currentUser.id){
      pollHtml += '<h5><a class="edit-poll-options" data-pollid="'+ poll.id +'" href="">Edit Poll Options</a> - <a rel="nofollow" class="delete-poll" data-pollid="'+ poll.id +'" href="">Delete this Poll</a> - Share link: http://localhost:3000/polls/'+ poll.id +'</h5>';
      pollHtml += buildOptionsHtml(poll);
    }
    pollHtml += '<form method="POST" action="/polls/'+ this.id +'/results" class="poll-form" id="poll_'+ this.id +'" data-pollId="'+ this.id +'">';
    this.responses.forEach(function(response){
      pollHtml += '<input type=';
      if (poll.selectMultiple) {
        pollHtml += '"checkbox"';
      } else {
        pollHtml += '"radio"';
      }
      pollHtml += ' name="response[id][]" value="'+ response.id +'">';
      pollHtml += '<label>'+ response.text +'</label><br>';
    });
    pollHtml += '<input name="authenticity_token" value="'+ authToken +'" type="hidden">';
    pollHtml += '<input type="submit" name="submit">';
    pollHtml += '</form></div>';
    return pollHtml;
  }
}

class Response {
  constructor(id, text, selected){
    this.id = id;
    this.text = text;
    this.selected = selected;
  }
}

class User {
  constructor(id, username) {
    this.id = id;
    this.username = username;
  }
}

function addPollsToDom(){
  $('#see-more-polls').click(function(){
    if(maxPollsInDom < allPolls.length){
      maxPollsInDom += 5;
      loadPolls();
      if(maxPollsInDom >= allPolls.length){
        $('#polls-list').append('<p>End of the Line. No More Polls.</p>');
      }
    }
  });
}