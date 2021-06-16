function e(id) {
    return document.getElementById(id);
}
var segs = [];

for (var i = 0; i < dares.length; i++) {
    segs.push({
        text = i + 1,
        fillStyle = colors[i]
    });
}

let wheel = new Winwheel({
    'numSegments': 4,
    'textOrientation': 'vertical',
    'segments': [{
        'fillStyle': '#eae56f',
        'text': '1'
    }, {
        'fillStyle': '#89f26e',
        'text': '2'
    }, {
        'fillStyle': '#7de6ef',
        'text': '3'
    }, {
        'fillStyle': '#e7706f',
        'text': '4'
    }],
    'animation': {
        'type': 'spinToStop',
        'duration': 2,
        'spins': 3,
        'callbackFinished': onSpinFinished
    },
    'pointerGuide': {
        'display': true,
        'strokeStyle': 'red',
        'lineWidth': 3
    }
});

var canvas = e('canvas');
var label = e('label');

function startSpin() {
    // Stop any current animation.
    wheel.stopAnimation(false);

    // Reset the rotation angle to less than or equal to 360 so spinning again works as expected.
    // Setting to modulus (%) 360 keeps the current position.
    wheel.rotationAngle = wheel.rotationAngle % 360;

    // Start animation.
    wheel.startAnimation();
}

function onSpinFinished(seg) {
    var seg_num = wheel.getIndicatedSegmentNumber();
    label.innerText = seg_num;
    prompt(seg.text);
    wheel.deleteSegment(seg_num);
    wheel.draw();
}
canvas.onclick = startSpin;