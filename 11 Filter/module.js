const app = angular.module("myApp", [])

app.controller("myController", function ($scope) {
    $scope.msg = "search your fruit! find your student! "
    $scope.fruits = ["Mango", "Banana", "Graps", "Pineapple", "Orange"]
    $scope.students = [
        { name: "Tina", age: 19, class: 7, gender: "Female" },
        { name: "Krunal", age: 20, class: 8, gender: "Male" },
        { name: "Vishal", age: 22, class: 9, gender: "Male" },
        { name: "Riya", age: 21, class: 10, gender: "Female" },
    ]
})