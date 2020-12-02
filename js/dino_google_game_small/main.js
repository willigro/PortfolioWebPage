var interval

const _genetic = new Genetic()
var actualEra = 1
var _draw
var dinoList = []
var trees = []
var obstacles = []
var score_to_speed = 0
var to_next_speed = 300
var base_multiple_to_next_speed = 1.5

var _game_speed = BASE_SPEED
var score_to_tree = 0
var object_score = 0
var plane_score = 0

var best_dino = null
var global_best_dino = null
var alives = 0

var starsIntervalDino

var elementDinoActualScore
var elementDinoBestScore
var elementDinosAlive

function configureDino() {
    $("#train-my-dino").hide();
    $("#stop-train-my-dino").show();
    $("#canvas-dino").show(500);
    $("#canvas-dino-brain").show(500);

    var canvasDino = document.getElementById("canvas-dino")
    var canvasDinoBrain = document.getElementById("canvas-dino-brain")

    _draw = new Draw(canvasDino.getContext("2d"))
    _drawBrain = new Draw(canvasDinoBrain.getContext("2d"))

    elementDinoActualScore = $("#dino_actual_score")
    elementDinoBestScore = $("#dino_best_score")
    elementDinosAlive = $("#dino_alive")
}

function initDinoGame() {
    prepareEnemyObjects()
    initialDinos()
    startDinoInterval()
}

function startDinoInterval() {
    clearInterval(starsIntervalDino)
    starsIntervalDino = setInterval(function() {
        updateDino();
    }, 1000 / 30)
}

function stopDinoInterval() {
    $("#train-my-dino").show();
    $("#stop-train-my-dino").hide();
    $("#canvas-dino").hide(500);
    $("#canvas-dino-brain").hide(500);

    clearInterval(starsIntervalDino)
}

function updateDino() {
    update();
    render();
}

function initialDinos() {
    dinoList = []
    for (let i = 0; i < DINO_POPULATION; i++) {
        dinoList.push(new Dino())
    }
}

function prepareEnemyObjects() {
    _game_speed = BASE_SPEED
    score_to_speed = 0
    score_to_tree = 0
    object_score = 0

    trees = []
    obstacles = []
}

function update() {
    score_to_speed++
    tryUpSpeed()

    generateObstacles()

    for (let i in obstacles) {
        obstacles[i].update(score_to_speed)
    }

    var dino
    var next
    alives = 0
    for (let i in dinoList) {
        dino = dinoList[i]

        if (best_dino == null || dino.score > best_dino.score) {
            best_dino = dino
        }

        dino.update()

        if (dino.isAlive) {
            alives++

            next = getNextFromObstacles(dino)

            if (dino.isColiding(next))
                dino.die()
            else
            if (next) {
                dino.predict(next[0])
            }
        }
    }

    var allDie = true
    for (let i in dinoList) {
        if (dinoList[i].isAlive) {
            allDie = false
            break
        }
    }

    if (allDie) {
        newEra()
    }
}

function generateObstacles() {
    object_score++

    var removed = false
    for (let i = 0; i < obstacles.length; i++) {
        const t = obstacles[i]
        if (t.outMap()) {
            obstacles.splice(i, 1)
            i--
            removed = true
        }
    }

    if (obstacles.length == 0 || removed && obstacles.length < 5) {
        var last = (obstacles.length > 0) ? obstacles[obstacles.length - 1] : null

        var distance = (last && last.x >= TREE_START_X) ? last.getRight() : TREE_START_X
        distance += getDistanceObstacle()

        obstacles.push(new Tree(distance, OBJECT_WIDTH * randomNotZero(2)))

        if (object_score >= 500) {
            object_score = (_game_speed > 10) ? 200 : 0
            const d = obstacles[obstacles.length - 1].getRight() + getDistanceObstacle()
            obstacles.push(new Tree(d, OBJECT_WIDTH * randomNotZero(3)))
        }
    }
}

function getDistanceObstacle() {
    return MIN_ENEMY_DISTANCE + ((MIN_ENEMY_DISTANCE * _game_speed / 100) * 2)
}

function tryUpSpeed() {
    if (_game_speed < MAX_SPEED && score_to_speed > to_next_speed) {
        _game_speed++
        to_next_speed *= base_multiple_to_next_speed;
    }
}

function getNextFromObstacles(dino) {
    var next = null
    if (dino) {
        var obstacle
        for (let i in obstacles) {
            obstacle = obstacles[i]
            if (obstacle.x > dino.x) {
                const d = dino.distance(obstacle)
                if (next == null || next[1] > d)
                    next = [obstacle, d]
            }
        }
    }
    return next
}

function render() {
    elementDinosAlive.html(alives + " of " + DINO_POPULATION)
    _draw.drawBackground(maxWidth, maxHeight)
    _draw.drawDinos(dinoList)
    _draw.drawObstacles(obstacles)
    if (best_dino) {
        elementDinoActualScore.html(best_dino.score)
        _drawBrain.drawBackground(maxWidth, maxHeight)
        _drawBrain.drawBrain(best_dino.brain)
    }
}

function newEra() {
    actualEra++
    stopDinoGame()
    if (actualEra < ERAS) {
        dinoList = _genetic.envolve(dinoList)

        if (global_best_dino == null || best_dino.score > global_best_dino.score)
            global_best_dino = best_dino
        best_dino = null
        initDinoGame()
    }

    elementDinoBestScore.html(global_best_dino.score)
}

function stopDinoGame() {
    clearInterval(interval)
}