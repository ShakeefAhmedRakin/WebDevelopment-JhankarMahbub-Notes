var shoppingCart = {
  books: 3,
  glasses: 4,
  mouse: 1,
  pen: 13,
  shoes: 2,
  board: 1,
};

const keys = Object.keys(shoppingCart);
const values = Object.keys(shoppingCart);

for (var i = 0; i < keys.length; i++) {
  var propName = keys[i];
  var propValue = shoppingCart[propName];
  console.log(propName, propValue);
}

console.log("-------------------");

for (var propName in shoppingCart) {
  const val = shoppingCart[propName];
  console.log(propName, val);
}

console.log("-------------------");
