function drawCreature(genes) {
    const { head } = genes;

    // Outline style
    ctx.fillStyle = 'none';
    ctx.strokeStyle = '#ccc';

    drawCircle(head);

}

drawCreature(lion);
