// Functions for drawing elements on the canvas

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const TAU = Math.PI * 2;
const WIDTH = canvas.width;
const HEIGHT = canvas.height;


function drawCircle(p) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, TAU, true);
    ctx.stroke();
}

function addImage(filename, scale=1, dx=0, dy=0, callback) {
    const image = new Image();
    image.src = 'images/' + filename;
    image.onload = function() {
        const imgWidth = image.width * scale;
        const imgHeight = image.height * scale;
        ctx.drawImage(image, dx, dy, imgWidth, imgHeight);
        callback();
    }
}
