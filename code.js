var canvas = {
    ele: undefined,
    gfx: undefined,

    width: undefined,
    height: undefined,

    setDimensions: function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    },
}

window.onload = function() {
    console.log("hello");
    canvas.ele = document.getElementById("gc");
    canvas.gfx = canvas.ele.getContext("2d");

    canvas.gfx.fillStyle = "red";
    canvas.gfx.fillRect(0, 0, 10, 10);
}
