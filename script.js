const btnRandomColor = document.getElementById("btn-random-color");
const btnClear = document.getElementById("btn-clear");
const btnErase = document.getElementById("btn-rbg");
const inputRange = document.getElementById("input-range");
const inputColor = document.getElementById("input-color");
const txtCellValue = document.querySelector(".cell-value");
const gridContainer = document.querySelector(".grid-container");
const cells = document.querySelectorAll(".cell");

function getRangeValue() {
  let value = inputRange.value;
  return value;
}

function giveBoardStyle(col, row) {
  gridContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${row}, 1fr)`;
}

function clearBoard() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function createBoard(col, row) {
  let totalCells = col * row;
  giveBoardStyle(col, row);

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.appendChild(cell);
  }
}

function createCells() {
  let rangeValue = getRangeValue();
  txtCellValue.textContent = rangeValue;
  clearBoard();
  createBoard(rangeValue, rangeValue);
}

document.addEventListener("DOMContentLoaded", () => {
  inputRange.value = 2;
  createCells();
});

btnClear.addEventListener("click", clearBoard);
inputRange.addEventListener("input", createCells);
