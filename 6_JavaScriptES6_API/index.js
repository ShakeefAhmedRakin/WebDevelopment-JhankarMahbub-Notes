// VAR : ALLOWS IT BE REASSIGNED

// LET : ALLOWS IT BE REASSIGNED

// CONST : DOES NOT ALLOW IT BE REASSIGNED

// SETTING DEFAULT PARAMETER VALUES
function testOne(num1 = 0, num2 = 0) {
  const result = num1 + num2;
  console.log(num1, num2, result);
}

// SOME ARGUMENTS GIVEN
testOne(5);
testOne(2);
testOne();

console.log("---------------------------");
// BETTER WAY TO CONCATENATE

let nameOfPerson = "Rob";
let bagOne = 5;
let bagTwo = 10;

// STRING INTERPOLATION WITH TEMPLATE LITERALS (``)
let result = `The total number of chocolates in ${nameOfPerson}'s bags is ${
  bagOne + bagTwo
}`;
console.log(result);
result = `Line One
Line Two
Line Three`;
console.log(result);
console.log("---------------------------");

// ARROW FUNCTION (ES6)
// CLEANER AND SHORTER CODE
let addTest = function (a, b) {
  return a + b;
};

const add = (a, b) => a + b;

console.log(addTest(2, 3));
console.log(add(2, 3));

const myName = () => console.log("john");
const square = (a) => console.log(a * a);

myName();
square(5);

// LARGE ARROW FUNCTION
const doMath = (a, b, c) => {
  const sum = a + b;
  const result = sum * c;
  return result;
};

console.log(doMath(2, 3, 4));
console.log("---------------------------");
