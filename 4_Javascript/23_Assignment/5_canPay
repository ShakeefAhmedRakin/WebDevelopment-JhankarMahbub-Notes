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

console.log(canPay([], 10));
console.log(canPay([1, 2, 5], 10));
console.log(canPay([1, 5, 5], 10));
console.log(canPay([1, 4, 5], 10));
