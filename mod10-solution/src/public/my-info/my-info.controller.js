(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['DataService', 'MenuService'];
function MyInfoController(dataService, menuService) {
  var ctrl = this;

  ctrl.firstName = dataService.get('firstName');
  ctrl.lastName = dataService.get('lastName');
  ctrl.email = dataService.get('email');
  ctrl.phone = dataService.get('phone');
  ctrl.favoriteDish = dataService.get('favoriteDish');
  
  if (ctrl.favoriteDish != null) {
    console.log("Retrieving favorite dish details...");
    ctrl.favoriteDishObject = dataService.get('favoriteDishObject');
    ctrl.favoriteDishImgUrl = menuService.getMenuItemImageUrl(ctrl.favoriteDish);
  }
}

})();
