// Functions for drawing elements on the canvas

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const TAU = Math.PI * 2;
const WIDTH = canvas.width;
const HEIGHT = canvas.height;


// Given a set of lines, draw them as a continuous path
function drawPath(lines) {
    const p = lines[0].p1
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    lines.forEach(line => line.draw());
    ctx.stroke();
}

function getLine(p1, p2) {
    return {
        p1, p2,
        draw: () => {
            ctx.lineTo(p2.x, p2.y);
        }
    }
}

function getBezier(p1, arm1, arm2, p2) {
    return {
        p1, arm1, arm2, p2,
        draw: () => {
            ctx.bezierCurveTo(arm1.x, arm1.y, arm2.x, arm2.y, p2.x, p2.y);
        }
    }
}

function drawCircle(p, r) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, r || p.r, 0, TAU, true);
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
    
    return [
        getLine(p1, arm1),
        getBezier(arm1, arm2, arm3, arm4),
        getLine(arm4, p3),
    ];
}

// Draw a curved line joining a line to a circle
function curveLineToCircle(c, p1, p2, curve, above, flip) {
    const v = minus(c, p1);
    const d = unitVector(p2, p1);

    // Circle center projected on line
    const dotP = dot(v, d);
    const a = alongVector(p1, d, dotP);

    // Intersection of circle tangent and line
    const corner = alongVector(a, d, -c.r);

    // Point along line p1-p2 where we draw a tangent
    const m = lerpPoint(p1, corner, curve);

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

    if (flip) {
        return getBezier(t, arm2, arm1, p1);
    } else {
        return getBezier(p1, arm1, arm2, t);
    }
}
