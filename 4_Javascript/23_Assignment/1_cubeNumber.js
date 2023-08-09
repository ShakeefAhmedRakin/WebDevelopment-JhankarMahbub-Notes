function cubeNumber(number) {
  if (typeof number == "number") {
    const result = number * number * number;
    return result;
  } else {
    return "Invalid input. Input must be a number.";
  }
}

console.log(cubeNumber(3));
console.log(cubeNumber(4));
console.log(cubeNumber(2.2));
console.log(cubeNumber("2.2"));
console.log(cubeNumber(false));
