// create variables
var bg,bg2,bg3,form,system,code,security;

// creates variable score and assign 0 value
var score = 0;

function preload() {
  // load images for the background
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  bg3 = loadImage("aladdin_cave2.jpg");
  
}

function setup() {
  // creates canvas
  createCanvas(1000,500);
  // creates new security object & system object
  security = new Security();
  system = new System();

}

function draw() {
    // gives background image
    background(bg);
    // calls clues function
    clues();
    // calls display function of security object
    security.display();

  // gives size,colour and position to text & display score
  textSize(20);
  fill("white");
  text("Score: " + score, 870, 50);

    // code for changing the background to the treasure background if score is 3
    if(score === 3) {
      // calls clear function
      clear();
      background(bg2);
      fill("black");
      textSize(40);
      text("TREASURE UNLOCKED",250, 200);
    } 

  // draw sprite objects
  drawSprites()
}