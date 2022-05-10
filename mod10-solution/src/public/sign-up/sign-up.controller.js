(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['DataService', 'MenuService'];
function SignUpController(dataService, menuService) {
  var ctrl = this;

  ctrl.firstName = "";
  ctrl.lastName = "";
  ctrl.email = "";
  ctrl.phone = "";
  ctrl.favoriteDish = "";
  ctrl.saved = false;

  ctrl.submit = function() {
    console.log("Submitting form...");
    dataService.save('firstName', ctrl.firstName);
    dataService.save('lastName', ctrl.lastName);
    dataService.save('email', ctrl.email);
    dataService.save('phone', ctrl.phone);
    dataService.save('favoriteDish', ctrl.favoriteDish);
    
    menuService.getMenuItem(ctrl.favoriteDish).then(
    function(response) {
      dataService.save('favoriteDishObject', response);
      console.log(response);
    }, function(error) {
      console.log("There was an error retrieving favorite dish: " + error);
    });

    ctrl.saved = true;
    console.log("Form submitted.");
  }
}

})();
