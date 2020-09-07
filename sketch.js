var cake, cakeImg;
function preload(){
  cakeImg = loadImage("cake.jpg");
}

function setup() {
  createCanvas(600,600);
 cake =  createSprite(300, 300, 150, 150);
 cake.addImage(cakeImg);
 
}

function draw() {
  background(255,255,255);
  
  
  drawSprites();
}
