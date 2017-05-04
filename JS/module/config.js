var app = angular.module('madMod');
app.config(function($routeProvider){
//pass in object
$routeProvider.when('/form', {
  templateUrl: 'views/form.html',
  controller: 'formControl'
})
$routeProvider.when('/output', {
    templateUrl: 'views/output.html',
    controller: 'outputController'
})
});
