const generatePasswordsBtn = document.getElementById("generatePasswords");
const outputLeft = document.getElementById("outputLeft");
const outputRight = document.getElementById("outputRight");

//Copy Buttons
const copyBtnLeft = document.getElementById("copyBtnLeft");
const copyBtnRight = document.getElementById("copyBtnRight");

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
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
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// Random value for characters
function randomValue() {
  const randomNumber = Math.floor(Math.random() * characters.length);
  const randomCharacters = characters[randomNumber];
  return randomCharacters;
}

// Password generator
function passwordOutput() {
  const passwordLength = 10;
  for (let i = 0; i < passwordLength; i++) {
    // Left output password
    outputLeft.textContent += randomValue();
    // Right output password
    outputRight.textContent += randomValue();
  }
}

// Generate button action
generatePasswordsBtn.addEventListener("click", () => {
  outputLeft.textContent = "";
  outputRight.textContent = "";

  copyBtnLeft.textContent = "Copy";
  copyBtnRight.textContent = "Copy";
  passwordOutput();
});

//Copy function
function copyToLeftButton() {
  const leftPassword = outputLeft.textContent;
  navigator.clipboard.writeText(leftPassword);
}

function copyToRightButton() {
  const rightPassword = outputRight.textContent;
  navigator.clipboard.writeText(rightPassword);
}

copyBtnLeft.addEventListener("click", () => {
  copyToLeftButton();
  copyBtnLeft.textContent = "Copied!";
});

copyBtnRight.addEventListener("click", () => {
  copyToRightButton();
  copyBtnRight.textContent = "Copied!";
});

//TO-DO:
// LENGTH RANGE SLIDER
// SPECIAL CHARACTER TOGGLE SWITCH
// NUMBER TOGGLE SWITCH
