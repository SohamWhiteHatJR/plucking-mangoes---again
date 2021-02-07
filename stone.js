  class Stone {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          friction : 1,
          density : 1.2
      }
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.image = loadImage("Plucking mangoes/stone.png")
      this.body = Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
     
    }
    display(){
      var pos = this.body.position;
      imageMode(CENTER);
      push();
      translate(pos.x ,pos.y);
      image(this.image,0,0,this.radius*2,this.radius*2);
      pop()
    }

  };

  