const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground, right, left, roof;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ground = new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  roof = new Ground(200,10,400,20);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  right.show();
  left.show();
  roof.show();
}

