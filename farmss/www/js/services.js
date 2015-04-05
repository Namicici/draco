angular.module('farmss.services', ["ngMockE2E"])

.run(function($httpBackend){

    $httpBackend.whenGET(/tab\//).passThrough();
    $httpBackend.whenGET(/templates\//).passThrough();

    var myPublish = {
        ownerId: 1,
        publish:[
            {
                publishId: "130",
                like: 1,
                comment: 5,
                share: 10,
                title: "无人飞机喷药灭虫",
                img: "aircraft.jpg",
                publishTime: "2015-04-27",
                description: "由当阳明辉信用合作社提供无人飞机和操作人员，并统一配药，预约达到10亩适用。"
            },{
                publishId: "110",
                like: 3,
                comment: 3,
                share: 1,
                title: "机械耕田",
                publishTime: "2015-04-27",
                description: ""
            }
        ]
    };

    var allNativePublish = [
        {
            publishId: "130",
            // machineId: "2934028340823048-203",
            machineType: "杀虫",
            ownerId: 1,
            // owner: "李开封",
            title: "无人飞机喷药灭虫",
            price: 20,
            img: "aircraft.jpg",
            area: "当阳市",
            village: "黄林村",
            publishTime: "2015-04-27",
            // startTime: "2015-05-01",
            // endTime: "2015-08-01",
            // content: "黄林村一组民辉农资提供"
        },{
            publishId: "110",
            // machineId: "iu9r8w9r7e0w8e0r8w0er8",
            machineType: "耕田",
            ownerId: 1,
            // owner: "李开封",
            title: "机械耕田",
            price: 30,
            img: "tuolaji.jpg",
            area: "当阳市",
            village: "黄林村",
            publishTime: "2015-04-27",
            // startTime: "2015-05-01",
            // endTime: "2015-08-01",
            // content: "黄林村一组民辉农资提供"
        },{
            publishId: "240",
            // machineId: "sdnfosdofuwe0928304820",
            machineType: "插秧",
            ownerId: 2,
            // owner: "村组会",
            title: "机械插秧",
            price: 30,
            img: "chayang.jpg",
            area: "当阳市",
            village: "黄林村",
            publishTime: "2015-04-27",
            // startTime: "2015-05-01",
            // endTime: "2015-08-01",
            // content: "黄林村一组信用社提供"
        },{
            publishId: "330",
            // machineId: "8797sdfs8009s=fsdfdfs",
            machineType: "杀虫",
            ownerId: 3,
            // owner: "李开军",
            title: "无人飞机喷药灭虫",
            price: 30,
            img: "aircraft2.jpg",
            area: "当阳市",
            village: "黄林村",
            publishTime: "2015-04-27",
            // startTime: "2015-05-01",
            // endTime: "2015-08-01",
            // content: "黄林村一组李开军提供"
        },{
            publishId: "420",
            // machineId: "098df0s9d8f0s8f0s9dfd",
            machineType: "收割",
            ownerId: 4,
            // owner: "卢山",
            title: "机械割谷",
            price: 50,
            img: "geguji.jpg",
            area: "当阳市",
            village: "黄林村",
            publishTime: "2015-04-27",
            // startTime: "2015-05-01",
            // endTime: "2015-08-01",
            // content: "黄林村一组卢山提供"
        },{
            publishId: "520",
            // machineId: "098df0s9d8f0s8f0s9dfd",
            machineType: "收割",
            ownerId: 5,
            // owner: "XX",
            title: "机械割谷",
            price: 50,
            img: "geguji.jpg",
            area: "远安县",
            village: "河口乡",
            publishTime: "2015-04-27",
            // startTime: "2015-05-01",
            // endTime: "2015-08-01",
            // content: "黄林村一组卢山提供"
        },{
            publishId: "530",
            // machineId: "8797sdfs8009s=fsdfdfs",
            machineType: "杀虫",
            ownerId: 5,
            // owner: "XX",
            title: "无人飞机喷药灭虫",
            price: 30,
            img: "aircraft2.jpg",
            area: "远安县",
            village: "河口乡",
            publishTime: "2015-04-27",
            // startTime: "2015-05-01",
            // endTime: "2015-08-01",
            // content: "黄林村一组李开军提供"
        }
    ];

    $httpBackend.whenGET("api/native/allpublish").respond(allNativePublish);
    $httpBackend.when("PUT", "api/publish").respond(function(method, url, data, headers){
        allNativePublish.push(data);
        return allNativePublish;
    });
    $httpBackend.whenGET(/^\/api\/user\/alpublish\/d{1,}\//).respond(myPublish);

});
