
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject, groundObject, options
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinObj=new Box(1200,650);
	paperObject=new Paper(200,450,40);
	groundObject=new Ground(width/2,670,width,20);
	
  
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(90, 255, 90);
  
  dustbinObj.display();
  paperObject.display();
  groundObject.display();

  
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-80})};


}

