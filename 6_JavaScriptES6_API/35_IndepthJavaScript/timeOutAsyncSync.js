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

console.log("Start");

function asynchronousTask() {
  setTimeout(() => {
    console.log("Asynchronous task complete");
  }, 2000);
}

asynchronousTask();

console.log("End");
