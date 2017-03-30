(function() {
  'use strict';

  let expect = chai.expect;

  describe('inventory controller', function() {

    let InventoryController;
    let mockInventoryService = {};

    beforeEach(module('shop'));

    beforeEach(module(function($provide) { //creating a submodule, a module inside of a module
      $provide.value('InventoryService', mockInventoryService);
      //the value of the real inventory service is dead, so instead use this fake one
    }));
  });


}());
