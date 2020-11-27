const maxRectangleHitHeight = valueFromPercentage(10, maxHeight)
const maxRectangleHitWidth = valueFromPercentage(10, maxWidth)

var elementSpeedEffect
var elementAtkSpeedEffect
var elementHpEffect
var elementShieldEffect
var elementLevelUpEffect
var elementPowerUpBaseEnemyLifeEffect
var elementBaseLifeEffect

const MAX_TIME_POWER_UP_EFFECT = 25
const MAX_TIME_ENEMY_LIFE_UP_EFFECT = 75

function initScreenEffects() {
    elementSpeedEffect = $("#power-up-received-speed")
    elementAtkSpeedEffect = $("#power-up-received-atk-speed")
    elementHpEffect = $("#power-up-received-hp")
    elementShieldEffect = $("#power-up-received-shield")
    elementLevelUpEffect = $("#power-up-received-level-up")
    elementPowerUpBaseEnemyLifeEffect = $("#power-up-received-base-enemy-life")
    elementBaseLifeEffect = $("#enemy-base-life")
}

function resetEffects() {
    elementSpeedEffect.hide()
    elementAtkSpeedEffect.hide()
    elementHpEffect.hide()
    elementShieldEffect.hide()
    elementLevelUpEffect.hide()
    elementPowerUpBaseEnemyLifeEffect.hide()
    elementBaseLifeEffect.hide()
    elementBaseLifeEffect.html(0)
}

function showLevelUpEffect() {
    showPowerUpEffectGameClock("levelUp", MAX_TIME_POWER_UP_EFFECT, elementLevelUpEffect)
}

function showPowerUpEffect(powerUp) {
    type = Number.isInteger(powerUp) ? powerUp : powerUp.type
    switch (type) {
        case POWER_HP:
            showPowerUpEffectGameClock(powerUp, MAX_TIME_POWER_UP_EFFECT, elementHpEffect)
            break;
        case POWER_ATK_SPEED:
            console.log(powerUp)
            showPowerUpEffectGameClock(powerUp, MAX_TIME_POWER_UP_EFFECT, elementAtkSpeedEffect)
            break;
        case POWER_SPEED:
            console.log(powerUp)
            showPowerUpEffectGameClock(powerUp, MAX_TIME_POWER_UP_EFFECT, elementSpeedEffect)
            break;
        case POWER_SHIELD:
            console.log(powerUp)
            showPowerUpEffectGameClock(powerUp, MAX_TIME_POWER_UP_EFFECT, elementShieldEffect)
            break;
    }
}

function showEnemyLifeUp() {
    elementPowerUpBaseEnemyLifeEffect.show();
    elementBaseLifeEffect.html(baseEnemyLife)
    elementBaseLifeEffect.show()
    gameClock.newClock("enemyLife", MAX_TIME_ENEMY_LIFE_UP_EFFECT, true, function() {
        elementPowerUpBaseEnemyLifeEffect.hide();
    })
}

function showPowerUpEffectGameClock(tag, maxTimes, element) {
    element.show();
    gameClock.newClock(tag, maxTimes, false, function() {
        element.hide();
    })
}

function showHitInTheSides() {
    hitsLeft()
    hitsRight()
}

function hitsLeft() {
    buildSides("left", 2, 3, 0);
}

function hitsRight() {
    buildSides("right", 2, 3);
}

function buildSides(tag, maxTimes, resetTimes) {
    gameClock.newClock(tag, maxTimes, true, function() {

        var x = 0
        var y = randomMin(0, maxHeight / 2)
        var actualMaxHitWidth = 10
        while (y < maxHeight) {
            if (actualMaxHitWidth < maxRectangleHitWidth) {
                actualMaxHitWidth += 2
            }
            var height = randomMin(5, maxRectangleHitHeight);
            const width = randomMin(5, actualMaxHitWidth);
            const r = randomMin(150, 255)
            const g = randomMin(10, 60)
            const b = randomMin(10, 60)

            ctx.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", 0.7)"

            if (tag === "right")
                x = maxWidth - width

            ctx.fillRect(x, y, width, height)

            y += height;
        }

    }, null, null, resetTimes)
}