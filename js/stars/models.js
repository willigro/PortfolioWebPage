class Asteroid {
    constructor() {
        this.start()
    }

    start() {
        this.x = this.generatePosition(maxWidth)
        this.y = this.generatePosition(maxHeight)
        this.horizontal = 1
        this.vertical = 1
        this.size = 15
        this.velocity = Math.random() * 5 * asteroidVelFactor
        if (this.velocity < 3) this.velocity = 3
    }

    generatePosition(max) {
        const r = randomMin(50, max)
        if (Math.random() > .5) {
            return 0 - r
        }
        return max + r
    }

    moveTo(target) {

        const dx = target.x - this.x
        const dy = target.y - this.y

        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        this.x += this.velocity * Math.cos(angle / 180 * Math.PI)
        this.y += this.velocity * Math.sin(angle / 180 * Math.PI)
    }

    handleHit(shot) {
        if (intersect(shot, this)) {
            this.destroy()
            actualPoints++
            updateActualPoints()
            return true
        }
        return false
    }

    destroy() {
        this.start()
    }

    draw() {
        if (this.destroyed) return

        ctx.fillStyle = "white"
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }
}

class Shot {
    constructor(x, y, toX, toY) {
        this.x = x
        this.y = y

        this.velocity = 7
        this.size = 4

        const dx = toX - this.x
        const dy = toY - this.y

        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        this.velX = this.velocity * Math.cos(angle / 180 * Math.PI)
        this.velY = this.velocity * Math.sin(angle / 180 * Math.PI)
    }

    move() {
        this.x += this.velX
        this.y += this.velY

        if (this.x < 0 || this.x > maxWidth || this.y < 0 || this.y > maxHeight) {
            this.destroy()
        }
    }

    destroy() {
        let index = _shots.indexOf(this);
        if (index !== -1) {
            _shots.splice(index, 1);
        }
    }

    draw() {
        ctx.fillStyle = "blue"
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }
}

class Ship {
    constructor() {
        this.velocity = 5
        this.size = 5
        this.timeToNewShot = 15
        this.currentShotTime = 0
        this.canShot = true
        this.start()
    }

    start() {
        this.x = centerX
        this.y = centerY
        console.log(this.x, this.y)
        this.lifePoints = 10
    }

    update() {
        if (this.currentShotTime <= 0) {
            this.currentShotTime = this.timeToNewShot
            this.canShot = true
        }
        this.currentShotTime--;

        this.move()
    }

    move() {
        // put break
        for (let keyCode of keysDown) {
            if (keyCode == 65) // left a
                this.x -= this.velocity

            if (keyCode == 87) // top w
                this.y -= this.velocity

            if (keyCode == 68) // right d
                this.x += this.velocity

            if (keyCode == 83) // bottom s
                this.y += this.velocity
        }

        // _blackHole.x = this.x
        // _blackHole.y = this.y
    }

    shotTo(x, y) {
        if (this.canShot) {
            _shots.push(new Shot(this.x, this.y, x, y))
            this.canShot = false
        }
    }

    draw() {
        ctx.fillStyle = "red"
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }

    handleHit(asteroid) {
        if (intersect(asteroid, this)) {

            asteroid.destroy()

            --this.lifePoints;

            if (this.lifePoints <= 0) {
                this.die()
            }
            updateLifeView()
        }
    }

    die() {
        _blackHole.x = this.x
        _blackHole.y = this.y
        this.start()
        startAsteroids()
    }
}

class BlackHole {
    constructor() {
        this.x = centerX
        this.y = centerY
        this.m = 1.989 * Math.pow(10, 30)
        this.r = 212244.432
        this.size = STAR_MAX_SIZE * 2
    }

    draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
            // ctx.fillRect(this.x, this.y, this.size, this.size)
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}

class Star {
    constructor(x, y, position) {
        this.x = x
        this.y = y
        this.rx = x
        this.ry = y
        this.position = position
        this.horizontal = 0
        this.vertical = 0
        this.vel = MIN_VEL
        this.color = this.randomStarColor()

        this.moveStatus = MOVE_STATUS_TO_CENTER
        this.turnsToStop = 0

        this.r = randomMin(1, MAX_RADIUS)
        this.size = valueFromPercentage(percentage(this.r, MAX_RADIUS), STAR_MAX_SIZE)
        if (this.size == 0) this.size = 0.5

        this.velX = 0
        this.velY = 0

        this.g = 6.6742e-11
    }

    function(val, max, min) { return (val - min) / (max - min); }

    update() {
        // if (this.insideCenter) return

        this.draw()
        this.tryMoveToCenter()
    }

    randomStarColor() {
        const r = Math.random()
        if (r < .8) return COLOR_STAR_WHITE
        if (r < .85) return COLOR_STAR_ORANGE
        if (r < .9) return COLOR_STAR_YELLOW
        if (r < .95) return COLOR_STAR_RED
        return COLOR_STAR_BLUE
    }

    runAway(x, y) {
        this.insideCenter = false

        if (this.moveStatus != MOVE_STATUS_RUN_AWAY) {
            this.horizontal = (Math.random() > .5) ? 1 : -1
            this.vertical = (Math.random() > .5) ? 1 : -1

            this.moveStatus = MOVE_STATUS_RUN_AWAY
        }

        this.applyForce()

        if (this.closeToSideWalls()) {
            this.horizontal *= -1
        }

        if (this.closeToTopBottomWalls()) {
            this.vertical *= -1
        }

        this.move()
    }

    move() {
        if (this.moveStatus == MOVE_STATUS_RUN_AWAY) {
            this.x += this.horizontal * this.vel
            this.y += this.vertical * this.vel
        } else {
            this.orbit()
        }
    }

    orbit() {
        // mass1 = sun mass2 = earth
        // radius distance
        // const centripetalForce = mass * acceleration
        // const acceleration = Math.pow(velocityToPow, 2) / radius
        // const gravitation = gravity * (mass1 * mass2 / Math.pow(radius, 2))
        // const v2 = gravity * mass1 / radius
        // const velocity = Math.sqrt(gravity * mass1 / radius)
        const rdt = 1
        const dt = .000000001
        const r = _blackHole.r * dt + this.r * dt + distance(this.rx, this.y, _blackHole.x, _blackHole.y)
        const velocity = Math.sqrt(6.6742e-11 * dt * _blackHole.m * dt / r) // m * .000000000001
        this.rx += velocity * rdt * Math.cos(r) - Math.sin(r)
        this.ry += velocity * rdt * Math.sin(r) + Math.cos(r)
        this.x = this.rx
        this.y = this.ry
            // if (this.position == 0)
            // if (this.x > maxWidth || this.x < 0)
            //     console.log(this.x, this.y, maxWidth, maxHeight, velocity, this.position)
    }

    // There is not delay, so i can put the max or min value without aceleration
    applyForce() {
        this.vel = MAX_VEL
    }

    stop() {
        if (this.moveStatus == MOVE_STATUS_RUN_AWAY)
            this.moveStatus = MOVE_STATUS_STOPING
    }

    stopping() {
        this.vel = MIN_VEL
        this.turnsToStop += 1
        if (this.turnsToStop == TURNS_TO_GO_TO_CENTER) {
            this.turnsToStop = 0
            this.moveStatus = MOVE_STATUS_TO_CENTER
        }
    }

    tryMoveToCenter() {
        if (this.moveStatus == MOVE_STATUS_RUN_AWAY) return

        if (this.moveStatus == MOVE_STATUS_STOPING) {
            this.stopping()
            this.move()
            return
        }

        const percentToCenter = percentage(this.distance(centerX, centerY), maxDistanceToCenter)
        this.angle = valueFromPercentage(100 - percentToCenter, 20)

        this.setDirectionToCenter()

        if (percentToCenter < .3) {
            this.insideCenter = true
        }

        this.vel = valueFromPercentage(100 - percentToCenter, MAX_VEL)

        if (this.vel < MIN_VEL) {
            this.vel = MIN_VEL
        }

        if (this.vel > MAX_VEL) {
            this.vel = MAX_VEL
        }

        this.move()
    }

    setDirectionToCenter() {
        if (this.leftTo(centerX)) {
            this.horizontal = 1
        } else {
            this.horizontal = -1
        }

        if (this.topTo(centerY)) {
            this.vertical = 1
        } else {
            this.vertical = -1
        }

        if (this.closeToSideWalls()) {
            this.horizontal *= -1
        }

        if (this.closeToTopBottomWalls()) {
            this.vertical *= -1
        }
    }

    closeToSideWalls() {
        return this.x - CLOSE_TO_WALL < 0 || this.x > CLOSE_TO_WALL > maxWidth
    }

    closeToTopBottomWalls() {
        return this.y - CLOSE_TO_WALL < 0 || this.y > CLOSE_TO_WALL > maxHeight
    }

    leftTo(x) {
        return this.x < x
    }

    rightTo(x) {
        return this.x > x
    }

    topTo(y) {
        return this.y < y
    }

    bottomTo(y) {
        return this.y > y
    }

    draw() {
        if (this.x > 0 && this.x < maxWidth && this.y > 0 && this.y < maxHeight) {
            ctx.fillStyle = this.color
                // ctx.fillRect(this.x, this.y, this.size, this.size)
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }
    }

    distance(x, y) {
        return Math.sqrt(
            Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2)
        )
    }
}