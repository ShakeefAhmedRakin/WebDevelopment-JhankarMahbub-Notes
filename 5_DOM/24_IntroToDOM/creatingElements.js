const firstSection = document.getElementById("first-section");

// CREATING HEADING
let h2 = document.createElement("h2");
h2.innerText = "Title : Section One";

// CREATING LIST WITH 5 ITEMS
let ul = document.createElement("ul");
for (let i = 1; i < 6; i++) {
  const listitem = document.createElement("li");
  listitem.innerText = "Item" + i.toString();
  ul.appendChild(listitem);
}

firstSection.appendChild(h2);
firstSection.appendChild(ul);

// CREATING A SECOND SECTION USING CODE
let secondSection = document.createElement("section");

// CREATING HEADING
h2 = document.createElement("h2");
h2.innerText = "Title : Section Two";

// CREATING LIST WITH 5 ITEMS
ul = document.createElement("ul");
for (let i = 1; i < 6; i++) {
  const listitem = document.createElement("li");
  listitem.innerText = "Item" + i.toString();
  ul.append(listitem);
}

// CREATING A THIRD SECTION USING DIRECT HTML

const thirdSection = document.createElement("section");
thirdSection.innerHTML = `
<h2>Title: Section Three</h2>
<ul>
    <li>Item-1</li>
    <li>Item-2</li>
    <li>Item-3</li>
    <li>Item-4</li>
    <li>Item-5</li>
</ul>`;

// GETTING BODY

const main = document.querySelector("main");
console.log(main.childNodes);
main.append(secondSection, thirdSection);
