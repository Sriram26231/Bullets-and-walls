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

  if(wall.x - bullet.x < (bullet.width + wall.width)/2){

    bullet.velocityX = 0;
    var damage = 0.5*speed*weight*speed /thickness*thickness*thickness;
    if(damage>10){
      bullet.shapeColor = color("red")
    }
    if(damage<10){
      bullet.shapeColor = color("green")
    
  }
  drawSprites();
  }
}