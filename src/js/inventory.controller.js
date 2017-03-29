(function() {
  'use strict';

  angular.module('inventory') //retreiving a module
  .controller('InventoryController', InventoryController);

  function InventoryController() {

    let vm = this;

    vm.newItem = {};
    vm.sortType = 'price'; // set the default sort type
    vm.sortReverse = false; // set the default sort order

    vm.inventory = [
      { "id": 2957, "name": "widget", "price": 32, "quantity": 203, "color": "red", "discount": 31 },
      { "id": 89274, "name": "golf club", "price": 98, "quantity": 10, "color": "black", "discount": 0 },
      { "id": 64, "name": "iPhone", "price": 499, "quantity": 2, "color": "white", "discount": 0 },
      { "id": 87363, "name": "bonzai tree", "price": 76, "quantity": 2, "color": "green", "discount": 0 },
      { "id": 1736, "name": "towel", "price": 55, "quantity": 30, "color": "brown", "discount": 10 },
      { "id": 4836, "name": "dog bed", "price": 99, "quantity": 10, "color": "beige", "discount": 50 },
      { "id": 829, "name": "waste basket", "price": 15, "quantity": 40, "color": "silver", "discount": 0 },
      { "id": 46, "name": "guitar", "price": 899, "quantity": 0, "color": "blue", "discount": 150 },
      { "id": 17456, "name": "matcha tea", "price": 42, "quantity": 4, "color": "green", "discount": 11 },
      { "id": 3292, "name": "enlightenment", "price": 99999, "quantity": 1, "color": "red", "discount": 0 },
      { "id": 533, "name": "eggs", "price": 5, "quantity": 12, "color": "brown", "discount": 1 },
      { "id": 683, "name": "pillow", "price": 27, "quantity": 10, "color": "black", "discount": 12 }
    ];

    /**
    * Calculates price of inventory item, taking into consideration discount and tax
    * @param {Object} item     One item in the inventory
    * @return {Number}         final price of inventory item
    */
    vm.getNewPrice = function getNewPrice(item) {
      let discountedPrice = item.price - item.discount;
      let finalPrice = discountedPrice * 1.0575;
      return finalPrice;
    };

    /**
     * Adds new item to inventory
     * @param {Object} item   Needs a name, price, quantity, color, and discount
     * @return {void}
     */
    vm.addItem = function addItem(item) {
      if(typeof(item) !== 'object') {
        return;
      }

      if(typeof(item.name) !== 'string' || item.name.length < 1) {
        return;
      }

      item.price = Number(item.price); //setting price to be a number since all data coming through a form is a string
      if( Number.isNaN(item.price)) {
        return;
      }

      let id = Date.now();

      vm.inventory.push({
        id: id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        color: item.color,
        discount: item.discount
      });

      vm.newItem = {};

    };

  }
})();
