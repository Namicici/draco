angular.module('farmss.controllers')

.controller('userCtrl', function($scope, constants, $http){
	getUserPublish = function(){
		var httpConfig = {
			method: "GET",
			url: "api/user/allpublish/1"
		};
		$http(httpConfig).success(function(data){
			$scope.myPublish = data;
		});
	};

	getSubscribed = function(){
		var httpConfig = {
			method: "GET",
			url: "api/user/allSubscribed/1"
		};

		$http(httpConfig).success(function(data){
			$scope.subscribedPublish = data.publish;
		});
	}

	getOverdue = function(){
		var httpConfig = {
			method: "GET",
			url: "api/user/allOverdue/1"
		};
		$http(httpConfig).success(function(data){
			$scope.overduePublish = data;
		});
	};

	getUserPublish();
	getSubscribed();
	getOverdue();

});
