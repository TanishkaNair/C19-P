var planet1, planets;
var planet2, planets;
var planet3, planets;
var planet4, planets;
var planet5, planets;
var gameover;
var background;
var coins;
var ufo;

function preload(){
    planet1 = loadImage("planet 1.png");
    planet2 = loadImage("planet 2.png");
    planet3 = loadImage("planet 3.png");
    planet4 = loadImage("planet 4.png");
    planet5 = loadImage("planet 5.png");
    gameover1 = loadImage("gameover.jpg");
    background1 = loadImage("background.jpg");
    coins1 = loadImage("coins.png");
    ufo1 = loadImage("ufo.png");
}

function setup() {
    createCanvas(600, 600);
    background = createSprite(0, 0, 600, 600);
    background.addImage(background1);
    background.scale = 4
    background.velocityY = 6
    if (background.y > 600){
        background.y = background.width/2         
    }

    ufo = createSprite (300, 500)
    ufo.addImage(ufo1)
    ufo.scale = 0.2

}


function draw() {
    background(0)
    drawSprites()
    

    if(keyDown("up_arrow")){
        ufo.y = ufo.y-2
    }
    if(keyDown("right_arrow")){
        ufo.x = ufo.x + 2
    }
    if(keyDown("left_arrow")){
        ufo.x = ufo.x-2
    }
}

ufo.velocityY = ufo.velocityY+0.8

