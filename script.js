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
        //add 10% darker opacity to square each time you hover over it
        //this decreases opacity of the border too though
        //try pulling background color and splitting text to pull opacity
        if (event.target.getAttribute("style")) {
          let opacity = parseFloat(event.target.style.opacity);
          newOpacity = opacity + 0.1;
          event.target.style.opacity = newOpacity;
        } else {
        square.style.backgroundColor = "rgb(0,0,0)";
        const opacity = 0.1;
        square.style.opacity = opacity;
        };
        //random color functionality
        // const r = randomColor();
        // const g = randomColor();
        // const b = randomColor();
        // square.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

        //white to black color
        // square.classList.add("color");
      });
      row.appendChild(square);
      squareBuildCount--;
    }
    rowCount--;
  }
}
//randomize brush color
function randomColor() {
  const colorValue = Math.floor(Math.random() * 255);
  return colorValue
}
//initialize grid up on site load
let rowCount = 16;
let squareCount = 16;
generateGrid(rowCount, squareCount);

//reset button functionality
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function() {
  document.querySelectorAll(".square[background-color]").forEach(function(square) {
    square.removeAttribute("background-color");
  });
  //set new grid size
  let newGridSize = 0;
  while (newGridSize < 1 || newGridSize > 100) {
  newGridSize = prompt("Enter new grid height/width (1-100):");
  };
  const gridContainer = document.querySelector(".grid-container");
  //remove all child nodes from grid container to erase the grid
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  generateGrid(newGridSize, newGridSize);
})
