angular.module('farmss.directives')

.directive('fsLocate', function(){
    return {
        restrict: "EA",
        transclude: true,
        scope:{
            items:"="
        },
        templateUrl: "./templates/directives/locate.html",

        controller: function($scope, $ionicModal){
            $scope.selected = "当阳";

            initModal = function(){
                $ionicModal.fromTemplateUrl("./templates/directives/locationsModal.html", {
                    scope: $scope,
                    animation: 'slide-in-up'
                }).then(function(modal){
                    $scope.modal = modal;
                });
            };

            initModal();

            $scope.locateArea = function(area){
                $scope.selected = area.name;
                $scope.modal.hide();
            };

            $scope.changeLocation = function(){
                if ($scope.modal)
                    $scope.openModal = $scope.modal.show();
            };

            $scope.select = function(item){
                $scope.selected = item;
                $scope.modal.hide();
            };
        }
    };

});
