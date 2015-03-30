angular.module('farmss.directives')

.directive('fsDropDown', function($ionicModal){
    return {
        restrict: "EA",
        transclude: true,
        scope:{
            items: "=",
            selected: "="
        },
        templateUrl: "./templates/directives/dropDown.html",
        link: function(scope){

            scope.selected = scope.items[0];

            initModal = function(){
                $ionicModal.fromTemplateUrl("./templates/directives/dropDownModal.html", {
                    scope: scope,
                    animation: 'slide-in-up'
                }).then(function(modal){
                    scope.modal = modal;
                });
            };

            initModal();

            scope.filter = function($event){
                if (scope.modal)
                    scope.openModal = scope.modal.show();
            };

            scope.select = function(item){
                scope.selected = item;
                scope.modal.hide();
            };
        }
    };

});
