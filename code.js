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
    },
}

window.onload = function() {
    console.log("hello");
    canvas.ele = document.getElementById("gc");
    canvas.gfx = canvas.ele.getContext("2d");

    canvas.setDimensions();
    
    canvas.gfx.fillStyle = "black";
    canvas.gfx.fillRect(0, 0, canvas.width, canvas.height);

    var testLine = new Line("blue", 5, 7, canvas.width / 2, canvas.height / 2, 2);
    setInterval(function() {
        testLine.update();
        testLine.render();
    }, 1000/60);
}
