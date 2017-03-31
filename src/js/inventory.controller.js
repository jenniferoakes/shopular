(function() {
  'use strict';

  angular.module('shop') //retreiving the inventory module
  .controller('InventoryController', InventoryController); //creating the inventory controllers

  let tax = 0.0575;

  InventoryController.$inject = ['InventoryService'];

  function InventoryController(InventoryService) {

    let vm = this;
    vm.newItem = {};
    vm.sortType = 'price'; // set the default sort type
    vm.sortReverse = false; // set the default sort order
    vm.inventory = InventoryService.getAllItems();

    /**
    * Calculates price of inventory item, taking into consideration discount and tax
    * @param {Array} item     One item in the inventory
    * @return {Object}         final price of inventory item
    */
    vm.getNewPrice = function getNewPrice(item) {
      let discountedPrice = item.price - item.discount;
      let finalPrice = discountedPrice * (tax + 1);
      return finalPrice;
    };

    /**
     * Adds new item to inventory
     * @param {Object} item   Needs a name, price, quantity, color, and discount
     * @return {boolean}
     */
    vm.addItem = function addItem(item) {
      InventoryService.addItemToInventory(item);
      vm.newItem = {};
      return true;
      //set this to true so that in the form, when we add a new item on submit, the $setUntouched() is able to run
    };

    vm.changeSort = function changeSort(sortField) {
      vm.sortType = sortField;
      vm.sortReverse = !vm.sortReverse;
    };
  }
})();
