class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;
//crear un cuerpo circular
this.body = Bodies.circle(x, y, this.r, options)
//cargar la imagen
this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }

  shoot() {
    
    //establecer el ángulo de la bala al 
    var velocity = p5.Vector.fromAngle(cannon.angle);
    velocity.mult(200)
    //establecer un valor estático al cuerpo
    Matter.Body.setStatic(this.body,false)
    //establecer la velocidad de la bala para hacer que se mueva
    Matter.Body.setVelocity(this.body,{x:velocity.x, y:velocity.y})
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
//mostrar la imagen
    image(this.image,0,0,this.r,this.r)
    pop();

    }
  }

