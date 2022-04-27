(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.template.html'
    })

    // Menu categories page
    .state('categories', {
        url: '/categories',
        templateUrl: 'src/templates/categories.template.html',
        controller: 'CategoriesController as catsCtrl',
        resolve: {
          items: ['MenuDataService', 
                  function (MenuDataService) {
                      console.log("Resolving 'categories' state...");
                      return MenuDataService.getAllCategories();
                  }]
        }
    })

    // Items in menu category page
    .state('items', {
        url: '/categories/{categoryName}',
        templateUrl: 'src/templates/items.template.html',
        controller: 'ItemsController as itemsCtrl',
        resolve: {
            items: ['$stateParams',
                    'MenuDataService', 
                    function ($stateParams, MenuDataService) {
                        console.log("Resolving 'items' state...");
                        return MenuDataService.getItemsForCategory($stateParams.categoryName);
                    }]
        }
    });
}

})();
