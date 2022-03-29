(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

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
        { name: "bags of za'atar", quantity: "2" },
        { name: "bag of coffee beans", quantity: "1" },
        { name: "bunch of cilantro", quantity: "1" },
        { name: "lamb shoulder", quantity: "1" },
        { name: "fennel bulb", quantity: "1" },
        { name: "eggplants", quantity: "3" },
        { name: "jar of tahini", quantity: "1" },
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

})();
