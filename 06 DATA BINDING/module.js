const app = angular.module('myApp', []);

app.controller("myController", function ($scope) {
    $scope.name = "I'm form Controller side!"
    $scope.obj = { name: "krunal", age: 22, city: "baroda" }
})