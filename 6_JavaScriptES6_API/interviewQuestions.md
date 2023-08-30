## JavaScript Interview Questions and Answers

1. **What is JavaScript (JS) and V8?**

   - JavaScript (JS) is a versatile programming language primarily used for web development to make websites interactive. It's supported by all modern web browsers and allows dynamic content manipulation.
   - V8 is an open-source JavaScript engine developed by Google. It's used in browsers like Chrome and Node.js to execute JavaScript code quickly by converting it into machine code.

2. **What is the Event Loop?**

   - The event loop is a fundamental concept in JavaScript's concurrency model. It allows asynchronous operations to be performed without blocking the main thread. It continuously checks the message queue for pending tasks and executes them sequentially.

3. **How is JavaScript Single-Threaded Yet Asynchronous?**

   - While JavaScript is single-threaded, it employs the event loop to manage asynchronous operations. Asynchronous tasks are scheduled in the event queue and executed when the call stack is clear, allowing non-blocking execution.

4. **Difference Between Normal Function and Async Function:**

   - A normal function executes synchronously, blocking the program until it completes.
   - An async function allows non-blocking execution by using the `async` keyword and `await` to pause execution until a Promise is resolved, allowing other tasks to run in the meantime.

5. **What is a Promise (Resolve and Reject)?**

   - A promise is an object representing the eventual completion or failure of an asynchronous operation. It has states: pending, resolved (fulfilled), and rejected.
   - `resolve` is used to fulfill a promise with a value, and `reject` is used to reject it with an error.

6. **Difference Between Fetch and Async/Await:**

   - `fetch` is a built-in function for making network requests, returning a promise that resolves to the response object.
   - Async/await provides a more readable way to work with promises. It can be used to handle asynchronous tasks in a synchronous-like manner.

7. **setTimeout vs setInterval:**

   - `setTimeout` executes a function after a specified delay (milliseconds), but only once.
   - `setInterval` repeatedly executes a function at a specified interval until it's cleared.

8. **Error Handling for Rejected Promises:**

   - Rejected promises can be handled using the `.catch()` method or by placing a `try`-`catch` block around an `await` expression in an async function.

9. **States of a Promise and Explain:**

   - Promises have three states:
     - `Pending`: Initial state, neither fulfilled nor rejected.
     - `Fulfilled`: The promise has resolved, meaning it completed successfully.
     - `Rejected`: The promise has been rejected, indicating an error.

10. **Explain the .then() Method:**
    - The `.then()` method is used to handle the resolved state of a promise. It takes one or two callback functions: the first is called if the promise is fulfilled, and the second is called if the promise is rejected.
