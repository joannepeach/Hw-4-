function setup() { 
  createCanvas(400, 400); 
	
	colorMode(HSB); 

var h = 0; 
	noStroke();
  fill(255);
	background(255);
	
	for (var y = 20; y <= 380; y = y + 20) {
   for (var x = 20; x <= 380; x = x + 20) { 
	fill (h, 100, 100);
  ellipse (x, y, 19, 19);
  h = h + 0.6;
   }	
	}
}
