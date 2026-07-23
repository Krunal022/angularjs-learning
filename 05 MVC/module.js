// Define the AngularJS module 
// Name of the module is 'myApp' and it has no dependencies (empty array)
const app = angular.module('myApp', []);

// Define a controller named 'MainController' for the 'myApp' module
// The controller takes a $scope object as a parameter, 
// which is used to bind data between the controller and the view
app.controller('MainController', function ($scope) {
    // Set a property 'message' on the $scope object with the value "Hello, World!"
    $scope.message = "Hello, World!";
});