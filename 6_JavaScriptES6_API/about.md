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

- **API usage in JavaScript**: APIs (Application Programming Interfaces) are sets of rules for interacting with software components. In JavaScript, APIs are used to communicate with external services, libraries, or platforms.

- **HTTP methods (GET, POST, PATCH, DELETE, PUT)**: These are HTTP request methods used to interact with resources on a server. `GET` retrieves data, `POST` sends data to create, `PATCH` updates parts, `DELETE` removes, `PUT` updates entire resources.

## ABOUT JAVASCRIPT

1. **High abstraction**: JavaScript allows developers to work with concepts and structures that are closer to human thinking, making it easier to code complex tasks without dealing with low-level details.

2. **Garbage collection**: JavaScript automatically manages memory by identifying and freeing up memory that is no longer needed, reducing the risk of memory leaks and improving efficiency.

3. **JIT compiled**: JavaScript uses Just-In-Time compilation, which means that the code is partly compiled during runtime, leading to faster execution as compared to traditional interpretation.

4. **Multi-paradigm**: JavaScript supports various programming paradigms, including procedural, object-oriented, and functional programming, giving developers flexibility in how they structure their code.

5. **Dynamically typed**: Variables in JavaScript are not bound to a specific data type at declaration; their types can change during runtime, making the language flexible but requiring careful handling to prevent unexpected behavior.

6. **Prototyped based**: JavaScript employs prototype-based object-oriented programming, where objects can directly inherit properties and behaviors from other objects, allowing for dynamic and flexible object relationships.
