var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";
var img;
var img2;

function preload() {
  img = loadImage('pig.jpg')
  img2 = loadImage('farm.jpg')
  
}


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(img2);
  
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  if (gameState == "WIN"){
     gameEND();
  }
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2

 gameState= "L2";
  }
  
 image(img, ballx-25, bally-25, 50, 50);
 
//  line(ballx, bally, mouseX, mouseY);
  
} // end level one


function levelTwo(){
  background(img2);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// level 3
   gameState = "L3";

  }
  
//  line(ballx, bally, mouseX, mouseY);
 image(img, ballx-25, bally-25, 50, 50);
} // end level two


function levelThree(){
    background("green");
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize= max(10, ballSize - 1);
    score= score +1;
  }  
  
 if (score > 25) {
    gameState = "WIN"; // Transition to winning state
  }
  
  image(img, ballx - 25, bally - 25, 50, 50);
}

function gameEND() {
  background(img2); // Use the farm background at the end
  text("YOU WIN!", width / 2, height - 20);
}
