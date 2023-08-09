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



let testobj1 = { street: 10, house: "15A", society: "Earth Perfect" };
let testobj2 = { street: 10, society: "Earth Perfect" };
let testobj3 = { street: 10 };

console.log(findAddress(testobj1));
console.log(findAddress(testobj2));
console.log(findAddress(testobj3));

