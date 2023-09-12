# Table of Contents

1. [Understanding React Hooks](#understanding-react-hooks)

## Understanding React Hooks

React hooks are functions that allow functional components to "hook into" React state and lifecycle features without needing to write a class. They were introduced in React 16.8 to enable state management and other React features within functional components.

Hooks are typically prefixed with `use`, such as `useState`, `useEffect`, `useContext`, etc. Each hook serves a specific purpose and allows you to add features to your functional components.

Here's an overview of some common React hooks:

- `useState`: Used to add state management to functional components.
- `useEffect`: Allows you to perform side effects in functional components, such as data fetching, DOM manipulation, and more.
- `useContext`: Used to access the context API within a functional component.
- `useReducer`: Provides a way to manage more complex state logic with actions and reducers.
- `useRef`: Allows you to create mutable references to DOM elements or values that persist across renders.
- `useMemo` and `useCallback`: Used for memoization, optimizing performance by memoizing values and functions.

Hooks are called in the same order on every render, which ensures consistent behavior. They allow functional components to have state and lifecycle behavior similar to class components while keeping the component code concise and readable.

Here's a brief example of using the `useState` hook, which we covered earlier:

```jsx
import { useState } from "react";

function ExampleComponent() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // 'count' stores the current state value
  // 'setCount' is a function to update 'count'

  return (
    <>
      <h1>Current Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
```

In this example, we used the `useState` hook to manage state within a functional component, demonstrating how hooks can simplify and enhance the capabilities of functional components in React.
