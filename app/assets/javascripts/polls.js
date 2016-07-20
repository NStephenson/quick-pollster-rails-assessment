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

  }
}