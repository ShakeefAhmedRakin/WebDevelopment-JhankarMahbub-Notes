const testArr = [4, 6, 1, 2, 4, 5];
const testObj = {
  propOne: 1,
  propTwo: 2,
  propThree: 3,
};

// WAYS TO LOOP

// OF FOR ITERABLE VARIABLES
for (const num of testArr) {
  console.log(num);
}


// IN IS FOR OBJECTS
for (const key in testObj) {
  console.log(key, testObj[key]);
}
