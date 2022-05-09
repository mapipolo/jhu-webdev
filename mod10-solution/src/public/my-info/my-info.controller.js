(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['DataService'];
function MyInfoController(dataService) {
  var ctrl = this;

  ctrl.firstName = dataService.get('firstName');
  ctrl.lastName = dataService.get('lastName');
  ctrl.email = dataService.get('email');
  ctrl.phone = dataService.get('phone');
  ctrl.favoriteDish = dataService.get('favoriteDish');
}

})();
