(function(){


const canvas = document.getElementById("geometricCanvas");
const ctx = canvas.getContext("2d");


const dx = 1;
const dy = 1;


let red = {x: canvas.width/2, y: canvas.height-250};
let green = {x: canvas.width/2, y: canvas.height-30};

let angle = Math.atan2(red.y + green.y, red.x - green.x);

    document.getElementById("angleOutput").innerHTML = angle * 180/Math.PI +"&#176;";


function drawBall() {
    let slider = document.getElementById("angleRange")
    slider.oninput = function() {
      document.getElementById("angleOutput").innerHTML = this.value + "&#176;";
      angle = this.value * Math.PI/180;
    }

    const sens = 200;
    const length = 0.25;
    let freeDirections = 8;


    //wall
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, 50);
    ctx.lineTo(canvas.width, 50);
    ctx.stroke();


    //view-line
    ctx.strokeStyle = "gray"
    ctx.beginPath();
    ctx.moveTo(red.x,red.y);
    ctx.lineTo(red.x+Math.cos(angle)*175,red.y+Math.sin(angle)*175);
    if (red.y+Math.sin(angle)*sens < 50){
      ctx.strokeStyle = "red";
      freeDirections -= 1;
    }
    ctx.setLineDash([5,3]);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.strokeStyle = "green"

    //left
    ctx.beginPath();
    ctx.moveTo(red.x,red.y);
    ctx.lineTo(red.x+Math.cos(angle+Math.PI/2)*sens*length,red.y+Math.sin(angle+Math.PI/2)*sens*length);
    if (red.y+Math.sin(angle+Math.PI/2)*sens < 50){
      ctx.strokeStyle = "red";
      freeDirections -= 1;
    }
    ctx.stroke();
    ctx.strokeStyle = "green"

    //back-left
    ctx.beginPath();
    ctx.moveTo(red.x,red.y);
    ctx.lineTo(red.x-Math.cos(angle+Math.PI/4)*sens*length,red.y-Math.sin(angle+Math.PI/4)*sens*length);
    if (red.y-Math.sin(angle+Math.PI/4)*sens < 50){
      ctx.strokeStyle = "red";
      freeDirections -= 1;
    }
    ctx.stroke();
    ctx.strokeStyle = "green"

    //forward-left
    ctx.beginPath();
    ctx.moveTo(red.x,red.y);
    ctx.lineTo(red.x+Math.cos(angle-Math.PI/4)*sens*length,red.y+Math.sin(angle-Math.PI/4)*sens*length);
    if (red.y+Math.sin(angle-Math.PI/4)*sens < 50){
      ctx.strokeStyle = "red";
      freeDirections -= 1;
    }
    ctx.stroke();
    ctx.strokeStyle = "green"

 //right
    ctx.beginPath();
    ctx.moveTo(red.x,red.y);
    ctx.lineTo(red.x+Math.cos(angle-Math.PI/2)*sens*length,red.y+Math.sin(angle-Math.PI/2)*sens*length);
    if (red.y+Math.sin(angle-Math.PI/2)*sens < 50){
      ctx.strokeStyle = "red";
      freeDirections -= 1;
    }
    ctx.stroke();
    ctx.strokeStyle = "green"

    //back-right
    ctx.beginPath();
    ctx.moveTo(red.x,red.y);
    ctx.lineTo(red.x-Math.cos(angle-Math.PI/4)*sens*length,red.y-Math.sin(angle-Math.PI/4)*sens*length);
    if (red.y-Math.sin(angle-Math.PI/4)*sens < 50){
      ctx.strokeStyle = "red";
      freeDirections -= 1;
    }
    ctx.stroke();
    ctx.strokeStyle = "green"

  //forward-right
    ctx.beginPath();
    ctx.moveTo(red.x,red.y);
    ctx.lineTo(red.x+Math.cos(angle+Math.PI/4)*sens*length,red.y+Math.sin(angle+Math.PI/4)*sens*length);
    if (red.y+Math.sin(angle+Math.PI/4)*sens < 50){
      ctx.strokeStyle = "red";
      freeDirections -= 1;
    }
    ctx.stroke();
    ctx.strokeStyle = "green"

    //back
    ctx.beginPath();
    ctx.moveTo(red.x,red.y);
    ctx.lineTo(red.x+Math.cos(angle-Math.PI)*sens*length,red.y+Math.sin(angle-Math.PI)*sens*length);
    if (red.y+Math.sin(angle-Math.PI)*sens < 50){
      ctx.strokeStyle = "red";
      freeDirections -= 1;
    }
    ctx.stroke();
    ctx.strokeStyle = "green"





    ctx.beginPath();
    ctx.arc(red.x, red.y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();


    green.x = red.x+Math.cos(angle)*175;
    green.y = red.y+Math.sin(angle)*175;
    ctx.beginPath();
    ctx.arc(green.x, green.y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#32CD32";
    ctx.fill();
    ctx.closePath();}


    //document.getElementById("directions").innerHTML = freeDirections;




function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    var angle = Math.atan2(red.y - green.y, red.x - green.x);

}
setInterval(draw, 10);
}());