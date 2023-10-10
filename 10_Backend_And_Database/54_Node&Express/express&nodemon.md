# Node.js and Express.js

Node.js is a JavaScript runtime environment that allows you to execute JavaScript code on the server-side. It provides a non-blocking, event-driven architecture that makes it well-suited for building scalable and high-performance applications.

Express.js, often referred to as Express, is a minimal and flexible Node.js web application framework. It provides a set of tools for building web and API applications, making it easier to handle various HTTP requests and responses.

## Installing Node.js and Express.js

To get started with Node.js and Express.js, you need to install Node.js first. You can download it from the official website [here](https://nodejs.org/).

Once Node.js is installed, you can create a new Node.js project and install Express.js as a dependency using npm (Node Package Manager):

```bash
npm init
npm install express --save
```

This will create a `package.json` file and install Express.js in your project.

## Setting up index.js and Port

Now that you have Express.js installed, you can create an `index.js` file and set up your Express application. Here's a basic example:

```javascript
const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Got the response from the server");
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
```

In this code:

- We import the Express.js module.
- Create an Express application.
- Define a route for the root URL ("/") that responds with "Got the response from the server."
- Start the server on port 3000.

## Nodemon and Its Uses

Nodemon is a utility that monitors for changes in your Node.js application and automatically restarts the server when changes are detected. It's incredibly useful during development to save you from manually stopping and restarting your server every time you make changes to your code.

## Installing Nodemon

You can install Nodemon globally or as a development dependency in your project. To install it as a development dependency:

```bash
npm install -g nodemon
```

## Getting Data from API or JSON

In your Express application, you can create routes to handle various HTTP requests. To respond with JSON data, you can use JavaScript objects or fetch data from an external source like an API. In your code example, you have a `/blogs` route that responds with JSON data from a local JSON file (`blogs.json`).

```javascript
const express = require("express");
const blogs = require("./blogs.json");
const app = express();

app.get("/blogs", (req, res) => {
  res.json(blogs); // Respond with JSON data from the 'blogs.json' file
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

In this example:

- We define a route `/blogs` that responds with JSON data.
- The `res.json()` method is used to send a JSON response containing the `blogs` data.

## Getting Specific Data with ID

You can create dynamic routes in Express by using route parameters. In your code, you have a `/blogs/:id` route that accepts an `id` parameter in the URL. It then uses this parameter to find a specific blog entry in the `blogs` array based on the `id` and responds with that blog's data. If no matching blog is found, it sends a "Blog does not exist" response.

```javascript
const express = require("express");
const blogs = require("./blogs.json");
const app = express();

app.get("/blogs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const blog = blogs.find((blog) => blog.id === id);

  if (blog) {
    res.json(blog); // Respond with the specific blog entry
  } else {
    res.status(404).json({ message: "Blog not found" }); // Respond with a 404 status if the blog is not found
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

In this code:

- We define a dynamic route `/blogs/:id`, where `:id` is a route parameter.
- We use `req.params.id` to extract the value of `id` from the URL.
- We use the `Array.prototype.find` method to search for the blog entry with a matching `id`.
- If the blog is found, we respond with the specific blog entry as JSON.
- If the blog is not found, we respond with a 404 status and a JSON message indicating that the blog was not found.
