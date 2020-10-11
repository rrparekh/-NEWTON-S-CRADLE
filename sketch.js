
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(370,100,400,40);

	bob1=new Bob(230,400);
	bob2=new Bob(300,400);
	bob3=new Bob(370,400);
	bob4=new Bob(440,400);
	bob5=new Bob(510,400);

	rope1=new Rope(bob1.body,230,120);
	rope2=new Rope(bob2.body,300,120);
	rope3=new Rope(bob3.body,370,120);
	rope4=new Rope(bob4.body,440,120);
	rope5=new Rope(bob5.body,510,120);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

 
}

function keyPressed(){
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-90});
	 }
}


