var helicopterIMG, helicopterSprite, packageSprite,packageIMG,dzp1,dzp2,dzp3;
var packageBody,ground,engine, world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {isStatic:true});
	World.add(world, packageBody);	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
        dzp1 =  Bodies.rectangle(width/2, 640, 200, 20 , {isStatic:true} );
	World.add(world, dzp1);

	dzp2 =  Bodies.rectangle(width/2-100, 600, 20, 100 , {isStatic:true} );
	World.add(world, dzp2);

	dzp3 =  Bodies.rectangle(width/2+100, 600, 20, 100 , {isStatic:true} );
	World.add(world, dzp3);


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  if(keyDown("down")){
    Body.setStatic(packageBody,false);
 }
  fill("red");
  rect(dzp1.position.x,dzp1.position.y,200,20);
  rect(dzp2.position.x,dzp2.position.y,20,100);
  rect(dzp3.position.x,dzp3.position.y,20,100);
  
  text("Dropzone↓",width/2-25,600);
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
  helicopterSprite.x =  helicopterSprite.x + 2;
  packageBody.position.x = packageBody.position.x + 2;
}

  if(keyCode === LEFT_ARROW){
  helicopterSprite.x =  helicopterSprite.x - 2;	
  packageBody.position.x = packageBody.position.x - 2;
}
	
if(keyCode === UP_ARROW){
  helicopterSprite.y =  helicopterSprite.y - 2;	
  packageBody.position.y = packageBody.position.y - 2;
}

if(keyCode === UP_ARROW){
  helicopterSprite.y =  helicopterSprite.y + 2;	
  packageBody.position.y = packageBody.position.y +2;
}
	
