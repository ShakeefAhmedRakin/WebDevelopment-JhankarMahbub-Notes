var listOfNumbers = [1, 2, 3, 4, 5, 6];
// COULD CONTAIN ANY TYPE OF VARIABLES BUT MUST BE SAME VARIABLE TYPES.

console.log(listOfNumbers);
console.log("The length of the list is " + listOfNumbers.length);
console.log(listOfNumbers[0], listOfNumbers[5]);
listOfNumbers[0] = 69;
console.log(listOfNumbers);
console.log(listOfNumbers.indexOf(4));

console.log("---------------------");

console.log(listOfNumbers);
// PUSH AND POP USES THE LAST INDEX OF THE AN ARRAY
listOfNumbers.push(69);
console.log(listOfNumbers);
listOfNumbers.pop();
console.log(listOfNumbers);

console.log("---------------------");

// > < >= <= !== == === !===

// A > B && A > C && C > B [THIS IS AND]
// A > B || A > C || C > B [THIS IS OR]

var num1, num2, num3;

num1 = 100;
num2 = 500;
num3 = 100;

if (num1 == num3) {
  console.log("num1 and num3 are same");
}

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else if (num1 == num3) {
  console.log("As num1 is greater than num2, num1 and num3 are same");
} else {
  console.log("No conditions are met.");
}

if (num1 == num3 && num2 > num1) {
  console.log("Both conditions need to be met");
}

if (num1 != num3 || num2 > num1) {
  console.log("Any one condition need to be met");
}
