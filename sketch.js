const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon, cannonBall;
var balls = []



function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
//crea un objeto para la bala de cañón

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  //estaba mal escrito length
 for(var i = 0; i < balls.length; i++){
    showCanonBalls(balls[i], i);
 }


  ground.display();
  

 cannon.display();
  tower.display();
//mostrar la bala de cañón
//cannonBall.display();
}


function keyPressed(){
  if(keyCode === DOWN_ARROW){
    cannonBall = new CannonBall(cannon.x, cannon.y)
    //balls tenia la s en mayuscula
    balls.push(cannonBall)
  }

}



function keyReleased() {
 if(keyCode === DOWN_ARROW){
  balls[balls.length-1].shoot();
 }
}


function showCanonBalls(ball,indez){
  ball.display()
  if(ball.body.position.x >= width || ball.body.position.y >= height-50){
    Matter.World.remove(world, ball.body);
    balls.splice(indez, 1);
  }
}