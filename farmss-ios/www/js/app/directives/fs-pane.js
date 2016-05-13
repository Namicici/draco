angular.module('farmss.directives')

.directive('fsPane', function(){
    return {
        require: "^fsTabs",
        restrict: "EA",
        transclude: true,
        scope:{
            title: "@"
        },
        templateUrl: "./templates/directives/fs-pane.html",

        link: function(scope, element, attrs, tabsCtrl){
            tabsCtrl.addPane(scope);
        }
    };
});
