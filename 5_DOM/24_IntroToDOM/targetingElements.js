const output = "Adding JS inside the HTML file";

console.log(output);


// TAGNAME
console.log("---------TAG NAME------------");
const licol = document.getElementsByTagName("li");
for (const li of licol) {
  console.log(li);
  console.log(li.innerText);
}

// ID
console.log("----------ID------------");
console.log(document.getElementById("second-title"));

console.log(document.getElementById("second-title").innerText);

// CLASSES
console.log("----------CLASS NAME------------");

const HTMLcolOFList = document.getElementsByClassName("list-item");
console.log(HTMLcolOFList);
for (const item of HTMLcolOFList){
    console.log(item.innerText);
}
console.log("----------------------");
let thirdItemInListItem = HTMLcolOFList[2];

console.log(thirdItemInListItem.innerText);

thirdItemInListItem.style.color = 'red';
thirdItemInListItem.innerText = "I changed the name of this using class name";

console.log(thirdItemInListItem.innerText);

// QUERY SELECTOR

console.log("----------QUERY SELECTOR------------");

const firstOffourthListItems = document.querySelector(".fourth-list-container li");

console.log(firstOffourthListItems);

console.log("----------------------");

const fourthListItems = document.querySelectorAll(".fourth-list-container li");

for (const li of fourthListItems){
    console.log(li)
}