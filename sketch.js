
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
//this.image=loadImage("boy.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = new Tree(500,320,70,70);
  ground = new Ground(500,120,70,70);
  stone = new Stone(500,550,70,70);
    //boy = new Boy(810,260,300,200);

    mango1 = new Mango(500,240,70,70);
    mango2 = new Mango(510,240,70,70);
    mango3 = new Mango(730, 220,70,70);

    mango4 =  new Mango(750,180,70,70);

    mango5 = new Mango(770,160,70,70);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  ground.display();
  stone.display();
  //boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  drawSprites();
 
}



