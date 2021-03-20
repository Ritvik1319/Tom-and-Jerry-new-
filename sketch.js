var cat,catImg1,catImg2,catImg3,catImg4
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4
var garden,gardenImg
function preload() {
    //load the images here
    catImg1 = loadAnimation("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    catImg3 = loadAnimation("images/cat4.png")

    mouseImg1 = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3 = loadAnimation("images/mouse4.png")

    gardenImg = loadImage("images/garden.png")
}


function setup(){
    createCanvas(1000,1000);
    text(mouseX+','+mouseY,10,45)
    //create tom and jerry sprites here
    garden=createSprite(500,500,1000,1000)
    garden.addImage(gardenImg)

    cat=createSprite(800,695,10,10)
    cat.addAnimation("catSitting",catImg1)
    cat.scale=0.15
   
   
    mouse=createSprite(180,695,10,10)
    mouse.addAnimation("mouseFirstImage",mouseImg1)
    mouse.scale=0.1

   
}

function draw() {
  

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x<(cat.width - mouse.width)/2){
        cat.addAnimation("catLastImage",catImg3)
        cat.changeAnimation("catLastImage")
        cat.velocityX=0
        mouse.addAnimation("mouseLastImage",mouseImg3)
        mouse.changeAnimation("mouseLastImage")
    }

    drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code here
 if (keyCode===LEFT_ARROW){
     cat.velocityX=-5
     cat.addAnimation("catRunning",catImg2)
     cat.changeAnimation("catRunning")
    

    
 }
 if(cat.velocityX=-5){
     mouse.addAnimation("mouseTeasing",mouseImg2)
     mouse.changeAnimation("mouseTeasing")
     

 }



}
