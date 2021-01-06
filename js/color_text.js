function writeEachCharColor(id, text, delay, minColorRgb, maxColorRgb, callback) {
    let actualChar = 0
    id = "#" + id
    let callbackCalled = false
    let element = $(id)

    let chars = []
    for (let i = 0; i < text.length; i++)
        chars.push(new ActualCharColor(text[i], minColorRgb, maxColorRgb))

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
class ActualCharColor {
    constructor(char, minRgb, maxRgb) {
        this.char = char
        this.done = false

        this.actualRgb = minRgb;
        this.maxRgb = maxRgb;
        this.sumColor = 1;
    }

    getChar() {
        this.updateColor()

        return '<span style="color: rgb(' +
            this.actualRgb.r + ', ' + this.actualRgb.g + ', ' + this.actualRgb.b + ')">' +
            this.char + '</span>'
    }

    updateColor() {
        let r = false
        let g = false
        let b = false

        // if (this.actualRgb.r >= this.maxRgb.r) {
        //     this.actualRgb.r = this.maxRgb.r
        //     r = true
        // } else
        //     this.actualRgb.r += this.sumColor

        // if (this.actualRgb.g >= this.maxRgb.g) {
        //     this.actualRgb.g = this.maxRgb.g
        //     g = true
        // } else
        //     this.actualRgb.g += this.sumColor

        // if (this.actualRgb.b >= this.maxRgb.b) {
        //     this.actualRgb.b = this.maxRgb.b
        //     b = true
        // } else
        //     this.actualRgb.b += this.sumColor

        if (this.actualRgb.r >= this.maxRgb.r) {
            this.actualRgb.r = this.maxRgb.r
            r = true
        } else
            this.actualRgb.r += this.sumColor

        if (r)
            if (this.actualRgb.g >= this.maxRgb.g) {
                this.actualRgb.g = this.maxRgb.g
                g = true
            } else
                this.actualRgb.g += this.sumColor

        if (r && g)
            if (this.actualRgb.b >= this.maxRgb.b) {
                this.actualRgb.b = this.maxRgb.b
                b = true
            } else
                this.actualRgb.b += this.sumColor

        this.done = r && g && b
    }
}