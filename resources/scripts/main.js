// For full API documentation, including code examples, visit https://wix.to/94BuAAs

// Returns a number between 0 and 255
function generateRandomNumber() {
  return Math.floor(Math.random() * 256);
}

// Create your createRandomRGBvalue function below: 
function createRandomColor() {
  let newColor = [];
  while (newColor.length < 3) {
    newColor.push(generateRandomNumber());
  }
  return newColor.join(',');
}

// Selectors for all the Container boxes
const bigBox = document.getElementById('box0');
const firstCircle = document.getElementById('box1');
const secondCircle = document.getElementById('box2');
const thirdCircle = document.getElementById('box3');
const fourthCircle = document.getElementById('box4');
const fifthCircle = document.getElementById('box5');
const allBoxes = [
  bigBox,
  firstCircle,
  secondCircle,
  thirdCircle,
  fourthCircle,
  fifthCircle
];

// Selector for buttons
const changeBoxBtn = document.getElementById('changeBox');
const changeAllBtn = document.getElementById('changeAll');

// Add your code to change box colors below:
const changeBigBox = () => {
  let newRGBvalue1 = createRandomColor();
  let newRGBvalue2 = createRandomColor();
  bigBox.style.backgroundColor = `rgb(${newRGBvalue1})`;
  bigBox.style.borderColor = `rgb(${newRGBvalue2})`;
};

changeBoxBtn.addEventListener('click', changeBigBox);

const changeSmallBoxes = () => {
  allBoxes.forEach(box => {
    let boxRGBvalue1 = createRandomColor();
    let boxRGBvalue2 = createRandomColor();
    box.style.backgroundColor = `rgb(${boxRGBvalue1})`;
    box.style.borderColor = `rgb(${boxRGBvalue2})`;
  })
};

changeAllBtn.addEventListener('click', changeSmallBoxes);