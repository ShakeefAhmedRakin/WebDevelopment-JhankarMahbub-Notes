# Table of Contents

1. [What is React Component?](#what-is-react-component)
2. [4 Ways to Define a Component](#4-ways-to-define-a-component)
   - [Similar in Look, Different in Data](#similar-in-look-different-in-data)
   - [Container Component](#container-component)
   - [No Common Pattern, but Breakdown for Working Purpose](#no-common-pattern-but-breakdown-for-working-purpose)
   - [Stand-alone Component](#stand-alone-component)
3. [Component Function Naming Rules](#component-function-naming-rules)
4. [Exporting and Importing Components](#exporting-and-importing-components)
   - [Code Snippet](#code-snippet)
5. [What is JSX in React](#what-is-jsx-in-react)
   - [Code Snippet](#code-snippet)
   - [Advantages of JSX](#advantages-of-jsx)
   - [How the Browser Processes JSX](#how-the-browser-processes-jsx)
6. [Rules of JSX](#rules-of-jsx)
   - [Returning a Single Root Element](#returning-a-single-root-element)
   - [All Tags Must Be Closed](#all-tags-must-be-closed)
   - [Camel Casing](#camel-casing)
   - [Usage of Curly Braces](#usage-of-curly-braces)

## What is React Component?

A React component is a reusable and self-contained building block in a React application. It represents a part of the user interface and can have its own state and behavior. Components are the core building blocks of React applications.

```jsx
import React from "react";

// Define a functional component named MyComponent
function MyComponent() {
  // Return JSX (UI) for the component
  return (
    <div>
      <h1>Hello!</h1>
      <p>This is a basic functional component.</p>
    </div>
  );
}

export default MyComponent;
```

## 4 Ways to Define a Component

### Similar in Look, Different in Data

This approach involves creating multiple components that have a similar visual appearance but receive different data as props. It's useful for rendering lists or collections of items with a consistent layout.

### Container Component

A container component is responsible for managing the state and logic of one or more child components. It encapsulates the data and behavior required by its children, making it a higher-level component.

### No Common Pattern, but Breakdown for Working Purpose

Sometimes, there might not be a specific pattern to follow when defining components. In such cases, you can break down your UI into components that make sense for the specific functionality you're implementing.

### Stand-alone Component

A stand-alone component is a self-contained unit that doesn't rely on other components for its functionality. It's typically used for UI elements that can be reused across the application.

## Component Function Naming Rules

When naming React component functions, follow these rules:

- Use PascalCase for component names (e.g., `MyComponent`).
- Use clear, descriptive names that indicate the purpose of the component.
- Avoid naming conflicts with built-in HTML elements (e.g., don't name a component `div`).

## Exporting and Importing Components

To export and import React components, you can use the following code snippet:

### Code Snippet

```jsx
// Exporting a component
import React from "react";

function MyComponent() {
  // Component logic here
}

export default MyComponent;

// Importing a component
import MyComponent from "./MyComponent";

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}
```

## What is JSX in React

JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe the structure of user interfaces. It allows you to write HTML-like code within JavaScript, making it easier to define UI elements.

### Code Snippet

```jsx
const element = <h1>Hello, JSX!</h1>;
```

### Advantages of JSX

1. **Readability**: JSX makes the code more readable by combining HTML-like syntax with JavaScript.

2. **Component Composition**: JSX allows you to compose components in a natural way, making it easy to build complex UIs.

### How the Browser Processes JSX

JSX code is transpiled into regular JavaScript by tools like Babel before it's served to the browser. Browsers can't directly interpret JSX, so this transformation is necessary.

## Rules of JSX

### Returning a Single Root Element

In JSX, you must return a single root element from your component. You can wrap multiple elements in a parent container.

### All Tags Must Be Closed

All HTML-like tags in JSX must be properly closed, either with a closing tag or by using self-closing tags for void elements like `<img>`.

### Camel Casing

HTML attributes in JSX should be written in camelCase instead of kebab-case. For example, `class` becomes `className`, and `tab-index` becomes `tabIndex`.

### Usage of Curly Braces

Curly braces `{}` are used to embed JavaScript expressions within JSX. This allows dynamic content and calculations to be included in the UI.
