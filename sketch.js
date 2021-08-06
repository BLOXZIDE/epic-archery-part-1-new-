const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


var player, compPlayer, compBase, playerBase;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   playerBase = new Playerbase (width - 1500,random(450,height-300),180,150)
   compBase = new ComputerBase (width - 150,random(450,height-400),180,150)
   player = new Player(85,playerBase.body.position.y-153,50,180)
   compPlayer = new cPlayer(width - 150,compBase.body.position.y-153,50,180)
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
   playerBase.display()
   player.display()
   compBase.display()
   compPlayer.display()

   //display Player and computerplayer
}
