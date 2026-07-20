# 📘 AngularJS ng-init Directive

## 🎯 What is ng-init?

The **ng-init** directive is used to initialize application data in AngularJS.

It allows you to assign initial values to:

- Variables
- Arrays
- Objects
- Nested Objects
- Arrays inside Objects
- Objects inside Objects

The initialized values can then be displayed using AngularJS expressions (`{{ }}`).

---

## ✅ Why use ng-init?

The **ng-init** directive helps you:

- Initialize variables directly in HTML
- Store default values
- Create arrays and objects
- Initialize nested objects
- Perform simple calculations
- Quickly test AngularJS examples without creating a controller

---

## 🚀 Syntax

```html
<div ng-init="variable='Value'">
    {{variable}}
</div>
```

Multiple variables

```html
<div ng-init="name='Krunal'; age=22; gender='Male'">
</div>
```

---

# 📌 Example 1: Initialize Variables

```html
<div ng-init="name='Krunal'; age=22; gender='Male'">

    <p>Name: {{name}}</p>
    <p>Age: {{age}}</p>
    <p>Gender: {{gender}}</p>

</div>
```

### Output

```
Name: Krunal
Age: 22
Gender: Male
```

---

# 📌 Example 2: Initialize an Object

```html
<div ng-init="student={
    class:'BE. CSD',
    rollNo:240413149011,
    college:'SVIT, Vasad'
}">

<p>Class : {{student.class}}</p>
<p>Roll No : {{student.rollNo}}</p>
<p>College : {{student.college}}</p>

</div>
```

### Output

```
Class : BE. CSD
Roll No : 240413149011
College : SVIT, Vasad
```

---

# 📌 Example 3: Initialize an Array

```html
<div ng-init="fruits=['Apple','Banana','Mango']">

<p>{{fruits}}</p>

<p>{{fruits[0]}}</p>

<p>{{fruits[1]}}</p>

<p>{{fruits[2]}}</p>

</div>
```

### Output

```
Apple,Banana,Mango

Apple

Banana

Mango
```

---

# 📌 Example 4: Initialize a Nested Object

```html
<div ng-init="person={
    name:'Krunal',
    age:22,
    address:{
        city:'Vadodara',
        state:'Gujarat',
        country:'India'
    }
}">

<p>{{person.name}}</p>
<p>{{person.address.city}}</p>
<p>{{person.address.state}}</p>
<p>{{person.address.country}}</p>

</div>
```

### Output

```
Krunal

Vadodara

Gujarat

India
```

---

# 📌 Example 5: Nested Object with Array

```html
<div ng-init="person={
    name:'Krunal',
    hobbies:['Reading','Coding','Travelling']
}">

<p>{{person.hobbies}}</p>

<p>{{person.hobbies[0]}}</p>

<p>{{person.hobbies[1]}}</p>

<p>{{person.hobbies[2]}}</p>

</div>
```

### Output

```
Reading,Coding,Travelling

Reading

Coding

Travelling
```

---

# 📌 Example 6: Nested Object with Arrays and Objects

```html
<div ng-init="person={
name:'Krunal',
skills:{
programming:['C','C++','Java','Python'],
webDevelopment:['HTML','CSS','JavaScript','AngularJS']
}
}">

<p>{{person.skills.programming}}</p>

<p>{{person.skills.webDevelopment}}</p>

</div>
```

### Output

```
C,C++,Java,Python

HTML,CSS,JavaScript,AngularJS
```

---

# 📌 Example 7: Perform Calculations

```html
<div ng-init="Quantity=null; Price=null;">

<input type="number" ng-model="Quantity">

<input type="number" ng-model="Price">

<p>
Quantity: {{Quantity}}
×
Price: {{Price}}
=
Total Cost: {{Quantity * Price}}
</p>

</div>
```

### Example

If the user enters

```
Quantity = 10

Price = 50
```

### Output

```
Quantity: 10 × Price: 50 = Total Cost: 500
```

---

# 💡 Tips

- Use **ng-init** only for initializing simple data.
- Separate multiple variables using semicolons (`;`).
- Arrays are created using square brackets (`[]`).
- Objects are created using curly braces (`{}`).
- Access object properties using dot (`.`) notation.
- Access array elements using index values (`[0]`, `[1]`, etc.).
- **ng-init** is useful for learning and small examples.
- In real-world AngularJS applications, initialization is usually done inside controllers instead of using **ng-init**.

---

# 📝 Summary

- **ng-init** initializes application data.
- It can create variables, arrays, objects, and nested objects.
- Initial values are immediately available in AngularJS expressions.
- It can also perform simple calculations.
- It is mainly used for initialization and demonstration purposes.

---

# 📌 Quick Revision

✔ Initializes variables

✔ Initializes arrays

✔ Initializes objects

✔ Supports nested objects

✔ Supports arrays inside objects

✔ Supports objects inside objects

✔ Can perform simple calculations

✔ Values are accessed using `{{ }}` expressions

✔ Best suited for small examples and learning AngularJS