function setup() { 
  createCanvas(600, 600);
   
} 

function draw() { 
  background(255);	
	colorMode(HSB);
	noStroke();	
	ellipseMode(CENTER); 

  for (var a = 20; a <= 600; a+=25){ 
  for (var b = 20; b <= 600; b+=25){
	fill(random(360),120,120);
  ellipse (a, b, 24, 24);

  }
  }
}
