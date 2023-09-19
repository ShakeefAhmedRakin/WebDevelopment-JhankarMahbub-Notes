# Table of Contents

1. [How to Use React Icons in Your Project](#how-to-use-react-icons-in-your-project)
2. [About Recharts: Why and How to Use It](#about-recharts-why-and-how-to-use-it)
3. [About Axios: Why and How to Use It](#about-axios-why-and-how-to-use-it)
4. [About Awesome React Components: Why and How to Use It](#about-awesome-react-components-why-and-how-to-use-it)
5. [Other Popular React Libraries](#other-popular-react-libraries)
6. [Link to Project](#link-to-project)

## How to Use React Icons in Your Project

React Icons is a library that provides a collection of popular icon sets as React components. To use React Icons in your React project:

1. **Install React Icons**: Install the React Icons library and the icon set you want to use. For example, to use Font Awesome icons:

   ```bash
   npm install react-icons
   npm install --save @fortawesome/fontawesome-free
   ```

2. **Import and Use Icons**: Import the icons you need and use them in your components.

   ```jsx
   import React from "react";
   import { FaUser, FaHome } from "react-icons/fa";

   function UserProfile() {
     return (
       <div>
         <FaUser /> John Doe
       </div>
     );
   }

   function HomePage() {
     return (
       <div>
         <FaHome /> Welcome to the Home Page
       </div>
     );
   }
   ```

3. **Style and Customize Icons**: You can style and customize the icons using CSS or the provided props.

   ```jsx
   <FaUser className="text-primary" />
   ```

React Icons supports various icon sets like Font Awesome, Material Icons, and more.

For more information, consult the [React Icons documentation](https://react-icons.github.io/react-icons/).

## About Recharts: Why and How to Use It

Recharts is a popular charting library for React that allows you to create interactive and customizable charts for data visualization. Here's why and how to use it:

**Why Use Recharts:**

- Provides a wide range of chart types like line charts, bar charts, pie charts, and more.
- Highly customizable with a declarative API.
- Supports responsiveness and animation.
- Easily integrates with React applications.

**How to Use Recharts:**

1. **Install Recharts**: Install the Recharts library in your React project.

   ```bash
   npm install recharts
   ```

2. **Import and Use Recharts**: Import the Recharts components and create your charts.

   ```jsx
   import React from "react";
   import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

   function MyChart() {
     const data = [
       { name: "Jan", uv: 400, pv: 2400 },
       { name: "Feb", uv: 300, pv: 4567 },
       // Add more data points
     ];

     return (
       <LineChart width={400} height={300} data={data}>
         <XAxis dataKey="name" />
         <YAxis />
         <Tooltip />
         <Legend />
         <Line type="monotone" dataKey="uv" stroke="#8884d8" />
       </LineChart>
     );
   }
   ```

3. **Customize Charts**: Customize your charts by adjusting properties and styles.

4. **Add Interactivity**: Enhance your charts with tooltips, legends, and other interactive features.

Recharts is a powerful tool for data visualization in React applications. Refer to the [Recharts documentation](https://recharts.org/en-US/) for detailed usage instructions and examples.

## About Axios: Why and How to Use It

Axios is a popular JavaScript library for making HTTP requests from the browser. Here's why and how to use it in your React project:

**Why Use Axios:**

- Provides a simple and consistent API for making HTTP requests.
- Supports both browser and Node.js environments.
- Includes features like request and response interception, request cancellation, and more.

**How to Use Axios:**

1. **Install Axios**: Install Axios in your React project.

   ```bash
   npm install axios
   ```

2. **Import Axios**: Import Axios in your component where you want to make HTTP requests.

   ```jsx
   import axios from "axios";
   ```

3. **Make a GET Request**: Use Axios to make a GET request to an API.

   ```jsx
   axios
     .get("https://api.example.com/data")
     .then((response) => {
       // Handle successful response
       console.log(response.data);
     })
     .catch((error) => {
       // Handle error
       console.error(error);
     });
   ```

4. **Make Other Types of Requests**: Axios supports various HTTP methods like POST, PUT, DELETE, etc.

5. **Intercept Requests and Responses**: Axios allows you to intercept requests and responses to apply custom logic or error handling.

6. **Set Global Configuration**: You can set global Axios configurations, such as default headers and base URLs.

Axios is a versatile library for handling HTTP requests in React applications. Consult the [Axios documentation](https://axios-http.com/docs/intro) for comprehensive usage guidance.

## About Awesome React Components: Why and How to Use It

**Why Use Awesome React Components:**

- Awesome React Components is a curated collection of reusable and customizable UI components for React applications.
- It simplifies the development process by providing high-quality, pre-designed components that you can easily integrate into your projects.
- Saves development time and effort by offering a wide range of components, such as buttons, modals, sliders, and more.
- Components are often highly customizable and come with extensive documentation.

**How to Use:**

Explore the official github for [Awesome React Components](https://github.com/brillout/awesome-react-components)

## Other Popular React Libraries

There are several other popular React libraries that cater to various aspects of React application development. Here are a few noteworthy ones:

1. **Redux**: Redux is a state management library for React applications. It helps manage the global state of your app and ensures predictable state changes.

2. **React Router**: React Router is a routing library for React applications. It enables you to create dynamic, client-side routing for single-page applications.

3. **Formik**: Formik is a form library for React that simplifies the process of building and validating forms. It handles form state and validation effortlessly.

4. **Material-UI**: Material-UI is a popular UI framework that provides a set of Material Design components for React. It offers a consistent and visually appealing UI.

5. **Styled-components**: Styled-components is a CSS-in-JS library that allows you to write CSS in your JavaScript code. It offers a convenient way to style React components.

6. **React Query**: React Query is a library for managing, caching, and synchronizing asynchronous data in React applications, particularly useful for fetching data from APIs.

7. **React Testing Library**: React Testing Library provides utilities for testing React components in a user-centric way. It encourages testing from the user's perspective.

8. **Chakra UI**: Chakra UI is a modular and accessible component library for React applications. It emphasizes ease of use and accessibility.

9. **Storybook**: Storybook is a tool for developing UI components in isolation. It helps create a component library and showcases your components with interactive documentation.

10. **Apollo Client**: Apollo Client is a GraphQL client for React applications. It simplifies the integration of GraphQL APIs into your React components.

## Link to Project

Go to [here](https://github.com/ShakeefAhmedRakin/HotelPrices-React) for the link to the project that was shown in this module.
