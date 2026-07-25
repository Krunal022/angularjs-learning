const app = angular.module("myApp", [])

app.controller("myController", function ($scope) {
    $scope.name = "Mouse Events 🐁"
    $scope.name2 = "KeyBoard Events 🎹"
    $scope.name3 = "Are you Focused or Not! ☠️"
    $scope.name4 = "Copy-Paste-Cut! 😼"
    $scope.count = 0
    $scope.increment = function () {
        $scope.count++;
    }
})