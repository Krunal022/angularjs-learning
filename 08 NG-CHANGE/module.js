const app = angular.module("myApp", [])

app.controller("myController", function ($scope) {
    $scope.count = 0
    $scope.increment = function () {
        $scope.count++
    }
    $scope.number = 0
    $scope.optionChanged = function () {
        $scope.number++
    }
})