angular.module('farmss.controllers')

.controller('publishCtrl', ['$scope', '$rootScope', 'constants', '$http', '$location', function($scope, $rootScope, constants, $http, $location){

    $scope.types = constants.machineType;
    $scope.publish = function(title, selMacType, price, startTime, endTime, description){
        var addone = {};
        addone.publishId = "150";
        addone.machineType = selMacType;
        addone.title = title;
        addone.img = "default.jpg";
        addone.price = price;
        addone.village = "黄林村",
        addone.publishTime = "2015-03-26";
        addone.area = "当阳市";

        var config = {
            method: "PUT",
            url: "api/publish",
            data: addone
        }

        $http(config).success(function(data){

        });

        $rootScope.$broadcast("farmss.controllers.publishCtrl.new", addone);

        $location.path("/native");

    };

}]);
