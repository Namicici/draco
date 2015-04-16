angular.module('farmss.controllers')

.controller('nativeDetailCtrl', function($scope, $http, constants, $location){

    $scope.$on("fs.controllers.nativeCtrl.detail", function(scope, data){
        $scope.currentPublish = data;
    });
});
