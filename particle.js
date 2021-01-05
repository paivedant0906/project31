class Particle {
    constructor(x, y,r) {

        var options ={
            isStatic:false,
            restitution:0.4,
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
       
       
        fill(this.color)
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
     
        
    }

};