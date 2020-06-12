// Select color input
const colorPicker = document.querySelector('colorPicker');
// Select size input
const rowsNumber = document.querySelector('inputHeight');
const cellsNumber = document.querySelector('inputWidth');
const pixelCanvas = document.querySelectorAll('pixelCanvas');
const form = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()

function makeGrid() {
// Your code goes here!
for(let i = 0; i<= rowsNumber.value; i++){
    const row = pixelCanvas.insertRow(0);
    for(let j = 0; j<=cellsNumber.value; j++){
        row.cellsNumber(0);
    }
}
}
