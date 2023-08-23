// OBJECT DESTRUCTURING
const actor = {
  name: "Rakin",
  age: 24,
  phone: "012245",
  status: "busy",
};

const {
  name: nameOfPerson,
  age: ageOfPerson,
  phone: contactNumber,
  status: currentStatus,
} = actor;
console.log(nameOfPerson, ageOfPerson, contactNumber, currentStatus);
console.log("---------------------------");
// ARRAY DESTRUCTURING
const numbers = [1, 2, 3, 4, 5];

const [indexOne, ...theRest] = numbers;

console.log(indexOne, theRest);
console.log("---------------------------");
// OBJECT OPERATIONS
const glass = {
  brand: "IKEA",
  color: "cobalt",
  price: 45,
  isClean: true,
};

console.log(Object.keys(glass), Object.values(glass));
// GIVES A 2D array.
console.log(Object.entries(glass));

// SHORT WAY TO DELETE PROPERTY (ALTERS THE EXISTING OBJECT)
delete glass.isClean;
console.log(Object.keys(glass), Object.values(glass));

// LONG WAY TO DELETE PROPERTY (CREATES NEW OBJECT WITHOUT THAT PROPERTY)
const { isClean, ...newGlass } = glass;
console.log(newGlass);

// FREEZING OBJECTS
Object.freeze(glass);
// TRYING TO ADD NEW PROPERTY (WON'T WORK)
glass.source = "Bangladesh";
// TRYING TO CHANGE VALUE (WON'T WORK)
glass.price = 21;
console.log(Object.keys(glass), Object.values(glass));

// SEALING OBJECTS

Object.seal(newGlass);
// TRYING TO ADD NEW PROPERTY (WON'T WORK)
newGlass.source = "Bangladesh";
// TRYING TO CHANGE VALUE (WILL WORK)
newGlass.price = 21;
console.log(Object.keys(newGlass), Object.values(newGlass));
