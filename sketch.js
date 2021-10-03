var Recipe

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    var Recipe=new.Create(300,300);
    var Recipe=loadImage("pizza recipe.jpg");
    var Recipe.size=10;
}

function draw(){
    Recipe.display();
}