function setup() {
createCanvas(600, 600);
background(100);
}
function draw() {

//background
  stroke(1450, 1040, 710,345)
  fill(175, 100, 220);
ellipse(125,50,40,100) 
ellipse(50,100,60,100)
  ellipse(425,50,40,100) 
  ellipse(525,100,60,100) 
  
  //hair
  stroke(150, 100, 70)
  fill(150, 100, 70);
circle(280, 253, 400);
rect(80, 240, 400, 500);
 
 fill(255, 224, 189)
  rect(230,490,100,100)

  
  // Face
  fill(255, 224, 189); // Skin color
ellipse(278, 300, 300, 400);

  
//bangs
fill(150, 100, 70);  
rect(170, 100, 220, 150);
  fill(150, 100, 70);  
rect(149, 100, 200, 150); 
 fill(150, 100, 70);  
rect(149, 100, 257, 150);

  
strokeWeight(5);
  line(142, 180, 105, 689);
  
//top lid
  stroke(0)
  ellipse(350,298,75,40)
  ellipse(210,298,75,40)
  
//white eye 
stroke(500)
  fill(500)
 ellipse(210,300,70,40)
  ellipse(350,300,70,40) 
  
//eyes
    stroke(0,128,0)
  fill(0,128,0)
  ellipse(210,300,40,40)
  ellipse(350,300,40,40)
  
//pupil
  stroke(0)
  fill(0)
  ellipse(210,300,23,23)
  ellipse(350,300,23,23)
  
//lashes left eye
  rect(200,265,0.01,10)
  rect(210,265,0.01,10)
  rect(220,265,0.01,10)
  rect(230,268,0.01,10)
  rect(240,273,0.01,10)
  rect(190,265,0.01,14)
  rect(180,265,0.01,19)
  rect(170,265,0.01,27)
  
// lashes right eye 
  rect(340,265,0.01,10)
  rect(350,265,0.01,10)
  rect(360,265,0.01,10)
  rect(370,261,0.01,20)
  rect(330,267,0.01,10)
  rect(320,270,0.01,13)
  rect(380,265,0.01,19)
  rect(390,265,0.01,27)
 
//bang things  
  stroke(255, 224, 189)
   rect(200,200,0.5,50)
   rect(250,200,1,50)
  rect(280,200,1,50)
  rect(300,200,1,50)
  rect(350,200,1,50)
//mouth
  stroke(55, 28, 49)
  fill(255, 128, 149);
  arc(280, 400, 70, 50, 0, PI);

 // earrings
 stroke(1)
   fill(2);
ellipse(425,390,10,100) 
ellipse(125,390,10,100) 

  //shoulders
 ellipse(160,700,200,300) 
 ellipse(405,700,200,300) 
 rect(205,559,150,50)
  
  
}
