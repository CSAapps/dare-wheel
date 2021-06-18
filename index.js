function e(id) {
    return document.getElementById(id);
}

if (!localStorage.rem)
    localStorage.rem = ".";

var segs = [];

// for (var i = 0; i < dares.length; i++) {
//     segs.push({
//         text: (i + 1) + "",
//         fillStyle: colors[i]
//     });
// }

for (var i = dares.length - 1; i >= 0; i--) {

    if (localStorage.rem.includes('.' + i + '.')) continue;

    segs.push({
        text: (i + 1) + "",
        fillStyle: colors[i]
    });
}

if (segs.length == 0) {
    localStorage.rem = ".";
    location.reload();
}

let wheel = new Winwheel({
    'textAlignment': 'outer',
    'textMargin': 30,
    'textFillStyle': '#ffffff',
    'textFontFamily': 'Comic Sans MS',
    'textFontSize': 30,
    'strokeStyle': '#ffffff',
    'innerRadius': 15,
    'pointerAngle': 90,
    'numSegments': segs.length,
    'segments': segs,
    'animation': {
        'type': 'spinToStop',
        'duration': 5, //5
        'spins': 3, //3
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
var dareTitle = e('dare-title');
var dareText = e('dare-text');

var audioMusic = new Audio('sounds/music2.wav');
var audioLaugh = new Audio('sounds/laugh2.mp3');


function startSpin() {

    audioMusic.play();

    wheel.stopAnimation(false);

    // Reset the rotation angle to less than or equal to 360 so spinning again works as expected.
    // Setting to modulus (%) 360 keeps the current position.
    wheel.rotationAngle = wheel.rotationAngle % 360;


    wheel.startAnimation();
}


function onSpinFinished(seg) {
    audioLaugh.play();

    audioMusic.pause();
    audioMusic.currentTime = 0;

    var dare_indx = seg.text - 1;
    dareBox.style.backgroundColor = colors[dare_indx];
    dareTitle.textContent = '#' + seg.text;
    dareText.textContent = dares[dare_indx];
    modal.style.display = "flex";

    localStorage.rem += dare_indx + '.';
}

function delSeg() {
    var seg_num = wheel.getIndicatedSegmentNumber();
    wheel.deleteSegment(seg_num);
    wheel.draw();
}

function closeDare() {
    delSeg();
    modal.style.display = "none";
}

canvas.onclick = startSpin;

dareClose.onclick = closeDare;

modal.onclick = (e) => {
    if (e.currentTarget == e.target)
        modal.style.display = "none";
    // dareBox.style.opacity = 0.8;
}

dareBox.onclick = () => {
    dareBox.style.opacity = 1;
}