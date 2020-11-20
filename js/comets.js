var ctx
var delay = 1000 / 30

const COLOR_BACKGROUND = "black"
const COLOR_STAR_WHITE = "rgb(190, 190, 190)"
const COLOR_STAR_ORANGE = "rgba(254, 181, 72, 0.82)"
const COLOR_STAR_YELLOW = "rgba(255, 209, 71, 0.71)"
const COLOR_STAR_RED = "rgba(206, 64, 9, 0.79)"
const COLOR_STAR_BLUE = "rgba(37, 13, 222, 0.8)"

const COMETS_COUNT = 25
const STARS_COUNT = 100

var comets = []
var stars = []

window.onload = function() {
    var canvas = document.getElementById("canvas")
    canvas.width = maxWidth
    canvas.height = maxHeight
    ctx = canvas.getContext("2d")
    configure()
    init()
}

function init() {
    setInterval(function() {
        drawBackground();
        for (let s of stars) {
            s.move()
            s.draw()
        }

        for (let c of comets) {
            c.move()
            c.draw()
            c.trail()
        }

    }, delay);
}

function configure() {
    for (var i = 0; i < COMETS_COUNT; i++) {
        comets.push(new Comet())
    }

    for (var i = 0; i < STARS_COUNT; i++) {
        stars.push(new Star())
    }
}

function drawBackground() {
    ctx.clearRect(0, 0, maxWidth, maxHeight)
    ctx.fillStyle = COLOR_BACKGROUND
    ctx.fillRect(0, 0, maxWidth, maxHeight)
}

const MOVE = 3
const MIN_SIZE_LESS = .1
const MAX_SIZE_LESS = .3
const LESS = .05

class Comet {
    constructor() {
        this.start()
    }

    start() {
        this.tick = 0
        this.x = randomMin(maxWidth / 2, maxWidth * 2)
        this.y = 0 - randomMin(0, maxHeight)
        this.lastX = this.x
        this.lastY = this.y
        this.size = randomNotZero(4)
        this.ticksToChangeTrail = randomMin(5, 40)
        this.lessSize = this.randomTrailLess()
        this.initialLessSize = this.lessSize
        this.color = randomMin(180, 255)
        if (this.color > 255) this.color = 255
        this.directionX = this.randomDirection()
        this.directionY = this.randomDirection()
    }

    randomDirection() {
        if (Math.random() > .5) return 1
        return -1
    }

    move() {
        this.x -= MOVE * this.directionX
        this.y += MOVE * this.directionY

        if (this.directionX == 1 && this.lastX > maxWidth ||
            this.directionX == -1 && this.lastX < 0 ||
            this.directionY == 1 && this.lastY > maxHeight ||
            this.directionY == -1 && this.lastY < 0)
            this.start()
    }

    draw() {
        ctx.fillStyle = "rgb(" + this.color + "," + this.color + "," + this.color + ")"
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }

    trail() {
        var size = this.size
        var x = this.x
        var y = this.y

        const p = MOVE - 1
        this.adjustTrail()

        var t = 0
        while (size > 0) {
            size -= this.lessSize
            x += p * this.directionX
            y -= p * this.directionY
            ctx.fillRect(x, y, size, size)
            t++
        }

        this.lastX = x
        this.lastY = y
    }

    randomTrailLess() {
        var less = Math.random()
        while (less > MAX_SIZE_LESS || less < MIN_SIZE_LESS) {
            less = Math.random()
        }
        return less
    }

    adjustTrail() {
        this.tick++;

        if (this.tick < this.ticksToChangeTrail) return

        this.tick = 0

        if (Math.random() > .5)
            this.lessSize -= LESS
        else
            this.lessSize += LESS

        if (this.lessSize <= MIN_SIZE_LESS) {
            this.lessSize = this.initialLessSize
        }

        if (this.lessSize > this.initialLessSize) {
            this.lessSize = this.initialLessSize
        }
    }
}

class Star {
    constructor() {
        this.x = random(maxWidth)
        this.y = random(maxHeight)
        this.size = random(4)
        if (this.size == 0) this.size = Math.random()
        this.color = this.randomStarColor()
        this.tickToMove = randomMin(20, 50)
        this.tick = 0
        this.moved = 0
        this.sideToMode = 1
        this.maxToMode = randomNotZero(5)
    }

    randomStarColor() {
        const r = Math.random()
        if (r < .8) return COLOR_STAR_WHITE
        if (r < .85) return COLOR_STAR_ORANGE
        if (r < .9) return COLOR_STAR_YELLOW
        if (r < .95) return COLOR_STAR_RED
        return COLOR_STAR_BLUE
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }

    move() {
        this.tick++;

        if (this.tick < this.tickToMove) return

        this.tick = 0
        const toMoveX = Math.random()
        const toMoveY = Math.random()
        this.x -= toMoveX * this.sideToMode
        this.y -= toMoveY * this.sideToMode
        this.moved += toMoveX + toMoveY

        if (this.moved >= this.maxToMode) {
            this.moved = 0
            this.sideToMode *= -1
        }
    }
}