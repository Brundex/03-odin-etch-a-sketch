const gridContainer = document.querySelector('#container');
console.log(gridContainer)
const square = document.createElement('div');
console.log(square)
square.classList.add('square');
console.log(gridContainer);
// Grid will be gridSize x gridSize
let gridSize = 0;
do {
    gridSize = prompt('Grid size');
    console.log(gridSize);
  } 
  while (typeof(gridSize) === 'number');


for (let i = 0; i < gridSize; i++) {
    for(let j = 0; j < gridSize; j++) {
        gridContainer.append(square.cloneNode());
        square.style.width = `${ (650 / gridSize) - 2}px`;
        square.style.height = `${ (650 / gridSize) - 2}px`;
    }
}