const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var world,engine
var database,firebabse
var body1,body2,body3,body4,body5,body6,body7,body8,body9,body10,body11
var form
var players
var Player,game
var cir
function setup(){
  
createCanvas(3000,3000)
engine=Engine.create()
  world=engine.world
database=firebase.database()
body1=new Pillar(200,300,900,20)
body2=new Pillar(200,200,900,20)
body3= new Pillar(500,300,20,400)
body4= new Pillar(250,-250,250,20)
body5= new Pillar(250,400,650,10)
body6= new Pillar(300,250,30,200)
body7= new Pillar(260,50,10,300)
cir=new Circle(250,250,200,200)
game=new Game
}


function draw(){
  Engine.update(engine)
background(0)
body2.display()
body1.display()
body3.display()
body4.display()
body5.display()
body6.display()
body7.display()
cir.display()

}