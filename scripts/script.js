const container = document.querySelector(".container");
const boxes = document.querySelectorAll(".box");

let grid;

function createGrid() {
    for (let i = 0; i < (16 ** 2); i++) {
        grid = document.createElement("div");

        grid.classList.add('box');
        container.appendChild(grid);

        grid.addEventListener('mouseover', blackHover);

        function blackHover(e) {
            e.target.style.backgroundColor = 'black';
        }
    }
}

createGrid();