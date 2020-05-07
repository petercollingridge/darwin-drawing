// Entry point for program. Determines what gets drawn

function drawCreature(genes) {
    const {
        head,
        jaw,
        eye,
        snout,
    } = genes;

    // Build creature
    getJawCenter(head, jaw);
    getEyeCenter(head, eye);
    getSnoutCenter(jaw, snout);

    const nose = getNose(snout, jaw);

    // Draw creature
    ctx.fillStyle = 'none';
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(255, 0, 0, 0.5)';

    drawCircle(head);
    // drawCircle(jaw);
    // drawCircle(snout);
    // drawCircle(eye);

    drawLine(nose.top, snout.top);
    drawLine(nose.base, snout.base);
    drawLine(nose.base, nose.top);
}

addImage('tiger.jpg', scale=0.3, dx=100, dy=50, () => drawCreature(tiger));
