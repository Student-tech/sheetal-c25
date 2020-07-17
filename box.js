class Box {
constructor() {

    var option = {
        restitution:1
    }
this.body = Bodies.rectangle(200,100,50,50,option);
World.add(world,this.body);

}
display(){
var pos = this.body.position;
rectMode(CENTER);
fill("blue");
rect(pos.x,pos.y,this.width,this.height);
}

}