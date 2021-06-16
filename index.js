function e(id) {
    return document.getElementById(id);
}
var segs = [];

for (var i = 0; i < dares.length; i++) {
    segs.push({
        text: (i + 1) + "",
        fillStyle: colors[i]
    });
}

let wheel = new Winwheel({
    'textAlignment': 'outer',
    'textMargin': 30,
    'textFillStyle': '#ffffff',
    'textFontFamily': 'Comic Sans MS',
    'textFontSize': 30,
    'strokeStyle': '#ffffff',
    'pointerAngle': 90,
    'numSegments': segs.length,
    'segments': segs,
    'animation': {
        'type': 'spinToStop',
        'duration': 1,
        'spins': 1,
        'callbackFinished': onSpinFinished
    }
    // 'pointerGuide': {
    //     'display': true,
    //     'strokeStyle': 'red',
    //     'lineWidth': 3
    // }
});

var canvas = e('canvas');
var label = e('label');
var modal = e('myModal');
var dareBox = e('dare-box');
var dareClose = e('dare-close');

function startSpin() {
    // Stop any current animation.
    wheel.stopAnimation(false);

    // Reset the rotation angle to less than or equal to 360 so spinning again works as expected.
    // Setting to modulus (%) 360 keeps the current position.
    wheel.rotationAngle = wheel.rotationAngle % 360;

    // Start animation.
    wheel.startAnimation();
}

function onSpinFinished(s) {
    // label.innerText = JSON.stringify(s);


    var ra = wheel.rotationAngle % 360;
    var sa = 0 + s.startAngle;
    var ea = 0 + s.endAngle;

    console.log(ra, ra, sa, ea);

    // if (Math.abs(ra + 90 - sa) < 5 || Math.abs(ra + 90 - ea) < 5) {
    //     alert("fwa");
    //     wheel.rotationAngle += 10;
    //     wheel.draw();
    // }


    var seg = wheel.getIndicatedSegment();
    var seg_num = wheel.getIndicatedSegmentNumber();
    var dare_indx = seg.text - 1;

    label.innerText += " | " + (wheel.rotationAngle % 360) + ":" + "";


    dareBox.style.backgroundColor = colors[dare_indx];
    modal.style.display = "flex";
}
canvas.onclick = startSpin;

dareClose.onclick = function() {
    modal.style.display = "none";
}