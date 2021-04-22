function generateGrid(rowCount, squareCount) {
  const gridContainer = document.querySelector(".grid-container");
  while (rowCount > 0) {
    // create each row
    const row = document.createElement('div');
    row.classList.add('row');
    gridContainer.appendChild(row);
    squareBuildCount = squareCount;
    // create grid squares in the row
    while (squareBuildCount > 0) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.addEventListener("mouseover", function(event) {
        square.classList.add("color");
      });
      row.appendChild(square);
      squareBuildCount--;
    }
    rowCount--;
  }
}
//initialize grid up on site load
let rowCount = 16;
let squareCount = 16;
generateGrid(rowCount, squareCount);

//reset button functionality
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function() {
  document.querySelectorAll(".square.color").forEach(function(square) {
    square.classList.remove("color");
  });
  newGridSize = prompt("Enter new grid size:");
  const gridContainer = document.querySelector(".grid-container");
  //remove all child nodes from grid container to erase the grid
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  generateGrid(newGridSize, newGridSize);
})
