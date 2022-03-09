(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.messageClass = "hidden";
        $scope.emptyItemsCaveat = "";

        $scope.checkForTooMuch = function () {
            if ($scope.items) {
                $scope.messageClass = "good";

                var splitItems = $scope.items.split(",");
                var splitItemsWithoutEmpties = splitItems.filter(i => i.trim().length > 0);

                $scope.emptyItemsCaveat = splitItemsWithoutEmpties.length < splitItems.length
                    ? "(Empty items [e.g., ', ,'] are not counted.)"
                    : "";
                $scope.message = splitItemsWithoutEmpties.length <= 3
                    ? "Enjoy!"
                    : "Too much!";
            } else {
                $scope.messageClass = "warning";
                $scope.message = "Please enter data first";
            }
        };
    }
})();
