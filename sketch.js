
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;
var bg;
var WM
var STATE = "STATIC";


function preload()
{
	bg=loadImage("bg.png");
	WM=loadImage("WM.png");
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(420,100,260,20);
	bob1=new Bob(300,300);
	bob2=new Bob(360,300);
	bob3=new Bob(420,300);
	bob4=new Bob(480,300);
	bob5=new Bob(540,300);


	rope1= new Rope(bob1.body,{x:300,y:100});
	rope2= new Rope(bob2.body,{x:360,y:100});
	rope3= new Rope(bob3.body,{x:420,y:100});
	rope4= new Rope(bob4.body,{x:480,y:100});
	rope5= new Rope(bob5.body,{x:540,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);

  push();
  imageMode(CENTER);
  image(WM,610,450,350,100);
  pop();
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

function keyPressed() { 
	if ((keyCode === UP_ARROW||keyCode === 32)&&STATE==="STATIC") {
		 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:-300}); 
		 STATE==="MOVING";
	} 
} 

