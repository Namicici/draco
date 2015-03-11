
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider){
  $ionicConfigProvider.tabs.position('bottom')
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
  /*
    .state('tab.publish-detail', {
      url: '/publishs/:publishId',
      views: {
        'tab-publishs': {
          templateUrl: 'templates/publish/publish-detail.html',
          controller: 'controllers/publish/PublishDetailCtrl'
        }
      }
    })

  .state('tab.messages', {
      url: '/messages',
      views: {
        'tab-messages': {
          templateUrl: 'templates/message/tab-messages.html',
          controller: 'controllers/message/MessagesCtrl'
        }
      }
    })
    .state('tab.message-detail', {
      url: '/message/:messageId',
      views: {
        'tab-messages': {
          templateUrl: 'templates/message/message-detail.html',
          controller: 'controllers/message/MessageDetailCtrl'
        }
      }
    })

  .state('tab.user', {
    url: '/user',
    views: {
      'tab-user': {
        templateUrl: 'templates/user/tab-user.html',
        controller: 'controllers/user/UserCtrl'
      }
    }
  });*/

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/native');
});


