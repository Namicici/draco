angular.module('farmss')

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

    .state('tab.publish', {
        url: '/publish',
        views: {
            'tab-publish': {
              templateUrl: 'templates/publish/tab-publish.html',
              controller: 'PublishCtrl'
            }
        }
      })

    .state('tab.message', {
        url: '/message',
        views: {
            'tab-message': {
              templateUrl: 'templates/message/tab-message.html',
              controller: 'MessageCtrl'
            }
        }
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/native');
});


