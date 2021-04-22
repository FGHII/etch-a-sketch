const gridContainer = document.querySelector(".grid-container");
let rowCount = 50;
let squareCount = 50;
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
    row.appendChild(square);
    squareBuildCount--;
  }
  rowCount--;
}
