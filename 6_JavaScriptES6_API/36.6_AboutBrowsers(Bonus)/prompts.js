const ready = () => {
  const value = confirm("Are you ready?");

  if (value) {
    alert("Okay, Let's go then");
  } else {
    alert("Get ready first!");
  }
};

const alertUser = () => {
  alert("Alert!! via function");
};

const getName = () => {
  const name = prompt("What is your name");

  alert(`Oh, your name is ${name}. Nice!`);
};
