(function() {
  'use strict';

  let expect = chai.expect;

  describe('inventory service', function() {
    let InventoryService;
    beforeEach(module('shop')); //you telling angular-mocks to create an ng-app

    beforeEach(inject(function(_InventoryService_) {
      InventoryService = _InventoryService_;
    }));

    afterEach(function() {
      localStorage.removeItem('items');
    });

    it('should be able to retreive an array of all the items', function () {
        let result = InventoryService.getAllItems();
        expect(result).to.be.an('array');
    });

    it('should be able to add a new item to the inventory', function() {
      expect(InventoryService.getAllItems().length).to.equal(0);
      let now = Date.now();
      InventoryService.addItemToInventory({
        id: now,
        name: 'Mugs',
        price: 7.99,
        quantity: 500,
        color: 'Blue',
        discount: 0.99
      });
      let items = InventoryService.getAllItems();
      expect(items.length).to.equal(1);
      expect(items[0].name).to.equal('Mugs');
      expect(items[0].color).to.equal('Blue');
      expect(items[0].price).to.equal(7.99);
      expect(items[0].quantity).to.equal(500);
      expect(items[0].discount).to.equal(0.99);
    });

    it('should not add an item to the inventory if the price is less than 0.01', function() {
      expect(InventoryService.getAllItems().length).to.equal(0);
      let now = Date.now();
      InventoryService.addItemToInventory({
        id: now,
        name: 'Mugs',
        price: -1,
        quantity: 500,
        color: 'Blue',
        discount: 0.99
      });
      let items = InventoryService.getAllItems();
      expect(items.length).to.equal(0);
    });

    it('should not add an item to the inventory if the quantity is less than 0', function() {
      expect(InventoryService.getAllItems().length).to.equal(0);
      let now = Date.now();
      InventoryService.addItemToInventory({
        id: now,
        name: 'Mugs',
        price: 2,
        quantity: -1,
        color: 'Blue',
        discount: 0.99
      });
      let items = InventoryService.getAllItems();
      expect(items.length).to.equal(0);
    });

    it('should not add an item to the inventory if the discount is less than 0', function() {
      expect(InventoryService.getAllItems().length).to.equal(0);
      let now = Date.now();
      InventoryService.addItemToInventory({
        id: now,
        name: 'Mugs',
        price: 2,
        quantity: 10,
        color: 'Blue',
        discount: -2
      });
      let items = InventoryService.getAllItems();
      expect(items.length).to.equal(0);
    });

  });


}());
