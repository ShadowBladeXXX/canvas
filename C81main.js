var canvas=document.getElementById("drawing");
var ctx=canvas.getContext("2d");
var color="aqua";
 
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(100,100,50,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    circle(mousex,mousey);
}


function circle(x,y){

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(x,y,50,0,2*Math.PI);
    ctx.stroke(); 
}