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

  usersList = [
    {
      id: 1,
      name: 'Gustavo De Mari Pereira',
      email: 'guta302@hotmail.com'
    }
  ];
})()