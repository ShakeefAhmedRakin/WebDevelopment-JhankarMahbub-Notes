## Introduction to JavaScript
- **JavaScript** is a versatile programming language used for web development, enabling dynamic and interactive content.
- It's supported by all modern web browsers, making it a powerful tool for front-end and back-end development.
- JavaScript enhances user experience by allowing real-time updates and interactions without requiring page reloads.

**Why Use JavaScript for Web Development:**
- **Interactivity**: JavaScript enables dynamic user interactions like form validation, animations, and more.
- **Real-time Updates**: You can update parts of a web page without reloading the entire page.
- **DOM Manipulation**: JavaScript can modify the Document Object Model (DOM) to create, remove, or modify HTML elements.
- **Client-Side Validation**: Validate user inputs before sending data to the server.
- **API Interaction**: Interact with APIs to fetch or send data without refreshing the page.

## Documentations

1. **MDN Web Docs - JavaScript**:
   - [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
   - [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

2. **FreeCodeCamp**:
   - [JavaScript Algorithms and Data Structures Certification](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)

3. **W3Schools JavaScript Tutorial**:
   - [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)

4. **JavaScript.info**:
   - [JavaScript.info](https://javascript.info/)

5. **Eloquent JavaScript** by Marijn Haverbeke:
   - [Eloquent JavaScript](https://eloquentjavascript.net/)

6. **Modern JavaScript Tutorial**:
    - [Modern JavaScript Tutorial](https://javascript.info/)


##

**Variables and Their Types:**
```javascript
let number = 10;              // Number
const text = "Hello";         // String
var isTrue = true;            // Boolean
const data = null;            // Null
let value;                    // Undefined
const person = {              // Object
  name: "John",
  age: 30
};
const numbers = [1, 2, 3];    // Array
```

**Assigning Variables:**
```javascript
let x = 5;
const y = "Hello";
var isActive = true;
```

**Using Conditional Statements:**
```javascript
if (isActive) {
  console.log("Active");
} else {
  console.log("Inactive");
}

const score = 85;
if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Good");
} else {
  console.log("Needs improvement");
}

const age = 18;
if (age >= 18) {
  console.log("You are an adult.");
  if (age === 21) {
    console.log("You can also drink!");
  }
}
```

**Using Loops:**
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let count = 0;
while (count < 3) {
  console.log("Count is: " + count);
  count++;
}
```

**Looping Through Objects:**
```javascript
const person = {
  name: "John",
  age: 30,
  job: "Developer"
};

for (const key in person) {
  console.log(key + ": " + person[key]);
}

const keys = Object.keys(person);
for (const key of keys) {
  console.log(key + ": " + person[key]);
}
```

**Math Operation Examples:**
```javascript
const num = 3.7;
const roundedNum = Math.round(num);   // 4
const ceilingNum = Math.ceil(num);    // 4
```

**String Operation Examples:**
```javascript
const message = "Hello, world!";
const length = message.length;         // 13
const uppercase = message.toUpperCase(); // "HELLO, WORLD!"
const substring = message.substring(0, 5); // "Hello"
```

**Array Operation Examples:**
```javascript
const numbers = [1.2, 2.7, 3.5, 4.1, 5.8];
const roundedNumbers = numbers.map(num => Math.round(num)); // [1, 3, 4, 4, 6]
```

**Searching Through Objects:**
```javascript
const person = {
  name: "John",
  age: 30,
  job: "Developer"
};

for (const key in person) {
  if (key === "name") {
    console.log("Name found:", person[key]);
  }
}
```

