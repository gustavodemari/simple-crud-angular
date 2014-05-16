(function(){
  //loading modules
  var app = angular.module('crud', []);

  app.controller("UserController", function(){
    //init users
    this.users = usersList;
    this.newUser = {};

    this.createUser = function(){
      if(this.newUser){
        this.newUser.id = this.users.length+1;
        this.users.push(this.newUser);
        this.newUser = {};
      }
    }

    this.updateUser = function(userUpdated){
      if(userUpdated){
        for (var i = 0; i < this.users.length; i++){
          if(this.users[i].id === userUpdated.id){
            this.users[i] = userUpdate;
          }
        }
      }
    }
  });

  app.controller("TableController", function(){
    this.setActiveRow = function(userId){
      this.selectedUser = userId;
    }

    this.getActiveRow = function(userId){
      return this.selectedUser === userId;
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