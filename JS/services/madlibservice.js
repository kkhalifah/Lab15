var app = angular.module('madMod');

app.factory('madFactory', function(){
  //contains two things return and object literal
  //set and get function. {} hold data
  var input = {};
  //creating method; set data to the value of input
  function setInput (words){
    input = words;
    console.log(input);
  };
  //call function, return one var
    function returnInput (){
      return input
    };
    return {
      //property and value
      returnInput: returnInput,
      setInput: setInput
  }
});
