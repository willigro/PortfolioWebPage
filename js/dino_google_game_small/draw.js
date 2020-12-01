class Draw {
    drawBackground(MAX_WIDTH, MAX_HEIGHT) {
        // this.ctx.clearRect(0, 0, MAX_WIDTH, MAX_HEIGHT)
        // this.ctx.fillStyle = "white";
        // this.ctx.fillRect(0, 0, MAX_WIDTH, MAX_HEIGHT);
    }

    drawDinos(dinos) {
        var dino
        for (let i in dinos) {
            dino = dinos[i];

            if (!dino.isAlive) continue

            ctx.fillStyle = dino.color
            ctx.fillRect(dino.x, dino.y, dino.width, dino.height)
        }
    }

    drawObstacles(obstacles) {
        var obst

        ctx.fillStyle = "white"
        for (let i in obstacles) {
            obst = obstacles[i];

            if (!obst.isShowing) continue
            ctx.fillRect(obst.x, obst.y, obst.width, obst.height)
        }
    }
}