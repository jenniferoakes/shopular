(function() {
  'use strict';

  angular.module('shop').controller('LoginController', LoginController);

  LoginController.$inject = ['LoginService'];

  /**
   * [LoginController description]
   * @param {[type]} LoginService [description]
   */
  function LoginController(LoginService) {
    let vm = this;
    vm.user = {};
    vm.loggedInStatus = false;

    /**
     * [login description]
     * @param  {[type]} user [description]
     * @return {[type]}      [description]
     */
    vm.login = function login(user) {
      console.log('calling login on controller with', user);
      if (typeof(user) !== 'object' || !user) {
        return;
      }
      if (typeof(user.username) !== 'string' || !user.username || user.username === '') {
        return;
      }
      vm.loggedIn = LoginService.login(user.username);
      vm.loggedInStatus = true;
    };
  }

}());
