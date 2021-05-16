class Plinkos{
    constructor(x,y){

        var options ={
            restitution:0.4
        }
        this.radius = 10;
        this.body = Bodies.circle(x,y,this.radius,options);
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle =this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill("yellow");
        ellipseMode(CENTER);
        ellipse(0,0,10,10);
        pop();
    }
}