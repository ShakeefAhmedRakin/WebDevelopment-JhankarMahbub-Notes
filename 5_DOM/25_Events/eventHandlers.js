//  EVENT HANDLERS
function handleOnClick() {
  const sampleText = document.getElementById("first-paragraph-sample");

  sampleText.innerText = "Text Has Been Changed Because You Pressed The Button";
}

// EVENT LISTENERS

document.getElementById("second-button").addEventListener("click", function () {
  document.getElementById("sec-paragraph-sample").innerText =
    "Text Has Been Changed Because You Pressed The Button";
});

// Using Event Listener: Example Two

document.getElementById("btn-update").addEventListener("click", function () {
  document.getElementById("changable-title").innerText =
    document.getElementById("input-field").value;
  document.getElementById("input-field").value = "";
});
