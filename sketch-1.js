function setup() { 
  createCanvas(600, 600);
  background(0);
} 

function draw() { 
 ellipseMode(CENTER); 
  
  for(var a = 20; a<=600; a+=15){
      ellipse(a, a, 20, 20);
}
}
