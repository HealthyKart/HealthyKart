angular.module('HealthyKartApp.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('checkout', {
      url: '/checkout',
      templateUrl: 'templates/checkout.html',
      controller: 'checkoutCtrl',
      cache: false
    })

  .state('weakness', {
      url: '/weakness',
      templateUrl: 'templates/weakness.html',
      controller: 'weaknessCtrl',
      cache: false
    })

  .state('weakness1', {
      url: '/weakness1',
      templateUrl: 'templates/weakness1.html',
      controller: 'weakness1Ctrl',
      cache: false
    })

  .state('strength', {
      url: '/strength',
      templateUrl: 'templates/strength.html',
      controller: 'strengthCtrl',
      cache: false
    })

  .state('strength1', {
      url: '/strength1',
      templateUrl: 'templates/strength1.html',
      controller: 'strength1Ctrl',
      cache: false
    })
  .state('strength2', {
      url: '/strength2',
      templateUrl: 'templates/strength2.html',
      controller: 'strength2Ctrl',
      cache: false
    })

  .state('analyze', {
      url: '/analyze',
      templateUrl: 'templates/analyze.html',
      controller: 'analyzeCtrl',
       cache: false
    })
  
  .state('filterBy', {
      url: '/filter',
      templateUrl: 'templates/filterBy.html',
      controller: 'filterByCtrl'
    })

  .state('sortBy', {
      url: '/sort',
      templateUrl: 'templates/sortBy.html',
      controller: 'sortByCtrl'
    })

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.items', {
    url: '/items',
    views: {
      'tab-items': {
        templateUrl: 'templates/tab-items.html',
        controller: 'itemsCtrl',
        cache: false
      }
    }
  })

  .state('tab.cart', {
    url: '/cart',
    views: {
      'tab-cart': {
        templateUrl: 'templates/tab-cart.html',
        controller: 'cartCtrl',
        cache: false
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/items');
  //$urlRouterProvider.otherwise('strength');
  

});