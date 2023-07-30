(function () {
  "use strict";

  angular
    .module("ShoppingListCheckOff", [])
    .controller(
      "ShoppingListCheckOffController",
      ShoppingListCheckOffController
    );

  ShoppingListCheckOffController.$inject = [
    "$scope",
    "ShoppingListCheckOffService"
  ];

  function ShoppingListCheckOffController($scope, ShoppingListCheckOffService) {
    $scope.toBuyItems = [
      { name: "Milk", quantity: 1 },
      { name: "Eggs", quantity: 12 },
      { name: "Bread", quantity: 2 }
    ];

    $scope.alreadyBoughtItems = [];

    $scope.buyItem = function (item) {
      ShoppingListCheckOffService.buyItem(item);
    };
  }

  ShoppingListCheckOffService.$inject = ["$rootScope"];

  function ShoppingListCheckOffService($rootScope) {
    this.buyItem = function (item) {
      // Remove the item from the "to buy" list.
      var toBuyItems = $rootScope.toBuyItems;
      for (var i = 0; i < toBuyItems.length; i++) {
        if (toBuyItems[i] === item) {
          toBuyItems.splice(i, 1);
          break;
        }
      }

      // Add the item to the "already bought" list.
      var alreadyBoughtItems = $rootScope.alreadyBoughtItems;
      alreadyBoughtItems.push(item);
    };
  }
})();
