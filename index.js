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
        'duration': 5,
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
    prompt(dares[seg.text - 1]);
    // wheel.deleteSegment(seg_num);
    // wheel.draw();
}
// canvas.onclick = startSpin;

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}