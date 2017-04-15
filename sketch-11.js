function setup() {
  createCanvas(710, 400);
  background(0);
  strokeWeight(10);
  frameRate(5);
}

function draw() {
  for (var i = 0; i < width; i++) {
    var r = random(255);
    stroke(r);
    line(r, i, height, i);
  }
}
