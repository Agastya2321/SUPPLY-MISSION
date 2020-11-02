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
    engine = Engine.create();
    world = engine.world;
    var boxPos = width/2-100;
    var boxY = 610;


    // left side of the box
    var boxleftSprite = createSprite(boxPos,boxY,20,100);
    boxleftSprite.shapeColor = color(255,0,0);
    
    var boxLeftBody = Bodies.rectangle(boxPos+100,boxY+45-20,200,2)
    World.add(world,boxLeftBody)
    
    // creating the base for the box
    var boxBase = createSprite(boxPos+100,boxY+40,200,20)
    boxBase.shapeColor = color(255,0,0)

    var boxBottomBody = Bodies.rectangle(boxPos+100,boxY+45-20,200,20);
    World.add(world,boxBottomBody);


    var boxleftSprite=createSprite(boxPos+200 , boxY, 20,100);
    boxleftSprite.shapeColor=color(255,0,0);

   var boxRightBody = Bodies.rectangle(boxPos+200,boxY,20,100);
   World.add(world,boxRightBody);

   Engine.run(engine);
    
    packageSprite=createSprite(width/2, 80, 10,10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale=0.2

    helicopterSprite=createSprite(width/2, 200, 10,10);
    helicopterSprite.addImage(helicopterIMG)
    helicopterSprite.scale=0.6

    groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color(255)
    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
    World.add(world, packageBody);
    

    //Create a Ground
    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);


    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
  
		helicopterSprite.x=helicopterSprite.x-20;    
		translation={x:-20,y:0}
		Matter.Body.translate(packageBody, translation)
	
	
	  } else if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x=helicopterSprite.x+20;
		translation={x:20,y:0}
		Matter.Body.translate(packageBody, translation)
	  }
	  else if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
		
	  }
	}
  