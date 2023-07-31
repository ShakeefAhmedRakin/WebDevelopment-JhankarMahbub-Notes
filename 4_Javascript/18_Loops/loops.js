// WHILE LOOPS

console.log("-------WHILE LOOP-");
var number = 0;
while (number < 10) {
  console.log(number);
  number++;
}
console.log("-------PRINT EVEN NUMBERS-");
var number = 0;

while (number < 10) {
  if (number % 2 == 0) {
    console.log(number);
  }
  number++;
}
console.log("-------FOR LOOPS-");
// THE FOR LOOPS NEEDS ALL THREE PARAMETERS
for (var number = 0; number < 10; number++) {
  console.log(number);
}
console.log("-------ITERATING ARRAY-");
var array = ["Item1", "Item2", "Item3"];
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log("-------BREAK/CONTINUE-");
var array = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"];
for (var i = 0; i < array.length; i++) {
  if (array[i] == "Item3") {
    continue;
  } else if (array[i] == "Item5") {
    break;
  } else {
    console.log(array[i]);
  }
}
console.log("-------REVERSE INDEXING-");
var array = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"];

for (var i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}
console.log("-------FINDING ITEM AND REPLACING ARRAY ITEM-");
var array = ["Item1", "Item2", "itemToBeReplaced", "Item4", "Item5", "Item6"];
for (var i = 0; i < array.length; i++) {
  if (array[i] == "itemToBeReplaced") {
    array[i] = "newItem";
  }
}
console.log(array);
