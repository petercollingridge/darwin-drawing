// Linearly interpolate between a and b by amount t
function lerp(a, b, t) {
    return a + (b - a) * t;
}

// Return a point at a given distance and angle from another point
function getPointAtAngle(point, angle, distance) {
    return {
        x: point.x + distance * Math.cos(angle),
        y: point.y + distance * Math.sin(angle)
    };
}

// Given two circles, return an array of 4 points
// defining the ends of the two outer tangent lines
function circleOuterTangents(p1, p2) {
    const dist = distance(p1, p2);
    const dr = (p2.r - p1.r) / dist;
    
    // If one circle inside the other
    if (Math.abs(dr) > 1) { return; }

    // Equivalent to sin of the angle between a line
    // between the centers and the tangent line
    const R = Math.sqrt(1 - dr * dr);
    const diff = unitVector(p2, p1);

    const a = dr * diff.x - diff.y * R;
    const b = dr * diff.y + diff.x * R;
    const c = dr * diff.x + diff.y * R;
    const d = dr * diff.y - diff.x * R;

    return [
        { x: p1.x - a * p1.r, y: p1.y - b * p1.r },
        { x: p2.x - a * p2.r, y: p2.y - b * p2.r },
        { x: p1.x - c * p1.r, y: p1.y - d * p1.r },
        { x: p2.x - c * p2.r, y: p2.y - d * p2.r }
    ];
};
