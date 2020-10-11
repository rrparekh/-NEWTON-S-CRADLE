class Rope{
    constructor(bodyA,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
          bodyA: bodyA,
         // bodyB: bodyB,
          pointB:{x:this.offsetX,y:this.offsetY} 
       }
       this.rope=Constraint.create(options);
       World.add(world,this.rope);  
        }
        display(){
       var pointA=this.rope.bodyA.position;
       var pointB={x:this.offsetX,y:this.offsetY};
       push();
       strokeWeight(4);
       fill(255)
       line(pointA.x,pointA.y,pointB.x,pointB.y);
       pop();
        }
    }
   
   