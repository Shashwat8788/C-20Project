var back,backImg;
var cat,catsit1Img,catsit2Img,catwalkImg;
var mouse,mousestand1Img,mousestand2Img,mousedanceImg;


function preload() {
    backImg = loadImage("images/garden.png");
    catsit1Img = loadAnimation("images/cat1.png");
    catsit2Img = loadAnimation("images/cat4.png");
    catwalkImg = loadAnimation("images/cat2.png","images/cat3.png");
    mousestand1Img = loadAnimation("images/mouse1.png");
    mousestand2Img = loadAnimation("images/mouse4.png");
    mousedanceImg = loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    
    back = createSprite(500,400);
    back.addImage(backImg);
    back.scale = 1.15;

    cat = createSprite(800,650);
    cat.addAnimation("sit1",catsit1Img);
    cat.addAnimation("sit2",catsit2Img);
    cat.addAnimation("walking",catwalkImg);
    cat.scale = 0.3;
    cat.setCollider("rectangle",0,0,800,cat.height);
    cat.debug = false;

    mouse = createSprite(100,650);
    mouse.addAnimation("stand1",mousestand1Img);
    mouse.addAnimation("stand2",mousestand2Img);
    mouse.addAnimation("dance",mousedanceImg);
    mouse.scale = 0.15;
    mouse.setCollider("rectangle",0,0,800,mouse.height);
    mouse.debug = false;

}

function draw() {

    background(0);
    
    if(cat.x-mouse.x<=cat.width/2+mouse.width/2&&mouse.x-cat.x<=mouse.width/2+cat.width/2){
        keyPressed();
    }

    if(cat.isTouching(mouse)){
        cat.changeAnimation("sit2",catsit2Img);
        mouse.changeAnimation("stand2",mousestand2Img);
        cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){

  if(keyDown("left_arrow")){
      cat.changeAnimation("walking",catwalkImg);
      cat.velocityX = -4;
      mouse.changeAnimation("dance",mousedanceImg);
  }


}
