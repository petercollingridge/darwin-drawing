// Entry point for program. Determines what gets drawn
const showImage = 0;
const animal = 'tiger';
const genes = animalGenes[animal];

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

    // Get array of lines to draw creature
    let lines = [];

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
    lines = lines.concat(arcLine(snout.top, nose.top, m, snout.topSharpness));
    lines = lines.concat(arcLine(m, mouth.start, mouth.end, 0.8));

    // Draw bottom of mouth
    m = lerpPoint(nose.base, mouth.start, 0.49);
    lines = lines.concat(arcLine(mouth.end, mouth.start, m, 0.8));
    lines = lines.concat(arcLine(m, nose.base, snout.base, snout.baseSharpness));

    drawPath(lines);
}


if (showImage) {
    ctx.fillStyle = 'none';
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(255, 0, 0, 0.5)';

    addImageOfAnimal(animal, () => drawCreature(genes));
} else {
    ctx.fillStyle = 'none';
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgb(0, 0, 0, 0.5)';
    drawCreature(genes);
}

