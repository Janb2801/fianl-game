let ground;
let lander;
var lander_img;




function preload()
{
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  wall1=createSprite(width/2,5,width,10)
  wall2=createSprite(width/2,height-5,width,10)
  wall3=createSprite(5,height/2,10,height)
  wall4=createSprite(width-5,height/2,10,height)

 wall16=createSprite(width/2,height-110,width-300,10)
  wall17=createSprite(width/2-100,height-50,width-100,10)
  wall18=createSprite(width/10-105,height-50,width-100,10) 
  wallgroup=new Group();
  for(var i=100;i<width-100;i+=100){
    var wallA=createSprite(i,150,10,height/2)
    wallA.shapeColor="teal"
  wallgroup.add(wallA)
    }
  for(var i=150;i<width-150;i+=100){ 
   var wallB=createSprite(i,height/2,10,height/2)
    wallgroup.add(wallB)
     wallB.shapeColor="teal"
  }
  
player=createSprite(50,height-25,30,30)
player.shapeColor="blue"
player2=createSprite(50,height-25,33,33)
player2.shapeColor="yellow"

}
function draw()  
{
  background(51);
  if(keyDown("a")) {
   player.x-=10 
  }
  if(keyDown("d")) {
    player.x+=10 
   } if(keyDown("w")) {
    player.y-=10 
   }
   if(keyDown("s")) {
     player.y+=10 
    }
  drawSprites();
}


