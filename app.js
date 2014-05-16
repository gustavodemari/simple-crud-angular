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

  var usersList = [
    {
      id: 1,
      name: 'Gustavo De Mari Pereira',
      email: 'guta302@hotmail.com'
    },
    {
      id: 2,
      name: 'Jose da Silva',
      email: 'josesilva@hotmail.com'
    },
  ];
})()