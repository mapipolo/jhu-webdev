(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.filter('tridollar', TridollarFilter);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var ctrlToBuy = this;

    ctrlToBuy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();
    
    ctrlToBuy.markAsBought = function (itemIndex) {
        ShoppingListCheckOffService.markAsBought(itemIndex);
    }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var ctrlBought = this;

    ctrlBought.itemsBought = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
        { name: "bags of za'atar", pricePerItem: 3.79, quantity: "2" },
        { name: "bag of coffee beans", pricePerItem: 13.99, quantity: "1" },
        { name: "bunch of cilantro", pricePerItem: 2.50, quantity: "1" },
        { name: "lamb shoulder", pricePerItem: 38.00, quantity: "1" },
        { name: "fennel bulb", pricePerItem: 5.33, quantity: "1" },
        { name: "eggplants", pricePerItem: 2.19, quantity: "3" },
        { name: "jar of tahini", pricePerItem: 7.69, quantity: "1" },
    ];
    var itemsBought = [];
  
    service.markAsBought = function (itemIndex) {
        itemsBought.push(itemsToBuy[itemIndex]);
        itemsToBuy.splice(itemIndex, 1);
    };

    service.getItemsToBuy = function () {
        return itemsToBuy;
    };

    service.getBoughtItems = function () {
        return itemsBought;
    };
}

function TridollarFilter() {
    return function (input) {
      return "$$$" + (Math.round(input * 100) / 100).toFixed(2);
    };
}

})();
