# Table of Contents

1. [Single Page vs Multi Page Application and Examples](#single-page-vs-multi-page-application-and-examples)
2. [Concept of React Router](#concept-of-react-router)
3. [How to Create Nested Routes with createBrowserRouter()](#how-to-create-nested-routes-with-createbrowserrouter)
4. [Outlet](#outlet)
5. [Link](#link)
6. [Navlink (Better)](#navlink-better)
7. [Loading Data with useLoaderData() and useParams()](#loading-data-with-useloaderdata-and-useparams)
8. [Navigate](#navigate)
9. [useNavigation](#usenavigation)

---

## Single Page vs Multi Page Application and Examples

### Overview

Single Page Applications (SPAs) and Multi Page Applications (MPAs) are two different approaches to building web applications.

- **Single Page Application (SPA)**: SPAs load a single HTML page and dynamically update the content as the user interacts with the app. This approach provides a smoother user experience and faster transitions between views.

- **Multi Page Application (MPA)**: MPAs consist of multiple HTML pages, each representing a different view or page in the application. Navigation typically involves loading entirely new pages from the server.

## Concept of React Router

### Overview

React Router is a popular library for handling routing in React applications. It enables developers to define different routes and render specific components based on the URL.

Link to [Documentation](https://reactrouter.com/en/main).

### Example

```jsx
// React Router example using createBrowserRouter
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  // More route configurations
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
```

---

## How to Create Nested Routes with createBrowserRouter()

### Overview

Nested routes allow you to structure your application's routing in a hierarchy, where child routes are rendered within parent routes. `createBrowserRouter` from React Router provides a way to define nested routes.

### Example

```jsx
// Nested routes example
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      // Define more nested routes
    ],
  },
]);
```

In this example, the `Home` and `About` components are nested within the `AppLayout` component.

---

## Outlet

### Overview

An `Outlet` is a special component in React Router that serves as a placeholder for nested route content. It allows child routes to be rendered within their parent route's layout.

### Example

```jsx
// Outlet example
function AppLayout() {
  return (
    <div>
      <h1>App Layout</h1>
      <Outlet /> {/* Child route content will be rendered here */}
    </div>
  );
}
```

---

## Link

### Overview

The `Link` component in React Router is used to create navigation links that enable users to navigate between different routes in your application.

### Example

```jsx
// Link example
<Link to="/about">About</Link>
```

Clicking the link will navigate the user to the "/about" route.

---

## Navlink (Better)

### Overview

`NavLink` is an improved version of `Link` in React Router. It provides additional styling options and can automatically add an "active" class to the active link.

### Example

```jsx
// NavLink example
<NavLink to="/about" activeClassName="active">
  About
</NavLink>
```

The "active" class will be added to the "About" link when the "/about" route is active.

---

## Loading Data with useLoaderData() and useParams()

### Overview

`useLoaderData()` is a hook provided by React Router for fetching data on the server before rendering a route. `useParams()` allows you to access route parameters.

### Example

```jsx
// Loading data with useLoaderData and useParams
const { data } = useLoaderData(); // Fetch data on the server
const { userId } = useParams(); // Access route parameter
```

These hooks are useful for loading data dynamically based on route parameters.

---

## Navigate

### Overview

The `navigate` function in React Router allows you to programmatically navigate to a different route within your application. It's commonly used for redirection or navigation in response to user actions.

### Example

```jsx
// Programmatically navigate to a route
import { navigate } from "react-router-dom";

function redirectToAboutPage() {
  navigate("/about");
}
```

This function is handy for handling navigation in response to user interactions.

---

## useNavigation

### Overview

`useNavigation` is a hook provided by React Router for accessing the `navigate` function. It's useful when you need to navigate programmatically from within a component.

### Example

```jsx
// Using useNavigation to navigate programmatically
import { useNavigation } from "react-router-dom";

function MyComponent() {
  const navigation = useNavigation();

  function redirectToAboutPage() {
    navigation("/about");
  }

  return <button onClick={redirectToAboutPage}>Go to About</button>;
}
```

This hook simplifies access to the navigation function within components.
