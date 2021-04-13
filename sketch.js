/* eslint-disable no-undef, no-unused-vars */

let nCols = 10;
let nRows = 10;

let colorA;
let colorB;

function setup() {
  createCanvas(600, 600);

  colorA = color(200, 15, 130);
  colorB = color(35, 28, 170);
}

function draw() {
  background(200);

  let wCell = width / nCols;
  let hCell = height / nRows;

  // Dibujar cada renglon
  for (let j = 0; j < nRows; j++) {
    // Dibujando un solo renglon
    for (let i = 0; i < nCols; i++) {
      let x = i * wCell;
      let y = j * hCell;

      let d = dist(x + wCell / 2, y + hCell / 2, mouseX, mouseY);
      let amt = map(d, 0, 800, 1, 0);
      let fillColor = lerpColor(colorA, colorB, amt);

      fill(fillColor);
      noStroke();
      rect(x, y, wCell, hCell);

      fill(255);
    }
  }
}
