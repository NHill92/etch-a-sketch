const container = document.querySelector('.container');
const resetBtn = document.querySelector('#reset');

let grid;

function createGrid() {
    for (let i = 0; i < (16 ** 2); i++) {
        grid = document.createElement('div');

        grid.classList.add('box');
        container.appendChild(grid);

        grid.addEventListener('mouseover', blackHover);
    }
}

resetBtn.addEventListener('click', (e) => {
    deleteBoxes();
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

createGrid();