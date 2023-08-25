// a,b,c are parameters
function sum(a, b, c) {
  console.log(arguments);
  const result = a + b + c;
  return result;
}

function sum() {
  let result = 0;
  args = [...arguments];
  args.forEach((num) => {
    result += num;
  });
  return result;
}

//  1,2,3 are arguments
const total = sum(1, 2, 3, 4, 5, 6);
console.log(total);

console.log("--------------------------------");
let studentOne = { name: "Student One", id: "20301046" };

let studentTwo = { name: "Student Two", id: "20301047" };

function showStudentInfo(studentOne, studentTwo) {
  studentOne.name = "Student Changed?";
  studentTwo.id = "Id Changed?";
}

console.log(studentOne);
console.log(studentTwo);
showStudentInfo(studentOne, studentTwo);
console.log(studentOne);
console.log(studentTwo);

/*
FOR PRIMITIVE DATA TYPES PASSED AS ARGUMENTS, 
IF THEY'RE CHANGED IN THE FUNCTION, IT WON'T AFFECT OUTER SCOPE.
THIS HAPPENS BECAUSE PRIMITIVE DATA TYPES ARE PASSED AS VALUES.

FOR NON-PRIMITIVE DATA TYPES PASSED AS ARGUMENTS,
IF THEY'RE CHANGED IN THE FUNCTION, IT WILL AFFECT OUTER SCOPE.  
THIS HAPPENS BECAUSE NON-PRIMITIVE DATA TYPES ARE PASSED BY REFERENCE.
*/
