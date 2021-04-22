const gridContainer = document.querySelector(".grid-container");
let rowCount = 16;
while (rowCount > 0) {
  const row = document.createElement('div');
  row.classList.add('row');
  gridContainer.appendChild(row);
  rowCount--;
}
const rowContainer = document.querySelectorAll('.row');
rowContainer.forEach(function(row) {
  let squareCount = 16;
  while (squareCount > 0) {
    const square = document.createElement('div');
    square.classList.add('square');
    row.appendChild(square);
    squareCount--;
  }
})
