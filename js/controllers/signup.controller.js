(function () {
    'use strict';
  
    angular.module('public')
      .controller('SignUpController', SignUpController);
  
    function SignUpController(UserService) {
      var signUpCtrl = this;
      signUpCtrl.user = {};
      signUpCtrl.saved = false;
      signUpCtrl.invalidMenu = false;
  
      signUpCtrl.submit = function () {
        const match = /^([A-Za-z]+)(\d+)$/.exec(signUpCtrl.user.favMenu);
        if (!match) {
          signUpCtrl.invalidMenu = true;
          signUpCtrl.saved = false;
          return;
        }
  
        var shortName = match[1].toUpperCase();
        var index = parseInt(match[2]);
  
        UserService.getMenuItem(shortName, index).then(function (response) {
          if (response.data) {
            signUpCtrl.invalidMenu = false;
            signUpCtrl.user.menuItem = response.data;
            UserService.saveUser(signUpCtrl.user);
            signUpCtrl.saved = true;
          } else {
            signUpCtrl.invalidMenu = true;
            signUpCtrl.saved = false;
          }
        });
      };
    }
  })();
  