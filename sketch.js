var sandy=0;


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(200,176,mouseX); //an RGB color for the canvas' background
  //circle
  strokeWeight(5);
  stroke(400,300,200) // an RGB color for the circle's border
  fill(400,100,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),50,50); // center of canvas, 20px dia
  fill(157,200,92,75,mouseY);
  ellipse(400,sandy,50,50);
textFont("Helvetica");
textSize(100);
text('stanley',175,275);
strokeWeight(0)
ellipse(mouseX,mouseY,100,mouseX)


}

function mousePressed(){
  if(sandy>=255){
    sandy=0;
}else{
  sandy=sandy+5
}

sandy=sandy+5;
}
