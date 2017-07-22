var canvas = {
    ele: undefined,
    gfx: undefined,

    width: undefined,
    height: undefined,

    setDimensions: function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        canvas.ele.width = canvas.width;
        canvas.ele.height = canvas.height;

        resetLines();
    },
}

function genRandColor() {
    return "rgb(" + Math.round(Math.random() * 255) + ", " + Math.round(Math.random() * 255) + ", " + Math.round(Math.random() * 255) +")";
}

window.onload = function() {
    console.log("hello");
    canvas.ele = document.getElementById("gc");
    canvas.gfx = canvas.ele.getContext("2d");

    canvas.setDimensions();

    for (var i = 0; i < 10; i++) {
        new Line(genRandColor(), 6, 9, canvas.width / 2, canvas.height / 2, 4);
    }


    setInterval(function() {
        let numLines = lines.length;
        for (var i = 0; i < numLines; i++) {
            lines[i].update();
            lines[i].render();
        }
    }, 1000/60);

    setInterval(resetLines, 10000);

    window.addEventListener("resize", canvas.setDimensions);
}

