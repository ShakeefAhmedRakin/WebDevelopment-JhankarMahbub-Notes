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

## Assignment Problems

**1. Cube Number Function:**
This function takes a number as input and returns the cube of that number. If the input is not a valid number, it returns an error message.

```javascript
function cubeNumber(number) {
  if (typeof number == "number") {
    const result = number * number * number;
    return result;
  } else {
    return "Invalid input. Input must be a number.";
  }
}

const cubeResult = cubeNumber(3);
console.log(cubeResult);  // Output: 27

const invalidInput = cubeNumber("2.2");
console.log(invalidInput);  // Output: "Invalid input. Input must be a number."
```

**2. Match Finder Function:**
This function takes two strings as inputs and checks if the second string is present within the first string. It returns a boolean value indicating the match or a validation message.

```javascript
function matchFinder(string1, string2) {
  if (typeof string1 != "string" || typeof string2 != "string") {
    return "Both inputs must be a string.";
  } else {
    return string1.includes(string2);
  }
}

const isMatch = matchFinder("John Doe", "ohn");
console.log(isMatch);  // Output: true

const noMatch = matchFinder("JavaScript", "Code");
console.log(noMatch);  // Output: false
```

**3. Sort Maker Function:**
This function takes an array of two numbers and sorts them in descending order. If the array has negative numbers or is empty, it returns an error message.

```javascript
function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  }

  if (arr[1] == arr[0]) {
    return "equal";
  } else if (arr[1] > arr[0]) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
  } else {
    return arr;
  }
}

const sortedArray = sortMaker([2, 4]);
console.log(sortedArray);  // Output: [4, 2]

const invalidInput = sortMaker([4, -2]);
console.log(invalidInput);  // Output: "Invalid Input"
```

**4. Find Address Function:**
This function takes an object containing address information and constructs a formatted address string.

```javascript
function findAddress(obj) {
  let output = "";
  if (obj.street != undefined) {
    output += obj.street + ",";
  } else {
    output += "__" + ",";
  }

  if (obj.house !== undefined) {
    output += obj.house + ",";
  } else {
    output += "__" + ",";
  }

  if (obj.society != undefined) {
    output += obj.society;
  } else {
    output += "__";
  }

  return output;
}

const address1 = { street: 10, house: "15A", society: "Earth Perfect" };
const formattedAddress = findAddress(address1);
console.log(formattedAddress);  // Output: "10,15A,Earth Perfect"
```

**5. Can Pay Function:**
This function takes an array of numbers and a total amount due, and checks if the sum of the array elements is greater than or equal to the total due.

```javascript
function canPay(changeArray, totalDue) {
  if (changeArray.length == 0) {
    return "The array must not be empty.";
  }

  let payable = false;

  let sum = 0;

  for (let i = 0; i < changeArray.length; i++) {
    sum += changeArray[i];
  }

  if (sum >= totalDue) {
    payable = true;
  }

  return payable;
}

console.log(canPay([1, 2, 5], 10));  // Output: false

console.log(canPay([1, 4, 5], 10));  // Output: true
```
