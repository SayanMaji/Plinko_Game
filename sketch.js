const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight = 300;


function setup() {
  createCanvas(480,800);

  //Creating Divisions
  for(var k =0; k<=width; k=k+80){
    divisions.push(new Divisions_Game(k,height-divisionHeight/2,10,divisionHeight));
  }

  //Creating Plinkos
  for (var j =15; j<=width; j=j+50){
    plinkos.push(new plinkos(j,75))
  }
  for (var j=15; j<=width; j=j+50){
  plinkos.push(new plinkos(j,175));
  }
  for (var j=15; j<=width; j=j+50){
  plinkos.push(new plinkos(j,275));
  }
  for (var j=15; j<=width; j=j+50){
  plinkos.push(new plinkos(j,375));
  }

  //Creating Particles
  if(frameCount%60 === 0){
    particles.push(new Particles_Game(ramdom(width/2-10,width/2+10,10,10)));
  }

  base =new Ground(10,750,20,1200);

}
function draw() {
  background(255,255,255);  


  for(var j =0; j<particles.length; j++){
    particles[j].display();
  }
  for(var k =0; k<divisions.length; k++){
    divisions[k].display();
  }



 drawSprites();
}