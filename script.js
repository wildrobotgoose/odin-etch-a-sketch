const CONTAINER_WIDTH = 840;

const squares_per_side = 16;
const square_width = Math.floor(CONTAINER_WIDTH / squares_per_side);

const container = document.querySelector(".container");

container.style.border = "1px solid black";
container.style.width = `${CONTAINER_WIDTH}px`;
container.style.height = `${CONTAINER_WIDTH}px`;

const gridDivs = new Array(squares_per_side);
for (let i = 0; i < squares_per_side; i++) {
    gridDivs[i] = new Array(squares_per_side);
    for (let j = 0; j < squares_per_side; j++) {
        gridDivs[i][j] = document.createElement("div");
        gridDivs[i][j].setAttribute("class", `grid-div-${i}-${j}`);
        gridDivs[i][j].style.width = `${square_width}px`;
        gridDivs[i][j].style.height = `${square_width}px`;
        gridDivs[i][j].style.boxSizing = "border-box";
        gridDivs[i][j].style.border = "1px solid red";
        container.appendChild(gridDivs[i][j]);
    }
}
