class Polygon{
    constructor(x,y)
    {
        this.width = 30;
        this.height = 60;
        this.body = Bodies.rectangle(x,y,50,50,{isStatic:false});
        this.image = loadImage("polygon.png")
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;


        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);       
        pop();
    }
}