class Block{
    constructor(x,y,colour)
    {
        var options  = {
            isStatic:false
        }
        this.width = 30;
        this.height = 60;
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        this.colour = colour;
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
       
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(random(0,255),random(0,255),random(0,255));
        rect(0,0,this.width,this.height);
        pop();
        
    }
}