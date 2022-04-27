(function () {
    
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
    var service = this;
    
    service.getAllCategories = function () {
        console.log("Getting all menu categories...");

        return $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/categories.json"
        }).then(function (response) {
            console.log("Fetched " + response.data.length + " categories:");
            var items = [];
            response.data.forEach(i => {
                items.push(i);
            });
            console.log(items);
            return items;
        });
    };

    service.getItemsForCategory = function (categoryShortName) {
        console.log("Fetching menu items in category '" + categoryShortName + "'...");
        var urlWithArg = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName;
        return $http({
            method: "GET",
            url: urlWithArg
        }).then(function (response) {
            console.log("Fetched " + response.data.menu_items.length + " menu items in category '" + categoryShortName + "':");
            var items = [];
            response.data.menu_items.forEach(i => {
                items.push(i);
            });
            console.log(items);
            return items;
        });
    };
}

})();
    