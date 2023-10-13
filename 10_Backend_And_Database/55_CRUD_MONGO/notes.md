### Table of Contents

1. [Express and CORS](#express-and-cors)
2. [Middlewares](#middlewares)
3. [Creating the MongoDB Connection](#creating-the-mongodb-connection)
   - [Create Account](#create-account)
   - [Create User with Password](#create-user-with-password)
   - [Whitelist IP Address](#whitelist-ip-address)
4. [Creating a Collection in Database](#creating-a-collection-in-database)
5. [Create Data Onto Collection](#create-data-onto-collection)
6. [Read All Data from Collection](#read-all-data-from-collection)
7. [Read Specific Data from Collection](#read-specific-data-from-collection)
8. [Update Single Data Inside Collection](#update-single-data-inside-collection)
9. [Delete Single Data Inside Collection](#delete-single-data-inside-collection)

Let's dive into these topics one by one.

---

### 1. Express and CORS <a name="express-and-cors"></a>

**Express**: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

**CORS (Cross-Origin Resource Sharing)**: CORS is a security feature implemented as middleware in Express to allow or restrict cross-origin HTTP requests.

Here's the code snippet that sets up Express and enables CORS:

```javascript
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
```

- `express` and `cors` are required and initialized.
- The Express application is created, and the port is defined.
- CORS middleware is applied to allow cross-origin requests.
- JSON parsing middleware is added to handle JSON request data.

---

### 2. Middlewares <a name="middlewares"></a>

In Express, middleware functions are functions that have access to the request and response objects and can perform actions or modify these objects. They are executed in the order they are defined in the code.

In the previous snippet, `cors` and `express.json` are examples of middleware functions that handle CORS and JSON parsing.

---

### 3. Creating the MongoDB Connection <a name="creating-the-mongodb-connection"></a>

#### a) Create Account <a name="create-account"></a>

**MongoDB Atlas** is a cloud service that provides MongoDB database hosting. To use MongoDB in your application, you need to create an account on MongoDB Atlas. You can do this by following these steps:

- Visit the [MongoDB Atlas website](https://www.mongodb.com/cloud/atlas).

- Click on the "Get started for free" or "Try Free" button to begin the registration process.

- Follow the registration process, providing your email address, creating a password, and filling in the required information.

- You may need to verify your email address and log in to your MongoDB Atlas account.

#### b) Create User with Password <a name="create-user-with-password"></a>

In your MongoDB Atlas project, it's essential to create a user with appropriate permissions for your database. This user will be used by your Node.js application to connect to the database. Here's how you can create a user:

- Log in to your MongoDB Atlas account.

- In the MongoDB Atlas dashboard, select your project and cluster (the database instance you want to connect to).

- On the left panel, click "Database Access."

- Click the "ADD NEW DATABASE USER" button.

- Fill in the username and password for the new user. Make sure to create a strong and secure password.

- Under "Authentication Method," select "Password."

- Under "Database User Privileges," specify the database and the permissions you want to grant to this user. For a basic setup, you can grant read and write permissions.

- Click the "Add User" button to create the user.

#### c) Whitelist IP Address <a name="whitelist-ip-address"></a>

To ensure your Node.js server can access the MongoDB Atlas database, you need to whitelist the server's IP address in MongoDB Atlas. Whitelisting allows only specific IP addresses to connect to the database. Here's how you can whitelist your server's IP address:

- In the MongoDB Atlas dashboard, select your project and cluster.

- On the left panel, click "Network Access."

- Click the "ADD IP ADDRESS" button.

- You can either add the IP address of your server or specify an IP address range. If your server has a static IP, you can add that specific IP address. If your server's IP address is dynamic or you want to allow connections from anywhere, you can specify an IP address range as `0.0.0.0/0` to allow access from any IP.

- Click the "Add IP Address" button to save your changes.

By following these steps, you have created a MongoDB Atlas account, set up a database user, and whitelisted your server's IP address, allowing your Node.js application to securely connect to the MongoDB database.

This setup ensures that your application can communicate with the database and perform CRUD operations, as demonstrated in the previous sections.

---

### 4. Creating a Collection in Database <a name="creating-a-collection-in-database"></a>

In MongoDB, collections are equivalent to tables in relational databases. Here's how you create a collection in the database:

```javascript
const database = client.db("usersDB");
const usersCollection = database.collection("users");
```

- `client.db("usersDB")` creates a reference to the "usersDB" database.
- `database.collection("users")` creates or retrieves the "users" collection within the database.

---

### 5. Create Data Onto Collection <a name="create-data-onto-collection"></a>

To insert data into a MongoDB collection, you can use the `insertOne` method. Here's how to do it:

```javascript
app.post("/users", async (req, res) => {
  const user = req.body;
  console.log("Adding", user, "to database");
  const result = await usersCollection.insertOne(user);
  res.send(result);
});
```

- This code defines an HTTP POST endpoint (`/users`) to create a new user in the collection.
- The `req.body` object contains the user data from the HTTP request body.
- `insertOne` is used to insert the user data into the collection.

---

### 6. Read All Data from Collection <a name="read-all-data-from-collection"></a>

You can retrieve all data from a MongoDB collection using the `find` and `toArray` methods. Here's how to create an endpoint for this:

```javascript
app.get("/users", async (req, res) => {
  const cursor = usersCollection.find();
  const result = await cursor.toArray();
  res.send(result);
});
```

- This code defines an HTTP GET endpoint (`

/users`) to retrieve all users from the collection.

- `usersCollection.find()` returns a cursor for the collection.
- `cursor.toArray()` fetches all documents from the cursor as an array.

---

### 7. Read Specific Data from Collection <a name="read-specific-data-from-collection"></a>

To read a specific document from the collection, you can use `findOne` with a query. Here's how:

```javascript
app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const user = await usersCollection.findOne(query);
  res send(user);
});
```

- This code defines an HTTP GET endpoint (`/users/:id`) to retrieve a user by their ID.
- The `req.params.id` parameter is used to specify the ID to query.
- `new ObjectId(id)` creates a MongoDB ObjectId from the given ID.
- `findOne` is used to retrieve the specific user document based on the query.

---

### 8. Update Single Data Inside Collection <a name="update-single-data-inside-collection"></a>

To update a document in the collection, you can use the `updateOne` method. Here's how to update a user's information:

```javascript
app.put("/users/:id", async (req, res) => {
  const id = req.params.id;
  const updatedInfo = req.body;

  const query = { _id: new ObjectId(id) };
  const option = { upsert: true };
  const updatedUser = {
    $set: {
      name: updatedInfo.name,
      email: updatedInfo.email,
    },
  };

  const result = await usersCollection.updateOne(query, updatedUser, option);
  res.send(result);
});
```

- This code defines an HTTP PUT endpoint (`/users/:id`) to update a user's information.
- `req.params.id` is used to specify the user to update.
- `req.body` contains the updated user information.
- `updateOne` is used to update the document with the provided query and update data.

---

### 9. Delete Single Data Inside Collection <a name="delete-single-data-inside-collection"></a>

To delete a document from the collection, you can use the `deleteOne` method. Here's how to do it:

```javascript
app.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  const query = { __id: new ObjectId(id) };
  const result = await usersCollection.deleteOne(query);
  res.send(result);
});
```

- This code defines an HTTP DELETE endpoint (`/users/:id`) to delete a user by their ID.
- `req.params.id` specifies the user to delete.
- `deleteOne` is used to remove the document that matches the provided query.
