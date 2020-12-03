var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    
	
	
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world,packageBody,)






	



	




	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

   
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 boxPosition=width/2-100
	 boxY=610
	 line1=createSprite(boxPosition,boxY,20,100);
	 line1.shapeColor=color(255,0,0)
	 line1Body=Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic:true})
     World.add(world,line1Body)
	line2=createSprite(boxPosition+100,boxY+45,200,10)
	line2.shapeColor=color(255,0,0)
	line2Body=Bodies.rectangle(boxPosition+100,boxY+45,20,200,20,{isStatic:true})
	World.add(world,line2Body)
	line3=createSprite(boxPosition+200,boxY,20,100)
	line3.shapeColor=color(255,0,0)
	line3Body=Bodies.rectangle(boxPosition+200-20,boxY,2,100,{isStatic:true});
	
    World.add(world,line3Body)

 






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  

   









  drawSprites();
 
}

function keyPressed() { if (keyCode === LEFT_ARROW) { helicopterSprite.x=helicopterSprite.x-20; translation={x:-20,y:0}
 Matter.Body.translate(packageBody, translation) }
  else if (keyCode === RIGHT_ARROW)
   { helicopterSprite.x=helicopterSprite.x+20; translation={x:20,y:0}
	Matter.Body.translate(packageBody, translation) }
	 else if (keyCode === DOWN_ARROW)
	  { Matter.Body.setStatic(packageBody,false);
	 } }











































































































































































































































