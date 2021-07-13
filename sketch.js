var ball = {
  x:20,
  y:30,
  r:30,
  xspeed:6,
  ySpeed:6,
  colors:["blue","red","yellow","pink","orange"],
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  circle(ball.x,ball.y,ball.r);
  fill(ball.colors[0]);
  ball.x = ball.x+ball.xspeed;
}