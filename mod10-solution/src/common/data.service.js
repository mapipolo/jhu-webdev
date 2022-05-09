(function () {
"use strict";

angular.module('common')
.service('DataService', DataService);

DataService.$inject = [];
function DataService() {
  var service = this;

  service.map = {};

  service.save = function(key, value) {
    service.map[key] = value;
    console.log("Saved '" + key + "' = '" + value + "'.");
  }

  service.get = function(key) {
    return service.map[key];
  }
}

})();
