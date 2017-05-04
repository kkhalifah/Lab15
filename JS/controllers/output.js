var app = angular.module('madMod');
app.controller('outputController', function($scope, madFactory){

$scope.print = madFactory.returnInput();
console.log($scope.print);
});
