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
            showPowerUpEffectGameClock(powerUp, MAX_TIME_POWER_UP_EFFECT, elementAtkSpeedEffect)
            break;
        case POWER_SPEED:
            showPowerUpEffectGameClock(powerUp, MAX_TIME_POWER_UP_EFFECT, elementSpeedEffect)
            break;
        case POWER_SHIELD:
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

function showHitInTheSides(onShield) {
    hitsLeft(onShield)
    hitsRight(onShield)
}

function hitsLeft(onShield) {
    buildSides("left", 2, 3, onShield);
}

function hitsRight(onShield) {
    buildSides("right", 2, 3, onShield);
}

function buildSides(tag, maxTimes, resetTimes, onShield) {
    const baseR = onShield ? 216 : 150
    const baseG = onShield ? 142 : 10
    const baseB = onShield ? 30 : 10

    const maxG = onShield ? 135 : 60

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
            const r = randomMin(baseR, 255)
            const g = randomMin(baseG, maxG)
            const b = randomMin(baseB, 60)

            ctx.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", 0.7)"

            if (tag === "right")
                x = maxWidth - width

            ctx.fillRect(x, y, width, height)

            y += height;
        }

    }, null, null, resetTimes)
}