# 📖 What is AngularJS?

**AngularJS** is an open-source JavaScript framework developed to build **dynamic**, **interactive**, and **Single Page Applications (SPAs)**.

It helps developers create clean, maintainable, and structured web applications by following the **MVC (Model-View-Controller)** architecture.

---

# ✨ Key Highlights

- 🟢 Open-source and free to use
- 🟢 Developed by **Google**
- 🟢 Built using **JavaScript**
- 🟢 Mainly used for **Single Page Applications (SPA)**
- 🟢 Supports **MVC Architecture**
- 🟢 Provides **Two-Way Data Binding**
- 🟢 Reduces the amount of JavaScript code
- 🟢 Makes applications easier to test and maintain
- 🟢 Cross-browser compatible
- 🟢 Includes a lightweight version of jQuery called **jqLite**

---

# 📅 History

| Details               | Information                |
| --------------------- | -------------------------- |
| Initial Release       | 2009 / 2010                |
| Created By            | Misko Hevery & Adam Abrons |
| Maintained By         | Google                     |
| Latest Stable Version | 1.8.2 _(Final Release)_    |

> **Note:** AngularJS has reached **End of Life (EOL)** and is no longer actively maintained. It is still useful for learning web development concepts and maintaining legacy projects.

---

# 🎯 Objectives of AngularJS

AngularJS aims to make web development:

- Easier
- Faster
- Cleaner
- More organized
- Easier to maintain
- Easier to test

It allows developers to focus more on application logic rather than manually manipulating the DOM.

---

# 🤔 Why Choose AngularJS?

Some major advantages include:

- ✔ Easy implementation of MVC architecture
- ✔ Two-way data binding keeps UI and data synchronized
- ✔ Less code compared to traditional JavaScript
- ✔ Reusable components using Directives
- ✔ Powerful dependency injection system
- ✔ Built-in filters for formatting data
- ✔ Better code organization
- ✔ Easy unit testing
- ✔ Supports modular application development
- ✔ Faster development process

---

# ⭐ Core Features

## 🏗 MVC Architecture

Separates application into:

- **Model** → Data
- **View** → User Interface
- **Controller** → Business Logic

---

## 🔄 Two-Way Data Binding

Automatically keeps the model and UI synchronized.

```
Model  ⇄  View
```

If data changes in one place, it updates everywhere automatically.

---

## 🌍 Scope

The **Scope** acts as the bridge between the controller and the view.

It stores application data and makes it available inside HTML.

---

## 🎮 Controller

Controllers manage application logic.

They control the data displayed on the page.

Example:

```javascript
app.controller("MainController", function ($scope) {
  $scope.name = "AngularJS";
});
```

---

## 🧩 Directives

Directives extend HTML with new functionality.

Common directives:

- `ng-app`
- `ng-model`
- `ng-repeat`
- `ng-if`
- `ng-show`
- `ng-hide`
- `ng-click`

Example:

```html
<input ng-model="name" />
```

---

## 🎨 Filters

Filters format data before displaying it.

Examples:

- `uppercase`
- `lowercase`
- `currency`
- `date`
- `number`
- `limitTo`

Example:

```html
{{ price | currency }}
```

---

## ⚙ Services

Services contain reusable business logic.

Examples:

- `$http`
- `$timeout`
- `$location`
- `$filter`

---

## 📄 Templates

Templates define the UI using HTML and AngularJS expressions.

Example:

```html
<h1>{{title}}</h1>
```

---

## 🛣 Routing

Routing allows navigation between pages **without refreshing the browser**.

Ideal for Single Page Applications.

---

## 💉 Dependency Injection (DI)

AngularJS automatically provides required services to components.

Benefits:

- Cleaner code
- Easy testing
- Better modularity

---

# 📝 AngularJS Expressions

Expressions are written using double curly braces.

Example:

```html
{{ 5 + 9 }}
```

Output

```
14
```

---

# 🧠 Simple Flow

```
User
   ↓
View (HTML)
   ↓
Controller
   ↓
Model (Data)
   ↑
Two-Way Data Binding
```

---

# 👍 Advantages

- Less JavaScript code
- Faster development
- Easy data binding
- Reusable components
- Better project structure
- Built-in directives
- Easy testing
- Modular architecture
- Cross-browser support

---

# 👎 Limitations

- Not suitable for very large modern applications
- Performance can decrease with many watchers
- Learning curve for beginners
- End of Life (No active updates)
- Replaced by modern Angular (2+) for new projects

---

# 📚 Common AngularJS Directives

| Directive       | Purpose                             |
| --------------- | ----------------------------------- |
| `ng-app`        | Initializes AngularJS application   |
| `ng-model`      | Creates two-way data binding        |
| `ng-bind`       | Displays data                       |
| `ng-repeat`     | Loops through collections           |
| `ng-if`         | Conditionally adds/removes elements |
| `ng-show`       | Shows an element                    |
| `ng-hide`       | Hides an element                    |
| `ng-click`      | Executes code on click              |
| `ng-controller` | Defines a controller                |

---

# 💡 Simple Example

```html
<!DOCTYPE html>
<html ng-app>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  </head>
  <body>
    <h2>{{ 5 + 9 }}</h2>
  </body>
</html>
```

Output:

```
14
```

---

# 🧾 Summary

AngularJS is a JavaScript framework designed to build dynamic web applications using the MVC architecture. It provides powerful features like **Two-Way Data Binding**, **Directives**, **Dependency Injection**, **Filters**, and **Routing**, making development faster and easier.

Although AngularJS is now a legacy framework, learning it helps in understanding core frontend concepts and maintaining older applications.

---

## 📌 Quick Revision

- JavaScript Framework
- Developed by Google
- Open Source
- Uses MVC Architecture
- Supports Single Page Applications (SPA)
- Two-Way Data Binding
- Directives & Filters
- Dependency Injection
- Cross-browser Support
- Final Version: **1.8.2**
- Status: **End of Life (EOL)**

---

⭐ **Tip:** Learn AngularJS concepts such as data binding, directives, controllers, and dependency injection—they provide a solid foundation for understanding modern frontend frameworks like Angular, React, and Vue.
