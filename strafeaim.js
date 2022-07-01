const canvas = document.getElementById("strafeaimCanvas");
const ctx = canvas.getContext("2d");

const dx = 1;
const dy = 1;

let direction = {red: 1, green: -1};
let hsw = 0
let offset = 0

let red = {x: canvas.width/2, y: canvas.height-270};
let green = {x: canvas.width/2, y: canvas.height-80};

function drawBall() {
    ctx.beginPath();
    ctx.arc(red.x, red.y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(green.x, green.y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#32CD32";
    ctx.fill();
    ctx.closePath();
}

function mirror() {
  offset = 0;
   red = {x: canvas.width/2, y: canvas.height-270};
  green = {x: canvas.width/2, y: canvas.height-80};
  direction.green = direction.red * -1;
}

function antiMirror() {
  offset = 0;
  red = {x: canvas.width/2, y: canvas.height-270};
  green = {x: canvas.width/2, y: canvas.height-80};
  direction.green = direction.red;
}

function hswMirror (){
    offset = Math.PI/4;
  red = {x: canvas.width/2, y: canvas.height-270};
  green = {x: canvas.width/2, y: canvas.height-80};
  direction.green = direction.green * -1;

}

function hswAntiMirror(){
    offset = Math.PI/4;
    red = {x: canvas.width/2, y: canvas.height-270};
  green = {x: canvas.width/2, y: canvas.height-80};
  direction.green = direction.red;
}

function changeDirection() {
  direction.red = direction.red * -1
  if (hsw != 1){
  direction.green = direction.green * -1
}
else
{
}

}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    let angle = Math.atan2(red.y - green.y, red.x - green.x);

    if (red.x + Math.cos(angle-direction.red*Math.PI/2)*dx-10 < 160 || red.x + Math.cos(angle-direction.red*Math.PI/2)*dx+10 > canvas.width-160){
      changeDirection();
    }

    if (green.x + Math.cos(angle+direction.green*Math.PI/2)*dx-10 < 160 || green.x + Math.cos(angle+direction.green*Math.PI/2)*dx+10 > canvas.width-160){
      changeDirection();
    }

    red.x += Math.cos(angle-direction.red*Math.PI/2)*dx;
    red.y += Math.sin(angle-direction.red*Math.PI/2)*dy;

    green.x += Math.cos(angle+offset+direction.green*Math.PI/2)*dx;
    green.y += Math.sin(angle+offset+direction.green*Math.PI/2)*dy;
}
setInterval(draw, 10);
