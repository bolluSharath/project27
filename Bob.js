class Bob {
    constructor(x, y, radius) {
      var options = {
          isStatic:true,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius
      
      World.add(world, this.body);
    }
    display(){
     var pos = this.body.position

      push();
      fill("purple");
      stroke("purple")
      translate(pos.x,pos.y);
      circle(200,400,this.radius);
      stroke("purple")
    }
}