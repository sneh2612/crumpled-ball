class launcher {
    constructor(body,anchor){
        var options={
bodyA:body,
pointB:anchor,
stiffness:0.01,
length:10

        }
        this.bodyA=body;
        this.pointB=anchor;
        this.launcher=Matter.Constraint.create(options);
        World.add(world,this.launcher);
    }
fly(){
    this.launcher.bodyA=null;
}
display() { 
    if(this.launcher.bodyA) {
         var pointA=this.bodyA.position;
          var pointB=this.pointB 
          strokeWeight(2); //stroke(240,240,240); line(pointA.x,pointA.y,pointB.x,pointB.y); } }

    }
}

}