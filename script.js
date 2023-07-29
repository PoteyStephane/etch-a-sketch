const gridContainer = document.querySelector(".grid-container");
const btnClear = document.getElementById("btn-clear");
const btnRandomColor = document.getElementById("btn-random-color");
const inputRange = document.getElementById("input-slider");
const inputColor = document.getElementById("input-color");
const txtGridNumber = document.getElementById("number-grid");

let currentColor = inputColor.value;
let useRandomColor = false;

function getRangeValue() {
  let rangeValue = inputRange.value;
  return rangeValue;
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  let color = `rgb(${r}, ${g}, ${b})`;

  return color;
}

function setGridStyle(col, row) {
  gridContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${row}, 1fr)`;
}

inputColor.addEventListener("input", () => {
  currentColor = inputColor.value;
  useRandomColor = false;
});

btnRandomColor.addEventListener("click", () => {
  useRandomColor = true;
});

function clearGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function createBoard(col, row) {
  let cellAmount = col * row;
  setGridStyle(col, row);

  for (let i = 0; i < cellAmount; i++) {
    createCell(gridContainer);
  }
}

function createCell(container) {
  let div = document.createElement("div");
  div.addEventListener("mouseover", () => {
    if (useRandomColor) {
      div.style.background = getRandomColor();
    } else {
      div.style.background = currentColor;
    }
  });
  div.classList.add("cell");
  container.appendChild(div);
}

function createNewCell() {
  let value = getRangeValue();
  txtGridNumber.textContent = value;
  clearGrid();
  createBoard(value, value);
}

createNewCell();

btnClear.addEventListener("click", () => {
  clearGrid();
  createNewCell();
});
inputRange.addEventListener("input", createNewCell);
