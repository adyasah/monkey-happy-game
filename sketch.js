
var m, mR
var b ,bImg, o, oImg,ground
var fGroup, oGroup
var score=0;

function preload(){
  
  
  mR =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bImg = loadImage("banana.png");
  oImg = loadImage("obstacle.png");
 
}



function setup() {
  
 m = createSprite(50,360,20,50);
 m.addAnimation("running",mR);
 m.scale=0.1 

 ground=createSprite(300,390,800,5)
  console.log(ground.width)
  ground.x=ground.width/2
  edges=createEdgeSprites()
  
   fGroup=new Group()
   oGroup=new Group()
}


function draw() {
background("white")
   ground.velocityX=-2
  if(ground.x<0){
     ground.x=ground.width/2
     }
  if(keyDown("space")&& m.collide(ground)){
    m.velocityY=-14
  }
    m.velocityY=m.velocityY+0.5
  
    m .collide(ground)
  score=Math.round(getFrameRate()/50)+score
  text("survival time : "+score,200,50)
 
  obstical();
  banana();
  drawSprites()
}

function banana(){
   if(frameCount%80==0){
  b=createSprite(400,39,10,5)
    b.y=Math.round(random(120,200))
    b.addImage( bImg )
    b.scale=0.1
    b.velocityX=-2
    b.lifetime=300
    m.depth=b.depth+1
    fGroup.add(b)
  }
}

function obstical(){
  
   if(frameCount%300==0){
    o= createSprite(400,360,20,50);
    o.addAnimation("obsticals",oImg);
    o.scale=0.2
    o.velocityX=-3
    o.lifetime=126
    oGroup.add(o)
    }
}


