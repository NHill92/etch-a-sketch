const container = document.querySelector('.container');
const resetBtn = document.querySelector('#reset');
const randomBtn = document.querySelector('#random-color');
let isRandColor = false;
let squaresPerSide = 16;

let grid;
function createGrid() {
    console.log(squaresPerSide);
    console.log(isRandColor);
    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
    for (let i = 0; i < (squaresPerSide * squaresPerSide); i++) {
        grid = document.createElement('div');

        grid.classList.add('box');
        container.appendChild(grid);
    }
    colorSquares();
}

resetBtn.addEventListener('click', (e) => {
    isRandColor = false;
    deleteBoxes();
    squaresPerSide = popUp();
    createGrid();
});

randomBtn.addEventListener('click', (e) => {
    isRandColor = true;
    deleteBoxes();
    squaresPerSide = popUp();
    createGrid();
});

function deleteBoxes() {
    let boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        console.log(boxes[i]);
        boxes[i].style.backgroundColor = 'white';
    }
}

function popUp() {
    let squares = Number(prompt("How many squares per side?"));
    return squares;
}

function getRandomColor() {
    let symbols = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    return color;
}

function colorSquares() {
    let square = document.querySelectorAll(".box");
    let touchSquare = function(e) {
        if (isRandColor) {
            e.target.style.backgroundColor = getRandomColor();
        } else {
            e.target.style.backgroundColor = "black";
        }
    };
    square.forEach(square => {
        square.addEventListener('mouseover', touchSquare);
    });
}

createGrid();