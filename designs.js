// Select color input
const colorPicker = document.getElementById('colorPicker');
// Select size input
const rowsNumber = document.getElementById('inputHeight');
const cellsNumber = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
// To add an interaction between the user and the website  
form.addEventListener('submit', function(evt){
    pixelCanvas.innerHTML= '';
    evt.preventDefault();
    makeGrid();
});
// To add color to the pixelCanvas
pixelCanvas.addEventListener('click', function(evt){
    if (evt.target.nodeName === 'TD'){
        evt.target.style.backgroundColor = colorPicker.value;
    }
})

// Based on the height and width that the user entered its add rows and cells
function makeGrid() {
// Your code goes here!
for(let i = 0; i< rowsNumber.value; i++){
    const row = pixelCanvas.insertRow(0);
    for(let j = 0; j< cellsNumber.value; j++){
        row.insertCell(0);
    }
}
}

makeGrid();