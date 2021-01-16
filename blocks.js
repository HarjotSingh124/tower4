class block {
    constructor (x,y,width,height){
    var options=
    {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.visibility=225;
    this.body = Bodies.rectangle(x, y, width,height, options);
          this.height=height;
          this.width=width;
          World.add(world, this.body);
        }
        display(){
          if(this.body.speed < 3){
            var pos =this.body.position;
            var angle=this.body.angle
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill("blue");
            rect(0, 0,this.width,this.height);
            pop();
           }
           else{
             World.remove(world, this.body);
             push();
             this.visiblity = this.Visiblity - 5;
             pop();
           }
          }
          score(){
            if (this.visiblity < 0 && this.visiblity > -115){
              score++;
            }
          }
        
        
        

        }
      
    