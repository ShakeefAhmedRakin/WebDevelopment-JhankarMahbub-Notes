console.log("#-#REMOVE DUPLICATE#-#------------------------#");
let names = ["x", "y", "a", "b", "y", "x"];
function removeDup(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (newArr.includes(item) == false) {
      newArr.push(item);
    }
  }
  return newArr;
}

names = removeDup(names);
console.log(names);
console.log("#-#CHEAPEST OBJECT#-#------------------------#");
const phones = [
  { name: "Samsung A8", price: 45000 },
  { name: "Oppo F7", price: 15000 },
  { name: "Huawei P30", price: 25000 },
  { name: "Apple iPhone 6", price: 55000 },
];

function cheapestPhone(list, budget) {
  let affordList = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].price <= budget) {
      affordList.push(list[i]);
    }
  }

  return affordList;
}

let affordList = cheapestPhone(phones, 25000);

for (i in affordList) {
  console.log(affordList[i]);
}
console.log("#-#TOTAL PRICE OF CART#-#------------------------#");
itemList = [
  { name: "Shirt", price: 15 },
  { name: "Pant", price: 20 },
  { name: "Apples", price: 5 },
  { name: "Banana", price: 35 },
  { name: "Belt", price: 25 },
  { name: "Shoes", price: 45 },
];

function cartSum(cart) {
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price;
    console.log("Item", i + 1, cart[i].name, "-", cart[i].price);
  }
  console.log("--------------------");
  console.log("Total Price:", totalPrice);
}

cartSum(itemList);
