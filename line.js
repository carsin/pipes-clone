var lines = [];

function resetLines() {
    canvas.gfx.fillStyle = "black"; 
    canvas.gfx.fillRect(0, 0, canvas.width, canvas.height);

    let numLines = lines.length;
    for (var i = 0; i < numLines; i++) {
        lines[i].reset();
    }
}

function Line(color, height, width, x, y, speed) {
    this.color = color;
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.dir = Math.round(Math.random() * 3);

    this.render = function() {
        // canvas.gfx.fillStyle = "black";
        // canvas.gfx.fillRect(this.x - 2, this.y, this.width + 4, this.height);
        canvas.gfx.fillStyle = this.color;
        canvas.gfx.fillRect(this.x, this.y, this.width, this.height);
    }

    this.update = function() {
        let chanceToChangeDir = Math.random();
        if (chanceToChangeDir >= 0.95) {
            this.dirChangeCount = 0;
            let newVar = Math.round(Math.random() * 3);
            switch (this.dir) {
                case 0:
                    if (newVar !== 2) this.dir = newVar;
                    break;
                case 1:
                    if (newVar !== 3) this.dir = newVar;
                    break;
                case 2:
                    if (newVar !== 0) this.dir = newVar;
                    break;
                case 3:
                    if (newVar !== 1) this.dir = newVar;
                    break;
                default:
                    console.log("Error: Bad input");
            }
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

    this.reset = function() {
        console.log("reset");
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height / 2 - this.height / 2
    }

    lines.push(this); 

}
