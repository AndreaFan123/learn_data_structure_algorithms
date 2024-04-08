# Data Structure

## Prerequisite

- [ES2015-Classes](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes)

## Quick Review of ES2015-Classes

### what is class

- `class` is a syntactic sugar for the constructor function.

- It is a template for creating objects, in javaScript, class is built on `prototype`
- Class declaration have the **temporal dead zone** restriction as `let` or `const`, so you can't access the class before it's declared.
- There two ways to define a class,

  - **Class declaration**

  ```javascript
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  ```

  - **Class expression**
    - Can be anonymous.
    - Can have a name.

  ```javascript
  const Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  ```

### What is constructor

- It is a method for creating and initializing an object created with a class.
- It can be only one constructor in a class.
- Can use `super` keyword to call the constructor of a parent class.

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

### Class Methods

- Methods are functions that are defined inside the class definition.

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.height * this.width;
  }
}
```

#### `static` keyword

- `static` keyword defines a static method for a class.
- Static methods are called without instantiating their class and **cannot be called through a class instance**.

```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static enrollStudents() {
    return "Enrolling students";
  }
}

let firstStudent = new Student("John", "Doe");
console.log(firstStudent.getFullName());
// John Doe

console.log(firstStudent.enrollStudents());
// TypeError: firstStudent.enrollStudents is not a function (static method can't be called through a class instance)

console.log(Student.enrollStudents());
// Enrolling students
```
