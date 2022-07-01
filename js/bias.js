(function(){
const canvas = document.getElementById("biasCanvas");
const ctx = canvas.getContext("2d");

const dx = 1
const dy = 1;

let direction = {green: -1};

let green = {x: canvas.width/2, y: canvas.height/2};

function drawBall() {

    ctx.beginPath();
    ctx.arc(green.x, green.y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#32CD32";
    ctx.fill();
    ctx.closePath();
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

    if (green.x + dx*direction.green - 10 < 0){
      changeDirection();
    }
    if (green.x + dx*direction.green + 10 > canvas.width)
    {
      changeDirection();
    }
    green.x += dx*direction.green

  }
setInterval(draw, 10);
setTimeout(fake, 500)
}());