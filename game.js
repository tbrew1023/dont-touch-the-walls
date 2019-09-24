var x, y, z;
var xpos, ypos;
var speed = 1;
a = 0;
trail = [];

function setup() 
{
  rectMode(CENTER);
  // set canvas size
  createCanvas(windowWidth, windowHeight);

  // default values
  xpos = windowWidth/2;
  ypos = windowHeight/2;
  x = 0;
  y = 0;
}

function draw() 
{
  // set background color to white
  background(0);

  console.log('speed: ' + speed);
  

  // add/subract xpos and ypos
  xpos = xpos - x;
  ypos = ypos + (y - 10);

  // wrap ellipse if over bounds
  if(xpos > windowWidth) { 
    xpos = windowWidth; 
    x=-x 
  }
  if(xpos < 0) { 
    xpos = 0; 
    x=-x
  }
  if(ypos > windowHeight) { 
    ypos = windowHeight; 
    y=-y 
  }
  if(ypos < 0) { 
    ypos = 0; 
    y=-y 
  }

  // draw ellipse
  fill(255, 0, 0);
  ellipse(xpos, ypos, 25, 25);
  // music
  

  
  // display variables
  fill(255);
  noStroke();
  text("x: " + x, 25, 25);
  text("y: " + y, 25, 50);
  text("z: " + z, 25, 75); 
}

// accelerometer Data
window.addEventListener('devicemotion', function(e) 
{
  // get accelerometer values
  x = parseInt(e.accelerationIncludingGravity.x);
  y = parseInt(e.accelerationIncludingGravity.y);
  z = parseInt(e.accelerationIncludingGravity.z);

  if(x == 0 && y == 0) {
    //speed = 0;
  }
  else {
    //speed = 2;
  }
});