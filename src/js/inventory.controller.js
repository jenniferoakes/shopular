(function() {
  'use strict';

  angular.module('inventory') //retreiving the inventory module
  .controller('InventoryController', InventoryController); //creating the inventory controller

  InventoryController.$inject = ['InventoryService'];

  function InventoryController(InventoryService) {

    let vm = this;
    vm.newItem = {};
    vm.sortType = 'price'; // set the default sort type
    vm.sortReverse = false; // set the default sort order
    vm.inventory = InventoryService.getAllItems();

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
      InventoryService.addItemToInventory(item);
      vm.newItem = {};
    };

    vm.changeSort = function changeSort(sortField) {
      vm.sortType = sortField;
      vm.sortReverse = !vm.sortReverse;
    };
  }
})();
