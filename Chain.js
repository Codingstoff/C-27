class Chain 
{
   constructor (body1,body2)
   {
    var options =
    {
       bodyA: body1,
       bodyB: body2,
       stiffness: 0.1,
       length: 1

    }

    this.chain = Constraint.create (options);
    World.add(world,this.chain);
   }

    display()
    {
       var body1pos = this.chain.bodyA.position;
       var body2pos = this.chain.bodyB.position;
       
      line(body1pos.x, body1pos.y,body2pos.x,body2pos.y); 

    }
}