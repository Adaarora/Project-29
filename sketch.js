const World = Matter.World
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;


function preload() {
    polygon_img = loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, 340, 300, 10);
    ground1 = new Ground(1000, 250, 250, 10);

    block1 = new Box(600, 195, 30, 40);
    block2 = new Box(570, 235, 30, 40);
    block3 = new Box(600, 235, 30, 40);
    block4 = new Box(630, 235, 30, 40);
    block5 = new Box(540, 275, 30, 40);
    block6 = new Box(570, 275, 30, 40);
    block7 = new Box(600, 275, 30, 40);
    block8 = new Box(630, 275, 30, 40);
    block9 = new Box(660, 275, 30, 40);
    block10 = new Box(510, 315, 30, 40);
    block11 = new Box(540, 315, 30, 40);
    block12 = new Box(570, 315, 30, 40);
    block13 = new Box(600, 315, 30, 40);
    block14 = new Box(630, 315, 30, 40);
    block15 = new Box(660, 315, 30, 40);
    block16 = new Box(690, 315, 30, 40);

    block17 = new Box(1000, 145, 30, 40);
    block18 = new Box(970, 185, 30, 40);
    block19 = new Box(1000, 185, 30, 40);
    block20 = new Box(1030, 185, 30, 40);
    block21 = new Box(940, 225, 30, 40);
    block22 = new Box(970, 225, 30, 40);
    block23 = new Box(1000, 225, 30, 40);
    block24 = new Box(1030, 225, 30, 40);
    block25 = new Box(1060, 225, 30, 40);




    //ball holder with slings
    ball = Bodies.circle(50, 200, 20);
    World.add(world, ball);

    slingShot = new Slingshot(this.ball, { x: 100, y: 200 });


}

function draw() {
    background(0);

    Engine.update(engine);

    ground.display();
    ground1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    slingShot.display();
    imageMode(CENTER)
    image(polygon_img, ball.position.x, ball.position.y, 40, 40);


}

function mouseDragged() {
    Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY });
}


function mouseReleased() {
    slingShot.fly();
}
