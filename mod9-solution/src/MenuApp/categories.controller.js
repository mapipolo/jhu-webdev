(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['items'];
function CategoriesController(items) {
    var catsCtrl = this;
    catsCtrl.testProp = "hi there!";
    catsCtrl.items = items;
    console.log("catsCtrl.Items = " + catsCtrl.items);
}

})();
    