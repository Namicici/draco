angular.module('farmss.controllers')

.controller('nativeDetailCtrl', function($scope, $http, constants, $location, $ionicHistory){

    $scope.$on("fs.controllers.nativeCtrl.detail", function(scope, data){
        $scope.currentPublish = data;
    });

    $scope.goBack = function(){
        $ionicHistory.goBack();
    };
});
