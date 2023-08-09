productList = [
  { id: 1, name: "OPPO F7 Phone" },
  { id: 2, name: "Brown Belt" },
  { id: 3, name: "Huawei Phone" },
  { id: 4, name: "Holstered Shirt" },
  { id: 5, name: "Used iPhone 4s" },
  { id: 6, name: "Black Belt" },
  { id: 7, name: "How To Make Your Own Belt - Book" },
  { id: 8, name: "Fruit Basket" },
];

function findProduct(searchContent, productList) {
  searchResult = [];
  searchContent = searchContent.toLowerCase();

  for (let item of productList) {
    item.name = item.name.toLowerCase();
    if (item.name.includes(searchContent)) {
      searchResult.push(item);
    }
  }
  return searchResult;
}

let test = findProduct("PHONE", productList);

for (let item of test) {
  console.log(item);
}


for(let i=5 ; i<=100; i++){
    console.log(i);
}

