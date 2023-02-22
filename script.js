const generatePasswordsBtn = document.getElementById("generatePasswords");
const outputLeft = document.getElementById("outputLeft");
const outputRight = document.getElementById("outputRight");

//Copy Buttons
const copyBtnLeft = document.getElementById("copyBtnLeft");
const copyBtnRight = document.getElementById("copyBtnRight");

//Special characters
let removeSpecialCheckBox = document.getElementById("removeSpecialChar");
removeSpecialCheckBox.checked === false;
let removeNumberCheckBox = document.getElementById("removeNumberChar");
removeNumberCheckBox === false;

//Password length
const passwordLengthRange = document.getElementById("passwordLengthRange");
const passwordLengthDisplay = document.getElementById("passwordLengthDisplay");

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

//Array with NO Special Characters
const specialCharacter = characters.slice(62, 91);
const noSpecialCharacter = characters.filter(
  (item) => !specialCharacter.includes(item)
);

//Array with NO Special Characters LENGTH
const noSpecialLength = noSpecialCharacter.length;

//Array with NO Numbers
const numberCharacter = characters.slice(52, 62);
const noNumberCharacter = characters.filter(
  (item) => !numberCharacter.includes(item)
);

//Array with NO Numbers LENGTH
const noNumberLength = noNumberCharacter.length;

//Array with NO Special Characters or Numbers
const noSpecialNumberCharacter = characters.slice(0, 51);

//Array with NO Special Characters or Numbers LENGTH
const noSpecialNumberLength = noSpecialNumberCharacter.length;

// Random value for characters
function randomValue() {
  let arrayLength;
  if (
    removeSpecialCheckBox.checked === true &&
    removeNumberCheckBox.checked === true
  ) {
    arrayLength = noSpecialNumberLength;
  } else if (removeSpecialCheckBox.checked === true) {
    arrayLength = noSpecialLength;
  } else if (removeNumberCheckBox.checked === true) {
    arrayLength = noNumberLength;
  } else if (
    removeSpecialCheckBox.checked === false &&
    removeNumberCheckBox.checked === false
  ) {
    arrayLength = characters.length;
  }

  //Random number depending on Array.length chosen
  const randomNumber = Math.floor(Math.random() * arrayLength);

  if (removeSpecialCheckBox.checked === true) {
    randomCharacters = noSpecialCharacter[randomNumber];
  } else if (removeNumberCheckBox.checked === true) {
    randomCharacters = noNumberCharacter[randomNumber];
  } else if (
    removeSpecialCheckBox.checked === true &&
    removeNumberCheckBox.checked === true
  ) {
    randomCharacters = noSpecialNumberCharacter[randomNumber];
  } else {
    randomCharacters = characters[randomNumber];
  }

  return randomCharacters;
}

//Password length display
passwordLengthRange.addEventListener("input", () => {
  passwordLengthDisplay.textContent = passwordLengthRange.value;
});

// Password generator
function passwordOutput() {
  const passworldLengthValue = passwordLengthRange.value;
  const passwordLength = passworldLengthValue;

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
