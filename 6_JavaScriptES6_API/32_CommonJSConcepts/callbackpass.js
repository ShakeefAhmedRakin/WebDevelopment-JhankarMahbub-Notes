// --------------CALL BACK FUNCTIONS--------------
// A callback is a function passed as an argument to another function
const greeting = (aFunction, name) => {
  aFunction(name);
};

const greetingMorning = (name) => {
  console.log("Good Morning!", name);
};

const greetingAfternoon = (name) => {
  console.log("Good Afternoon!", name);
};

greeting(greetingMorning, "John!");
greeting(greetingMorning, "Robert!");
greeting(greetingAfternoon, "John!");
greeting(greetingAfternoon, "Robert!");
