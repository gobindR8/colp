class Game{
constructor(){


}

getState(){
var ho=database.ref('gameState')
ho.on("value",(data)=>{
gameState=data.val()
})


}
updateState(state){
database.ref('/').set({
gameState:state
})


}

async start(){
if(gameState===0){
Player=new player()
var dataref= await database.ref('playerCount').once("value")
if(dataref.exists()){
playerCount=dataref.val()
Player.getCount()

}
form=new Form()
form.display()

}

var square1=new Pillar(100,100,50,50)
var square2= new Pillar(200,200,50,50)
players=[square1,square2]
}

play(){
form.hide()
    Player.getPlayerInfo()

var x=200
var y=200
var index=0

for(var plr in allPlayers){

index +=1
x=allPlayers[plr].distance
y=allPlayer[plr].distance

players[index-1].x=x
players[index-1].y=y
 if(index===Player.index){
     text(allPlayers[plr].name,x+25,y-25)
  camera.position.x=players[index-1].x
  camera.position.y=players[index-1].y
 }

}

if(keyisDown("RIGHT")&& Player.index !== null){
Player.distance+=10
Player.update()
}

if(keyisDown("LEFT")&& Player.index !== null){
    Player.distance -=10
    Player.update()
}
}



}