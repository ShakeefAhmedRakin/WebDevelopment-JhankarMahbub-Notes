const add = (a, b) => {
  const total = a + b;
  if (b > 5) {
    const sum = 25 + a + b;
    var current = sum;
  }
  console.log(current);
};

add(2, 7);

// CONST AND LET ARE SCOPE LOCKED
// VAR GETS HOISTED TO IT'S PARENT FUNCTION WHICH COULD BE THE MAIN BODY. LIKE SO,
for (var i = 0; i < 5; i++) {}
console.log(i);

// THIS HOISTING ABILITY OF VAR IS SIMILAR TO FUNCTIONS. THIS ALLOWS FUNCTIONS TO BE USED ANYWHERE TO BE CALLED (IF DEFINED NORMAL WAY). IF IT"S DEFINED USING CONST/LET, THEN IT'S NOT HOISTED.
hoistedFunction();
function hoistedFunction() {
  console.log("I am called before the function is even defined");
}

// GIVES ERROR
// hoistedFunctionButNoBody();
var hoistedFunctionButNoBody = function () {
  console.log("I am called before the function is even defined");
};

// THIS WILL GIVE ERROR.
// unhoistedFunction();
const unhoistedFunction = () => {
  console.log("I am called before the function is even defined");
};