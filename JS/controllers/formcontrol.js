var app= angular.module ("madMod");
//controller inject madFactory
app.controller('formControl', function($scope , madFactory, $location){
// console.log("form controller has loaded");
  $scope.addInput = function (words){
    console.log(words);
    //method
    madFactory.setInput(words);
    $location.path('/output')
  }

});
