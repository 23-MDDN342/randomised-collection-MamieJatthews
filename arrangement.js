/*
 * This program draws your arrangement of faces on the canvas.
 */
const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [71, 222, 219];

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
  rotate(tilt_value);
  rect(-10, -20, 20, 40);
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
        let tilt_value = random(-20, 20);
        let mouth_value = random(3,4);
        let is_cyclops = random(0, 100);

        if(is_cyclops < 10) {
          eye_value = 1;
          tilt_value = random(-5, 5);
          mouth_value = random(0, 1.7);
        }

        push();
        translate(x, y);
        scale(w/30, h/30);

        frame(tilt_value);
        //rect(-10, -20, 20, 40);
        
        orangeAlienFace(tilt_value, eye_value, mouth_value);
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
