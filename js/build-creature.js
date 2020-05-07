// Functions for convert creature parameters/genes to diagram elements,
// such as circles and lines

// Add a point to the object <obj> at a given <angle> and <distance> from an existing <point>
function addPolarPoint(obj, startPoint, angle, distance) {
    const center = getPointAtAngle(startPoint, angle, distance);
    Object.assign(obj, center);
}

function getJawCenter(head, jaw) {
    const angle = lerp(Math.PI / 2, Math.PI, jaw.angle);
    const distance = jaw.distance * head.r;
    addPolarPoint(jaw, head, angle, distance);
}

function getEyeCenter(head, eye) {
    const angle = lerp(Math.PI * 160/180, Math.PI * 210/180, eye.angle);
    const distance = eye.distance * head.r + (head.r - eye.r);
    addPolarPoint(eye, head, angle, distance);
}
