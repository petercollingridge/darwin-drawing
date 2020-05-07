// Functions for drawing elements on the canvas

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const TAU = Math.PI * 2;


function drawCircle(p) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, TAU, true);
    ctx.stroke();
}
