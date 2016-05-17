angular.module('farmss.controllers')

.controller('nativeCtrl', ['$scope', '$rootScope', '$http', 'constants', '$location', function($scope, $rootScope, $http, constants, $location){

    $scope.provinces = constants.provinceAndcitiesData.provinces;
    $scope.types = constants.machineType;
    $scope.sorts = constants.sortType;

    $scope.places = ["不限", "黄林村",  "半月", "河溶"];
    $scope.selCol = {
        place: 1,
        macType: 2,
        sort: 3
    };

    getAllPoolInfo = function(){
        var httpConfig = {
            method: "GET",
            url: "api/native/allpool"
        };
        $http(httpConfig).success(function(data){
            $scope.pools = data;
        });
    };

    getAllPoolInfo();

    getAllNativePublish = function(){
        var httpConfig = {
            method: "GET",
            url: "api/native/allpublish"
        };
        $http(httpConfig).success(function(data){
            $scope.publishes = data;
        });
    };

    getAllNativePublish();

    $scope.$on("farmss.controllers.publishCtrl.new", function(scope, data){
        $scope.publishes.push(data);
        console.log($scope.publishes);
    });

    $scope.filterPlace = function(selPlace){
        if (selPlace == "不限")
            return ""
        else
            return selPlace;
    };

    $scope.filterMacType = function(selMacType){
        if (selMacType == "不限")
            return ""
        else
            return selMacType;
    };

    $scope.$on("fs.directives.locate.selected", function(scope){
        $scope.locatePlace = scope.targetScope.selected.name;
    });

    $scope.detail = function(publish){
        var httpConfig = {
            method: "GET",
            url: "api/publish/detail/" + publish.publishId
        };
        $http(httpConfig).success(function(data){
            $rootScope.$broadcast("fs.controllers.nativeCtrl.detail", data);
        });
    };
}])
