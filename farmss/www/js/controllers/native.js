angular.module('starter.controllers', [])

.controller('NativeCtrl', function($scope) {
    $scope.places = ["坝陵", "半月", "河溶"];
    $scope.types = ["割谷", "耕田", "喷药"];
    $scope.sorts = ["距离最近", "价格最低"];

    $scope.items = [1,2,3];
    $scope.doRefresh = function() {
        $http.get('/new-items')
         .success(function(newItems) {
           $scope.items = newItems;
         })
         .finally(function() {
           // Stop the ion-refresher from spinning
           $scope.$broadcast('scroll.refreshComplete');
         });
     };

})
