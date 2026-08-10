# 📘 AngularJS `filter` Filter

## 🎯 What is the `filter` Filter?

The **`filter` filter** is used to **search and display only the items that match a given value**.

It works with:

- Arrays
- Arrays of objects

The original data is **not changed**. AngularJS only shows the matching items in the view.

---

## 🚀 Syntax

### Filter an Array

```html
ng-repeat="item in items | filter:searchValue"
```

### Filter an Array of Objects

```html
ng-repeat="item in items | filter:searchValue:true"
```

---

# 📘 Example 1: Filter an Array

### HTML

```html
<label>Search your Fruit:</label>
<input ng-model="value" placeholder="Type here..">

<ol>
    <li ng-repeat="fruit in fruits | filter:value">
        {{fruit}}
    </li>
</ol>
```

### Controller

```javascript
$scope.fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Grapes"
];
```

### Output

If the user types:

```text
an
```

Displayed result:

```text
Banana
Mango
Orange
```

---

# 📘 Example 2: Filter an Array of Objects

### HTML

```html
<select ng-model="optionValue">
    <option value="">Select</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
</select>

<table border="1">
    <tr ng-repeat="student in students | filter:optionValue:true">
        <td>{{student.name}}</td>
        <td>{{student.gender}}</td>
    </tr>
</table>
```

### Controller

```javascript
$scope.students = [
    { name: "Krunal", gender: "Male" },
    { name: "Tina", gender: "Female" },
    { name: "Vishal", gender: "Male" },
    { name: "Riya", gender: "Female" }
];
```

### Output

If **Male** is selected:

| Name | Gender |
|------|--------|
| Krunal | Male |
| Vishal | Male |

---

# 🔍 `filter:value` vs `filter:value:true`

| Syntax | Meaning |
|--------|---------|
| `filter:value` | Partial match |
| `filter:value:true` | Exact match |

### Example

- `filter:"Ma"` → matches **Male**, **Mango**
- `filter:"Male":true` → matches only **Male**

---

# 💡 Tips

- Use `ng-model` to store the search value.
- Use `filter:value` for normal searching.
- Use `filter:value:true` for exact matching.
- Filtering only affects the displayed data.

---

# 📝 Summary

- `filter` selects matching items from an array.
- It can filter strings, numbers, and objects.
- `filter:value` performs partial matching.
- `filter:value:true` performs exact matching.
- The original array remains unchanged.

---

# 📌 Quick Revision

✔ `filter` = Search / Filter data

✔ Works with Arrays

✔ Works with Objects

✔ `filter:value` → Partial Match

✔ `filter:value:true` → Exact Match

✔ Used with `ng-repeat`

✔ Original data is not modified