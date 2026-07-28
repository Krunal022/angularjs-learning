# 📘 AngularJS ng-repeat Directive

## 🎯 What is ng-repeat?

The **ng-repeat** directive is used to **repeat a block of HTML for each item in a collection**.

The collection can be:

- Array
- Object

It works like a **loop** in AngularJS.

---

## ✅ Why use ng-repeat?

- Display lists of data
- Create tables dynamically
- Repeat HTML automatically
- Work with arrays and objects
- Reduce duplicate code

---

## 🚀 Syntax

### Using an Array

```html
<li ng-repeat="item in fruits">
    {{item}}
</li>
```

### Using an Object

```html
<li ng-repeat="(key, value) in myObj">
    {{key}} : {{value}}
</li>
```

---

# 📘 Example 1: ng-repeat with Array

### Controller

```javascript
$scope.fruits = [
    "Apple🍎",
    "Banana🍌",
    "Mango🥭",
    "Orange🍊",
    "Grapes🍇"
];
```

### HTML

```html
<ol>
    <li ng-repeat="item in fruits">
        {{item}}
    </li>
</ol>
```

### Output

```
1. Apple🍎
2. Banana🍌
3. Mango🥭
4. Orange🍊
5. Grapes🍇
```

---

# 📘 Example 2: ng-repeat with Object

### Controller

```javascript
$scope.myObj = {
    name: "Krunal",
    age: 22,
    city: "Baroda"
};
```

### HTML

```html
<ol>
    <li ng-repeat="(key, value) in myObj">
        {{key}} : {{value}}
    </li>
</ol>
```

### Output

```
name : Krunal
age : 22
city : Baroda
```

---

# 📘 Example 3: ng-repeat with Array of Objects

### Controller

```javascript
$scope.myArray = [
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "Los Angeles" },
    { name: "Mike", age: 35, city: "Chicago" }
];
```

### HTML

```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
    </tr>

    <tr ng-repeat="item in myArray">
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>{{item.city}}</td>
    </tr>
</table>
```

### Output

| Name | Age | City |
|------|-----|------|
| John | 30 | New York |
| Jane | 25 | Los Angeles |
| Mike | 35 | Chicago |

---

# 🔄 Array vs Object in ng-repeat

| Array | Object |
|---------|---------|
| Uses `item in array` | Uses `(key, value) in object` |
| Returns values | Returns key and value |
| Best for lists | Best for properties |

---

# 💡 Tips

- Use **ng-repeat** to create lists and tables.
- Arrays are best for displaying multiple items.
- Objects are best for displaying key-value pairs.
- Each item is repeated automatically.

---

# 📝 Summary

- **ng-repeat** is used to repeat HTML elements.
- It works with **arrays** and **objects**.
- Arrays use `item in array`.
- Objects use `(key, value) in object`.
- It is commonly used for **lists** and **tables**.

---

# 📌 Quick Revision

✔ ng-repeat = Loop in AngularJS

✔ Repeats HTML automatically

✔ Works with Arrays

✔ Works with Objects

✔ `item in array`

✔ `(key, value) in object`

✔ Useful for Lists

✔ Useful for Tables