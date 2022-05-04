var boy,path,leftBoundary,rightBoundary
var boyImg,pathImg

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathImg);
 
  path.scale = 1.2;
  

  boy = createSprite(100,340,30,60);
  boy.addAnimation("jakeRunning",boyImg);
  boy.scale = 0.05;

  leftBoundary = createSprite(0,0,100,800);
  leftBoundary.visible = false;


 rightBoundary = createSprite(410,0,100,800);

rightBoundary.visible = false;
}


function draw() {
  background(0);
  path.velocityY = 4;
  path.lifetime = 200;
 

  boy.x = World.mouseX;

  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);



  if(path.y > 400){
    path.y = height/2;
  }
 
  drawSprites();
}


  
  






