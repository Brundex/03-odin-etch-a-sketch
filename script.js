// Get all the variables
const DEFAULT_GRID_SIZE = 16;
let gridSize = DEFAULT_GRID_SIZE;

const gridContainer = document.getElementById('container');
const gridSizeSetter = document.getElementById('grid-size-setter');
const clear = document.getElementById('clear');


// Functions & event listeners
clear.addEventListener('click', clearGrid);
function clearGrid() {
    gridContainer.innerHTML= '';
    loadGrid();
  }

gridSizeSetter.addEventListener('click', askGridSize);  
function askGridSize() {
    do {
        gridSize = +prompt('Grid size');
        console.log(typeof(gridSize));
        console.log(gridSize);
      } 
      while (isNaN(gridSize) || !gridSize || gridSize > 100);
      gridContainer.innerHTML= '';
      loadGrid();
  }

function loadGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        createGridSquare();
    }
}

function createGridSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${ (650 / gridSize)}px`;
    square.style.height = `${ (650 / gridSize)}px`;
    square.addEventListener('mouseover', changeColor);
    square.addEventListener('mousedown', changeColor);
    gridContainer.appendChild(square);
}

function changeColor() {
    this.style.backgroundColor = 'black';
}

window.onload = loadGrid;