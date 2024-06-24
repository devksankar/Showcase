let j = 0;
let i = true;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(228, 223, 237);
  fill(212, 175, 55);
  if (i) {
    j = j + 1;
    if (j >= 100) {
      i = false;
    }
  } else {
    j = j - 1;
    if (j <= 0) {
      i = true;
    }
  }

  circle(width/2, height/2, j);
}
