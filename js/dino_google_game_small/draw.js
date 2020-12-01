class Draw {

    constructor(ctx) {
        this.ctx = ctx;
    }

    drawBackground(MAX_WIDTH, MAX_HEIGHT) {
        this.ctx.clearRect(0, 0, MAX_WIDTH, MAX_HEIGHT)
            // this.ctx.fillStyle = "white";
            // this.ctx.fillRect(0, 0, MAX_WIDTH, MAX_HEIGHT);
    }

    drawDinos(dinos) {
        var dino
        for (let i in dinos) {
            dino = dinos[i];

            if (!dino.isAlive) continue

            this.ctx.fillStyle = dino.color
            this.ctx.fillRect(dino.x, dino.y, dino.width, dino.height)
        }
    }

    drawObstacles(obstacles) {
        var obst

        this.ctx.fillStyle = "white"
        for (let i in obstacles) {
            obst = obstacles[i];

            if (!obst.isShowing) continue
            this.ctx.fillRect(obst.x, obst.y, obst.width, obst.height)
        }
    }
}