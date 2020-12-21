var thief, thiefImage, ground;
var bgImage;

function preload()
{
  thiefImage = loadImage("images/thief.png");
  bgImage = loadImage("images/wallImage.jpg")
}

function setup() 
{
  createCanvas(1200,800);
  //creating ground and assigning velocity
  ground = createSprite(600, 780, 1500, 20);
  ground.velocityX = 5;
  //creating thief
  thief = createSprite(1200, 700, 50, 50);
  thief.addImage(thiefImage);
  thief.scale = 0.2;
}

function draw() 
{
  background(bgImage);  
  //remaking ground 
  if(ground.x > 700)
  {
    ground.x = ground.width/2;
  }
  
  drawSprites();
}