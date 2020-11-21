var ctx
var delay = 1000 / 30
var maxDistanceToCenter = 0

var stars = []

const centerX = maxWidth / 2
const centerY = maxHeight / 2

const MAX_VEL = 3
const MIN_VEL = 1
const ACELARATION = .1

const TURNS_TO_GO_TO_CENTER = 25
const STAR_MAX_SIZE = 1.7
const CLOSE_TO_WALL = 10
const TO_CLOSE = 100
const MAX_RADIUS = 100000

const START_COUNT = 1000
const ASTEROIDS_COUNT = 10

const COLOR_BACKGROUND = "black"
const COLOR_STAR_WHITE = "white"
const COLOR_STAR_ORANGE = "#FC9601"
const COLOR_STAR_YELLOW = "#FFCC33"
const COLOR_STAR_RED = "#D14009"
const COLOR_STAR_BLUE = "#210bc3"

const MOVE_STATUS_RUN_AWAY = 1
const MOVE_STATUS_STOPING = 2
const MOVE_STATUS_TO_CENTER = 3

var inGame = false
var elementStop
var elementPoints
var actualPoints = 0

var _ship;
var _blackHole;
var _asteroids = []
var _shots = []
var asteroidVelFactor = 1

var keysDown = []

/*
todo:
OK - asteroids move to shiep;
OK - when die, the blackhole receive the x and y from shiep
OK - shiep move with a w s d
OK - when onMouseOver (click), the shiep will shot;
OK - shot need have a time to do a new shot;
OK - life point to die;
OK - show life;
shot control;
*/

window.onload = function() {
    var canvas = document.getElementById("canvas")
    canvas.width = maxWidth
    canvas.height = maxHeight
    ctx = canvas.getContext("2d")
    configure()
    init()
}

function onMouseMove(event) {

}

function onMouseDown(event) {
    // if (!_blackHole) return
    // _blackHole.x = event.clientX
    // _blackHole.y = event.clientY

    if (inGame && _ship) {
        _ship.shotTo(event.clientX, event.clientY)
    }
}

function onKeyDown(event) {
    if (keysDown.length == 0) {
        keysDown.push(event.keyCode)
    } else {
        var found = false
        for (let key of keysDown) {
            if (event.keyCode == key) {
                found = true
                break
            }
        }
        if (!found)
            keysDown.push(event.keyCode)
    }
}

function onKeyUp(event) {
    let index = keysDown.indexOf(event.keyCode);
    if (index !== -1) {
        keysDown.splice(index, 1);
    }
}

function init() {
    setInterval(function() {
        drawBackground();

        if (stars.length < START_COUNT) {
            for (var i = 0; i < 10; i++)
                stars.push(new Star(random(maxWidth), random(maxHeight), stars.length))
        }

        _blackHole.draw()
        for (let s of stars) {
            s.update()
        }

        if (inGame) {
            _ship.update()
            _ship.draw()

            for (let a of _asteroids) {
                for (let s of _shots) {
                    if (a.handleHit(s)) {
                        s.destroy()
                        break
                    }
                }
                a.moveTo(_ship)
                a.draw()

                _ship.handleHit(a)
            }

            for (let s of _shots) {
                s.move()
                s.draw()
            }
        }

    }, delay);
}

/**
 * Refactor this config
 * 
 */
function configure() {
    _blackHole = new BlackHole()

    const elementPlay = $("#play")
    elementStop = $("#stop")
    elementPoints = $("#points")

    const header = $("#header")
    const resume = $("#resume")
    const skill = $("#skills")

    const numbers = $("#android-numbers")
    const own = $("#android-own")
    const libs = $("#android-libs")
    const colaborated = $("#android-colaborated")

    const menu = $("#menu")

    elementPlay.click(function() {
        document.onkeydown = onKeyDown;
        document.onkeyup = onKeyUp;
        inGame = true;
        _ship = new Ship(centerX, centerY)
        startAsteroids()
        elementStop.show()
        elementPlay.hide()
        updateLifeView()
        elementPoints.show()
        actualPoints = 0
        updateActualPoints()
        header.hide(1000)
        resume.hide(1000)
        skill.hide(1000)
        menu.hide(1000)
        own.hide(1000)
        libs.hide(1000)
        colaborated.hide(1000)
        numbers.hide(1000)
    })

    elementStop.click(function() {
        document.onkeydown = null;
        document.onkeyup = null;
        inGame = false;
        _ship = null
        _asteroids = []
        elementStop.hide()
        elementStop.html("Stop")
        elementPlay.show()
        elementPoints.hide()
        _blackHole.x = centerX
        _blackHole.y = centerY

        header.show(1000)
        resume.show(1000)
        skill.show(1000)
        menu.show(1000)
        own.show(1000)
        libs.show(1000)
        colaborated.show(1000)
        numbers.show(1000)
    })

    maxDistanceToCenter = distance(0, 0, centerX, centerY)
}

function updateLifeView() {
    elementStop.html("Stop " + _ship.lifePoints)
}

function updateActualPoints() {
    if (actualPoints % 5 == 0) {
        asteroidVelFactor += .1
    }
    elementPoints.html(actualPoints)
}

function startAsteroids() {
    actualPoints = 0
    asteroidVelFactor = 1

    _asteroids = []
    for (var i = 0; i < ASTEROIDS_COUNT; i++) {
        _asteroids.push(new Asteroid())
    }

    _shots = []
}

function drawBackground() {
    ctx.clearRect(0, 0, maxWidth, maxHeight)
    ctx.fillStyle = COLOR_BACKGROUND
    ctx.fillRect(0, 0, maxWidth, maxHeight)
}