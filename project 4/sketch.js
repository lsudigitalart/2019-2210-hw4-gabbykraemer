var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;

var xBallChange = 5;
var yBallChange = 5;

var xPaddle;
var yPaddle;
var paddleWidth = 150;
var paddleHeight = 25;

var started = false;

var score = 0;

function setup() {
    createCanvas(800,600);
  }
  function draw() {
    background(100,30,175);
fill(205, 53, 140);
noStroke();
ellipse(xBall, yBall, diameter, diameter);
xBall += xBallChange;
yBall += yBallChange;
if (xBall < diameter/2 ||
    xBall > 800 - 0.5*diameter) {
xBallChange *= -1;
}
if (yBall < diameter/2 ||
   yBall > 600 - diameter) {
yBallChange *= -1;
}
if ((xBall > xPaddle &&
    xBall < xPaddle + paddleWidth) &&
    (yBall + (diameter/2) >= yPaddle)) {
xBallChange *= -1;
yBallChange *= -1;
score++;
}
if (!started) {
    xPaddle = windowWidth / 30;
    yPaddle = windowHeight - 100;
    started = true;
  }
  fill(102, 25, 25);
noStroke();
rect(xPaddle, yPaddle, paddleWidth, paddleHeight);
fill(102, 25, 25);
textSize(24);
text("Score: " + score, 10, 45);
  }
  function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xPaddle -= 100;
  } else if (keyCode === RIGHT_ARROW) {
    xPaddle += 100;
  }
}
