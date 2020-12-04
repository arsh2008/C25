
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject,paperimg;	
var world;

function preload(){
}

function setup() {
	createCanvas(400,400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(350,325);
	paperObject=new paper(50,50,40);
	groundObject=new ground(width/2,350,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:45,y:-45});
    
  	}
}





