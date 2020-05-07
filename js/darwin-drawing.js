// Entry point for program. Determines what gets drawn

function drawCreature(genes) {
    const { head, jaw } = genes;

    // Build creature
    getJaw(head, jaw);

    // Draw creature
    ctx.fillStyle = 'none';
    ctx.strokeStyle = '#ccc';

    drawCircle(head);
    drawCircle(jaw);
}

drawCreature(lion);
