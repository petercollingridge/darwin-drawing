// Entry point for program. Determines what gets drawn
const showImage = 1;

function drawCreature(genes) {
    const {
        head,
        jaw,
        eye,
        snout,
        mouth,
    } = genes;

    // Build creature
    getJawCenter(head, jaw);
    getEyeCenter(head, eye);
    getSnoutCenter(jaw, snout);

    const nose = getNose(snout, jaw);
    getMouth(mouth, nose, snout);

    // Draw creature
    drawCircle(head);
    // drawCircle(jaw);
    // drawCircle(snout);
    // drawCircle(eye);

    // drawLine(nose.top, snout.top);
    // drawLine(nose.base, snout.base);
    // drawLine(nose.base, nose.top);
    // drawLine(mouth.start, mouth.end);

    // Draw top of snout
    let m = lerpPoint(nose.top, mouth.start, 0.49);
    arcLine(snout.top, nose.top, m, snout.topSharpness);
    arcLine(m, mouth.start, mouth.end, 0.8);

    // Draw bottom of mouth
    m = lerpPoint(nose.base, mouth.start, 0.49);
    arcLine(snout.base, nose.base, m, snout.baseSharpness);
    arcLine(m, mouth.start, mouth.end, 0.8);
}

ctx.fillStyle = 'none';
ctx.lineWidth = 1;
ctx.strokeStyle = 'rgb(0, 0, 0, 0.5)';
drawCreature(tiger);

if (showImage) {
    ctx.fillStyle = 'none';
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(255, 0, 0, 0.5)';
    addImage('tiger.jpg', scale=0.3, dx=50, dy=100, () => drawCreature(tiger));
}

