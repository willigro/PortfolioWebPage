const HEIGH_TIME_WRITER = 80
const MID_TIME_WRITER = 50
const LOW_TIME_WRITER = 20

const DARK_MIN_WRITER = 70
const DARK_MAX_WRITER = 150

const MEDIUM_MIN_WRITER = 100
const MEDIUM_MAX_WRITER = 220

const LIGHT_MIN_WRITER = 130
const LIGHT_MAX_WRITER = 255

function writeEachChar(id, text, delay, minColor, maxColor, callback) {
    let actualChar = 0
    id = "#" + id
    let callbackCalled = false
    let element = $(id)

    let chars = []
    for (let i = 0; i < text.length; i++)
        chars.push(new ActualChar(text[i], minColor, maxColor))

    let interval = setInterval(function() {
        let html = ""
        for (let i = 0; i < actualChar; i++) {
            html += chars[i].getChar()
        }

        element.html(html)

        if (actualChar == text.length) {

            let allDone = true
            for (c in chars) {
                if (!chars[c].done) {
                    allDone = false
                    break
                }
            }

            if (allDone) {
                clearInterval(interval)
            }

            if (callback && !callbackCalled) {
                callbackCalled = true
                callback()
            }
        } else {
            actualChar++
        }
    }, delay);
}

/**
 * 
 * i'll need a rgb min and man, one value to each one MIN (R: 30, G: 80, B: 150) -> MAX (R: 80, G: 120, B: 200)
 * To dont impact others files, i'll create a new write_text -> color_text
 * 
 */
class ActualChar {
    constructor(char, initialColor, max) {
        this.char = char
        this.actualColor = initialColor
        this.max = max
        this.done = false
    }

    getChar() {
        this.updateColor()

        return '<span style="color: rgb(' +
            this.actualColor + ', ' + this.actualColor + ', ' + this.actualColor + ')">' +
            this.char + '</span>'
    }

    updateColor() {
        if (this.actualColor >= this.max) {
            this.actualColor = this.max
            this.done = true
        }
        this.actualColor += 5
    }
}