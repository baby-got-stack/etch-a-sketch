const gridCanvas = document.querySelector('.grid-canvas');
const containerWidth = 640;
//let squaresPerSide = 16;
let squaresPerSide = prompt("Enter the number of squares you would like per side: ");
let loopConditionNumber = (squaresPerSide * squaresPerSide) + 1;
let boxColor = 'white';
let gridBoxes;
let mouseDown = false;

for (let i = 1; i < loopConditionNumber; i++){
    gridBoxes = document.createElement('div');
    gridBoxes.id = `box-${i}`;
    gridBoxes.style.height = containerWidth / squaresPerSide + 'px';
    gridBoxes.style.width = containerWidth / squaresPerSide + 'px';
    gridBoxes.style.backgroundColor = boxColor;

    gridCanvas.appendChild(gridBoxes);
    console.log(`Element ${i} created`)
}

let containerChildren = gridCanvas.children;


// Event listeners to check if mousedown is true
document.addEventListener('mousedown', function() {
    mouseDown = true;
});

document.addEventListener('mouseup', function() {
    mouseDown = false;
});

for (let i = 0; i < containerChildren.length; i++){
    containerChildren[i].addEventListener('mouseenter', function() {
        if(mouseDown === true){
            this.style.backgroundColor = 'green';
            console.log(`${i} was clicked`);
        }
    });
}

for (let i = 0; i < containerChildren.length; i++){
    containerChildren[i].addEventListener('click', function() {
        this.style.backgroundColor = 'green';
        console.log(`${i} was clicked`);
    });
}


