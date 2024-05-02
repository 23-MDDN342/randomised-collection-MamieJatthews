/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

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

// global variables for colors
const bg_color1 = [71, 222, 219]

function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

  // draw a 7x4 grid of faces
  let w = canvasWidth / 7;
  let h = canvasHeight / 4;
  for(let i=0; i<4; i++) {
    for(let j=0; j<7; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
      if (i == 0) {
        // center face
        let eye_value = 2;
        let tilt_value = random(-30, 30);
        let mouth_value = random(1, 3);

        
        let headSize = 10;
        let centerX = 0;
        let eyeRightX = 3;
        let eyeRightY = -4.5;
        let eyeRightHeight = 4;
        let eyeRightWidth = 2;

        let eyeLeftX = -3;
        let eyeLeftY = -4;
        let eyeLeftHeight = 3.5;
        let eyeLeftWidth = 2;

        let nostrilLeftX = random(-4, );
        let nostrilLeftY = 2;
        let nostrilRightX = 2;
        let nostrilRightY = 2;

        let is_cyclops = random(0, 100);
        if(is_cyclops < 10) {
          eye_value = 1;
          tilt_value = random(-5, 5);
          mouth_value = random(5, 10);
          
        }
        push();
        translate(x, y);
        scale(w/25, h/25);
        blockHead(tilt_value, eye_value, mouth_value);
        pop();
      }
      else if (i > 0) {
        // all other faces
        push();
        translate(x, y);
        scale(w/25, h/25);
        if((i+j)%2 == 0) {
          simplePurpleFace();
        }
        else {
          thinness_value = random(0, 100);
          blockyFace(thinness_value);
        }
        pop();
      }
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
