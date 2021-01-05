var ctx
var delay = 1000 / 30

const COLOR_BACKGROUND = "black"
const COLOR_STAR_WHITE = "rgb(190, 190, 190)"
const COLOR_STAR_ORANGE = "rgba(254, 181, 72, 0.82)"
const COLOR_STAR_YELLOW = "rgba(255, 209, 71, 0.71)"
const COLOR_STAR_RED = "rgba(206, 64, 9, 0.79)"
const COLOR_STAR_BLUE = "rgba(37, 13, 222, 0.8)"

const COMETS_COUNT = 25
const STARS_COUNT = 250

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

        // console.log(comets[0])
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

const MIN_SIZE_LESS = .1
const MAX_SIZE_LESS = .3
const LESS = .05

class Comet {
    constructor() {
        this.distance = (maxHeight > maxWidth) ? maxHeight : maxWidth
        this.start()
    }

    start() {
        this.tick = 0
        this.x = random(maxWidth * 2)
        this.y = random(maxHeight * 2)
        if (Math.random() > .5) {
            this.y *= -1
        }

        if (Math.random() > .5) {
            this.x *= -1
        }

        this.lastX = this.x
        this.lastY = this.y
        this.size = randomNotZero(4)
        this.ticksToChangeTrail = randomMin(5, 40)
        this.lessSize = this.randomTrailLess()
        this.initialLessSize = this.lessSize
        this.color = randomMin(180, 255)
        if (this.color > 255) this.color = 255

        this.in = false
            // this.directionX = this.randomDirection()
            // this.directionY = this.randomDirection()

        const dx = maxWidth / 2 - this.x
        const dy = maxHeight / 2 - this.y

        const angle = Math.atan2(dy, dx);
        this.initialAngle = angle
        this.actualAngle = angle

        this.velocity = randomNotZero(6)
    }

    randomDirection() {
        if (Math.random() > .5) return 1
        return -1
    }

    move() {
        this.actualAngle = this.actualAngle - 0.001
        this.x += this.velocity * Math.cos(this.actualAngle)
        this.y += this.velocity * Math.sin(this.actualAngle)

        // console.log({ x: this.lastX, y: this.lastY, width: 1, height: 1 }, { x: 0, y: 0, width: maxWidth, height: maxHeight })
        // adjust it
        // if (this.directionX == 1 && this.lastX > maxWidth ||
        //     this.directionX == -1 && this.lastX < 0 ||
        //     this.directionY == 1 && this.lastY > maxHeight ||
        //     this.directionY == -1 && this.lastY < 0)
        //     this.start();
    }

    draw() {
        ctx.fillStyle = "rgb(" + this.color + "," + this.color + "," + this.color + ")"
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }

    trail() {
        var size = this.size
        var x = this.x
        var y = this.y

        const p = this.velocity - 1
        this.adjustTrail()

        var t = 0
        while (size > 0) {
            size -= this.lessSize
            x -= p * Math.cos(this.actualAngle)
            y -= p * Math.sin(this.actualAngle)
            ctx.fillRect(x, y, size, size)
            t++
        }

        this.lastX = x
        this.lastY = y

        // if (this.in) {
        //     if (!intersectRect({ x: this.lastX, y: this.lastY, width: 1, height: 1 }, { x: 0, y: 0, width: maxWidth, height: maxHeight })) {
        //         console.log("out")
        //         this.start()
        //     }
        // } else {
        //     if (intersectRect({ x: this.lastX, y: this.lastY, width: 3, height: 3 }, { x: 0, y: 0, width: maxWidth, height: maxHeight })) {
        //         this.in = true
        //         console.log("in")
        //     }
        // }

        if (distance(this.x, this.y, maxWidth / 2, maxHeight / 2) > this.distance * 1.5) {
            this.start()
        }
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
        this.initialX = random(maxWidth)
        this.initialY = random(maxHeight)
        this.x = this.initialX
        this.y = this.initialY
        this.velocity = Math.random()
        this.initialAngle = randomF(2) //-2.6386326206064994
        if (Math.random() > .5)
            this.initialAngle *= -1
        this.start()
    }

    start() {
        this.color = this.randomStarColor()
        this.size = randomF(2)
        if (this.size == 0) this.size = Math.random()
        this.actualAngle = this.initialAngle
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
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }

    move() {
        this.actualAngle = this.actualAngle - 0.001

        let velX = this.velocity * Math.cos(this.actualAngle)
        let velY = this.velocity * Math.sin(this.actualAngle)
        this.x -= velX
        this.y -= velY

        if (this.x > maxWidth || this.y > maxHeight) {
            this.start()
            this.x = random(maxWidth)
            this.y = random(maxHeight)
        }
    }
}