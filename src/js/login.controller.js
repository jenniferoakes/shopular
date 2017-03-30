(function() {
  'use strict';

  angular.module('inventory').controller('LoginController', LoginController);

  LoginController.$inject = ['LoginInService'];

  /**
   * Takes in username
   * @param {string} string   name of the shopular application username
   * @return {Object}         the username and time they logged into the application
   */
  function LoginController(LoginInService) {
    let vm = this;
    vm.user = {};
    vm.loggedInStatus = false;
    vm.login= function login(user) {
      if (typeof(user) !== 'object' || !user) {
        return;
      }
      return LoginInService.login(user);
    };
  }

}());
