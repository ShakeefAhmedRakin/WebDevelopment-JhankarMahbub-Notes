// LIKE AN OBJECT WITH KEY AND VALUE.
// EVERYTHING GETS SAVED AS STRINGS.
// CLEARS CURRENT STORAGE
// CHECK THE CONSOLE OF YOUR BROWSER TO SEE LOGS
// YOU CAN CHECK THE LOCAL STORAGE IN YOUR BROWSER BY GOING TO APPLICATION AND LOCAL STORAGE.

localStorage.clear;

// TO GET ITEM KEY FROM LOCAL STORAGE

const gettingItem = localStorage.getItem("key");
console.log(gettingItem);

// EITHER MODIFY EXISTING KEY'S VALUE
// OR CREATE A NEW KEY WITH THIS VALUE
// THE VALUE CAN BE ANYTHING LIKE INT OR BOOL
// BUT IT WILL GET SAVED AS A STRING

localStorage.setItem("color", "red");
// IT ALSO RETURNS A STRING
console.log(localStorage.getItem("color"));

// REMOVES KEY FROM LOCAL STORAGE

localStorage.removeItem("color");

// FOR NON-PRIMITIVES //
// IT WILL GET SAVED AS A STRING
// LIKE '12,14,15,20'
// DON'T DO THIS

localStorage.setItem("arrayOfNumber", [12, 14, 15, 20]);
localStorage.setItem("AnObject", { name: "John", age: 12 });

// INSTEAD DO THIS
const productInfo = { name: "Laptop", id: 1 };
// CONVERT TO STRING WITH JSON.stringify THEN STORE IN LOCAL STORAGE
const stringified = JSON.stringify(productInfo);
console.log(stringified);
console.log(typeof stringified);
localStorage.setItem("productInfo", stringified);

// WHEN YOU 'GET ITEM' FROM LOCAL STORAGE AND USE JSON.parse.
const backToOriginal = JSON.parse(localStorage.getItem("productInfo"));
console.log(backToOriginal);
console.log(typeof backToOriginal);
