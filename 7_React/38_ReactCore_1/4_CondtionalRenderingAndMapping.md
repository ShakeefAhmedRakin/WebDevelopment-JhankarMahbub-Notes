# Table of Contents

1. [If-Else Conditional Rendering](#if-else-conditional-rendering)
2. [Ternary Operator Conditional Rendering](#ternary-operator-conditional-rendering)
3. [And Operator Conditional Rendering](#and-operator-conditional-rendering)
4. [Or Operator Conditional Rendering](#or-operator-conditional-rendering)
5. [If-Else Conditional Rendering Using Variable](#if-else-conditional-rendering-using-variable)
6. [Using Mapping to Display Content](#using-mapping-to-display-content)

## If-Else Conditional Rendering

In this approach, conditional rendering is achieved using an `if-else` statement to decide what content to render based on the condition. Here's an example:

```jsx
export default function Todo({ task, isDone }) {
  if (isDone) {
    return (
      <>
        <li>Finished: {task}</li>
      </>
    );
  }
  return (
    <>
      <li>Work on: {task}</li>
    </>
  );
}
```

## Ternary Operator Conditional Rendering

Conditional rendering using a ternary operator is a concise way to decide what content to render based on a condition. Here's an example:

```jsx
export default function Todo({ task, isDone }) {
  return (
    <>
      <li>
        {isDone ? "Finished" : "Work on"}: {task}
      </li>
    </>
  );
}
```

## And Operator Conditional Rendering

The `&&` operator can be used for conditional rendering to display content based on conditions which are satisfied. Here's an example:

```jsx
export default function Todo({ task, isDone }) {
  return (
    <>
      <li>
        {task} {isDone && ":Finished"}
      </li>
    </>
  );
}
```

## Or Operator Conditional Rendering

The `||` operator can be used for conditional rendering to display content based on conditions. which are unsatisfied Here's an example:

```jsx
export default function Todo({ task, isDone }) {
  return (
    <>
      <li>
        {task} {isDone || ":Unfinished"}
      </li>
    </>
  );
}
```

## If-Else Conditional Rendering Using Variable

Conditional rendering can also be achieved by storing the JSX content in a variable and then returning that variable based on a condition. Here's an example:

```jsx
export default function Todo({ task, isDone }) {
  let listItem;

  if (isDone) {
    listItem = <li>Done: {task}</li>;
  } else {
    listItem = <li>Unfinished: {task}</li>;
  }

  return listItem;
}
```

Certainly! Here's a Markdown table of contents for educational notes and explanations with example code snippets for using mapping to display content in React:

## Using Mapping to Display Content

In React, you can use the `map` function to iterate over an array of data and render content dynamically. This is a common approach when you have a list of items to display. In your example, you have a list of tasks that you want to render as `Todo` components.

```jsx
import Todo from "./Todo.jsx";
import "./App.css";

function App() {
  const tasks = [
    { detail: "Task One", isDone: true },
    { detail: "Task Two", isDone: false },
    { detail: "Task Three", isDone: false },
    { detail: "Task Four", isDone: true },
    { detail: "Task Five", isDone: false },
    { detail: "Task Six", isDone: true },
  ];

  return (
    <>
      <h1>Todo List</h1>
      {tasks.map((task, index) => (
        <Todo key={index} task={task.detail} isDone={task.isDone}></Todo>
      ))}
    </>
  );
}

export default App;
```

In this code:

- You have an array called `tasks` that contains objects representing each task, including the task's `detail` and whether it is `isDone` or not.

- Inside the `return` statement, you use the `map` function to iterate over the `tasks` array. For each `task` object, you render a `Todo` component and pass the `task.detail` and `task.isDone` as props.

- The `key={index}` attribute is added to the `Todo` component to provide a unique identifier for each rendered `Todo` component. This helps React efficiently update and re-render components when needed.
