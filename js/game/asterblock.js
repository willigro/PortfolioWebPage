var ctx
var delay = 0
var maxDistanceToCenter = 0
var starsInterval

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

const START_COUNT = 600
const ASTEROIDS_COUNT = 10
const ASTEROIDS_COUNT_LIMIT = 20

const COLOR_BACKGROUND = "black"
const COLOR_STAR_WHITE = "white"
const COLOR_STAR_ORANGE = "#FC9601"
const COLOR_STAR_YELLOW = "#FFCC33"
const COLOR_STAR_RED = "#D14009"
const COLOR_STAR_BLUE = "#210bc3"

const MOVE_STATUS_RUN_AWAY = 1
const MOVE_STATUS_STOPING = 2
const MOVE_STATUS_TO_CENTER = 3

const BASE_ENEMY_LIFE = 2500
const POINTS_CLOCK = 50
const POWER_UP_CLOCK = 300
const SHOW_HIDE_ANIMATION_DELAY = 1000

var inGame = false
var elementPlay
var elementNewGame
var elementStopGame
var elementGamePanel
var elementInGamePanel
var elementStop
var elementPoints
var elementLife
var elementShieldEnergy
var elementGameTips
var elementSpeed
var elementAtkSpeed
var elementPlayerLevel

var actualPoints = 0
var baseEnemyLife = 0
var _ship;
var _blackHole;
var _asteroids = []
var _shots = []
var _asteroidShots = []
var _powerUps = []
var _allowedEnemies = []
var asteroidVelFactor = 1
const MAX_ASTEROID_VEL = 2.5
var gameClock

var keysDown = []
var mousePressed = false
var mousePositionX = 0
var mousePositionY = 0

window.onload = function() {
    var canvas = document.getElementById("canvas")
    canvas.width = maxWidth
    canvas.height = maxHeight
    ctx = canvas.getContext("2d")
    restaure();
    configure()
    init()
    initScreenEffects()
}

function startStars() {
    init()
}

function stopStars() {
    clearInterval(starsInterval)
    drawBackground();
}

function onMouseMove(event) {
    mousePositionX = event.clientX
    mousePositionY = event.clientY
}

function onMouseDown(event) {
    console.log("down")
    mousePressed = true;
}

function onMouseUp(event) {
    console.log("up")
    mousePressed = false;
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
    pop(keysDown, event.keyCode)
}

function init() {
    console.log("init", starsInterval)
    starsInterval = setInterval(function() {
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
            gameClock.newClock("powerUp", POWER_UP_CLOCK, true, function() {
                tryGenerateNewPowerUp()
            })

            gameClock.newClock("points", POINTS_CLOCK, true, function() {
                actualPoints++;
                updateActualPoints()
            })

            gameClock.newClock("baseEnemyLife", BASE_ENEMY_LIFE, true, function() {
                baseEnemyLife++;
                showEnemyLifeUp()
            })

            gameClock.tick();

            _ship.update()
            _ship.draw()

            for (let a of _asteroids) {
                for (let s of _shots) {
                    if (a.handleHit(s)) {
                        s.destroy()
                        break
                    }
                }
                a.update(_ship)
                a.draw()

                _ship.handleHit(a)
            }

            for (let s of _shots) {
                s.move()
                s.draw()
            }

            for (let s of _asteroidShots) {
                s.move()
                s.draw()

                _ship.handleHit(s)
            }

            for (let p of _powerUps) {
                p.draw()
                if (intersect(p.contact, _ship)) {
                    _ship.usePowerUp(p);
                    p.destroy();
                }
            }
        }
    }, delay);
}

function tryGenerateNewPowerUp() {
    const p = new PowerUp();
    var found = false
    for (let up of _powerUps) {
        if (up.type == p.type) {
            found = true
            break;
        }
    }
    if (!found) {
        _powerUps.push(p);
    }
}

/**
 * Refactor this config
 * 
 */
function configure() {
    _blackHole = new BlackHole()

    configureScreenElements();

    maxDistanceToCenter = distance(0, 0, centerX, centerY)
}

function playerDie() {
    inGame = false
    elementNewGame.show()
    elementStopGame.hide()
    elementGameTips.show()
}

function stopGame() {
    inGame = false;

    document.onkeydown = null;
    document.onkeyup = null;

    _ship = null

    _asteroids = []
    _powerUps = []

    resetEffects()
}

function startNewGame() {
    inGame = true;
    actualPoints = 0
    gameClock = new Clock();
    _powerUps = []
    keysDown = []
    _allowedEnemies = [ENEMY_WHITE]
    _ship = new Ship(centerX, centerY)
    _blackHole.x = centerX
    _blackHole.y = centerY
    mousePositionX = 0
    mousePositionY = 0
    mousePressed = false
    updateStatus()
    startAsteroids()
    updateLifeView()
    updateShieldEnergy()
    updateActualPoints()
    resetEffects()
}

function updateLifeView() {
    elementLife.html(_ship.lifePoints)
}

function updateShieldEnergy() {
    elementShieldEnergy.html(_ship.shieldEnergy)
}

function updateActualPoints() {
    if (actualPoints > 0) {
        if (asteroidVelFactor < MAX_ASTEROID_VEL && actualPoints % 15 == 0) {
            asteroidVelFactor += .1
        }

        if (_asteroids.length < ASTEROIDS_COUNT_LIMIT && actualPoints % 30 == 0) {
            _asteroids.push(new Asteroid())
        }

        if (actualPoints % 20 == 0) {
            _ship.upLevel()
        }

        if (_allowedEnemies.length == 1 && actualPoints % 20 == 0) {
            _allowedEnemies.push(ENEMY_BROWN)
        } else if (_allowedEnemies.length == 2 && actualPoints % 50 == 0) {
            _allowedEnemies.push(ENEMY_BLUE)
        } else if (_allowedEnemies.length == 3 && actualPoints % 100 == 0) {
            _allowedEnemies.push(ENEMY_PINK)
        }
    }

    elementPoints.html(actualPoints)
}

function updateStatus() {
    if (!_ship) return
    elementSpeed.html(_ship.velocity)
    elementAtkSpeed.html(_ship.timeToNewShot)
    elementPlayerLevel.html(_ship.level)
}

function startAsteroids() {
    actualPoints = 0
    asteroidVelFactor = 1

    _asteroids = []
    for (var i = 0; i < ASTEROIDS_COUNT; i++) {
        _asteroids.push(new Asteroid())
    }

    _shots = []
    _asteroidShots = []
}

function drawBackground() {
    ctx.clearRect(0, 0, maxWidth, maxHeight)
    ctx.fillStyle = COLOR_BACKGROUND
    ctx.fillRect(0, 0, maxWidth, maxHeight)
}

function configureScreenElements() {
    elementPlay = $("#play")
    elementNewGame = $("#new-game")
    elementStopGame = $("#stop-game")
    elementGamePanel = $("#game-panel")
    elementGamePanel.height(maxHeight)
    elementInGamePanel = $("#in-game-panel")
    elementStop = $("#stop")
    elementPoints = $("#points")
    elementLife = $("#life")
    elementShieldEnergy = $("#shield-energy")
    elementGameTips = $("#game-tips")
    elementAtkSpeed = $("#atk-speed")
    elementSpeed = $("#speed")
    elementPlayerLevel = $("#player-level")

    const header = $("#header")
    const resume = $("#resume")
    const skill = $("#skills")
    const experience = $("#experience")

    const numbers = $("#android-numbers")
    const own = $("#android-own")
    const libs = $("#android-libs")
    const colaborated = $("#android-colaborated")

    const menu = $("#menu")

    elementPlay.click(function() {
        elementGamePanel.show()
        elementPlay.hide()
        elementGameTips.show()
        elementNewGame.show()
        elementStopGame.hide()

        stopDinoInterval()

        header.hide(SHOW_HIDE_ANIMATION_DELAY)
        resume.hide(SHOW_HIDE_ANIMATION_DELAY)
        skill.hide(SHOW_HIDE_ANIMATION_DELAY)
        experience.hide(SHOW_HIDE_ANIMATION_DELAY)
        menu.hide(SHOW_HIDE_ANIMATION_DELAY)
        own.hide(SHOW_HIDE_ANIMATION_DELAY)
        libs.hide(SHOW_HIDE_ANIMATION_DELAY)
        colaborated.hide(SHOW_HIDE_ANIMATION_DELAY)
        numbers.hide(SHOW_HIDE_ANIMATION_DELAY)
    })

    elementStop.click(function() {
        stopGame()
        elementGamePanel.hide()
        elementPlay.show()

        header.show(SHOW_HIDE_ANIMATION_DELAY)
        resume.show(SHOW_HIDE_ANIMATION_DELAY)
        skill.show(SHOW_HIDE_ANIMATION_DELAY)
        experience.show(SHOW_HIDE_ANIMATION_DELAY)
        menu.show(SHOW_HIDE_ANIMATION_DELAY)
        own.show(SHOW_HIDE_ANIMATION_DELAY)
        libs.show(SHOW_HIDE_ANIMATION_DELAY)
        colaborated.show(SHOW_HIDE_ANIMATION_DELAY)
        numbers.show(SHOW_HIDE_ANIMATION_DELAY)
    })

    elementNewGame.click(function() {
        elementInGamePanel.show()
        elementGameTips.hide()
        elementStopGame.show()
        elementNewGame.hide()

        document.onkeydown = onKeyDown;
        document.onkeyup = onKeyUp;

        startNewGame();
    })

    elementStopGame.click(function() {
        elementGameTips.show()
        elementStopGame.hide()
        elementNewGame.show()

        stopGame()
    })
}

function restaure() {
    delay = 1000 / 30;
}