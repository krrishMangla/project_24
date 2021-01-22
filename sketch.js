
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer;
var stone;
var rubber;
var Sand_particles1,Sand_particles2,Sand_particles3,Sand_particles4
    ,Sand_particles5,Sand_particles6,Sand_particles7,Sand_particles8;
var iron;

function setup() {
	createCanvas(900,600);

 	engine = Engine.create();
	world = engine.world;

    ground= new Ground(450,height,900,20);
	
	  hammer= new Hammer(400,350);

	  stone= new Stone(600,200,80,80);

    rubber= new Rubber(800,200,40);

    Sand_particles1= new Sand_particles(350,200,5);
    Sand_particles2= new Sand_particles(360,200,5);
    Sand_particles3= new Sand_particles(370,200,5);
    Sand_particles4= new Sand_particles(380,200,5);
    Sand_particles5= new Sand_particles(390,200,5);
    Sand_particles6= new Sand_particles(400,200,5);
    Sand_particles7= new Sand_particles(410,200,5);
    Sand_particles8= new Sand_particles(420,200,5);

    iron= new Iron(200,200,60,60);


	Engine.run(engine);
  
}


function draw() {
  
  background("lightblue");
  
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  Sand_particles1.display();
  Sand_particles2.display();
  Sand_particles3.display();
  Sand_particles4.display();
  Sand_particles5.display();
  Sand_particles6.display();
  Sand_particles7.display();
  Sand_particles8.display();
  iron.display();
}



