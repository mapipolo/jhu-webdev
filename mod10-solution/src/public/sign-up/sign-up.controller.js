(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['DataService'];
function SignUpController(dataService) {
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
    ctrl.saved = true;
    console.log("Form submitted.");
  }
}

})();
