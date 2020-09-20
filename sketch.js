
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var treeimg,boyimg;
var mango1,mango2,mango3;
function preload()
{
treeimg=loadImage("tree.png");
boyimg=loadImage("boy.png");	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	mango1 = new Mango(630,530,30);

	tree=createSprite(700,590,40,550);
	tree.addImage(treeimg);
	tree.scale=0.2

	boy=createSprite(300,650,20,20);
	boy.addImage(boyimg);
	boy.scale=0.08;
	Engine.run(engine);
  
}


function draw() {
tree.depth=mango1.depth;
mango1.depth+1;
  rectMode(CENTER);
  background(0);
 mango1.display();
  drawSprites();
 
}



