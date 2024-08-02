const CONTAINER_WIDTH = 840;

const container = document.querySelector(".container");

container.style.border = "1px solid black";
container.style.width = `${CONTAINER_WIDTH}px`;
container.style.height = `${CONTAINER_WIDTH}px`;

function initializeGrid(squaresPerSide) {
    const squareWidth = Math.floor(CONTAINER_WIDTH / squaresPerSide);
    const leftover = CONTAINER_WIDTH % squaresPerSide;

    const getWidth = function(k) {
        return k < leftover ? squareWidth + 1 : squareWidth;
    }

    const gridDivs = new Array(squaresPerSide);
    for (let i = 0; i < squaresPerSide; i++) {
        gridDivs[i] = new Array(squaresPerSide);
        for (let j = 0; j < squaresPerSide; j++) {
            gridDivs[i][j] = document.createElement("div");
            gridDivs[i][j].setAttribute("class", `grid-div-${i}-${j}`);
            gridDivs[i][j].style.width = `${getWidth(j)}px`;
            gridDivs[i][j].style.height = `${getWidth(i)}px`;
            gridDivs[i][j].style.boxSizing = "border-box";
            gridDivs[i][j].addEventListener("mouseover", () => {
                gridDivs[i][j].style.backgroundColor = "red";
            });
            container.appendChild(gridDivs[i][j]);
        }
    }
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

initializeGrid(16);

const gridSizeButton = document.querySelector(".grid-size-button");
gridSizeButton.addEventListener("click", () => {
    const sizeFromUser = prompt("Enter a grid size (1-100): ");
    const size = parseInt(sizeFromUser);
    if (1 <= size && size <= 100) {
        clearGrid();
        initializeGrid(size);
    }
});
