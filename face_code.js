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


function blockHead(tiltValue,  headSize, nostrilLeftX, nostrilRightX, eyeRotationLeft, eyeRotationRight, redValue, greenValue, blueValue, numberOfEyes) {
  const bg_color3 = [71, 222, 219];
  const fg_color3 = [255, 93, 35, 200];

  //let headSize = 10;
  let centerX = 0;
  let eyeRightX = 3;
  let eyeRightY = -4.5;
  let eyeRightHeight = 4;
  let eyeRightWidth = 2;

  let eyeLeftX = -3;
  let eyeLeftY = -4;
  let eyeLeftHeight = 3.5;
  let eyeLeftWidth = 2;

 
  let nostrilLeftY = 2;
  let nostrilRightY = 2;

  // rotation in degrees
  angleMode(DEGREES);
  rotate(tiltValue);

 // head
  strokeWeight(.2);

  //head
  fill(redValue, greenValue, blueValue);
  ellipse(centerX, -3, headSize, headSize);

  //body
  fill(blueValue, redValue, greenValue, 200);
  triangle(0, 0, 10, 10, -10, 10);

  //neck
  fill(redValue, greenValue, blueValue, 100);
  rect(-4, -3, 8, 10);

  //random eyes
  function randomEyes(eyeX, eyeY, eyeRotation){
  push()
  rotate(0);
  rect(eyeX, eyeY, 4, 4);
  fill(255); 
  ellipse(eyeX+2, eyeY+2, 2);
  fill(0);
  ellipse(eyeX+2, eyeY+2, 1);

  noFill()
  strokeWeight(.6)
  arc(eyeX+1.5, eyeY+2.5, 3, 3, 230, 0);
  pop()
  }

  if(numberOfEyes > 3){
  randomEyes(-6, 5, 120);
  randomEyes(2, -4, 180);
  randomEyes(-2, -8, 0);
  randomEyes(2.5, 4, 0)
  }
  else if(numberOfEyes > 2){
  randomEyes(2, -4, 180);
  randomEyes(-2, -8, 0);
  randomEyes(2.5, 4, 0);
  }
  else if(numberOfEyes > 1){
  randomEyes(-2, -8, 0);
  randomEyes(2.5, 4, 0)
  }
  else if(numberOfEyes){
  randomEyes(2.5, 4, 0);
  }

  //mouthFunction
  push()

  rotate(tiltValue*2);
  //lipBottom
  fill(redValue, greenValue, blueValue)
  ellipse(0, 4, 5, 2);

  //lipTop
  fill(redValue, blueValue, greenValue);
  triangle(0, 2, 3, 4, -3, 4);

  pop();

  push()
  //nose
  scale(1)
  fill(greenValue, redValue, blueValue, 255);
  quad(-1, -5, nostrilLeftX, nostrilLeftY, nostrilRightX, nostrilRightY, 1, -5);
  strokeWeight(.7);
  point(nostrilLeftX+1.2, nostrilLeftY-1);
  point(nostrilRightX-1.2, nostrilRightY-1);

  pop()
  //ear left
  fill(blueValue, greenValue, redValue, 100);
  ellipse(-5, -3, 3, 4);

  //ear right
  fill(redValue, redValue, blueValue, 100);
  ellipse(5, -2, 3, 4);

  //left eye function
  push()
  
  //eye left
  translate(eyeLeftX,eyeLeftY);
  rotate(eyeRotationLeft); ///////////////////// left Eye Rotate 
  fill(255);
  ellipse(0, 0, eyeLeftHeight, eyeLeftWidth);
  //pupilLeft
  fill(0);
  ellipse(0, 0, 1, 1);
  //eyelidLeft
  fill(redValue, greenValue, redValue);
  arc(0, 0, eyeLeftHeight, eyeLeftWidth, 180, 0, CHORD)
  
  pop()


  //right eye function
  push()
  translate(eyeRightX, eyeRightY);
  rotate(eyeRotationRight);
  //eye right
  fill(255);
  ellipse(0, 0, eyeRightHeight, eyeRightWidth);

  //pupilRight
  fill(0);
  ellipse(0, 0, 1, 1);


  //EyelidRight
  fill(greenValue, greenValue, blueValue);
  arc(0, 0, eyeRightHeight, eyeRightWidth, 180, 0, CHORD)
  pop()


  //

}

