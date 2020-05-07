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
