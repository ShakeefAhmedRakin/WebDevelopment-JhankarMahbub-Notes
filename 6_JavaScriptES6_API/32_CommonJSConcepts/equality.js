console.log("2" == 2);
console.log("2" === 2);
console.log(1 == true);
console.log(1 === true);
/*

 == | For checking only values.
 === | For checking both values and type.
    ALWAYS USE '===' unless '==' is needed.
*/

// TYPE COERCION ( JS CONVERTS EVERYTHING TO BASIC TRUE AND FALSE STEP BY STEP)
console.log("0" == false);
/* HERE, false is false. 
1) As for "0", it's a non-empty string. So, it's true.
2) Next, inside the string is 0 which is false.
3) Now, 0 is false. Hence, false == false which is true.
*/

// AS FOR NON-PRIMITIVES
console.log([] == []);
console.log({} == {});
console.log([2, 3, 5] == [2, 3, 5]);
console.log({ name: "bob" } == { name: "bob" });

// THEY MATCH REFERENCES/POINTERS. BOTH == and ===.
// LIKE SO,
const arrayOne = [2, 3, 5];
const arrayTwo = arrayOne;
console.log(arrayOne == arrayTwo);
