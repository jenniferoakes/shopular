(function() {
  'use strict';

  angular.module('shop') //retreiving the inventory module
  .factory('InventoryService', InventoryService); //creating a factory

  function InventoryService() { //constructor function

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
      if( Number.isNaN(item.price) || item.price < 0.01) {
        return;
      }

      if(typeof(item.discount) !== 'number' || item.discount < 0) {
        return;
      }

      if(typeof(item.quantity) !== 'number' || item.quantity < 0) {
        return;
      }

      //color? must be a string...if not, do something, use 'null' item.color = null, if not a string, make it null
      //does that string match a previously defined color?

      let id = Date.now();
      //gives us the number of milliseconds from January 1st, 1970
      //this 'fakes' a random number

      items.push({ //'items' matches line 47 toJson(items)
        id: id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        color: item.color,
        discount:item.discount
      });

      localStorage.setItem('items', angular.toJson(items));
    }

    /**
     * gets all the items in inventory
     * @return {Array}      All items in inventory
     */
    function getAllItems() {
      return items;
    }

    return {
      addItemToInventory:addItemToInventory,
      getAllItems: getAllItems
    };
  }
}());
