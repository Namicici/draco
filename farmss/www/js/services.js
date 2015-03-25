angular.module('farmss.services', ["ngMockE2E"])

.run(function($httpBackend){
    $httpBackend.whenGET("/tab/*").passThrough();
    var allpublish = [
        {
            publishId: "110",
            machineId: 1,
            machineType: "喷药",
            ownerId: 1,
            owner: "李开封",
            title: "无人飞机喷药灭虫",
            price: 20,
            img: "aircraft.jpg",
            startTime: "2015-05-01",
            endTime: "2015-08-01",
            details: "黄林村一组民辉农资提供"
        },{
            publishId: "120",
            machineId: 2,
            machineType: "耕田",
            ownerId: 1,
            owner: "李开封",
            title: "机械耕田",
            price: 30,
            img: "tuolaji.jpg",
            startTime: "2015-05-01",
            endTime: "2015-08-01",
            details: "黄林村一组民辉农资提供"
        },{
            publishId: "2",
            machineId: 3,
            machineType: "插秧",
            ownerId: 2,
            owner: "村组会",
            title: "机械插秧",
            price: 30,
            img: "chayang.jpg",
            startTime: "2015-05-01",
            endTime: "2015-08-01",
            details: "黄林村一组信用社提供"
        },{
            publishId: 4,
            machineId: 4,
            machineType: "喷药",
            ownerId: 3,
            owner: "李开军",
            title: "无人飞机喷药灭虫",
            price: 30,
            img: "aircraft2.jpg",
            startTime: "2015-05-01",
            endTime: "2015-08-01",
            details: "黄林村一组李开军提供"
        },{
            publishId: 5,
            machineId: 5,
            machineType: "割谷",
            ownerId: 4,
            owner: "卢山",
            title: "机械割谷",
            price: 50,
            img: "geguji.jpg",
            startTime: "2015-05-01",
            endTime: "2015-08-01",
            details: "黄林村一组卢山提供"
        }
    ];
    $httpBackend.whenGET("api/native").respond();
});
