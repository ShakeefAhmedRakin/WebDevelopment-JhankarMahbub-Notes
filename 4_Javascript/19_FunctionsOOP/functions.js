console.log("-Functions------------------------------");
function myfunction() {
  console.log("Running 'myfunction'");
}
myfunction();
console.log("-Parameters----------------------");
function myfunction(x) {
  console.log("Running 'myfunction' and showing", x);
}
myfunction("testing var");
console.log("-Sample Sum Function--------------------------");
function sum(a, b, c, d) {
  var sum = a + b + c + d;
  console.log(sum);
}
sum(1, 2, 3, 4);
console.log("-Returning-----------------------------");
function myfunction(x) {
  return x;
}
var storeReturn;
storeReturn = myfunction("testing var");
console.log(storeReturn);
console.log("-Experiment-----------------------------");
