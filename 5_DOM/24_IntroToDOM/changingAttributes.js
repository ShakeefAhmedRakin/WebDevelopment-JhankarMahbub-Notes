const heading = document.getElementById("heading");

console.log(heading);

console.log(heading.style);

heading.style.textAlign = "center";
heading.style.margin = "100px";
heading.style.color = "red";
heading.style.border = "solid 5px brown";

console.log("--------------------");

console.log(heading.classList);
heading.classList.remove("bg-color");
heading.classList.add("addedClassUsingJS", "HelpfulforTailwind");
console.log(heading.classList);

console.log("--------------------");

const sections = document.querySelectorAll("section");

for (let section of sections) {
  section.style.border = "solid 2px steelblue";
  section.style.marginTop = "10px";
  section.style.marginBottom = "10px";
  section.style.borderRadius = "5px";
  section.style.padding = "5px";
  section.style.display = "flex";
  section.style.justifyContent = "center";
}

console.log("--------------------");

const firstSection = document.getElementById("first-section");

firstSection.style.backgroundColor = "teal";

const secondSection = document.getElementById("second-section");

// THIS IS HELPFUL FOR ADDING TAILWIND CSS CLASSES
// THIS HAS LESSER PRIORITY THEN ADDING CSS DIRECTLY LIKE ADDING ".STYLE."
secondSection.classList.add("bg-yellow");
