(function() {
  'use strict';

  angular.module('shop').factory('LoginService', LoginService);

  /**
   * Login service constructor
   */
  function LoginService() {
    return{
      login:login
    };

    function login(username) {
      let loginInformation= {
        username: username,
        time: new Date()
      };
      return LoginInformation;
    }
  }


}());
