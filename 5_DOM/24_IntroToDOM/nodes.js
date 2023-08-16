const firstSection = document.getElementById("first-section");

console.log(firstSection.childNodes);
console.log("--------------------------");
console.log(firstSection.firstChild);
console.log(firstSection.childNodes[1]);
console.log(firstSection.childNodes[4].nextSibling);
console.log(firstSection.childNodes[4].previousSibling);
console.log(firstSection.lastChild);
console.log("--------PARENT NODE-----------");
console.log(document.querySelector("li").parentNode);
console.log("--------------------------");
const firstSectionList = document.querySelector("#first-section ul");

console.log(firstSectionList.childNodes);

let createdElement = document.createElement("li");

createdElement.innerText = "This item list is added via JS";

firstSectionList.append(createdElement);

createdElement = document.createElement("p");

createdElement.innerText = "This paragraph tag is added via JS";

firstSection.append(createdElement);
