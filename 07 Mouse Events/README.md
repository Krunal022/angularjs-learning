# 📘 AngularJS Event Directives

## 🎯 What are Event Directives?

**Event Directives** are AngularJS directives used to execute code when a user performs an event such as clicking a button, typing on the keyboard, or focusing on an input field.

All AngularJS event directives start with the prefix **ng-**.

---

## ✅ Why use Event Directives?

They help you:

- Handle mouse events
- Handle keyboard events
- Respond to user actions
- Execute functions on events
- Make web pages interactive

---

# 🖱️ Mouse Event Directives

| Directive         | Purpose                                           |
| ----------------- | ------------------------------------------------- |
| **ng-click**      | Executes code on a single click                   |
| **ng-dblclick**   | Executes code on a double click                   |
| **ng-mousedown**  | Executes when mouse button is pressed             |
| **ng-mouseup**    | Executes when mouse button is released            |
| **ng-mouseover**  | Executes when mouse pointer moves over an element |
| **ng-mouseenter** | Executes when mouse enters an element             |
| **ng-mousemove**  | Executes when mouse moves inside an element       |
| **ng-mouseleave** | Executes when mouse leaves an element             |

---

## 📌 Example

```html
<button ng-click="increment()">Click Me</button>
```

---

# ⌨️ Keyboard Event Directives

| Directive       | Purpose                             |
| --------------- | ----------------------------------- |
| **ng-keypress** | Executes when a key is pressed      |
| **ng-keyup**    | Executes when a key is released     |
| **ng-keydown**  | Executes when a key is pressed down |

---

## 📌 Example

```html
<input ng-keyup="increment()" />
```

---

# 🎯 Focus Event Directives

| Directive    | Purpose                            |
| ------------ | ---------------------------------- |
| **ng-focus** | Executes when an input gets focus  |
| **ng-blur**  | Executes when an input loses focus |

---

## 📌 Example

```html
<input ng-focus="increment()" />
```

---

# ✂️ Clipboard Event Directives

| Directive    | Purpose                      |
| ------------ | ---------------------------- |
| **ng-copy**  | Executes when text is copied |
| **ng-paste** | Executes when text is pasted |
| **ng-cut**   | Executes when text is cut    |

---

## 📌 Example

```html
<input ng-copy="increment()" ng-paste="increment()" ng-cut="increment()" />
```

---

# 📘 Controller Example

```javascript
const app = angular.module("myApp", []);

app.controller("myController", function ($scope) {
  $scope.count = 0;

  $scope.increment = function () {
    $scope.count++;
  };
});
```

---

# 💡 Tips

- Event directives always begin with **ng-**.
- Use **ng-click** for button click events.
- Use **ng-keyup**, **ng-keydown**, and **ng-keypress** for keyboard events.
- Use **ng-focus** and **ng-blur** for input focus events.
- Use **ng-copy**, **ng-paste**, and **ng-cut** for clipboard events.
- Event directives can call functions defined in the controller.

---

# 📝 Summary

- Event Directives execute code when an event occurs.
- Mouse events respond to mouse actions.
- Keyboard events respond to key actions.
- Focus events respond when an input gains or loses focus.
- Clipboard events respond to copy, paste, and cut actions.
- Functions are usually called using **$scope**.

---

# 📌 Quick Revision

✔ Event Directives start with **ng-**

✔ **ng-click** → Single Click

✔ **ng-dblclick** → Double Click

✔ **ng-keyup** → Key Released

✔ **ng-keydown** → Key Pressed

✔ **ng-focus** → Input Focus

✔ **ng-blur** → Input Loses Focus

✔ **ng-copy** → Copy Text

✔ **ng-paste** → Paste Text

✔ **ng-cut** → Cut Text
