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

	getUserPublish();

});
