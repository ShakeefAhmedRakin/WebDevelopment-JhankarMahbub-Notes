## NOTES ABOUT ES6 AND API

- **let, var, and const**: These are variable declaration keywords in JavaScript. `let` and `const` have block scope, with `let` allowing reassignment and `const` being constant after assignment. `var` has function scope and can be hoisted.

- **Function defaults, template strings, multiline strings**: Functions can have default parameter values, making some parameters optional. Template strings allow embedding expressions in strings for easy formatting. Multiline strings can be created using template strings or by concatenating strings.

- **Arrow functions, big arrow functions**: Arrow functions provide a concise syntax for writing functions and inherit the context (`this`) from their enclosing scope. Big arrow functions refer to multi-line arrow functions.

- **Spread operator, array methods (max, copy, destructuring)**: The spread operator copies the contents of an iterable (array, object, etc.) into another. Array methods like `max`, `copy`, and destructuring (extracting values from arrays/objects) help manipulate arrays and objects efficiently.

- **Object methods (keys, values, entries, delete, seal, freeze)**: `keys`, `values`, and `entries` retrieve information about object properties. `delete` removes a property. `seal` prevents adding/removing properties, `freeze` additionally prevents property value changes.

- **for of, for in**: `for...of` iterates over values in arrays, strings, etc. `for...in` iterates over object keys. They are used to loop through collections.

- **Nesting objects and chaining**: Objects can be nested within other objects, creating complex structures. Chaining involves calling multiple methods on a single object in sequence, often used with array methods.

- **Array methods (map, forEach, filter, find, reduce)**: `map` transforms array elements, `forEach` iterates through elements, `filter` creates a new array with filtered elements, `find` returns the first matching element, `reduce` aggregates values.

- **Class, objects, inheritance, prototyping**: Classes are blueprints for creating objects with shared properties and methods. Inheritance allows one class to inherit properties/methods from another. Prototyping is a mechanism where objects can share properties through their prototypes.

- **Scopes**: Scopes define the accessibility and visibility of variables in different parts of your code. JavaScript has function scope and block scope (introduced with `let` and `const`), where variables defined within a scope are accessible only within that scope unless nested scopes are involved.

- **Callback**: A callback is a function passed as an argument to another function. It's used to ensure that a particular code block executes only after a certain operation or task is completed.

- **Closure**: A closure is a function that remembers and accesses variables from its outer (enclosing) scope even after that scope has finished executing. This allows for maintaining state across function calls.

- **Encapsulation**: Encapsulation is a principle of wrapping data (variables) and the methods that operate on the data into a single unit (object or class). This helps in hiding implementation details and controlling access to the data.

- **Truthy and Falsy**: JavaScript treats values in Boolean contexts (like conditionals) as either "truthy" (evaluates to `true`) or "falsy" (evaluates to `false`). Falsy values include `false`, `0`, `""`, `null`, `undefined`, and `NaN`. Everything else is considered truthy.

- **API usage in JavaScript**: APIs (Application Programming Interfaces) are sets of rules for interacting with software components. In JavaScript, APIs are used to communicate with external services, libraries, or platforms.

- **HTTP methods (GET, POST, PATCH, DELETE, PUT)**: These are HTTP request methods used to interact with resources on a server. `GET` retrieves data, `POST` sends data to create, `PATCH` updates parts, `DELETE` removes, `PUT` updates entire resources.

## ABOUT JAVASCRIPT

1. **High abstraction**: JavaScript allows developers to work with concepts and structures that are closer to human thinking, making it easier to code complex tasks without dealing with low-level details.

2. **Garbage collection**: JavaScript automatically manages memory by identifying and freeing up memory that is no longer needed, reducing the risk of memory leaks and improving efficiency.

3. **JIT compiled**: JavaScript uses Just-In-Time compilation, which means that the code is partly compiled during runtime, leading to faster execution as compared to traditional interpretation.

4. **Multi-paradigm**: JavaScript supports various programming paradigms, including procedural, object-oriented, and functional programming, giving developers flexibility in how they structure their code.

5. **Dynamically typed**: Variables in JavaScript are not bound to a specific data type at declaration; their types can change during runtime, making the language flexible but requiring careful handling to prevent unexpected behavior.

6. **Prototyped based**: JavaScript employs prototype-based object-oriented programming, where objects can directly inherit properties and behaviors from other objects, allowing for dynamic and flexible object relationships.

## HOW DOES JAVASCRIPT WORK?

- **V8 Engine**: V8, written in C++, is a high-performance JavaScript engine developed by Google, primarily used in the Chrome browser and Node.js. It compiles JavaScript code into machine code for efficient execution.

- **Execution Context:**
An execution context is a fundamental concept in JavaScript's runtime environment, including V8. It defines the environment in which a piece of code is executed. There are two main types of execution contexts:

1. **Global Execution Context (GEC):**
   - The global execution context represents the code that's not within any function. It's the context in which global variables and functions are defined.
   - The GEC is created when the script starts running or when a web page is loaded. There's only one global execution context per program or page.
   - It sets up the global object (`window` in browsers, `global` in Node.js) and the `this` value in the context of the global scope.

2. **Function Execution Context (FEC):**
   - Every time a function is invoked, a new function execution context is created. This includes the function's arguments, local variables, and inner functions.
   - Each function has its own execution context, which is independent of other invocations of the same function. This allows for proper variable isolation.
   - The function execution context includes the Variable Environment (scope) and the Lexical Environment (where variables are declared). It also sets up the `this` value based on how the function is called (e.g., method invocation, regular function call, etc.).

**Order of Execution:**
When code execution starts, the global execution context is created first, representing the global scope. As the code is executed, function execution contexts are created when functions are called. The context for the invoked function is pushed onto the call stack.

**Creation Phase and Execution Phase:**
The execution context has two main phases: the creation phase and the execution phase.

1. **Creation Phase:**
   - In this phase, the execution context is set up.
   - For a function execution context (FEC), this involves:
     - Creating the Variable Environment (scope) and Lexical Environment.
     - Creating a reference to the outer (enclosing) environment (for closures).
     - Setting up the `this` value based on the function invocation pattern.
     - Determining and storing formal parameters and function declarations.
   - For the global execution context (GEC), this involves setting up the global object (`window`/`global`) and creating declarations of global variables and functions.

2. **Execution Phase:**
   - In this phase, the actual code inside the function is executed line by line.
   - Variables are assigned values, and functions are invoked.
   - Any reference to a variable triggers a search in the Variable Environment and its outer environments (scope chain).
   - Once the function completes its execution, the function's execution context is popped off the call stack.

- **Call Stack:**
The call stack is a data structure used to manage function calls and their respective execution contexts. It follows the Last-In-First-Out (LIFO) principle. When a function is called, its execution context is pushed onto the stack. When a function completes its execution, its context is popped off the stack.
The call stack ensures that function invocations are tracked, allowing for proper execution order and context management. If the call stack becomes too large (due to excessive recursion or deeply nested function calls), it can lead to a stack overflow error.

- **Single-Threaded**: V8 is a single-threaded engine, meaning it processes one task at a time in a single sequence. This contrasts with multi-threaded engines that can handle multiple tasks concurrently. While V8 itself is single-threaded, web browsers and environments like Node.js can use multiple threads for various tasks. Let's explore the differences between synchronous and asynchronous code execution with code snippets.

- **Synchronous Execution:**
In synchronous code execution, each task is executed one after the other, and the program waits for each task to complete before moving on to the next one. This can lead to blocking behavior, where one slow task can hold up the entire program.

```javascript
console.log("Start");

function synchronousTask() {
    for (let i = 0; i < 5e8; i++) {
        // Simulate a time-consuming task
    }
    console.log("Synchronous task complete");
}

synchronousTask();

console.log("End");
```

In this example, the program will log "Start," then run the `synchronousTask` function, which simulates a time-consuming task. During this task, the program is blocked and can't do anything else. After the task is complete, "Synchronous task complete" is logged, followed by "End."

- **Asynchronous Execution:**
Asynchronous code execution allows the program to continue running while tasks that take time to complete are being handled in the background. This prevents blocking and improves the overall responsiveness of the program. In JavaScript, asynchronous operations are commonly managed using callbacks, promises, and async/await.

```javascript
console.log("Start");

function asynchronousTask() {
    setTimeout(() => {
        console.log("Asynchronous task complete");
    }, 2000);
}

asynchronousTask();

console.log("End");
```

In this example, the `setTimeout` function is used to simulate an asynchronous task that takes 2 seconds to complete. While the asynchronous task is running, the program continues executing without waiting for it. So, the output will be:
1. "Start"
2. "End"
3. "Asynchronous task complete" (after a 2-second delay)

Here, the program doesn't block during the asynchronous task, and the "End" message is logged before the asynchronous task completes.

Asynchronous programming is essential for handling tasks that involve waiting, such as fetching data from servers or reading files. It ensures that the program remains responsive and can handle multiple tasks concurrently without being held up by time-consuming operations.

<hr>

Here's how these components work together:

1. **Execution Context Creation**: When a function is called, an execution context is created. It includes the function's scope, variables, arguments, and the reference to the outer environment.

2. **Call Stack**: As functions are invoked, their execution contexts are added to the call stack. The current function at the top of the stack is the one being executed.

3. **Execution**: The top function on the call stack is executed. If it calls other functions, their contexts are added to the stack, forming a stack of nested function calls.

4. **Completion**: When a function finishes execution, its context is removed from the call stack, allowing the previous function to resume.

5. **Event Loop**: JavaScript's single-threaded nature doesn't mean it can't handle asynchronous operations. Asynchronous tasks like timers or I/O operations are managed using the event loop, which checks the queue for tasks to execute when the call stack is empty.

This mechanism ensures that JavaScript code executes in a predictable order, without concurrency-related issues that can arise in multi-threaded environments.
