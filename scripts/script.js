const container = document.querySelector('.container');
const resetBtn = document.querySelector('#reset');
let squaresPerSide = 16;

let grid;

function createGrid() {
    console.log(squaresPerSide);
    for (let i = 0; i < (squaresPerSide * squaresPerSide); i++) {
        grid = document.createElement('div');

        grid.classList.add('box');
        container.appendChild(grid);

        grid.addEventListener('mouseover', blackHover);
    }
}

resetBtn.addEventListener('click', (e) => {
    deleteBoxes();
    squaresPerSide = popUp();
    createGrid();
});

function blackHover(e) {
    e.target.classList.add('black');
}

function deleteBoxes() {
    let boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        console.log(boxes[i]);
        boxes[i].classList.remove('black');
    }
}

function popUp() {
    let squares = Number(prompt("How many squares per side?"));
    return squares;
}

createGrid();