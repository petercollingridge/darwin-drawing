function add(v1, v2) {
    return {
        x: v1.x + v2.x,
        y: v1.y + v2.y
    };
}

function minus(v1, v2) {
    return {
        x: v1.x - v2.x,
        y: v1.y - v2.y
    };
}

function multiply(v1, s) {
    return { x: v1.x * s, y: v1.y * s };
}

function magnitude(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}

function normalise(v) {
    const d = magnitude(v);
    return { x: v.x / d, y: v.y / d };
}

function distance(v1, v2) {
    return magnitude(minus(v1, v2));
}

function unitVector(p1, p2) {
    return normalise(minus(p1, p2));
}

function lerpPoint(p1, p2, p) {
    return add(p1, multiply(minus(p2, p1), p));
}
