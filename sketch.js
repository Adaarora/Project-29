const World = Matter.World
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

function preload(){

}

function setup(){
    
    
}

function draw(){
    background(0);
    Engine.update(engine);
}
