# Table of Contents

1. [Using Event Handlers in React](#using-event-handlers-in-react)
   - [Basic Event Handling](#basic-event-handling)
   - [Passing Arguments to Event Handlers](#passing-arguments-to-event-handlers)
   - [Using Arrow Functions](#using-arrow-functions)

## Using Event Handlers in React

### Basic Event Handling

Here's an example of how to use a basic event handler with a button in React without states:

```jsx
import React from "react";

function App() {
  // Event handler function
  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h1>Button Click Alert</h1>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}

export default App;
```

In this code:

- We define an event handler function `handleButtonClick` that shows an alert when the button is clicked.
- The `onClick` attribute of the button is set to the `handleButtonClick` function.

### Passing Arguments to Event Handlers

You can still pass arguments to event handlers without using states. Here's an example:

```jsx
import React from "react";

function App() {
  // Event handler function with an argument
  const showMessage = (message) => {
    alert(message);
  };

  return (
    <div>
      <h1>Button Click Alert</h1>
      <button onClick={() => showMessage("Hello, React!")}>Show Message</button>
    </div>
  );
}

export default App;
```

In this code, we use an arrow function within `onClick` to pass the argument `'Hello, React!'` to the `showMessage` event handler.

### Using Arrow Functions

With functional components, you can use arrow functions to avoid the need for explicit binding. Here's an example:

```jsx
import React from "react";

function App() {
  // Event handler function using an arrow function
  return (
    <div>
      <h1>Button Click Alert</h1>
      <button
        onClick={() => {
          alert("Button clicked!");
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
```
