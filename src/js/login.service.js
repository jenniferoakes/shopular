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

    /**
     * [login description]
     * @param  {String} username
     * @return {Object}          gives back username and time
     */
    function login(username) {
      
      let loginInformation= {
        username: username,
        time: new Date()
      };
      return loginInformation;
    }
  }


}());
