angular.module('farmss.directives')

.directive('fsLocate', function(){
    return {
        restrict: "EA",
        transclude: true,
        scope:{
            items:"="
        },
        templateUrl: "./templates/directives/fs-locate.html",

        controller: function($scope, $ionicModal){
            $scope.selected = {"id":1919, "code":"420582", "name":"当阳市"};

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
                $scope.selected = area;
                $scope.modal.hide();
                $scope.$emit("fs.directives.locate.selected", $scope.selected);
            };

            $scope.cancel = function(){
                $scope.modal.hide();
            };

            $scope.changeLocation = function(){
                if ($scope.modal)
                    $scope.openModal = $scope.modal.show();
            };

            $scope.$emit("fs.directives.locate.selected", $scope.selected);
        }
    };

});
