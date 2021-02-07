class Mango {
 constructor(x,y,r){
     var options={
        isStatic:true,
        friction : 1
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body=Bodies.circle(this.x,this.y,r,options);
        this.image=loadImage("Plucking mangoes/mango.png")
        World.add(world,this.body)
       }

    display(){
    var mangopos=this.body.position
    push();
    translate(mangopos.x,mangopos.y);
    imageMode(CENTER);
    image(this.image,0,0,this.r*2,this.r*2);
    pop();
    }
}
