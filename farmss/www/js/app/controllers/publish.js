angular.module('farmss.controllers')

.controller('PublishCtrl', function($scope, constants, $http){

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

        var config = {
            method: "PUT",
            url: "api/publish",
            data: addone
        }

        $http(config).success(function(data){

        });
    };

});
