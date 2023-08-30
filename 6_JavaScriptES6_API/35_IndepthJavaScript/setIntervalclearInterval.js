console.log(1);
console.log(2);
console.log(3);
// function will be called every 5000 ms (5 seconds).
// It also starts with a 5000 ms delay.

// UNCOMMENT TO SEE
// setInterval(() => console.log(4), 5000);
console.log(5);
console.log(6);

console.log("----------------------------------------------------------------");

// needs to declared with let as num++ is basically "num = num + 1" which is an reassignment.
let num = 0;

// UNCOMMENT TO SEE
// setInterval(() => console.log(num++), 5000);

// -----------------------------------------------------------------

// setInterval has an intervalID.
/*
numTwo = 0;
let intervalID = setInterval(() => console.log(numTwo++), 5000);

*/

// intervalID is an object.

// IF YOU GET AN INTERVAL ID OF AN INSTANCE OF setInterval.
// YOU CAN STOP IT FROM RUNNING, by clearInterval(intervalID)

// It's tha same for setTimeout where you can stop a function from running by
// typing clearTimeout(timeoutID)

// EXAMPLE OF X++ and ++X

console.log("---------------X++ vs ++X-------------------------------");
let testOne = 0;
let testTwo = 0;

// THE NUMBER IS PRINTED FIRST THEN UPDATED.
console.log(testOne++);
console.log(testOne);

// THE NUMBER IS UPDATED FIRST THEN PRINTED
console.log(++testTwo);
console.log(testTwo);

console.log("---------------STOPPING FUNCTIONS IN THEMSELVES-----------------");

// EXAMPLE

let number = 1;
const intervalID = setInterval(() => {
  console.log(++num);
  if (num == 10) {
    console.log("clearing the intervalId for this setInterval");
    clearInterval(intervalID);
  }
}, 1000);
