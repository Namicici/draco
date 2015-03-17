angular.module('starter', ['ionic', 'starter.controllers'])

.config(function($ionicConfigProvider){
  $ionicConfigProvider.tabs.position('bottom');
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.native', {
    url: '/native',
    views: {
      'tab-native': {
        templateUrl: 'templates/native/tab-native.html',
        controller: 'NativeCtrl'
      }
    }
  })

  .state('tab.publishs', {
      url: '/publishs',
      views: {
        'tab-publishs': {
          templateUrl: 'templates/publish/tab-publishs.html',
          controller: 'PublishsCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/native');
});


