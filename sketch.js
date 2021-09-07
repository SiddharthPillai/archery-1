const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
computer=new Computer (1000,300,50,180)
computerbase=new ComputerBase(950,470,180,150)
player=new Player(200,300,50,180)
playerbase=new PlayerBase(150,470,180,150)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
computer.display()
computerbase.display()
player.display()
playerbase.display()
   //display Player and computerplayer


}
