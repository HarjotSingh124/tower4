class pol {
    constructor (x,y){
    var options={
      'restitution':0,
      'friction':0,
      'density':1
    }
    this.image=loadImage("polygon.png")
    this.body = Bodies.circle(x, y, 20, options);
          this.x=x;
          this.y=y;
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          push();
          translate(pos.x, pos.y);
          imageMode(CENTER);
  
          image(this.image,this.x,this.y,40,40);
          pop();
        }
      };
    