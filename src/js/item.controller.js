(function() {
  'use strict';

  angular.module('inventory').controller('ItemController', ItemController);

  ItemController.

}());


(function() {
  angular.module('school').controller('FinanceController', FinanceController);

  FinanceController.$inject = ['StudentService'];

  function FinanceController(StudentService) {
    let vm = this;

    vm.students = StudentService.getAllStudents();
  }
}());
