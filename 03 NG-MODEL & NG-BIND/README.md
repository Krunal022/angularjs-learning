# 📘 AngularJS ng-model & ng-bind Directives

## 🎯 What is ng-model?

The **ng-model** directive is used to bind the value of an HTML form element to a variable in AngularJS.

It creates **Two-Way Data Binding**, which means:

- If the user changes the input, the variable updates automatically.
- If the variable changes, the input also updates automatically.

📌 **Supported HTML Elements**

- `<input>`
- `<textarea>`
- `<select>`

---

## ✅ Why use ng-model?

The **ng-model** directive helps you:

- Bind input fields to variables
- Create two-way data binding
- Read user input easily
- Keep the UI and data synchronized

---

## 🚀 Syntax

```html
<input type="text" ng-model="username">
```

---

## 📌 Example

```html
<!DOCTYPE html>
<html ng-app>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>

<body>

    Enter Name:
    <input type="text" ng-model="name">

    <h2>Hello {{name}}</h2>

</body>
</html>
```

### Output

Initially

```
Hello
```

If user types

```
Rahul
```

Output

```
Hello Rahul
```

---

# 📘 AngularJS ng-bind Directive

## 🎯 What is ng-bind?

The **ng-bind** directive is used to display the value of a variable or expression inside an HTML element.

It replaces the content of the HTML element with the value of the given variable.

---

## ✅ Why use ng-bind?

The **ng-bind** directive helps you:

- Display variable values
- Bind expressions to HTML
- Avoid flickering of `{{ }}` before AngularJS loads
- Keep HTML clean and readable

---

## 🚀 Syntax

```html
<p ng-bind="name"></p>
```

---

## 📌 Example

```html
<!DOCTYPE html>
<html ng-app>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>

<body>

    <input type="text" ng-model="name">

    <h2 ng-bind="name"></h2>

</body>
</html>
```

### Output

If user types

```
AngularJS
```

Output

```
AngularJS
```

---

# 🔄 ng-model vs ng-bind

| Directive | Purpose |
|-----------|---------|
| **ng-model** | Binds HTML input controls with AngularJS variables (Two-Way Data Binding) |
| **ng-bind** | Displays the value of a variable or expression inside an HTML element |

---

# 📚 Simple Examples

## ng-model

```html
<input type="text" ng-model="city">
```

User enters

```
Vadodara
```

Variable

```
city = "Vadodara"
```

---

## ng-bind

```html
<p ng-bind="'Welcome Student'"></p>
```

Output

```
Welcome Student
```

---

## ng-model + ng-bind Together

```html
<input type="text" ng-model="student">

<p ng-bind="student"></p>
```

If user types

```
Krunal
```

Output

```
Krunal
```

---

# 💡 Tips

- Use **ng-model** only with form elements like input, textarea, and select.
- Use **ng-bind** to display variable values inside HTML.
- **ng-model** creates **Two-Way Data Binding**.
- **ng-bind** only displays data; it does not take user input.
- Both directives help keep the UI updated automatically.

---

# 📝 Summary

- **ng-model** binds form input with AngularJS variables.
- It supports **Two-Way Data Binding**.
- **ng-bind** displays variable values inside HTML elements.
- **ng-bind** replaces the content of an HTML element.
- **ng-model** is mainly used for user input.
- **ng-bind** is mainly used for displaying data.

---

# 📌 Quick Revision

✔ **ng-model** → Input Binding

✔ **Two-Way Data Binding**

✔ Works with **input, textarea, select**

✔ **ng-bind** → Display Data

✔ Replaces HTML element content

✔ Updates automatically when data changes

✔ **ng-model** = User Input

✔ **ng-bind** = Display Output