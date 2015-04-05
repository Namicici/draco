angular.module('farmss.controllers')

.controller('messageCtrl', function($scope, constants){

    $scope.msgTypes = ["预约留言", "消息"];
    $scope.isComment = function(type){
        if (type == $scope.msgTypes[0])
            return true
        else
            return false;
    };

    $scope.messages = [
        {
            id: 1,
            pubId: 1,
            img: "aircraft.jpg",
            visitor: "Sissy Li",
            owner: "Sissy Li",
            visitorId: 2191114,
            status: "",
            message: "什么时候可以作业",
            type: "预约留言"
        },{
            id: 2,
            pubId: 3,
            img: "chayang.jpg",
            visitor: "李开封",
            owner: "Admin",
            visitorId: 0715,
            status: "预约成功",
            message: "插秧预约成功",
            type: "消息"

        }
    ];

})
