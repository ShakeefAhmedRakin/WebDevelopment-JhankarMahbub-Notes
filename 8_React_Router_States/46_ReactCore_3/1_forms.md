# Creating a Login Form using `useState`

```jsx
import { useState } from "react";

const Form = () => {
  // Define state variables for email, password, and error messages
  const [email, setEmail] = useState("test@123");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing

    // Validate password length
    if (password.length < 8) {
      setError("Password must be longer than 8 characters");
    } else {
      setError(""); // Clear any previous error messages
      console.log(email, password); // Log email and password on successful submission
    }
  };

  return (
    <>
      <form
        className="shadow-xl p-5 bg-gray-100 rounded-lg border-gray-300 border-2"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-bold mb-6 text-2xl">
          Login Form using React States
        </h1>
        <div className="flex gap-x-4">
          {/* Email input field */}
          <input
            type="email"
            placeholder="Email"
            name="name"
            className="input border-gray-500 w-full max-w-xs"
            onChange={(e) => {
              setEmail(e.target.value); // Update email state as the user types
            }}
            value={email}
            required
          />
          {/* Password input field */}
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input border-gray-500 w-full max-w-xs"
            onChange={(e) => {
              setPassword(e.target.value); // Update password state as the user types
            }}
            value={password}
            required
          />
          {/* Submit button */}
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
        {/* Display error message if the password is too short */}
        {error && <p className="mt-4 text-red-400 font-semibold">{error}</p>}
      </form>
    </>
  );
};

export default Form;
```

## Explanation

1. Import the `useState` hook from React to manage state within the functional component.

2. Define the `Form` component, which represents our login form.

3. Initialize state variables:

   - `email` and `setEmail`: Store the email entered by the user.
   - `password` and `setPassword`: Store the password entered by the user.
   - `error` and `setError`: Store and display error messages for form validation.

4. Define the `handleSubmit` function to handle form submission:

   - Prevent the default form submission behavior using `e.preventDefault()` to stop the page from refreshing.

5. Validate the password length:

   - If the password is less than 8 characters, set an error message using `setError`.
   - If the password is valid, clear any previous error messages and log the email and password to the console.

6. Render the form with JSX:

   - Apply styling using classes for a clean interface.
   - Input fields for email and password are controlled components, meaning their values are controlled by React state.
   - Event handlers (`onChange`) are used to update the corresponding state variables (`email` and `password`) as the user types.
   - The submit button triggers the `handleSubmit` function when clicked.

7. Display the error message (`{error && ...}`) if the password is too short. The error message is shown conditionally based on the `error` state.

# Creating a Login Form using `useRef`

```jsx
import { useEffect, useRef } from "react";

const RefForm = () => {
  // Create Refs for email and password input fields
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Use useEffect to focus on the email input field when the component mounts
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access values using Refs
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <>
      <form
        className="shadow-xl p-5 bg-gray-100 rounded-lg border-gray-300 border-2"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-bold mb-6 text-2xl">
          Login Form using React Ref
        </h1>
        <div className="flex gap-x-4">
          {/* Email input field */}
          <input
            ref={emailRef}
            defaultValue={"test@123"}
            type="email"
            placeholder="Email"
            name="name"
            className="input border-gray-500 w-full max-w-xs"
            required
          />
          {/* Password input field */}
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            name="password"
            className="input border-gray-500 w-full max-w-xs"
            required
          />
          {/* Submit button */}
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default RefForm;
```

## Explanation

1. Import the `useEffect` and `useRef` hooks from React.

2. Create two `useRef` variables, `emailRef` and `passwordRef`, to reference the email and password input fields. Initially, they are set to `null`.

3. Use the `useEffect` hook to focus on the email input field when the component mounts (`[]` as the dependency array ensures it runs once when the component is mounted).

4. Define the `handleSubmit` function to handle form submission:

   - Prevent the default form submission behavior using `e.preventDefault()`.

5. Access and log the input values using Refs:

   - `emailRef.current.value`: Retrieves the value of the email input field.
   - `passwordRef.current.value`: Retrieves the value of the password input field.

6. Render the form with JSX:
   - Apply styling using classes for a clean interface.
   - Input fields for email and password use `ref` attributes to associate them with the `emailRef` and `passwordRef` created earlier.
   - The `defaultValue` for the email input field is set to "test@123" for demonstration purposes.
   - The email input field is initially focused due to the `useEffect` hook.
