document.addEventListener("DOMContentLoaded", function () {
  initialize_colors();
});

function initialize_colors() {
  let btn = document.getElementById("change-color-btn");

  let box = document.getElementById("color-box");
  box.style.backgroundColor = getRandomColor();
  btn.addEventListener("click", function () {
    box.style.backgroundColor = getRandomColor();
  });
}
function getRandomColor() {
  const arrayOfColorFunctions = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  let randomColorString = "#";

  for (let x = 0; x < 6; x++) {
    let index = Math.floor(Math.random() * 16);
    let value = arrayOfColorFunctions[index];

    randomColorString += value;
  }

  return randomColorString.toUpperCase();
}
