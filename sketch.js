const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var plinkos=[]
var particle=[]
var divisions=[]
var divisionHeight=300
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

b=new Ground(240,796,5000,10)
b2=new Ground(240,6,500,10)
b3=new Ground(476,6,10,10000)
b4=new Ground(6,6,10,10000)
w=new Ground(240,786,460,10)

d1=new Ground(466,640,6,280)
d2=new Ground(14,640,6,280)

//d3=new Ground(378,690,6,200)

//d4=new Ground(290,690,6,200)
//d5=new Ground(202,690,6,200)
//d6=new Ground(114,690,6,200)
//d7=new Ground(596,690,6,200)
}

function draw() {
  Engine.update(engine);
  background(0);  

  for(var i = 0;i<=width; i=i+80){
    divisions.push(new Ground(i,height-divisionHeight/2,10,divisionHeight))
  }
  for(var i=0;i<divisions.length;i++){
    fill("white")
    divisions[i].display();
  }

  for(var e=40;e<=width;e=e+40){
    plinkos.push(new Plinko(e,75))
  }
  for(var e=0;e<divisions.length;e++){
    fill("white")
    plinkos[e].display();
  }
  for(var f=40;f<=width;f=f+40){
    plinkos.push(new Plinko(f,140))
  }
  for(var f=0;f<divisions.length;f++){
    fill("white")
    plinkos[f].display();
  }
  for(var l=40;l<=width;l=l+40){
    plinkos.push(new Plinko(l,210))
  }
  for(var l=0;l<divisions.length;l++){
    fill("white")
    plinkos[l].display();
  }
  
  for(var m=15;m<=width;m=m+40){
    plinkos.push(new Plinko(m,280))
  }
  for(var m=0;m<divisions.length;m++){
    fill("white")
    plinkos[m].display();
  }

  for(var g=40;g<=width;g=g+40){
    plinkos.push(new Plinko(g,350))
  }
  for(var g=0;g<divisions.length;g++){
    fill("white")
    plinkos[g].display();
  }
  
  
  //particle=new Particle(60,10,6)
 
  //particle.x=random(20,400)
  if(frameCount%20===0){
    particle.push(new Particle(random(width/2-10,width/2+10),30,10));
  }
  for(var z=0; z<particle.length; z++){
    particle[z].display()
  }


  Engine.update(engine);
  drawSprites();
  fill("brown")
  b.display()
  b2.display()
  b3.display();
  b4.display()
  

  fill("white")
  w.display()
d1.display()
d2.display()
//d3.display()
//d4.display()
///d5.display()
//d6.display()
//particle.display();

//d7.display()
}