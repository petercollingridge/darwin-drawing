// Entry point for program. Determines what gets drawn

function drawCreature(genes) {
    const { head, jaw, eye } = genes;

    // Build creature
    getJawCenter(head, jaw);
    getEyeCenter(head, eye);

    // Draw creature
    ctx.fillStyle = 'none';
    ctx.strokeStyle = '#ccc';

    drawCircle(head);
    drawCircle(jaw);
    drawCircle(eye);
}

drawCreature(lion);
