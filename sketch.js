const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,paper;

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,680,100,20);
    box2 = new Box(660,670,20,80);
    box3 = new Box(540,670,20,80);
    paper = new Paper(100,680,10);
    ground = new Ground(400,height,800,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    paper.display();
    ground.display();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paper.body, paper.body.position,{
            x: 14,
            y: -13
        });
    }
}