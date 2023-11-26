const gridCanvas = document.querySelector('.grid-canvas');
let slider = document.querySelector('#slider');
let colorPicker = document.querySelector('#color-picker');
let resetBtn = document.querySelector('#reset-btn');
let eraseBtn = document.querySelector('#erase-btn');
let colorBtn = document.querySelector('#color-btn');
let randomColorBtn = document.querySelector('#random-color-btn');
let sliderValue = document.querySelector('#slider-value');
let allButtons = document.querySelectorAll('.button-style');
const containerWidth = 640;
// Corresponds to default slider value
let squaresPerSide = 8;
let loopConditionNumber = (squaresPerSide * squaresPerSide) + 1;
let initialBoxColor = 'white';
let changedBoxColor = '#555555';
let gridBoxes;
let mouseDown = false;
let selectedColorSaved = '#555555';
let boxRandomColor;

sliderValue.textContent = `Grid size: ${squaresPerSide} x ${squaresPerSide}`;

// Event listeners to check if mousedown is true
document.addEventListener('mousedown', function() {
    mouseDown = true;
});

document.addEventListener('mouseup', function() {
    mouseDown = false;
});

for (let i = 1; i < loopConditionNumber; i++){
    gridBoxes = document.createElement('div');
    gridBoxes.id = `box-${i}`;
    gridBoxes.classList.add('div-grid-boxes');
    gridBoxes.style.height = containerWidth / squaresPerSide + 'px';
    gridBoxes.style.width = containerWidth / squaresPerSide + 'px';
    gridBoxes.style.backgroundColor = initialBoxColor;

    gridCanvas.appendChild(gridBoxes);
    console.log(`Element ${i} created`)
}

let containerChildren = gridCanvas.children;

for (let i = 0; i < containerChildren.length; i++){
    containerChildren[i].addEventListener('mouseenter', function() {
        if(mouseDown === true){
            this.style.backgroundColor = changedBoxColor;
            console.log(`${i} was clicked`);
        }
    });
}

for (let i = 0; i < containerChildren.length; i++){
    containerChildren[i].addEventListener('mousedown', function() {
        this.style.backgroundColor = changedBoxColor;
        console.log(`${i} was clicked`);
    });
}

colorPicker.addEventListener('input', function() {
    console.log(this.value);
    changedBoxColor = this.value;

    selectedColorSaved = changedBoxColor;
  });

slider.oninput = function() {
    squaresPerSide = this.value;
    loopConditionNumber = (squaresPerSide * squaresPerSide) + 1;

    sliderValue.textContent = `Grid size: ${squaresPerSide} x ${squaresPerSide}`;

    while (gridCanvas.firstChild){
        gridCanvas.removeChild(gridCanvas.firstChild);
    }

    for (let i = 1; i < loopConditionNumber; i++){
        gridBoxes = document.createElement('div');
        gridBoxes.id = `box-${i}`;
        gridBoxes.classList.add('div-grid-boxes');
        gridBoxes.style.height = containerWidth / squaresPerSide + 'px';
        gridBoxes.style.width = containerWidth / squaresPerSide + 'px';
        gridBoxes.style.backgroundColor = initialBoxColor;
    
        gridCanvas.appendChild(gridBoxes);
        console.log(`Element ${i} created`)
    }

    for (let i = 0; i < containerChildren.length; i++){
        containerChildren[i].addEventListener('mouseenter', function() {
            if(mouseDown === true){
                this.style.backgroundColor = changedBoxColor;
                console.log(`${i} was clicked`);
            }
        });
    }
    
    for (let i = 0; i < containerChildren.length; i++){
        containerChildren[i].addEventListener('mousedown', function() {
            this.style.backgroundColor = changedBoxColor;
            console.log(`${i} was clicked`);
        });
    }
    
}

resetBtn.addEventListener('click', () => {
    resetGrid();
});

eraseBtn.addEventListener('click', () => {
eraseGrid();
    for (let i = 0; i < containerChildren.length; i++){
        containerChildren[i].addEventListener('mouseenter', function() {
            if(mouseDown === true){
                this.style.backgroundColor = eraseGrid();
                console.log(`${i} was clicked`);
            }
        });
    }
    
    for (let i = 0; i < containerChildren.length; i++){
        containerChildren[i].addEventListener('mousedown', function() {
            this.style.backgroundColor = eraseGrid();
            console.log(`${i} was clicked`);
        });
    }

});

colorBtn.addEventListener('click', () => {

    for (let i = 0; i < containerChildren.length; i++){
        containerChildren[i].addEventListener('mouseenter', function() {
            if(mouseDown === true){
                this.style.backgroundColor = toggleBackToColor();
                console.log(`${i} was clicked`);
            }
        });
    }
    
    for (let i = 0; i < containerChildren.length; i++){
        containerChildren[i].addEventListener('mousedown', function() {
            this.style.backgroundColor = toggleBackToColor();
            console.log(`${i} was clicked`);
        });
    }
});

randomColorBtn.addEventListener('click', () => {

    for (let i = 0; i < containerChildren.length; i++){
        containerChildren[i].addEventListener('mouseenter', function() {
            if(mouseDown === true){
                this.style.backgroundColor = generateRandomColor();
                console.log(`${i} was clicked`);
            }
        });
    }
    
    for (let i = 0; i < containerChildren.length; i++){
        containerChildren[i].addEventListener('mousedown', function() {
            this.style.backgroundColor = generateRandomColor();
            console.log(`${i} was clicked`);
        });
    }
});

function resetGrid(){
    for (let i = 0; i < containerChildren.length; i++){
        containerChildren[i].style.backgroundColor = '#ffffff';
    }
    console.log('reset!');
}

function eraseGrid(){
    changedBoxColor = initialBoxColor;
    console.log('erasing...');
}

function toggleBackToColor(){
    changedBoxColor = selectedColorSaved;
    console.log('changing back to selected color');
}

function generateRandomColor(){
    boxRandomColor = Math.floor(Math.random() * 16777215).toString(16);
    boxRandomColor = '#' + boxRandomColor;
    changedBoxColor = boxRandomColor;
    console.log('generating rainbow color...');

}

allButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        allButtons.forEach((button) => {
            button.classList.remove('button-selected');
        });

        event.currentTarget.classList.add('button-selected');
    });
});
