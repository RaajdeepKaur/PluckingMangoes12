
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600,600);

	var border1 = createSprite(600,600,1200,10);
	border1.shapeColor = "black"

	var border2 = createSprite(0,600,10,1200);
	border2.shapeColor = "black"
	
	var border3 = createSprite(600,0,10,1200);
	border3.shapeColor = "black"

	var border4 = createSprite(0,0,1200,10);
	border4.shapeColor = "black"


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(290,50,450,20);
	
	bobObject1 = new Bob(150,550,35);
	bobObject2 = new Bob(200,550,35);
	bobObject3 = new Bob(250,550,35);
	bobObject4 = new Bob(300,550,35);
    bobObject5 = new Bob(350,550,35);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,0);
  
  drawSprites();
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
}



