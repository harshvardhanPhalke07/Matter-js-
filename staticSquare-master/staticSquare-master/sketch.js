const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    console.log(ground);
    ball=Bodies.circle(200,200,50,{restitution:1.5})
    World.add(world,ball)
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill ("pink")
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS)
    fill("blue")
    ellipse(ball.position.x,ball.position.y,50,50)
} 