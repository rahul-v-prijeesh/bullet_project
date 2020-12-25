var bullet,wall,thickness;
var speed,weight;

function setup() {
 createCanvas(1600,400)
 thickness=random(22,83);
 bullet=createSprite(50, 200, 50, 50);
 wall=createSprite(1200, 200, thickness,height/2 );
 bullet.shapeColor="white";
 speed=random(223,321);
 weight=random(30,52);
 console.log("thickness="+thickness);
 console.log("speed="+speed);
 console.log("weight="+weight);
}

function draw() {
  background("black");  
  //car.x=mouseX; 
  bullet.velocityX=speed;
  
  
 
 if(hasCollided(bullet,wall)) {
    bullet.velocityX=0;
 var deform=(0.5*weight*speed*speed)/(thickness*thickness*thickness)L;
  //car.shapeColor="blue";
  if(deform<10)
{
  wall.shapeColor=color(0,255,0);
}

if(deform>10)
{
   wall.shapeColor=color(255,0,0);
}
 console.log("damage="+deform)
  }
 else{
   wallshapeColor="white"; 
 }

 

  drawSprites();
}
function hasCollided(o1,o2){
o1RightEdge=o1.x+o1.width;
  o2LeftEdge=o2.x
if(o1RightEdge>=o2LeftEdge){
 return true
}
else {
  return false
}
}