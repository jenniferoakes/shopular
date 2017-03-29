(function() {
  'use strict';

  angular.module('inventory').factory('InventoryService', InventoryService);

  function InventoryService() {

    let items = JSON.parse(localStorage.getItem('items')) || [];

    /**
     * Adds a new item to the inventory
     * @param {Object} item   item to add with id, name, price, quantity, color, and discount
     * @return {void}
     */
    function addItemToInventory(item) {
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
      //gives us the number of milliseconds from January 1st, 1970
      //this 'fakes' a random number

      items.push({
        id: id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        color: item.color,
        discount:item.discount
      });

      localStorage.setItem('items', angular.toJson(items));
    }

    function getAllItems() {
      return items;
    }

    return {
      addItemToInventory:addItemToInventory,
      getAllItems: getAllItems
    };
  }
}());
