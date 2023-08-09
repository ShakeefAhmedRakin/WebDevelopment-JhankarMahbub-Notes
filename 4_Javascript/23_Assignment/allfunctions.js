function cubeNumber(number) {
  if (typeof number == "number") {
    const result = number * number * number;
    return result;
  } else {
    return "Invalid input. Input must be a number.";
  }
}

function matchFinder(string1, string2) {
  if (typeof string1 != "string" || typeof string2 != "string") {
    return "Both inputs must be a string.";
  } else {
    return string1.includes(string2);
  }
}

function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  }

  if (arr[1] == arr[0]) {
    return "equal";
  } else if (arr[1] > arr[0]) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
  } else {
    return arr;
  }
}

function findAddress(obj) {
  let output = "";
  if (obj.street != undefined) {
    output += obj.street + ",";
  } else {
    output += "__" + ",";
  }

  if (obj.house !== undefined) {
    output += obj.house + ",";
  } else {
    output += "__" + ",";
  }

  if (obj.society != undefined) {
    output += obj.society;
  } else {
    output += "__";
  }

  return output;
}

function canPay(changeArray, totalDue) {
  if (changeArray.length == 0) {
    return "The array must not be empty.";
  }

  let payable = false;

  let sum = 0;

  for (let i = 0; i < changeArray.length; i++) {
    sum += changeArray[i];
  }

  if (sum >= totalDue) {
    payable = true;
  }

  return payable;
}

console.log("#------------------------------#");
console.log(cubeNumber(3));
console.log(cubeNumber(4));
console.log(cubeNumber(2.2));
console.log(cubeNumber("2.2"));
console.log(cubeNumber(false));
console.log("#------------------------------#");
console.log(matchFinder("John Doe", "ohn"));
console.log(matchFinder("JavaScript", "Code"));
console.log(matchFinder("Peter Parker", "Pen"));
console.log(matchFinder("Peter Parker", "pet"));
console.log(matchFinder(1, "pet"));
console.log(matchFinder("pet", 1));
console.log(matchFinder(1, 1));
console.log("#------------------------------#");
console.log(sortMaker([2, 3]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, 4]));
console.log(sortMaker([1, 2]));
console.log(sortMaker([4, -2]));
console.log(sortMaker([0, 1]));
console.log("#------------------------------#");
let testobj1 = { street: 10, house: "15A", society: "Earth Perfect" };
let testobj2 = { street: 10, society: "Earth Perfect" };
let testobj3 = { street: 10 };
console.log(findAddress(testobj1));
console.log(findAddress(testobj2));
console.log(findAddress(testobj3));
console.log("#------------------------------#");
console.log(canPay([], 10));
console.log(canPay([1, 2, 5], 10));
console.log(canPay([1, 5, 5], 10));
console.log(canPay([1, 4, 5], 10));
console.log("#------------------------------#");
