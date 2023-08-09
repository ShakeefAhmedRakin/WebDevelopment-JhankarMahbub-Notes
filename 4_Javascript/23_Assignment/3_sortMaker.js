function sortMaker(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return "Invalid Input";
    }
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

console.log(sortMaker([2, 3]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, 4]));
console.log(sortMaker([1, 2]));
console.log(sortMaker([4, -2]));
console.log(sortMaker([0, 1]));
