class player{

constructor(){
this.distance=0
this.index=0
this.name=null
}

getCount(){
var playt=database.ref('playerCount')
playt.on("value",(data)=>{
playerCount=data.val()




})

}
updateState(count){
database.ref('/').set({
PlayerCount:count

})
}

update(){
var playerindex="players/player"+this.index
database.ref(playerindex).set({
name:this.name,
distance:this.distance

})


}
static getPlayerInfo(){
var ben=database.ref('players')
ben.on("value",(data)=>{
allPlayers=data.val()


})


}


    
}