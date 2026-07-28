const app = angular.module("myApp", [])

app.controller("myController", function ($scope) {
    $scope.heading = "Ng-Repeat 🔂"
    $scope.friute = ["Apple🍎", "Banana🍌", "Mango🥭", "Orange🍊", "Grapes🍇", "Pineapple🍍", "Strawberry🍓"]
    $scope.myObj = {
        name: "Krunal",
        age: 22,
        city: "Baroda"
    }
    $scope.myArray = [
        { name: "John", age: 30, city: "New York" },
        { name: "Jane", age: 25, city: "Los Angeles" },
        { name: "Mike", age: 35, city: "Chicago" }
    ]
})