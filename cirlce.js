class Circle{

constructor(x,y,width,height){

this.x=x
this.y=y
this.height=height
this.width=width
this.body=Bodies.rect(this.x,this.y,this.width,this.height,{isStatic:true})
World.add(world,this.body)


}
display(){
var pos=this.body.position

push()
translate(pos.x,pos.y)
rect(pos.x,pos.y,this.width,this.height)
pop()

}
    
}