var bullet,wall, thickness;
var speed, weight;


function setup() {
  createCanvas(800,400);
  bullet = createSprite(50,200,50,30)
    speed = random(223,321)
    weight = random(30,52)
    bullet.velocityX = speed;
    thickness = random(22,83)
    wall = createSprite(700,200,thickness,height/2)

}

function draw() {
  background(255,255,255);  

 

      if(hasCollided(bullet, wall)) { 
        bullet.velocityX=0; 
        var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness); 
        if(damage>10) {
           wall.shapeColor=color("RED"); } 
        if(damage<10) {
           wall.shapeColor=color("green"); }
          
          }
    
  
  drawSprites();
}


function hasCollided() {
  (bullet, wall) 
   bulletRightEdge=bullet.x +bullet.width; 
   wallLeftEdge=wall.x;
    if (bulletRightEdge>=wallLeftEdge) { 
      return true } return false; 
    }