const container = document.querySelector(".container");
let grid;

function createGrid() {
    for (let i = 0; i < (256); i++) {
        grid = document.createElement("div");

        grid.classList.add('box');
        container.appendChild(grid);
    }
}

createGrid();