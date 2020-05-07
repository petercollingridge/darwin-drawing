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

    // Draw creature
    ctx.fillStyle = 'none';
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(255, 255, 255, 100)';

    drawCircle(head);
    drawCircle(jaw);
    drawCircle(eye);
}

addImage('tiger.jpg', scale=0.3, dx=100, dy=50, () => drawCreature(tiger));
