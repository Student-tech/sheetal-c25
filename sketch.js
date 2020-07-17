const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var object1 , g1;

function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

object1 = new Box();
g1 = new Gr(200,390,400,20);
}
function draw() {
  background("black");
  Engine.update(engine);
  object1.display();
  g1.display();
 
  
}