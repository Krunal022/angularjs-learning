# 📘 AngularJS Directives & Expressions

# 🎯 What are Directives?

**Directives** are special HTML attributes provided by AngularJS that extend the functionality of normal HTML elements.

They allow you to create dynamic and interactive web pages with minimal JavaScript.

> All AngularJS directives start with the prefix **`ng-`**.

---

# 📌 Why Directives?

Directives help you:

- Create dynamic HTML
- Bind data to the UI
- Handle user events
- Show or hide elements
- Repeat HTML elements
- Add custom behavior to HTML

---

# 🏷 Common AngularJS Directives

| Directive | Purpose |
|------------|---------|
| `ng-app` | Initializes an AngularJS application |
| `ng-model` | Creates two-way data binding |
| `ng-bind` | Binds data to HTML |
| `ng-repeat` | Repeats HTML elements |
| `ng-if` | Adds or removes elements based on a condition |
| `ng-show` | Shows an element |
| `ng-hide` | Hides an element |
| `ng-click` | Executes code on click |
| `ng-controller` | Defines a controller |

---

# 🚀 `ng-app`

The **`ng-app`** directive is the first directive you usually use.

It tells AngularJS where the application starts.

```html
<html ng-app>
```

or

```html
<body ng-app>
```

Without `ng-app`, AngularJS expressions and directives will not work.

---

# 📌 Example

```html
<!DOCTYPE html>
<html ng-app>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>

<body>

    {{5 + 9}}

</body>

</html>
```

### Output

```
14
```

---

# 🧠 What are AngularJS Expressions?

AngularJS **Expressions** are small pieces of code written inside **double curly braces**.

```html
{{ expression }}
```

AngularJS evaluates the expression and displays the result in the browser.

---

# ✅ Working with Numbers

```html
{{5 + 6}}
```

Output

```
11
```

---

# ✅ Working with Strings

```html
{{"Hello Student!"}}
```

Output

```
Hello Student!
```

You can also concatenate strings.

```html
{{"Hello " + "World"}}
```

Output

```
Hello World
```

---

# ✅ Working with Variables

```html
{{ user.name }}
```

If

```javascript
$scope.user = {
    name: "Rahul"
};
```

Output

```
Rahul
```

---

# ✅ Working with Arrays

```html
{{ items[0] }}
```

If

```javascript
$scope.items = ["Apple", "Mango", "Orange"];
```

Output

```
Apple
```

---

# 📌 Where Can Expressions Be Used?

Expressions can be used almost anywhere inside HTML.

### Inside Text

```html
<h2>{{5 + 9}}</h2>
```

---

### Inside Attributes

```html
<input value="{{name}}">
```

---

### Inside Inline Styles

```html
<p style="font-size: {{40}}px;">
    AngularJS
</p>
```

> ✅ Works because AngularJS evaluates HTML attributes.

---

### ❌ Inside `<style>` Tag

```html
<style>
p{
    font-size: {{40}}px;
}
</style>
```

This **does not work** because AngularJS does not compile expressions inside `<style>` or `<script>` tags.

Instead, use:

```html
<p ng-style="{'font-size':'40px'}">
```

---

# ⚡ AngularJS Expressions vs JavaScript Expressions

| AngularJS Expressions | JavaScript Expressions |
|------------------------|------------------------|
| Written inside HTML | Written inside JavaScript |
| Uses `{{ }}` | Uses normal JavaScript syntax |
| Supports Filters | Does not support AngularJS filters |
| Cannot use loops | Supports loops |
| Cannot use conditionals (`if`, `switch`) | Supports conditionals |
| Cannot use exceptions (`try...catch`) | Supports exceptions |
| Automatically updates the UI | Requires manual DOM updates |

---

# 📚 Simple Examples

### Addition

```html
{{10 + 20}}
```

Output

```
30
```

---

### Multiplication

```html
{{10 * 5}}
```

Output

```
50
```

---

### Division

```html
{{100 / 4}}
```

Output

```
25
```

---

### Modulus

```html
{{10 % 3}}
```

Output

```
1
```

---

### String Concatenation

```html
{{"Angular" + "JS"}}
```

Output

```
AngularJS
```

---

# 💡 Tips

- Always initialize AngularJS using `ng-app`.
- All built-in directives begin with **`ng-`**.
- Expressions are enclosed in **`{{ }}`**.
- Expressions are evaluated automatically.
- Use **`ng-style`** for dynamic CSS instead of expressions inside `<style>`.

---

# 📝 Summary

- **Directives** extend HTML with new functionality.
- All directives use the **`ng-`** prefix.
- `ng-app` initializes an AngularJS application.
- **Expressions** are written inside `{{ }}`.
- Expressions can work with numbers, strings, variables, objects, and arrays.
- AngularJS expressions are simpler than JavaScript expressions and are designed for use inside HTML.
- AngularJS does **not** evaluate expressions inside `<style>` or `<script>` tags.

---

## 📌 Quick Revision

- ✔ Directives extend HTML
- ✔ Prefix: `ng-`
- ✔ `ng-app` starts the AngularJS app
- ✔ Expressions use `{{ }}` syntax
- ✔ Supports numbers, strings, variables, objects, and arrays
- ✔ Expressions work inside HTML
- ✔ Use `ng-style` for dynamic CSS
- ✔ AngularJS expressions are different from JavaScript expressions