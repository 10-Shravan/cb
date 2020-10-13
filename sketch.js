
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var r1,r2,r3,ball,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
     var options={
		 isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	 }
  ball= Matter.Bodies.circle(200,450,300,options);
  World.add(world,ball);
    r1=createSprite(550,600,200,20);
	r2=createSprite(450,565,20,90);
	r3=createSprite(650,565,20,90);
	ground=Bodies.rectangle(200,600,800,20,{isStatic:true});
	World.add(world,ground);
	Engine.run(engine);
  
}


function draw() {
	background(0);
	Engine.update(engine);
  rectMode(CENTER);
  
 rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y);
  
  
  
  drawSprites();
 
}



