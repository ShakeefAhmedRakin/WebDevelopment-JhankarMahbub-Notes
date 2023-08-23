// DATA ACCESS

const products = {
  count: 5000,
  data: [
    { id: 1, name: "laptop one", price: 56 },
    { id: 2, name: "laptop two", price: 120 },
  ],
};

// CHAINING
console.log(products.data[1].price);

// OPTIONAL CHAINING
// THIS WON'T GIVE ERROR BUT WILL INSTEAD, RETURN undefined
console.log(products.data[3]?.price);
