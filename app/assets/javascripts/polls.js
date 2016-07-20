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

function buildOptionsHtml(poll){
  var optionsHtml = '<form hidden data-pollid="'+ poll.id +'" class="edit-poll" id="edit-poll-'+ poll.id +'" action="/polls/'+ poll.id +'" accept-charset="UTF-8" method="post">';
  optionsHtml += '<input name="utf8" type="hidden" value="✓">';
  optionsHtml += '<input type="hidden" name="_method" value="patch">';
  optionsHtml += '<input type="hidden" name="authenticity_token" value="'+ authToken +'">';
  optionsHtml += '<label for="poll_Allow multiple responses">Allow multiple responses?</label>';
  optionsHtml += '<input name="poll[select_multiple]" type="hidden" value="0">';
  optionsHtml += '<input type="checkbox" value="1" name="poll[select_multiple]" id="poll_select_multiple" '+ htmlCheckedForOption(poll.selectMultiple) +'><br>';
  optionsHtml += '<label for="poll_Allow Poll results to be public">Allow poll results to be public?</label>';
  optionsHtml += '<input name="poll[public_results]" type="hidden" value="0">';
  optionsHtml += '<input type="checkbox" value="1" name="poll[public_results]" id="poll_public_results" '+ htmlCheckedForOption(poll.publicResults) +'><br>';
  optionsHtml += '<label for="poll_Publish this poll">Publish this poll?</label>';
  optionsHtml += '<input name="poll[published]" type="hidden" value="0">';
  optionsHtml += '<input type="checkbox" value="1" name="poll[published]" id="poll_published" '+ htmlCheckedForOption(poll.published) +'><br>'
  optionsHtml += '<label for="poll_Uncheck to close this poll">Uncheck to close this poll</label>';
  optionsHtml += '<input name="poll[open]" type="hidden" value="0">';
  optionsHtml += '<input type="checkbox" value="1" name="poll[open]" id="poll_open" '+ htmlCheckedForOption(poll.open) +'><br>';
  optionsHtml += '<input type="submit" name="commit" value="Edit Poll Options">';
  optionsHtml += '</form><br>';
  return optionsHtml;
}
