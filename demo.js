function setup() {
  createCanvas(640, 480);
  background(51);
  textSize(34);
}

function draw() {
 var rndC = parseInt(Math.floor(Math.random()*255));
  if (mouseIsPressed) {
    fill(0);
    text(rndC,10,10);
  } else {
    
   fill(rndC);
  }
  ellipse(mouseX * 1, mouseY * 1, parseInt(Math.random()*100),parseInt(Math.floor(Math.random()*100)));
}
