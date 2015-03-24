angular.module('farmss.controllers')

.controller('PublishCtrl', function($scope, constants){

    $scope.types = constants.machineType;

});
