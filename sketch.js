var bgImg
var snow, snowImg

var snowflake, snowflakeImg



function preload(){
  bgImg = loadImage("snow3.jpg");
  snowImg = loadImage("snow5.webp")
  snowflakeImg=loadImage("snow4.webp")
}
function setup() {
  createCanvas(800,400);

}

function draw() {
  background(bgImg);
 
  
  drawSprites();
 
  createSnow();
  createSnowflake();

}

function createSnow(){
  if(frameCount%10===0){
    snow = createSprite(random(10,800), 0, 50, 50);
    snow.velocityX = -3;
    snow.velocityY = 3;
    snow.addImage(snowImg);
    snow.scale = 0.1;
    }
  
}

function createSnowflake(){
  if(frameCount%20===0){
    snowflake = createSprite(random(20,800), 0, 70, 70);
    snowflake.velocityX = -2;
    snowflake.velocityY = 5;
    snowflake.addImage(snowflakeImg);
    snowflake.scale = 0.1;
    }
  
}
