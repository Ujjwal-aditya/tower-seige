const World      = Matter.World;
const Bodies     = Matter.Bodies;
const Body       = Matter.Body;
const Engine     = Matter.Engine;
const Constraint = Matter.Constraint;

var world, engine,blocks,groundMain,ground1,ground2,i,polygon1,j,clicked,slingShot;
function setup()
{
    createCanvas(1300,700);
    engine  = Engine.create();
    world   = engine.world;

    blocks     = [];
    polygon1   = new Polygon(200,330);
    groundMain = new Ground(650,690,1300,20);
    ground1    = new Ground(760,456,400,15);
    slingShot  = new Slingshot(polygon1.body,{x:150,y:250});

    clicked = "false";
    Engine.run(engine);   
}

function draw()
{
    background(0);

    groundMain.display();
    ground1.display();
    polygon1.display();
    for(j=0;j<blocks.length;j=j+1)
    {
        blocks[j].display();

    }
        fill("white");
        text(mouseX+","+mouseY,100,100);
        textSize(30);
        text("Drag the polygon the blocks will appear try to hit them by releasing the mouse ",0,100);      
       
    slingShot.display();
}

function mouseDragged()
{
    Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
    
    if(clicked==="false")
    {
        for(i=595;i<945;i=i+30)
        {
            blocks.push(new Block(i,418.5));
        }
        for(i=655;i<885;i=i+30)
        {
            blocks.push(new Block(i,388.5));
        }
        for(i=715;i<825;i=i+30)
        {
            blocks.push(new Block(i,358.5));
        }
    }
   
   
    clicked = "true";
}
function mouseReleased()
{
    slingShot.fly();
}