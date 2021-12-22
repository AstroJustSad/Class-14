var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstacle;
var cloud, cloudsGroup, cloudImage;



var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  obs1 = loadImage("obstacle1.png");
  obs2 = loadImage("obstacle2.png");
  obs3 = loadImage("obstacle3.png");
  obs4 = loadImage("obstacle4.png");
  obs5 = loadImage("obstacle5.png");
  obs6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;

  // Obstacle
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 161) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  
  // Spawning Obstacles
  spawnObstacle();

  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 == 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    //assigning lifetime to the variable
    cloud.lifetime = 200
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawnObstacle(){
  if (frameCount % 60 == 0) {
    // Creating an Obstacle
    obstacle = createSprite(600,160, 20, 20);
    obstacle.velocityX = -3;

    // Setting a random value
    rand = Math.round(random(1,6))

    // Making cactus smaller scale
    obstacle.scale = 0.55;

    // Switch Statemnent
    switch(rand){
      case 1:
        obstacle.addImage("Obstacle 1", obs1);
        break;
      case 2:
        obstacle.addImage("Obstacle 2", obs2);
        break;
      case 3:
        obstacle.addImage("Obstacle 3", obs3);
        break;
      case 4:
        obstacle.addImage("Obstacle 4", obs4);
        break;
      case 5:
        obstacle.addImage("Obstacle 5", obs5);
        break;
      case 6:
        obstacle.addImage("Obstacle 6", obs6);
        break;
      default:
        break;  
    }

    // Setting a lifetime to the obstacle
    obstacle.lifetime = 200;
  }
}

// abcdefghijklmnopqrstuvwxyz 
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// 123456789
// AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz