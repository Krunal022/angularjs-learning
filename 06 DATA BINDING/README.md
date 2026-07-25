# 📘 AngularJS Data Binding

## 🎯 What is Data Binding?

**Data Binding** is the process of connecting data between the **Controller** and the **HTML View**.

AngularJS supports **One-Way Data Binding** and **Two-Way Data Binding**.

---

# 📘 One-Way Data Binding

## 🎯 What is One-Way Data Binding?

One-Way Data Binding is used to **display data** from the controller in the HTML page.

The data is shown using:

- Angular Expressions `{{ }}`
- `ng-bind`

---

## ✅ Why use One-Way Data Binding?

- Display data in HTML
- Show controller values
- Automatically update the view when data changes

---

## 🚀 Syntax

### Using Angular Expression

```html
{{name}}
```

### Using ng-bind

```html
<p ng-bind="name"></p>
```

---

## 📌 Example

### Controller

```javascript
$scope.name = "I'm from Controller side!";
```

### HTML

```html
{{name}}

<p ng-bind="name"></p>
```

### Output

```
I'm from Controller side!
```

---

# 📘 Two-Way Data Binding

## 🎯 What is Two-Way Data Binding?

Two-Way Data Binding is used to **connect an input field with a variable**.

When the user changes the input value, the variable updates automatically.

When the variable changes, the HTML also updates automatically.

This is done using the **ng-model** directive.

---

## ✅ Why use Two-Way Data Binding?

- Read user input
- Update data automatically
- Keep UI and data synchronized

---

## 🚀 Syntax

```html
<input type="text" ng-model="obj.name">
```

---

## 📌 Example

### Controller

```javascript
$scope.obj = {
    name: "Krunal",
    age: 22,
    city: "Baroda"
};
```

### HTML

```html
<input type="text" ng-model="obj.name">

<p>{{obj.name}}</p>
```

### Output

Initially

```
Krunal
```

If user types

```
Rahul
```

Output

```
Rahul
```

---

# 🔄 One-Way vs Two-Way Data Binding

| One-Way Data Binding | Two-Way Data Binding |
|----------------------|----------------------|
| Displays data | Displays and updates data |
| Uses `{{ }}` or `ng-bind` | Uses `ng-model` |
| Read-only display | User can change data |

---

# 💡 Tips

- Use **{{ }}** or **ng-bind** to display data.
- Use **ng-model** with input, textarea, or select elements.
- **ng-model** automatically updates both the variable and the UI.
- One-Way Data Binding is for displaying data.
- Two-Way Data Binding is for user input.

---

# 📝 Summary

- Data Binding connects the controller with the HTML view.
- One-Way Data Binding displays data using **{{ }}** or **ng-bind**.
- Two-Way Data Binding uses **ng-model**.
- Changes in the input field update the variable automatically.
- AngularJS keeps the UI synchronized with the data.

---

# 📌 Quick Revision

✔ Data Binding connects Controller and View

✔ One-Way → `{{ }}` and `ng-bind`

✔ Two-Way → `ng-model`

✔ One-Way displays data

✔ Two-Way updates data automatically

✔ UI and data stay synchronized