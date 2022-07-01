(function(){
const canvas = document.getElementById("biasCanvas");
const ctx = canvas.getContext("2d");

const dx = 1;
const dy = 1;

let direction = {green: -1};

let green = {x: canvas.width/2, y: 100};
let red = {x: canvas.width/2, y: canvas.height-50}


function drawBall() {

    ctx.beginPath();
    ctx.arc(green.x, green.y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#32CD32";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height-50, 10, 0, Math.PI*2);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();

    ctx.strokeStyle = "gray"
    ctx.moveTo(canvas.width/2, canvas.height-50);
    ctx.lineTo(green.x,green.y);
    ctx.setLineDash([5,3]);
    ctx.stroke();
    ctx.setLineDash([]);
    
}



function changeDirection() {
  direction.green = direction.green * -1
}

function fake(){
 changeDirection();
 setTimeout(changeDirection, Math.random() * 400);
 setTimeout(fake, Math.random() * 1900);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    let angle = Math.atan2(red.y - green.y, red.x - green.x);


    if (green.x + dx*direction.green - 10 < 120){
      changeDirection();
    }
    if (green.x + dx*direction.green + 10 > 360)
    {
      changeDirection();
    }

    green.x += Math.cos(angle-direction.green*Math.PI/2)*dx;
    green.y += Math.sin(angle-direction.green*Math.PI/2)*dy;

  }
setInterval(draw, 10);
setTimeout(fake, 500);
}());