(function () {

'use strict';

angular.module('NarrowItDownApp', [])
       .controller('NarrowItDownController', NarrowItDownController)
       .service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var ctrlNid = this;

    ctrlNid.found = []; // initialize to a reasonable value

    ctrlNid.getMatchedMenuItems = function (searchTerm) {
        found = MenuSearchService.getMatchedMenuItems(searchTerm);
    }
}

function MenuSearchService() {
    var service = this;

    var endpointURL = "https://davids-restaurant.herokuapp.com/menu_items.json";
    
    service.getMatchedMenuItems = function (searchTerm) {
        return [ "Not yet implemented" ];
    };
}

})();
