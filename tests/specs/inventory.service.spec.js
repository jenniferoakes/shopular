(function() {
  'use strict';

  let expect = chai.expect;

  describe('inventory service', function() {

    let InventoryService;
    beforeEach(module('shop')); //you telling angular-mocks to create an ng-app

    beforeEach(inject(function(_InventoryService_) {
      InventoryService = _InventoryService_;
    }));

    it('should be able to retreive an array of all the items', function () {
        let result = InventoryService.getAllItems();
        expect(result).to.be.an('array');
    });

    




  });


}());
