const CONTAINER_WIDTH = 840;

const container = document.querySelector(".container");

container.style.border = "1px solid black";
container.style.width = `${CONTAINER_WIDTH}px`;
container.style.height = `${CONTAINER_WIDTH}px`;

function initializeGrid(squaresPerSide) {
    const squareWidth = Math.floor(CONTAINER_WIDTH / squaresPerSide);

    const gridDivs = new Array(squaresPerSide);
    for (let i = 0; i < squaresPerSide; i++) {
        gridDivs[i] = new Array(squaresPerSide);
        for (let j = 0; j < squaresPerSide; j++) {
            gridDivs[i][j] = document.createElement("div");
            gridDivs[i][j].setAttribute("class", `grid-div-${i}-${j}`);
            gridDivs[i][j].style.width = `${squareWidth}px`;
            gridDivs[i][j].style.height = `${squareWidth}px`;
            gridDivs[i][j].style.boxSizing = "border-box";
            gridDivs[i][j].style.border = "1px solid red";
            gridDivs[i][j].addEventListener("mouseover", () => {
                gridDivs[i][j].style.backgroundColor = "red";
            });
            container.appendChild(gridDivs[i][j]);
        }
    }
}

initializeGrid(16);
