// Synchronous

console.log("Start");

function synchronousTask() {
  for (let i = 0; i < 5e8; i++) {
    // Simulate a time-consuming task
  }
  console.log("Synchronous task complete");
}

synchronousTask();

console.log("End");

console.log("--------------------------------");

// Asynchronous
// FETCH IS AN Asynchronous Task.
// setTimeout is an Asynchronous function which runs the function after a time period and runs it only once.

console.log("Start");

function asynchronousTask() {
  setTimeout(() => {
    console.log("Asynchronous task complete");
  }, 2000);
}

asynchronousTask();

console.log("End");
