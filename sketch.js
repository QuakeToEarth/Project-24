
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground
var box1, box2, box3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground = new Ground (400,680,800,40)
ball = new Ball (50,580,50)
box1 = new Box (700,650,100,20)
box2 = new Box (740,650,20,100)
box3 = new Box (660,650,20,100)

	Engine.run(engine);
  
}


function draw() {
  background(0);
ground.display()
 ball.display()
 box1.display()
 box2.display()
 box3.display()
}
function keyPressed()
{
if (keyCode === UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:150,y:-200})

}

}


