# 📘 AngularJS Filters

## 🎯 What are Filters?

**Filters** are used to **format or transform data** before displaying it in the view.

They are written using the **pipe symbol (`|`)**.

---

## 🚀 Syntax

```html
{{ expression | filterName }}
```

Example:

```html
{{ name | uppercase }}
```

---

# 📘 Common AngularJS Filters

| Filter | Purpose |
|--------|---------|
| `uppercase` | Converts text to uppercase |
| `lowercase` | Converts text to lowercase |
| `number` | Formats a number |
| `currency` | Formats a value as currency |
| `date` | Formats a date |

---

# 📘 Uppercase Filter

### HTML

```html
<p>{{name | uppercase}}</p>
```

### Output

```
KRUNAL
```

---

# 📘 Lowercase Filter

### HTML

```html
<p>{{name | lowercase}}</p>
```

### Output

```
krunal
```

---

# 📘 Number Filter

### HTML

```html
<p>{{amount | number}}</p>
```

### Output

```
12,345.678
```

---

# 📘 Currency Filter

### HTML

```html
<p>{{amount | currency:"$"}}</p>
```

### Output

```
$12,345.68
```

---

# 📘 Date Filter

### HTML

```html
<p>{{date | date:"h:mm:ss"}}</p>
```

### Output

```
9:05:05
```

---

# 📘 Predefined Date Formats

| Format | Example |
|--------|---------|
| `short` | `1/5/16 9:05 AM` |
| `medium` | `Jan 5, 2016 9:05:05 AM` |
| `shortDate` | `1/5/16` |
| `mediumDate` | `Jan 5, 2016` |
| `longDate` | `January 5, 2016` |
| `fullDate` | `Tuesday, January 5, 2016` |

---

# 📘 Examples

### Short Date

```html
<p>{{date | date:"shortDate"}}</p>
```

### Medium Date

```html
<p>{{date | date:"mediumDate"}}</p>
```

### Long Date

```html
<p>{{date | date:"longDate"}}</p>
```

### Full Date

```html
<p>{{date | date:"fullDate"}}</p>
```

---

# 📘 Controller Example

```javascript
const app = angular.module("myApp", []);

app.controller("myController", function($scope){

    $scope.name = "Krunal";

    $scope.amount = 12345.678;

    $scope.date = new Date();

});
```

---

# 💡 Tips

- Filters are used only for **display formatting**.
- They do **not change the original data**.
- Multiple filters can be chained.
- Use `currency` for money values.
- Use `date` for readable date formats.

---

# 📝 Summary

- Filters transform data in AngularJS.
- They use the **pipe (`|`)** symbol.
- `uppercase` converts text to capital letters.
- `lowercase` converts text to small letters.
- `number` formats numeric values.
- `currency` formats money values.
- `date` formats date and time.

---

# 📌 Quick Revision

✔ Filters use `|`

✔ `uppercase`

✔ `lowercase`

✔ `number`

✔ `currency`

✔ `date`

✔ `shortDate`

✔ `mediumDate`

✔ `longDate`

✔ `fullDate`