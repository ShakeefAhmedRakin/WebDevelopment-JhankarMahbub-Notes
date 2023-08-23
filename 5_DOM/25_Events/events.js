const affectTitleButton = document.getElementById("affect-title-button");

affectTitleButton.onclick = function affectTitle() {
  const firstTitle = document.getElementById("first-title");
  firstTitle.style.color = "steelblue";
  firstTitle.style.letterSpacing = "5px";
  firstTitle.innerText = "Title Has Been Changed";
};

function affectTitle() {
  const firstTitle = document.getElementById("first-title");
  firstTitle.style.color = "steelblue";
  firstTitle.style.letterSpacing = "5px";
  firstTitle.innerText = "Title Has Been Changed";
}

const secondButton = document.getElementById("sec-button");

secondButton.addEventListener("click", affectSecondTitle);

function affectSecondTitle() {
  const secondTitle = document.getElementById("sec-title");
  secondTitle.style.letterSpacing = "10px";
}

// DIRECT WAY OF DOING THINGS

document
  .getElementById("third-button")
  .addEventListener("click", function affectThirdTitle() {
    document.getElementById("third-title").style.backgroundColor = "red";
  });
