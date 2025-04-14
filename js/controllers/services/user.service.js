(function () {
    'use strict';
  
    angular.module('public')
      .service('UserService', UserService);
  
    function UserService($http) {
      var service = this;
      var user = null;
      var baseUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/";
  
      service.saveUser = function (data) {
        user = data;
      };
  
      service.getUser = function () {
        return user;
      };
  
      service.getMenuItem = function (shortName, index) {
        var url = baseUrl + shortName + "/menu_items/" + index + ".json";
        return $http.get(url);
      };
    }
  })();
  