var sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;
var angle=0;
var angleSpeed=0.2;
var sunRadius;

function setup() {
  createCanvas(800,400);
  sun=createSprite(0,0);
  mercury=createSprite(70,50);
  venus=createSprite(210,60);
  earth=createSprite(150,-18);
  mars=createSprite(30,220);
  jupiter=createSprite(-180,210);
  saturn=createSprite(340,-30);
  uranus=createSprite(220,350);
  neptune=createSprite(-340,-320);
}

function draw() {
  background(0); 
  angleMode(DEGREES);
  translate(width/2,height/2);
  rotate(angle);
  if(sun.collide(mercury)){
    mercury.destroy
  }
  angle=angle+angleSpeed;
  if(frameCount%1===0){
    sun.scale=sun.scale+0.01
  }
  drawSprites();
}