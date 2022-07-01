const canvas = document.getElementById("strafeaimCanvas");
const ctx = canvas.getContext("2d");

const dx = 1;
const dy = 1;

let direction = {red: 1, green: -1};

let red = {x: canvas.width/2+direction.red*47*dx, y: canvas.height-250};
let green = {x: canvas.width/2-direction.green*47*dx, y: canvas.height-30};

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
  direction.green = direction.red * -1;
}

function antiMirror() {
  direction.green = direction.red;
}

function changeDirection() {
  direction.red = direction.red * -1
  direction.green = direction.green * -1
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    let angle = Math.atan2(red.y - green.y, red.x - green.x);

    red.x += Math.cos(angle-direction.red*Math.PI/2)*dx;
    red.y += Math.sin(angle-direction.red*Math.PI/2)*dy;

    green.x += Math.cos(angle+direction.green*Math.PI/2)*dx;
    green.y += Math.sin(angle+direction.green*Math.PI/2)*dy;
}
setInterval(draw, 10);
setInterval(changeDirection,1000);
