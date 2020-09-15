var fixedRect, movingRect;
var gameobject;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
gameobject1 = createSprite(100,100,50,50);
gameobject1.shapeColor = "red";
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

if (isTouching(movingrect,gameobject1)){
  movingrect.shapeColor = "blue";
  fixedrect.shapeColor = "blue";
  
  } else {
   
    movingrect.shapeColor = "red";
  fixedrect.shapeColor = "red";
  
  }


  bounceoff(movingRect,fixedRect);

  drawSprites();
}







