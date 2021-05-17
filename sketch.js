const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var particle = [];
var plinko = [];
var division =[];
var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  //Creating Divisions
  for(var k =0; k<=width; k=k+80){
    division.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  //Creating Plinkos
  for (var j =15; j<=width; j=j+50){
    plinko.push(new Plinkos(j,75))
  }
  for (var j=15; j<=width; j=j+50){
  plinko.push(new Plinkos(j,175));
  }
  for (var j=15; j<=width; j=j+50){
  plinko.push(new Plinkos(j,275));
  }
  for (var j=15; j<=width; j=j+50){
  plinko.push(new Plinkos(j,375));
  }

  //Creating Particles
  
  base =new Ground(10,800,1200,20);

}
function draw() {
  Engine.update(engine)
  background(0);  
  if(frameCount%60 === 0){
    particle.push(new Particles(random(width/2-10,width/2+10),10,10));
  }


  for(var j =0; j<particle.length; j++){
    particle[j].display();
  }
  for(var k =0; k<division.length; k++){
    division[k].display();
  }
  for(var i=0; i<plinko.length; i++){
    plinko[i].display();
  }

base.display();
 drawSprites();
}