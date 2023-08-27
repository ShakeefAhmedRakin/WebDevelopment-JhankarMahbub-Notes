/*
Javascript Object Notation (JSON)

*/

// JSON.stringify(X) returns a string(JSON Format) representation of the JS object.
const user = { id: 1, name: "John", job: "Actor" };
console.log(JSON.stringify(user));
console.log(typeof JSON.stringify(user));

const shop = {
  owner: "Alia",
  addresses: {
    home: { city: "New York", state: "NY" },
    work: { city: "Chicago", state: "IL" },
  },
  prompts: ["Laptops", "Computers", "Keyboard"],
  isOpen: true,
  isNew: false,
};
console.log(JSON.stringify(shop));
console.log(typeof JSON.stringify(shop));

console.log("----------------------------------------------------------------");
// YOU CAN DO THE OPPOSITE LIKE SO. JSON.parse(X)

const json_format =
  '{"owner":"Alia","addresses":{"home":{"city":"New York","state":"NY"},"work":{"city":"Chicago","state":"IL"}},"prompts":["Laptops","Computers","Keyboard"],"isOpen":true,"isNew":false}';

const originalObject = JSON.parse(json_format);
console.log(originalObject);
console.log(typeof originalObject);

/*
You can go to https://jsonplaceholder.typicode.com/ 
for sample JSON files to fetch and use as dummy data.
*/

console.log("----------------------------------------------------------------");
// FETCH FUNCTION TAKES A URL AND RETURNS SOMETHING ACCORDING TO THE URL TO A VARIABLE CALLED RESPONSE.
fetch("https://jsonplaceholder.typicode.com/todos/1")
  // IF RESPONSE IS RECEIVED, THEN, IT CONVERTS THE DATA TO JSON OBJECT
  //   THIS IS A CONCEPT OF PROMISE WHICH WILL BE COVERED LATER
  .then((response) => response.json())
  .then((json) => console.log(typeof json));
