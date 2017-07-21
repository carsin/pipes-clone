var lines = [];

function Line(color, height, width, x, y, speed) {
    this.color = color;
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.dir = Math.round(Math.random() * 3);
    this.dirChangeCount = 0;

    this.render = function() {
        // canvas.gfx.fillStyle = "black";
        // canvas.gfx.fillRect(this.x - 2, this.y, this.width + 4, this.height);
        canvas.gfx.fillStyle = this.color;
        canvas.gfx.fillRect(this.x, this.y, this.width, this.height);
    }

    this.update = function() {
        this.dirChangeCount++;
        if (this.dirChangeCount >= 20) {
            this.dirChangeCount = 0;
            this.dir = Math.round(Math.random() * 3);
            console.log(this.dir);
        }

        //     ^
        //     0
        // < 3   1 >
        //     2
        //     V

        switch(this.dir) {
            case 0: this.y -= this.speed; break;
            case 1: this.x += this.speed; break;
            case 2: this.y += this.speed; break;
            case 3: this.x -= this.speed; break;
            default: console.log("Error: no direction specified.");
        }

    }
}
