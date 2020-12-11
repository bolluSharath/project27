
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;




function preload()
{
	
}

function setup() {
	createCanvas(1500, 600);
	
	var bobDiameter;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here

	roofObject = new roof(530,200,300,30)

	bobObject1 = new Bob(200,10,50)
	bobObject2 = new Bob(60,3,50)	
	bobObject3 = new Bob(70,2,50)
	bobObject4 = new Bob(60,2,50)
	bobObject5 = new Bob(60,2,50)

	rope1 = new Rope(bobObject1.body,roofObject.body,bobDiameter*2, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();

  drawSprites();

 
}



 