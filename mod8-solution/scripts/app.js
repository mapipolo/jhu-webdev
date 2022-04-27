(function () {

'use strict';

angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
    var ddo = {
        templateUrl: 'foundItems.html',
        scope: {
            items: '<',
            onRemove: '&'
        },
        controller: NarrowItDownController,
        controllerAs: 'list',
        bindToController: true
    };
    
    return ddo;
}
      
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var ctrl = this;

    ctrl.found = [];

    ctrl.getMatchedMenuItems = function () {
        var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);

        promise.then(function (result) {
            console.log("Success!");
            ctrl.found = result;
            console.log(ctrl.found);
        })
        .catch(function (error) {
            console.log("Uh oh! The search failed. " + error);
        })
    }

    ctrl.removeItem = function (index) {
        console.log("Removing element at " + index + " from array of length " + ctrl.found.length + "...");
        ctrl.found.splice(index, 1);
    }
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
        console.log("Searching for menu items containing '" + searchTerm + "'...");
        return $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/menu_items.json"
        });
    };
}

})();
