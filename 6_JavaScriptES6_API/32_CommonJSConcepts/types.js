// 8 ways to get Undefined.
console.log("------------------UNDEFINED VARIABLE---------------------");
let first;
console.log(first);
console.log("-----------------FUNCTION HAS NO RETURN----------------------");
const testFunction = (a, b) => {
  const sum = a + b;
};
let result = testFunction(2, 3);
console.log(result);
console.log(
  "----------PARAMETER NOT PASSED WHICH IS LATER RETURNED----------------"
);
const testFunctionTwo = (a, b, c) => {
  console.log(a, b, c);
};
testFunctionTwo(1, 2);
console.log("-----------IF RETURNED BUT WITH NOTHING STATED---------");
const testFunctionThree = (a, b) => {
  return;
};
console.log(testFunctionThree(2, 3));
console.log("------------NON EXISTENT PROPERTY-------------------");
const obj = { id: 2, name: "bob" };
console.log(obj["id"], obj["price"]);
console.log("------------NON EXISTENT INDEX-------------------");
const testArray = [0, 1, 2, 3, 4];
console.log(testArray[5]);
console.log("------------DELETING ITEM IN ARRAY-------------------");
delete testArray[2];
console.log(testArray[2]);
console.log("------------SETTING UNDEFINED AS A VALUE-------------------");
let test = undefined;
console.log(test);
// -----------------------------------------------------------
// USE NULL TO SET VALUES THAT ARE NOT GIVEN. [ DON'T USE UNDEFINED ]