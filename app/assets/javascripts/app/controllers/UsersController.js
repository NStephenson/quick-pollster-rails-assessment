function UsersController(user){


  this.user = user.data;
}

angular
  .module('app')
  .controller('UsersController', UsersController)