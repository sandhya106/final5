(function () {
    'use strict';
  
    angular.module('public')
      .controller('MyInfoController', MyInfoController);
  
    function MyInfoController(UserService) {
      var myInfoCtrl = this;
      myInfoCtrl.user = UserService.getUser();
    }
  })();
  