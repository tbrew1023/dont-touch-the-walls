var x, y, z;
var xpos, ypos;
var speed = 1;
a = 0;
trail = [];
let levels = [];
let currentLevel = 0;
let ballSize = 25;

function setup() {
  levels.push(loadImage("./levelsnew/level1.png"));
  levels.push(loadImage("./levelsnew/level2.png"));
  levels.push(loadImage("./levelsnew/level2-2.png"));
  levels.push(loadImage("./levelsnew/level3.png"));
  levels.push(loadImage("./levelsnew/level3-3.png"));
  levels.push(loadImage("./levelsnew/level4.png"));
  levels.push(loadImage("./levelsnew/level4-2.png"));
  levels.push(loadImage("./levelsnew/level4-3.png"));
  levels.push(loadImage("./levelsnew/level5.png"));
  levels.push(loadImage("./levelsnew/level5-2.png"));
  levels.push(loadImage("./levelsnew/level5-3.png"));
  levels.push(loadImage("./levelsnew/level6.png"));
  levels.push(loadImage("./levelsnew/level6-2.png"));
  levels.push(loadImage("./levelsnew/level6-3.png"));
  console.log(levels)

  for(i = 0; i < levels.length; i++) {
    new Image(levels[i], 0, 0, windowWidth, windowHeight);
  }

  rectMode(CENTER);
  // set canvas size
  createCanvas(windowWidth, windowHeight);


  // default values
  xpos = windowWidth/2;
  ypos = 50;
  x = 0;
  y = 0;
}

function draw() 
{
  // set background color to white
  background(levels[currentLevel]);
  //image(img, 0, 0);

  //console.log('speed: ' + speed);
  

  // add/subract xpos and ypos
  xpos = xpos - x;
  ypos = ypos + y;

  if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
    background(0,0,0);
    console.log('apple device');
    xpos = xpos + x;
    ypos = ypos - y;
  }

  //current collision
  console.log(get(xpos, ypos)[1]);
  console.log('x: ' + xpos + ' y: ' + ypos);

  //loss condition
  if((get(xpos, ypos)[2] == 224) || (get(xpos, ypos)[2] == 225) || (get(xpos, ypos)[2] == 255)) {
    console.log('dead');
    xpos = windowWidth/2;
    ypos = 30;
  }
  //win condition
  if((get(xpos, ypos)[2] == 161) || (get(xpos, ypos)[2] == 249) || (get(xpos, ypos)[2] == 250)) {
    console.log('win');
    xpos = windowWidth/2;
    ypos = 30;
    currentLevel++;
  }


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

  // draw ball
  fill('#C06C84');
  ellipse(xpos, ypos, ballSize);
  // music
  

  
  // display variables
  fill('#bdbdbd');
  noStroke();
  text("Don't touch the walls!", 25, 25);
  text("x: " + x, 25, 75);
  text("y: " + y, 25, 100);
  text("z: " + z, 25, 125); 
}

// accelerometer Data
window.addEventListener('devicemotion', function(e) 
{

  //console.log('device moved');
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