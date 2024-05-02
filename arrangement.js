/*
 * This program draws your arrangement of faces on the canvas.
 */
const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [156, 102, 53];

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}



function mouseClicked() {
  changeRandomSeed();
}

function frame (tilt_value){
  push();
  rotate(tilt_value);
  push()
  fill(92, 60, 31);
  noStroke();
  rect(-8, -18, 20, 40);
  pop()
  rect(-10, -20, 20, 40);
  fill(240);
  noStroke();
  quad (-9.5, 0, -9.5, -3, 0, -19.5, 2, -19.5);
  quad (-9.5, -4, -9.5, -5, -1, -19.5, -.5, -19.5);
  pop();
}


function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  //noStroke();

  // draw a 7x4 grid of faces
  let w = canvasWidth / 3;
  let h = canvasHeight / 2;
  for(let i=0; i<1; i++) {
    for(let j=0; j<3; j++) {
      let y = h;
      let x = w/2 + w*j;
     
        // center face
        let eye_value = int(random(2,4));
        let tilt_value = random(-10, 10);
        let mouth_value = random(3,4);
        let is_cyclops = random(0, 100);
        let noseLeftPoint = random(-4,0 );
        let noseRightPoint = random(0, 4);
        let eyeRotL = random(0, 360);
        let eyeRotR = random(0, 360);
        let red = random(100, 200);
        let green = random(100,200);
        let blue = random(100, 200);
        let Hsize = random(8, 12);
        let numberOfEyes = random(['1', '2', '3', '4']);

        push();
        translate(x, y);
        scale(w/30, h/30);

        frame(tilt_value);
        //rect(-10, -20, 20, 40);
        
        blockHead(tilt_value, Hsize, noseLeftPoint, noseRightPoint, eyeRotL, eyeRotR, red, green, blue, numberOfEyes);
        pop();
      
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
