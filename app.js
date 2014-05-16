(function(){
  //loading modules
  var app = angular.module('crud', []);

  app.controller("userController", function(){
    //init users
    this.users = usersList;

    this.createUser = function(newUser){
      if(newUser){
        this.users.push(newUser);
      }
    }
  });

  usersList = [];
})()