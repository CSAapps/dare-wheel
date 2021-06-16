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
        'duration': 5,
        'spins': 8
    }
});