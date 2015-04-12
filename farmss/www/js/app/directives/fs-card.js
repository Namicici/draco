angular.module('farmss.directives')

.directive('fsCard', function(){
    return {
        require: "^fsPane",
        restrict: "EA",
        transclude: true,
        scope:{
            data: "="
        },
        templateUrl: "./templates/directives/fs-card.html",
    };

});
