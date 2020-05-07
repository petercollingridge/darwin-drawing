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

function getSnoutCenter(jaw, snout) {
    const angle = lerp(Math.PI, Math.PI * 135/180, snout.angle);
    console.log(angle);
    addPolarPoint(snout, jaw, angle, snout.length);
}

function getNose(snout, jaw) {
    // Join snout to jaw with tangents
    const [p1, p2, p3, p4] = circleOuterTangents(snout, jaw);
    snout.top = p2;
    snout.base = p4;

    // Adjust lengths for the nose
    return {
        top: lerpPoint(snout.top, p1, lerp(0.2, 1, snout.topLength)),
        base: lerpPoint(snout.base, p3, lerp(0.2, 1, snout.baseLength))
    };
}