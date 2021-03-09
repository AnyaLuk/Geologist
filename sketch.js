
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer;
var rubber, stone, iron;
var sand, sand1, sand2, sand3, sand4,sand5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
	hammer = new Hammer(700,320,170,40);
	rubber = new Rubber();
	stone = new Stone(700,320,70,70);
	iron = new Iron(300,320,50,70);
	sand = new Sand();
	sand1 = new Sand();
	sand2 = new Sand();
	sand3 = new Sand();
	sand4 = new Sand();
	sand5 = new Sand();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");
  ground.display();
  hammer.display();
  rubber.display();
  stone.display();
  iron.display();
  sand.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  drawSprites();
 
}



