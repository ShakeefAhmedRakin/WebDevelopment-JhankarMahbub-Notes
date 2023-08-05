console.log("-------------------------------WHEN TO USE VAR/LET/CONST-");

console.log(
  "VAR : Can declare multiple variables with the same name and is changeable. NOT BLOCK SCOPED"
);
console.log(
  "LET : Cannot declare multiple variables with the same name and is changeable. IS BLOCK SCOPED"
);
console.log(
  "CONST: Cannot declare multiple variables with the same name and is not changeable. IS BLOCK SCOPED"
);

console.log("-------------------------------CONVERT INCHES TO FEET-");

function inchToFeet(num) {
  return num / 12;
}

function feetToInches(num) {
  return num * 12;
}

console.log(inchToFeet(1), "Feet");
console.log(feetToInches(0.08333333333333333), "Inches");

console.log("-------------------------------CHECK ODD/EVEN NUMBER-");

function parityChecker(num) {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(parityChecker(54), parityChecker(129));

console.log("-------------------------------SUM OF ALL NUMBERS IN ARRAY-");

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArray(arr) {
  var sum = 0;
  for (var i in arr) {
    i = parseInt(i);
    sum += i;
  }
  return sum;
}

console.log(sumArray(numberList));

console.log("-------------------------------SUM OF ALL ODD NUMBERS IN ARRAY-");

function sumArrayOdd(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumArrayOdd(numberList));

console.log(
  "-------------------------------FACTORIAL OF A NUMBER (USING INCREMENTING LOOP)-"
);

function fact(num) {
  var output = 1;
  for (var i = 1; i <= num; i++) {
    output *= i;
  }
  return output;
}

console.log(fact(10));

console.log(
  "-------------------------------FACTORIAL OF A NUMBER (USING DECREMENTING LOOP)-"
);

function fact(num) {
  var output = 1;
  var i = num;

  while (i > 0) {
    output *= i;
    i--;
  }
  return output;
}

console.log(fact(10));

console.log("-------------------------------LEAP YEAR CHECKING(SIMPLIFIED)-");

function leapChecker(year) {
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    return "Leap Year!";
  } else {
    return "Not a Leap Year!";
  }
}


var a=2; 
var b=3; 
if(a<b){
	console.log("Hello");
}