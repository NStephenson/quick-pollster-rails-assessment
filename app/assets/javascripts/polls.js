'use strict';

getCurrentUser();

var authToken = $('meta[name="csrf-token"]').attr('content');
var currentUser;
var allPolls = [];