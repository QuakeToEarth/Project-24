class Ball {
    constructor(x, y,diametre) {
      var options = {
          'restitution':0.8,
          'friction':0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,diametre, options);
      this.diametre = diametre;


      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      ellipseMode(CENTER)
      ellipse (0,0,this.diametre)
      pop();
    }
  };
  