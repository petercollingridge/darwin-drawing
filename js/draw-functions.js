// Functions for drawing elements on the canvas

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const TAU = Math.PI * 2;
const WIDTH = canvas.width;
const HEIGHT = canvas.height;


function drawCircle(p) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, TAU, true);
    ctx.stroke();
}

function drawLine(p1, p2) {
    ctx.beginPath(); 
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
}

// Draw a curved line from p1 to p2 to p3
function arcLine(p1, p2, p3, curve) {
    let arm1, arm2, arm3, arm4;
    if (curve > 0.5) {
        // Map p back to the range 0 - 1
        const p = curve * 2 - 1;
        arm1 = lerpPoint(p1, p2, p);
        arm4 = lerpPoint(p3, p2, p);
        
        // Control arms end at the vertex
        arm2 = p2;
        arm3 = p2;
    } else {
        arm1 = p1;
        arm4 = p3;
        
        // Control arms move closer to the initial vertices
        const p = 0.5 + curve;
        arm2 = lerpPoint(p1, p2, p);
        arm3 = lerpPoint(p3, p2, p);
    }
    
    ctx.beginPath(); 
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(arm1.x, arm1.y);
    ctx.bezierCurveTo(arm2.x, arm2.y, arm3.x, arm3.y, arm4.x, arm4.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.stroke();
}

// Draw a curved line joining a line to a circle
function curveLineToCircle(c, p1, p2, curve, above) {
    const v = minus(c, p1);
    const d = unitVector(p2, p1);

    // Circle center projected on line
    const dotP = dot(v, d);
    const a = alongVector(p1, d, dotP);

    // Intersection of circle tangent and line
    const corner = alongVector(a, d, -c.r);

    // Point along line p1-p2 where we draw a tangent
    const m = lerpPoint(p1, i, curve);

    // Get point on circle that is tangent to line connecting it to m
    let t = pointCircleTangent(m, c);
    if (!t) { return; }

    if (above) {
        t = t[0].y < t[1].y ? t[0] : t[1];
    } else {
        t = t[0].y > t[1].y ? t[0] : t[1];
    }

    // Bias curve to be closer to 1
    curve = Math.sqrt(curve);
    const arm1 = lerpPoint(p1, m, curve);
    const arm2 = lerpPoint(t, m, curve);

    return [arm1, arm2, t];
}
