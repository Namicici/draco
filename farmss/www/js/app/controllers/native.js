angular.module('farmss.controllers')

.controller('NativeCtrl', function($scope){
    $scope.places = ["坝陵", "半月", "河溶"];
    $scope.types = ["割谷", "耕田", "喷药"];
    $scope.sorts = ["距离最近", "价格最低"];
    $scope.items = [1,2,3];

    $scope.serviceScope = [
        {
            province: "湖北",
            regions:[
                {
                    region: "宜昌",
                    countries:[
                        {
                            country: "当阳",
                            towns:[{town: "坝陵办事处", villages:["黄林村", "苏河村"]}]
                        },{
                            country: "宜都",
                            towns:[]
                        },{
                            country: "枝江",
                            towns:[]
                        },{
                            country: "远安",
                            towns:[]
                        },{
                            country: "兴山",
                            towns:[]
                        },{
                            country: "秭归",
                            towns:[]
                        }
                    ]

                }
            ]
        }
    ];

    $scope.doRefresh = function(){
        $http.get('/new-items')
            .success(function(newItems){
                $scope.items = newItems;
            })
            .finally(function(){
                // Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');
        });
    };
})
