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
            // console.log(obstacles)
        this.ctx.fillStyle = "white"
        for (let i in obstacles) {
            obst = obstacles[i];

            if (!obst.isShowing) continue
            this.ctx.fillRect(obst.x, obst.y, obst.width, obst.height)
        }
    }

    /**
     * centralizar os blocos
     */
    drawBrain(brain) {
        var baseY = 0
        var baseX = 0
        for (let i in brain.resultInput) {
            this.ctx.fillStyle = (brain.resultInput[i] > 0) ? "red" : "white"
            this.ctx.fillRect(baseX, baseY, BRAIN_BLOCK_SIZE, BRAIN_BLOCK_SIZE)
            baseY += BRAIN_BLOCK_SIZE * 2
        }

        baseY = 0
        baseX += BRAIN_BLOCK_SIZE * 4
        for (let i in brain.resultHidden) {
            this.ctx.fillStyle = (brain.resultHidden[i] > 0) ? "red" : "white"
            this.ctx.fillRect(baseX, baseY, BRAIN_BLOCK_SIZE, BRAIN_BLOCK_SIZE)
            baseY += BRAIN_BLOCK_SIZE * 2
        }

        baseY = 0
        baseX += BRAIN_BLOCK_SIZE * 4
        for (let i in brain.resultOutput) {
            this.ctx.fillStyle = (brain.resultOutput[i] > 0) ? "red" : "white"
            this.ctx.fillRect(baseX, baseY, BRAIN_BLOCK_SIZE, BRAIN_BLOCK_SIZE)
            baseY += BRAIN_BLOCK_SIZE * 2
        }
    }
}