# How Browsers Work, DOM Tree, Render Tree, BOM vs. DOM

## How Browsers Work

1. **User Input**: The browser starts by receiving user input, such as typing a URL or clicking a link.

2. **HTTP Request**: The browser sends an HTTP request to the server hosting the requested web page.

3. **Server Response**: The server sends back an HTTP response containing the HTML, CSS, JavaScript, and other resources.

4. **HTML Parsing**: The browser parses the HTML to create the Document Object Model (DOM) tree.

5. **CSS Parsing and Styling**: The browser parses CSS styles and applies them to the DOM elements, creating the Render Tree.

6. **Layout**: The browser calculates the position and size of each element on the page.

7. **Rendering**: The browser paints the page on the screen, taking into account styles, layout, and any JavaScript interactions.

8. **JavaScript Execution**: If there are scripts in the page, the browser executes them, potentially modifying the DOM.

9. **Event Handling**: The browser listens for user interactions (e.g., clicks) and responds with appropriate actions.

10. **Repeat**: The above steps are repeated for each new page or resource.

## DOM Tree (Document Object Model)

- The DOM is a tree-like representation of the HTML document.
- Each element in the HTML becomes a node in the DOM tree.
- The DOM allows JavaScript to interact with and manipulate the content and structure of the web page.

## Render Tree

- The Render Tree is a subset of the DOM tree.
- It includes only elements that will be displayed on the page.
- Elements that are hidden with CSS (`display: none`) or not visible (e.g., due to being outside the viewport) are excluded.

## BOM (Browser Object Model) vs. DOM (Document Object Model)

**DOM (Document Object Model):**

- Represents the structure and content of a web page.
- Provides an interface for interacting with HTML and XML documents.
- Mainly used for manipulating the document's structure and content.

**BOM (Browser Object Model):**

- Represents the browser window and its components.
- Provides objects and methods to interact with the browser itself (e.g., opening new windows, managing history).
- Used for controlling browser behavior and interacting with the user.

# PROMPTS

1. **`confirm` dialog:**

   ```javascript
   const ready = () => {
     const value = confirm("Are you ready?");

     if (value) {
       alert("Okay, Let's go then");
     } else {
       alert("Get ready first!");
     }
   };
   ```

   - **Purpose**: The `confirm` dialog is used to ask the user a yes/no question or to confirm an action.
   - **How it works**:
     - `confirm("Are you ready?")` displays a dialog box with "OK" and "Cancel" buttons.
     - If the user clicks "OK," the function returns `true`, and it proceeds to show the "Okay, Let's go then" alert.
     - If the user clicks "Cancel," the function returns `false`, and it shows the "Get ready first!" alert.

2. **`alert` dialog:**

   ```javascript
   const alertUser = () => {
     alert("Alert!! via function");
   };
   ```

   - **Purpose**: The `alert` dialog is used to display a message or provide information to the user.
   - **How it works**:
     - `alert("Alert!! via function")` displays a dialog box with a message and an "OK" button.
     - The message provided in the alert dialog is shown to the user, and they can dismiss it by clicking "OK."

3. **`prompt` dialog:**

   ```javascript
   const getName = () => {
     const name = prompt("What is your name");

     alert(`Oh, your name is ${name}. Nice!`);
   };
   ```

   - **Purpose**: The `prompt` dialog is used to prompt the user to enter some information, typically text input.
   - **How it works**:
     - `prompt("What is your name")` displays a dialog box with a text input field and "OK" and "Cancel" buttons.
     - The user can enter text (their name in this case) into the input field and click "OK."
     - The entered text is stored in the `name` variable.
     - An alert is then shown with a message that includes the user's name, like "Oh, your name is John. Nice!"

# LOCATION & HISTORY API

**1. Parts of a URL:**

A URL (Uniform Resource Locator) consists of various components, each serving a specific purpose:

- **Protocol (`https`):** Specifies the communication method for accessing the resource (e.g., HTTP or HTTPS).

- **Hostname (`www.domain.com`):** Identifies the domain or IP address of the server hosting the resource.

- **Port (`:80`):** An optional element indicating the port number for the connection (defaults to 80 for HTTP and 443 for HTTPS).

- **Pathname (`/page/content.php`):** Represents the path to the specific resource or file on the server.

- **Search (`?id=123&name=shoes`):** An optional query string containing parameters used by the server to process the request.

- **Hash (`#top`):** An optional fragment identifier that points to a specific section within the resource.

These parts are essential for constructing and identifying resources on the web.

**2. JavaScript Location Functions:**

JavaScript provides several functions related to the `window.location` object for working with URLs and navigation:

- **`window.location.assign(url)`:** Redirects to the specified URL while keeping a record of the previous URL in the browser's history.

- **`window.location.replace(url)`:** Redirects to the specified URL and replaces the previous URL in the browser's history.

- **`window.location.href = url;`:** Directly assigns a new URL to the current page, triggering navigation.

- **`window.location.reload()`:** Reloads the current page, typically used to refresh content.

- **`window.location.hostname`:** Returns the hostname of the current URL.

- **`window.location.pathname`:** Returns the pathname of the current URL.

- **`window.location.search`:** Returns the query string of the current URL.

- **`window.location.hash`:** Returns the fragment identifier of the current URL.

**3. JavaScript History Functions:**

JavaScript provides history functions for managing the browser's navigation history:

- **`history`:** The `history` object represents the browsing history of the window.

- **`history.back()`:** Navigates back one step in the browsing history (equivalent to clicking the "Back" button).

- **`history.forward()`:** Moves forward one step in the browsing history (equivalent to clicking the "Forward" button).

- **`history.go(n)`:** Allows you to move a specified number of steps in the browsing history, both forward and backward.

- **`history.length`:** Returns the number of entries in the browsing history.

**4. Additional Location Functions:**

- **`window.location.protocol`:** Returns the protocol (e.g., "https:") of the current URL.

- **`window.location.port`:** Returns the port number of the current URL.

**5. Additional History Functions:**

- **`history.state`:** Provides access to the current state object associated with the history entry.

- **`history.pushState(state, title, url)`:** Adds a new state to the browser's history stack, allowing you to change the URL and state without triggering a page load.

- **`history.replaceState(state, title, url)`:** Replaces the current state and URL in the history stack without triggering a page load.
