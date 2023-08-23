const testArray = [4, 5, 1, 2, 4, 3, 6];

const square = (num) => num * num;

// THIS APPLIES THE FUNCTION TO EACH ELEMENT AND REPLACES IT WITH THE RETURN
let result = testArray.map(square);
console.log(result);
// OR SHORTEN IT MORE!
result = testArray.map((num) => num * num);
console.log(result);

console.log("------------------------");

// ForEach Doesn't store it anywhere. I.E Doesn't return anything as a whole.
result = testArray.forEach((num) => num * num);
console.log(result);
testArray.forEach((num) => console.log(num * num));

console.log("------------------------");

// FILTER (GIVES YOU ALL THE THINGS THAT SATISFY THE CONDITION)
const filteredArray = testArray.filter((num) => num >= 4);
console.log(filteredArray);

// FIND (GIVES YOU THE FIRST THING THAT SATISFIES THE CONDITION)
const filteredItem = testArray.find((num) => num >= 4);
console.log(filteredItem);

console.log("------------------------");
// REDUCE
result = testArray.reduce((sum, current) => sum + current,0);
console.log(result);

