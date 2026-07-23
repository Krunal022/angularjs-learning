# 📘 AngularJS Module & Controller

## 🎯 What is an AngularJS Module?

An **AngularJS Module** is the main container of an AngularJS application.

It groups the application's components such as **controllers, directives, services,** etc.

Every AngularJS application starts with a module.

---

## ✅ Why use a Module?

- Organizes the application
- Holds application components
- Starts the AngularJS application

---

## 🚀 Syntax

```javascript
const app = angular.module("myApp", []);
```

- **myApp** → Module name
- **[]** → No dependencies

---

# 📘 AngularJS Controller

## 🎯 What is a Controller?

A **Controller** is a JavaScript function that controls the data of the application.

It connects the **Model** (data) with the **View** (HTML).

The **$scope** object is used to share data between the controller and HTML.

---

## ✅ Why use a Controller?

- Stores application data
- Controls application logic
- Sends data to the HTML page

---

## 🚀 Syntax

```javascript
app.controller("MainController", function($scope){
    $scope.message = "Hello, World!";
});
```

---

## 📌 Example

### module.js

```javascript
// Create Module
const app = angular.module("myApp", []);

// Create Controller
app.controller("MainController", function($scope){
    $scope.message = "Hello, World!";
});
```

### index.html

```html
<!DOCTYPE html>
<html ng-app="myApp">

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script src="module.js"></script>
</head>

<body ng-controller="MainController">

    <h1>{{message}}</h1>

</body>

</html>
```

### Output

```
Hello, World!
```

---

# 🔄 Module vs Controller

| Module | Controller |
|---------|------------|
| Starts the AngularJS application | Controls the application data |
| Holds application components | Connects data with HTML |
| Created using `angular.module()` | Created using `app.controller()` |

---

# 💡 Tips

- Create a module before creating a controller.
- Use **ng-app** to start the module.
- Use **ng-controller** to connect the controller with HTML.
- Use **$scope** to pass data to the view.

---

# 📝 Summary

- A **Module** is the main container of an AngularJS application.
- A **Controller** manages the application's data.
- **$scope** connects JavaScript with HTML.
- **ng-app** starts the AngularJS application.
- **ng-controller** binds the controller to the HTML.

---

# 📌 Quick Revision

✔ Module → `angular.module()`

✔ Controller → `app.controller()`

✔ `$scope` stores data

✔ `ng-app` starts the application

✔ `ng-controller` connects HTML with the controller

✔ Output: **Hello, World!**