(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.emptyItemsCaveat = "";

        $scope.getMessage = function () {
            if ($scope.items == "") {
                return "";
            } else {
                var splitItems = $scope.items.split(",");
                if (splitItems.length <= 3)
                    return splitItems;
                else {
                    return "dga;sd";
                }
            }
        };
        
        $scope.checkForTooMuch = function () {
            if ($scope.items == "") {
                $scope.message = "Please enter data first";
            } else {
                var splitItems = $scope.items.split(",");
                var splitItemsWithoutEmpties = splitItems.filter(i => i.trim().length > 0);
                if (splitItemsWithoutEmpties.length <= 3) {
                    $scope.message = "Enjoy!";
                    if (splitItemsWithoutEmpties.length < splitItems.length)
                        $scope.emptyItemsCaveat = "(Empty items [e.g., ', ,'] are not counted.)";
                    else
                        $scope.emptyItemsCaveat = "";
                } else {
                    $scope.message = "Too much!";
                }
            }
        };
    }
})();
