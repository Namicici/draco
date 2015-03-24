angular.module('farmss.controllers')

.controller('NativeCtrl', function($scope, constants){

    $scope.provinces = constants.provinceAndcitiesData.provinces;
    $scope.types = constants.machineType;
    $scope.sorts = constants.sortType;

    $scope.places = ["坝陵", "半月", "河溶"];

    $scope.publishes = [
        {
            id: 1,
            machineId: 1,
            machineType: "喷药",
            userId: 2,
            userName: "李开封",
            title: "无人飞机喷药灭虫",
            price: 20,
            img: "aircraft.jpg",
            startTime: "2015-05-01",
            endTime: "2015-08-01",
            details: "黄林村一组民辉农资提供"
        },{
            id: 2,
            machineId: 2,
            machineType: "耕田",
            userId: 2,
            userName: "李开封",
            title: "机械耕田",
            price: 30,
            img: "tuolaji.jpg",
            startTime: "2015-05-01",
            endTime: "2015-08-01",
            details: "黄林村一组民辉农资提供"
        },{
            id: 3,
            machineId: 3,
            machineType: "插秧",
            userId: 1,
            userName: "村组会",
            title: "机械插秧",
            price: 30,
            img: "chayang.jpg",
            startTime: "2015-05-01",
            endTime: "2015-08-01",
            details: "黄林村一组信用社提供"
        },{
            id: 4,
            machineId: 4,
            machineType: "喷药",
            userId: 3,
            userName: "李开军",
            title: "无人飞机喷药灭虫",
            price: 30,
            img: "aircraft2.jpg",
            startTime: "2015-05-01",
            endTime: "2015-08-01",
            details: "黄林村一组李开军提供"
        },{
            id: 5,
            machineId: 5,
            machineType: "割谷",
            userId: 4,
            userName: "卢山",
            title: "机械割谷",
            price: 50,
            img: "geguji.jpg",
            startTime: "2015-05-01",
            endTime: "2015-08-01",
            details: "黄林村一组卢山提供"
        }
    ];
})
