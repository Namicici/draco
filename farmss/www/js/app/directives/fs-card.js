angular.module('farmss.directives')

.directive('fsCard', function(){
    return {
        restrict: "EA",
        transclude: true,
        scope:{
            data: "="
        },
        templateUrl: "./templates/directives/fs-card.html",

        controller: function($scope){

        }
    };

});
