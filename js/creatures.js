// Genes to define how to draw the creatures

const tiger = {
    name: 'tiger',
    head: {
        x: 410,
        y: 265,
        r: 135
    },
    eye: {
        angle: 0.9,
        distance: 0.16,
        r: 50
    },
    jaw: {
        angle: 0.96,
        distance: 0.5,
        r: 92
    },
    snout: {
        angle: 0.75,
        r: 74,
        length: 180,
        topLength: 0.74,
        topSharpness: 0.6,
        baseLength: 1,
        baseSharpness: 0.4
    },
    mouth: {
        height: 0.5,
        length: 0.1,
    }
};

const fox = {
    name: 'fox',
    head: {
        x: 410,
        y: 280,
        r: 148
    },
    eye: {
        angle: 0.6,
        distance: 0.05,
        r: 80
    },
    jaw: {
        angle: 0.68,
        distance: 0.6,
        r: 85
    },
    snout: {
        angle: 0.36,
        r: 34,
        length: 198,
        topLength: 1,
        topSharpness: 0.6,
        baseLength: 0.7,
        baseSharpness: 0.4
    },
    mouth: {
        height: 0.1,
        length: 0.9,
    }
};

const animalGenes = {
    tiger,
    fox
};
