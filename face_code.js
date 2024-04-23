/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */


function orangeAlienFace(tilt_value, eye_value, mouth_value) {
  const bg_color3 = [71, 222, 219];
  const fg_color3 = [255, 93, 35, 200];

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
  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value/10);

 // head
  strokeWeight(.2);

  //head
  fill(fg_color3);
  ellipse(centerX, -3, headSize, headSize);

  //body
  fill(30, 100, 10, 200);
  triangle(0, 0, 10, 10, -10, 10);

  //neck
  fill(0, 0, 100, 100);
  rect(-4, -3, 8, 10);

  //mouthFunction
  push()

  rotate(tilt_value*2);
  //lipBottom
  fill(100, 0, 100)
  ellipse(0, 4, 5, 2);

  //lipTop
  fill(100, 0, 150);
  triangle(0, 2, 3, 4, -3, 4);

  pop();

  //nose
  fill(100, 0, 0, 255);
  rect(-1, -5, 2, 8);

  //ear left
  fill(0, 0, 100, 100);
  ellipse(-5, -3, 3, 4);

  //ear right
  fill(0, 100, 100, 100);
  ellipse(5, -2, 3, 4);

  //eye left
  fill(255);
  ellipse(eyeLeftX, eyeLeftY, eyeLeftHeight, eyeLeftWidth);

  //eye right
  fill(255);
  ellipse(eyeRightX, eyeRightY, eyeRightHeight, eyeRightWidth);

  //pupilRight
  fill(0);
  ellipse(eyeRightX, eyeRightY, 1, 1);

  //pupilLeft
  fill(0);
  ellipse(eyeLeftX, eyeLeftY, 1, 1);

  //EyelidRight
  fill(0, 100, 0,);
  arc(eyeRightX, eyeRightY, eyeRightHeight, eyeRightWidth, 180, 0, CHORD)

  //eyelidLeft
  fill(0, 100, 0,);
  arc(eyeLeftX, eyeLeftY, eyeLeftHeight, eyeLeftWidth, 180, 0, CHORD)

}

