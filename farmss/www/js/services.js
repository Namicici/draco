angular.module('farmss.services', ["ngMockE2E"])

.run(['$httpBackend',function($httpBackend){

    $httpBackend.whenGET(/tab\//).passThrough();
    $httpBackend.whenGET(/templates\//).passThrough();

    var myPublish = {
        ownerId: 1,
        publish:[
            {
                publishId: "130",
                like: 1,
                comment: 2,
                share: 10,
                title: "无人飞机喷药灭虫",
                img: "aircraft.jpg",
                publishTime: "2015-04-27",
                description: "由当阳明辉信用合作社提供无人飞机和操作人员，并统一配药，预约达到10亩适用。"
            },{
                publishId: "110",
                img: "tuolaji.jpg",
                like: 3,
                comment: 3,
                share: 1,
                title: "机械耕田",
                publishTime: "2015-04-27",
                description: ""
            }
        ]
    };

    var pools = [
        {
            name: "黄林村",
            fish:[
                {
                    img: "aircraft.jpg",
                    text: "无人机喷药灭虫"
                },{
                    img: "tuolaji.jpg",
                    text: "拖拉机"
                },{
                    img: "aircraft5.jpg",
                    text: "无人机灭虫"
                }
            ]
        },{
            name: "鲁山村",
            fish: [
                {
                    img:"aircraft2.jpg",
                    text:"无人机灭虫"
                },{
                    img:"aircraft4.jpg",
                    text:"无人机灭虫"
                },{
                    img:"aircraft3.jpg",
                    text:"无人飞机喷药"
                }
            ]
        },{
            name:"许二村",
            fish:[
                {
                    img:"geguji.jpg",
                    text:"割谷"
                },{
                    img:"chayang2.jpg",
                    text:"插秧"
                }
            ]
        }
    ];

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
    $httpBackend.whenGET("api/native/allpool").respond(pools);

    $httpBackend.when("PUT", "api/publish").respond(function(method, url, data, headers){
        allNativePublish.push(data);
        return allNativePublish;
    });
    $httpBackend.whenGET("api/user/allpublish/1").respond(myPublish);
    $httpBackend.whenGET("api/publish/detail/130").respond({
        publishId: "130",
        machineId: "2934028340823048-203",
        machineType: "杀虫",
        ownerId: 1,
        owner: "李开封",
        like: 1,
        comment: 2,
        share: 10,
        title: "无人飞机喷药灭虫",
        price: 20,
        img: ["aircraft.jpg", "penyao1.jpg"],
        area: "当阳市",
        village: "黄林村",
        publishTime: "2015-04-27",
        avaliableDay: 90,
        description: "由当阳明辉信用合作社提供无人飞机和操作人员，并统一配药，预约达到10亩适用。",
        commentDetail:[
            {
                visitorId: 3,
                visitorName: "李开军",
                date: "2015-05-01",
                time: "12:00",
                words: "快速高效省力！"
            },{
                visitorId: 4,
                visitorName: "卢山",
                date: "2015-08-15",
                time: "13:00",
                words: "非常省事儿！"
            }
        ]
    });
    $httpBackend.whenGET("api/publish/detail/110").respond({
        publishId: "110",
        machineId: "iu9r8w9r7e0w8e0r8w0er8",
        machineType: "耕田",
        ownerId: 1,
        owner: "李开封",
        like: 3,
        comment: 3,
        share: 1,
        title: "机械耕田",
        price: 30,
        img: ["tuolaji.jpg"],
        area: "当阳市",
        village: "黄林村",
        publishTime: "2015-04-27",
        avaliableDay: 90,
        description: "",
        commentDetail: [
            {
                visitorId: 3,
                visitorName: "李开军",
                date: "2014-12-01",
                time: "16:45",
                words: "5亩地有便宜的么？"
            },{
                visitorId: 1,
                visitorName: "李开封",
                date: "2014-12-01",
                time: "17:00",
                words: "130不能再砍价了！"
            },{
                visitorId: 3,
                visitorName: "李开军",
                date: "2014-12-01",
                time: "17:05",
                words: "OK!"
            }
        ]
    });
    $httpBackend.whenGET("api/publish/detail/240").respond({
        publishId: "240",
        machineId: "sdnfosdofuwe0928304820",
        machineType: "插秧",
        ownerId: 2,
        owner: "村组会",
        like: 20,
        comment: 0,
        share: 1,
        title: "机械插秧",
        price: 30,
        img: ["chayang2.jpg"],
        area: "当阳市",
        village: "黄林村",
        publishTime: "2015-04-27",
        avaliableDay: 90,
        description: "黄林村一组信用社提供",
        commentDetail:[]
    });
    $httpBackend.whenGET("api/publish/detail/330").respond({
        publishId: "330",
        machineId: "8797sdfs8009s=fsdfdfs",
        machineType: "杀虫",
        ownerId: 3,
        owner: "李开军",
        like: 10,
        comment: 0,
        share: 15,
        title: "无人飞机喷药灭虫",
        price: 30,
        img: ["aircraft2.jpg"],
        area: "当阳市",
        village: "黄林村",
        publishTime: "2015-04-27",
        avaliableDay: 60,
        description: "黄林村一组李开军提供",
        commentDetail:[]
    });
    $httpBackend.whenGET("api/publish/detail/420").respond({
        publishId: "420",
        machineId: "098df0s9d8f0s8f0s9dfd",
        machineType: "收割",
        ownerId: 4,
        owner: "卢山",
        like: 10,
        comment: 0,
        share: 15,
        title: "机械割谷",
        price: 50,
        img: ["geguji.jpg"],
        area: "当阳市",
        village: "黄林村",
        publishTime: "2015-04-27",
        avaliableDay: 60,
        description: "黄林村一组卢山提供",
        commentDetail:[]
    });
    $httpBackend.whenGET("api/publish/detail/520").respond({
        publishId: "520",
        machineId: "098df0s9d8f0s8f0s9dfd",
        machineType: "收割",
        ownerId: 5,
        owner: "许老三",
        like: 10,
        comment: 0,
        share: 15,
        title: "机械割谷",
        price: 50,
        img: ["geguji.jpg"],
        area: "远安县",
        village: "河口乡",
        publishTime: "2015-04-27",
        avaliableDay: 60,
        description: "黄林村一组卢山提供",
        commentDetail:[]
    });
    $httpBackend.whenGET("api/publish/detail/530").respond({
        publishId: "530",
        machineId: "8797sdfs8009s=fsdfdfs",
        machineType: "杀虫",
        ownerId: 5,
        owner: "许老三",
        like: 10,
        comment: 0,
        share: 15,
        title: "无人飞机喷药灭虫",
        price: 30,
        img: ["aircraft2.jpg"],
        area: "远安县",
        village: "河口乡",
        publishTime: "2015-04-27",
        avaliableDay: 60,
        description: "黄林村一组李开军提供",
        commentDetail:[]
    });

    var subscribed = {
        ownerId: 1,
        publish:[
            {
                publishId: "130",
                title: "无人飞机喷药灭虫",
                img: "aircraft.jpg",
                price: 20,
                publishTime: "2015-04-27",
                description: "由当阳明辉信用合作社提供无人飞机和操作人员，并统一配药，预约达到10亩适用。",

                customerId: 3,
                customer: "李开军",
                phone: "13718087410",
                address: "当阳市坝陵办事处黄林村一组",
                commentDetail: "操作熟练！快速高效！"

            },{
                publishId: "110",
                img: "tuolaji.jpg",
                price: 30,
                title: "机械耕田",
                publishTime: "2015-04-27",
                description: "",

                customerId: 4,
                customer: "卢山",
                phone: "13798967410",
                address: "当阳市坝陵办事处黄林村一组",
                commentDetail: ""
            }
        ]
    }

    $httpBackend.whenGET("api/user/allSubscribed/1").respond(subscribed);

    $httpBackend.whenGET("api/user/allOverdue/1").respond([{
        publishId: "120",
        machineId: "wueouweorhkjdf",
        machineType: "收割",
        ownerId: 1,
        owner: "李开封",
        like: 3,
        comment: 0,
        share: 4,
        title: "机械收割",
        price: 50,
        img: "geguji.jpg",
        area: "当阳市",
        village: "黄林村",
        publishTime: "2014-01-01",
        avaliableDay: 60,
        description: "",
        commentDetail: []
    }]);
}]);
