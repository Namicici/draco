angular.module('starter.directives', ['starter.controllers'])

.directive('ciciDropDown', function(){
    return {
        restrict: "EA",
        transclude: true,
        scope:{
            items: "="
        },
        templateUrl: "./templates/directives/dropDown.html"
    };

});
