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
                if (splitItemsWithoutEmpties.length <= 3) {
                    $scope.message = "Enjoy!";
                    if (splitItemsWithoutEmpties.length < splitItems.length) {
                        $scope.emptyItemsCaveat = "(Empty items [e.g., ', ,'] are not counted.)";
                    } else {
                        $scope.emptyItemsCaveat = "";
                    }
                } else {
                    $scope.message = "Too much!";
                }
            } else {
                $scope.messageClass = "warning";
                $scope.message = "Please enter data first";
            }
        };
    }
})();
