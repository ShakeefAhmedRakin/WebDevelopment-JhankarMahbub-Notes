# Creating a Reusable Form Component using Props and Children

In React, you can create reusable form components that can be customized and used for various purposes across your application. This approach enhances code reusability and maintains a consistent user interface. In this educational note, we'll explore the concept of creating a reusable form component called `ReusableForm` that accepts props and children for customization.

## `ReusableForms` Component

The `ReusableForms` component is a versatile form component that takes the following props:

- `formTitle`: A string representing the form's title.
- `handleSubmit`: A function to handle form submission and receive form data.
- `children`: The `children` prop is a special React prop that allows you to include custom content within the form component.

Here's the code for the `ReusableForms` component:

```jsx
import React from "react";

const ReusableForms = ({ formTitle, handleSubmit, children }) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.name.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };

  return (
    <>
      <form
        className="shadow-xl p-5 bg-gray-100 rounded-lg border-gray-300 border-2"
        onSubmit={handleLocalSubmit}
      >
        <h1 className="text-center font-bold mb-6 text-2xl">{formTitle}</h1>
        {children}
        <div className="flex gap-x-4">
          <input
            defaultValue={"test@123"}
            type="email"
            placeholder="Email"
            name="name"
            className="input border-gray-500 w-full max-w-xs"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input border-gray-500 w-full max-w-xs"
            required
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ReusableForms;
```

## Explanation

1. Define the `ReusableForms` component that accepts `formTitle`, `handleSubmit`, and `children` as props.

2. Create a local `handleLocalSubmit` function to handle the form's submission:

   - It prevents the default form submission behavior to handle submission manually.
   - Extracts the email and password values from the form and passes them to the `handleSubmit` function as an object.

3. Render the form using JSX:
   - Apply styling using classes for a clean interface.
   - Display the `formTitle` passed as a prop.
   - Include the `children` prop to allow custom content to be inserted into the form component.
   - Add input fields for email and password with default values and names.
   - Use the `handleLocalSubmit` function as the form's `onSubmit` handler to handle form submissions.

## How to Use `ReusableForms` in `app.jsx`

To use the `ReusableForms` component in your `app.jsx` file, follow these steps:

1. Import the `ReusableForms` component at the top of your `app.jsx` file:

   ```jsx
   import ReusableForms from "./ReusableForms"; // Replace './ReusableForms' with the correct path
   ```

2. Define a function to handle form submission:

   Before using the `ReusableForms`, define a function that will handle the form submission. This function will receive the form data as an argument.

   ```jsx
   const handleFormSubmit = (data) => {
     // Add your logic to handle the form data here
     console.log(data.email);
     console.log(data.password);
   };
   ```

3. Use the `ReusableForms` component within your `app.jsx` by providing the required props and custom content within the form:

   ```jsx
   const App = () => {
     return (
       <div>
         <ReusableForms formTitle="Login Form" handleSubmit={handleFormSubmit}>
           {/* Customize the form content */}
           {/* You can add any form fields or additional content here */}
           <label>
             <p>Login Form/Sign up Form</p>
           </label>
         </ReusableForms>
       </div>
     );
   };
   ```

4. When you run your application, the `ReusableForms` component will render the form with the specified title and content. When the form is submitted, the `handleFormSubmit` function will be called, allowing you to handle and process the form data as needed.

With this setup, you have a reusable `ReusableForms` component that can be easily integrated into your React application. The custom hook `useInputState` abstracts the input state management logic, making your code clean and maintainable.
