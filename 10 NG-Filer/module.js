const app = angular.module("myApp", [])

app.controller("myController", function ($scope) {
    $scope.name = "Angular Filter🪷"
    $scope.amount = 12320541200
    $scope.date = new Date();
})