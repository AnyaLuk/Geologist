class Sand {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1,
          'friction':5,
          'density':1,
      }
      this.body = Bodies.circle(200, 100,10, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(3)
      stroke("brown")
      fill("beige");
      ellipse(0, 0, 10, 10);
      pop();
    }
  };