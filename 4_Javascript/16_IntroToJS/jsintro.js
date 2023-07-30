var price = 100;
var age = "Hey sup,bro";
var isBool = true;
var isSerious = false;
console.log(price, age, isBool, isSerious);

// NAMING CONVENTION
// 1) USE UNDERSCORE
// 2) CAN END WITH A NUMBER (NOT START)
// 3) user_home_address [SNAKE CASE]
// 4) userHomeAddress [CAMEL CASE] <-- USE THIs
// 5) UserHomeAddress [PASCAL CASE]

var numberOne = 15;
var numberTwo = 4;
var numberThree = 5;

var addOutput = numberOne + numberTwo;
var subOutput = numberOne - numberTwo;
var mulOutput = numberOne * numberTwo;
var divOutput = numberOne / numberThree;
var remOutput = numberOne % numberTwo;

console.log(addOutput, subOutput, mulOutput, divOutput, remOutput);

// UPDATING VARIABLE
var updatedVariable = 15;
updatedVariable = 20;
console.log(updatedVariable);

// STRING CONCATENATION

var firstName = "Shakeef";
var middleName = "Ahmed";
var lastName = "Rakin";

var output1 = firstName + " " + middleName;

console.log("The first and middle combined is " + output1);

// TYPE CONVERSION

// STRING TO INT
var priceInString = "25";

var priceInInteger = parseInt(priceInString);
var priceInFloat = parseFloat(priceInInteger);

console.log(priceInInteger);
console.log(priceInFloat);

// CHECK TYPE
var thisIsBool = true;
var thisIsVar;
console.log(typeof priceInString);
console.log(typeof priceInInteger);
console.log(typeof priceInFloat);
console.log(typeof thisIsBool);
console.log(typeof thisIsVar);

// HICCUP WITH JS
// ONLY FOR THESE TWO NUMBERS
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum);
// HOW TO SOLVE (Fixed -> string -> convert to float)
sum = sum.toFixed(1);
console.log(sum);
console.log(typeof sum);
sum = parseFloat(sum);
console.log(typeof sum);

console.log("-----------------------");
console.log("SOME PRACTICE PROBLEMS");
console.log("-----------------------");

// FINDING AVERAGE

var num1, num2, num3;
num1 = 10.2;
num2 = 20;
num3 = 30;

var average = (num1 + num2 + num3)/3;
console.log(average);
average = average.toFixed(2);
console.log(average);
