class Dustbin
{
constructor(x,y,radius){

    this.body = Bodies.circle(x,y,this.width,this.height);
    World.add(world,this.body);
   

}
display(){
var pos = this.body.position;

    rect(pos.x,pos.y,this.width,this.height);


}

}