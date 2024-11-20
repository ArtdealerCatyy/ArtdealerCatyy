var img;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
    strokeWeight(5)
    stroke(200,40,45,54,30);
    line(200, 100, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool
    
    strokeWeight
    stroke(10, 150, 29, 102, 50);
    line(200, 120, pmouseX, pmouseY);
    5
  } else if (toolChoice == '3') { // third tool

    stroke(300, 100, 0, 80);
    line(230, 130, pmouseX, pmouseY);
    
  } else if (toolChoice == '4') {
4
      strokeWeight(10)
    stroke(130,57,65,54,70);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == '5') { 5
    
   strokeWeight(1)
    stroke(1);
    line(mouseX, mouseY, pmouseX, pmouseY);
  
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

     noFill();
    strokeWeight(1); 
    stroke('yellow');
    let brushSize = map(mouseY, 0, windowHeight, 0, 30);
    ellipse(mouseX, mouseY, brushSize, brushSize);
    
  } else if (toolChoice == '7') {

    fill(100, 200, 100);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '8') {

    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '9') {

    strokeWeight(10)
    stroke(200,10,35,4,70);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '0') {
    noFill();
    strokeWeight(1); 
    stroke('red');
    let brushSize = map(mouseY, 0, windowHeight, 0, 30);
    ellipse(mouseX, mouseY, brushSize, brushSize);
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
