// Functions for convert creature parameters/genes to diagram elements,
// such as circles and lines

// Determine the position of the jaw circle
function getJaw(head, jaw) {
    const angle = lerp(Math.PI / 2, Math.PI, jaw.angle);
    const center = getPointAtAngle(head, angle, jaw.distance * head.r);
    Object.assign(jaw, center);
}
