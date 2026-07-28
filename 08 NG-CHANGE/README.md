# 📘 AngularJS ng-change Directive

## 🎯 What is ng-change?

The **ng-change** directive is used to execute a function whenever the value of an input field, textarea, or select box changes.

It is commonly used together with **ng-model**.

---

## ✅ Why use ng-change?

- Detect value changes
- Execute a function automatically
- Update counters or messages
- Respond to user input
- Handle select option changes

---

## 🚀 Syntax

```html
<input ng-model="name" ng-change="myFunction()">
```

- **ng-model** stores the value.
- **ng-change** runs the function when the value changes.

---

# 📘 Example with Text Input

### HTML

```html
<input type="text" ng-model="name2" ng-change="increment()">
```

### Controller

```javascript
$scope.count = 0;

$scope.increment = function () {
    $scope.count++;
};
```

### Output

Every time the user types something, **count increases by 1**.

---

# 📘 Example with Select Box

### HTML

```html
<select ng-model="selectedOption" ng-change="optionChanged()">
    <option value="">Select an option</option>
    <option value="MODEL">MODEL</option>
    <option value="VIEW">VIEW</option>
    <option value="CONTROLLER">CONTROLLER</option>
</select>
```

### Controller

```javascript
$scope.number = 0;

$scope.optionChanged = function () {
    $scope.number++;
};
```

### Output

Whenever the selected option changes, **number increases by 1**.

---

# 🔄 ng-model vs ng-change

<Table columnSizing="equal" rowDivider={1}><Table.Row header><Table.Cell><Text weight="semibold" value="ng-model"/></Table.Cell><Table.Cell><Text weight="semibold" value="ng-change"/></Table.Cell></Table.Row><Table.Row><Table.Cell>Stores the value</Table.Cell><Table.Cell>Detects value changes</Table.Cell></Table.Row><Table.Row><Table.Cell>Required for data binding</Table.Cell><Table.Cell>Used for executing functions</Table.Cell></Table.Row><Table.Row><Table.Cell>Works with input, textarea, select</Table.Cell><Table.Cell>Works with ng-model</Table.Cell></Table.Row></Table>

---

# 📘 Complete Controller

<Code value="const app = angular.module(&quot;myApp&quot;, []);

app.controller(&quot;myController&quot;, function ($scope) {

    $scope.count = 0;

    $scope.increment = function () {
        $scope.count++;
    };

    $scope.number = 0;

    $scope.optionChanged = function () {
        $scope.number++;
    };

});"/>

---

# 💡 Tips

- **ng-change requires ng-model**.
- Use it with **input, textarea, and select** elements.
- It runs only when the value actually changes.
- Keep the function simple and small.

---

# 📝 Summary

- **ng-change** executes a function when the value changes.
- It is used together with **ng-model**.
- It works with text fields and select boxes.
- It helps respond to user input automatically.

---

# 📌 Quick Revision

- ✔ **ng-model** → stores the value
- ✔ **ng-change** → runs a function on change
- ✔ Works with **input**
- ✔ Works with **select**
- ✔ Updates automatically when the user changes the value