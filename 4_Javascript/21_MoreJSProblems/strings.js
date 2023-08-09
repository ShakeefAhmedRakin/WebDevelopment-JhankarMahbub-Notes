console.log("#-COMPARING STRINGS------------------#");

const userName = "Rakin";
const userInput = "Rakin";

if (userName.toLowerCase() === userInput.toLowerCase()) {
  console.log("Valid User");
} else {
  console.log("Invalid User.");
}

console.log("#-SEARCH IN STRINGS------------------#");

const lyrics =
  "When we was lying down on the floor You said I should smile more I was killing your vibe Pretend I did not hear your voice But, baby, I was taking notes Keep that in mind";

console.log(lyrics.includes("mind"), lyrics.includes("chemical"));
// Ignoring case sensitivity
console.log(lyrics.toLowerCase().includes("WHEN".toLowerCase()));
// Search Index
console.log(lyrics.indexOf("down"));
// Search String
let searchString = "MIND";
if (lyrics.toLowerCase().indexOf(searchString.toLowerCase()) === -1) {
  console.log("String doesn't exist in lyrics");
} else {
  console.log(
    "The starting location of the string is at",
    lyrics.toLowerCase().indexOf(searchString.toLowerCase()),
    "index."
  );
}
// STARTS WITH ENDS WITH

console.log(lyrics.startsWith("When"));
console.log(lyrics.startsWith("when"));
console.log(lyrics.endsWith("mind"));
console.log(lyrics.endsWith("mind."));

console.log("#-SPLITTING------------------#");

const testStringOne = "I am going to split this";
const testStringTwo = "I-am-going-to-split-this";

console.log(testStringOne.split(" "));
console.log(testStringTwo.split("-"));
console.log(testStringOne.split(""));

console.log("#-SLICING------------------#");
// LAST INDEX IS EXCLUDED
console.log(testStringOne.slice(0, 3));

console.log("#-SUBSTRINGS------------------#");

console.log(testStringOne.substring(0, 3));

console.log("#-JOINING------------------#");
const lines = ["one", "two", "three"];

console.log(lines.join(":"));


let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}
console.log(sum);