(function(){
  //loading modules
  var app = angular.module('crud', []);

  app.controller("userController", function(){
    //init users
    this.users = usersList;
  });

  usersList = [];
})()