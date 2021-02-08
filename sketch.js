var fixedRect, movingRect;
var obj1, obj2, obj3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  obj1 = createSprite(300,200,50,50);
  obj1.shapeColor = "cyan";
  obj1.velocityX = 2;
  obj2 = createSprite(500,200,50,50);
  obj2.shapeColor = "cyan";
  obj2.velocityX = -1;
  obj3 = createSprite(700,200,50,50);
  obj3.shapeColor = "cyan";
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,obj1) ) {
   obj1.shapeColor="red"
 }
  
if(isTouching(movingRect,obj3)){
  obj3.shapeColor = "green";
} 
if(isTouching(movingRect,obj2)){
  obj2.shapeColor = "yellow";
} else{
  obj2.shapeColor = "cyan";
}
 BounceOff(obj1,obj2);
  drawSprites();
}

