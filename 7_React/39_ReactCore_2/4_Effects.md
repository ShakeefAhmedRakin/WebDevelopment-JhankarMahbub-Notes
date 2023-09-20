# Table of Contents

1. [What Are Effects in React](#what-are-effects-in-react)
2. [What Are Side Effects](#what-are-side-effects)
3. [Common Side Effects That Could Arise](#common-side-effects-that-could-arise)
4. [Why Is useEffect Used](#why-is-useeffect-used)
5. [How to Use useEffect](#how-to-use-useeffect)
6. [Example for useEffect with API](#example-for-useeffect-with-api)
7. [Rerendering in React (Trigger, Render & Commit)](#rerendering-in-react-trigger-render--commit)

## What Are Effects in React

Effects in React refer to side effects or actions that can be performed during the component's lifecycle, such as data fetching, DOM manipulation, subscriptions, and more. Effects allow you to interact with the outside world and manage asynchronous tasks within your components.

## What Are Side Effects

Side effects in React are operations that happen as a result of changes in a component's state or props. These can include data fetching, setting up subscriptions, changing the DOM, and more. Side effects are typically performed within the `useEffect` hook in functional components.

## Common Side Effects That Could Arise

Common side effects in React can include:

- **Data Fetching:** Fetching data from an API or a server.
- **DOM Manipulation:** Changing the DOM structure or content.
- **Subscriptions:** Setting up event listeners or subscriptions.
- **Timers:** Managing timers and intervals.
- **State Updates:** Updating the component's state.

## Why Is useEffect Used

`useEffect` is used in React to handle side effects in functional components. It allows you to encapsulate code that has side effects and ensures that it runs at the appropriate times during the component's lifecycle. This helps in maintaining a clean separation between your component's rendering logic and side effects.

## How to Use useEffect

To use `useEffect`, you import it from React and define it within your functional component. It takes two arguments: a function that represents the side effect and an array of dependencies (optional) to specify when the effect should run.

Here's a basic example:

```jsx
import React, { useEffect } from "react";

function ExampleComponent() {
  useEffect(() => {
    // This code runs as a side effect
    console.log("Effect ran!");
  }, []); // Empty dependency array means it runs once after initial render

  return (
    // Your component's JSX
  );
}
```

## Example for useEffect with API

Here's an example of using `useEffect` to fetch data from an API:

### Users Component (Users.jsx)

The `Users` component fetches user data from an API and renders a list of users.

```jsx
import React, { useEffect, useState } from "react";
import User from "./User"; // Import the User component

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data when the component mounts
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h1>Users</h1>
      {users.map((user) => (
        <User user={user} /> {/* Render the User component for each user */}
      ))}
    </>
  );
}
```

In this component:

- We import `useEffect` and `useState` from React for managing side effects and state.
- Inside the `useEffect`, we fetch user data from the specified API when the component mounts, and the fetched data is stored in the `users` state.
- The `users` state is mapped to render individual `User` components for each user in the list.

### User Component (User.jsx)

The `User` component is responsible for rendering the details of a single user.

```jsx
import React from "react";

export default function User({ user }) {
  return (
    <>
      <hr />
      <h4>Name: {user.name}</h4>
      <p>Email: {user.email}</p>
    </>
  );
}
```

In this component:

- It receives a `user` prop, which contains user data.
- The user's name and email are displayed using JSX.

## Rerendering in React (Trigger, Render & Commit)

Rerendering in React is a process that includes three phases: Trigger, Render, and Commit.

- **Trigger:** It's initiated when an event occurs, such as state changes or props updates.
- **Render:** The component's render method is called, and it computes the new virtual DOM.
- **Commit:** The new virtual DOM is committed to the actual DOM, and the screen is updated.

Understanding these phases helps in optimizing component performance and reducing unnecessary renders.
