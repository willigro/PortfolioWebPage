var maxWidth = window.innerWidth
var maxHeight = window.innerHeight

function random(limit) {
    return Math.floor(Math.random() * limit)
}

function randomF(limit) {
    return Math.random() * limit
}

function randomMin(min, max) {
    return Math.floor(Math.random() * max) + min
}

function randomNotZero(limit) {
    const r = Math.floor(Math.random() * limit)
    if (r == 0 && Math.random() > .9) return limit
    return (r == 0) ? 1 : r
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt(
        Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
    )
}

function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue
}

function valueFromPercentage(percent, totalValue) {
    return percent * totalValue / 100
}

function intersect(body1, body2) {
    return body1.x < body2.x + body2.size &&
        body1.x + body1.size > body2.x &&
        body1.y < body2.y + body2.size &&
        body1.y + body1.size > body2.y
}


function intersectRect(body1, body2) {
    return body1.x < body2.x + body2.width &&
        body1.x + body1.width > body2.x &&
        body1.y < body2.y + body2.height &&
        body1.y + body1.height > body2.y
}

function circlesIntersect(c1, c2) {
    const dx = c1.x - c2.x;
    const dy = c1.y - c2.y;
    const d = Math.sqrt(dx * dx + dy * dy);
    return d <= c1.r + c2.r;
}

function pop(array, item) {
    let index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}