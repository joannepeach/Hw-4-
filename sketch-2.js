function setup() { 
  createCanvas(400, 400);
   
} 

function draw() { 
  background(0);
 ellipseMode(CENTER); 
  for (var a = 20; a <= 380; a+=25){ 
  for (var b = 20; b <= 380; b+=25){
  ellipse (a, b, 25, 25);
  }
  }
}
