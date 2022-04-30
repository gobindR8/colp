class Form{
constructor(){
this.input=createinput("name")
this.button=createButton("play")
this.greeting=creatElement('h2')



}
hide(){
this.input.hide()
this.button.hide()
}
display(){
this.button.position(500,500)
this.input.position(600,500)


this.button.mousePressed(()=>{
this.input.hide()
this.button.hide()
Player.name=this.input.value()
playerCount+=1
Player.index=PlayerCount
Player.update()
Player.updateCount(playerCount)
this.greeting.html("hello  "+Player.name)
})
}





}