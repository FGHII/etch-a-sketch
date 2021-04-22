const gridContainer = document.querySelector(".grid-container");
let rowCount = 16;
while (rowCount > 0) {
  // create each row
  const row = document.createElement('div');
  row.classList.add('row');
  gridContainer.appendChild(row);
  rowCount--;
  // create grid squares in the row
  let squareCount = 16;
  while (squareCount > 0) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener("mouseover", function(event) {
      square.classList.add("color");
    });
    row.appendChild(square);
    squareCount--;
  }
}
