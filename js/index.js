$(document).ready(function() {

    const HEIGH_TIME = 80
    const MID_TIME = 50
    const LOW_TIME = 20

    const DARK_MIN = 70
    const DARK_MAX = 150

    const MEDIUM_MIN = 100
    const MEDIUM_MAX = 220

    const LIGHT_MIN = 130
    const LIGHT_MAX = 255

    function init() {
        handleContentInfo()
        handleContentContinue()
        writeMyName()
    }

    function handleContentInfo() {
        const element = $("#index-my-info")

        const height = (window.innerHeight / 2) - (element.height() / 2)
        const width = valueFromPercentage(5, window.innerWidth)

        element.parent().css({ position: 'relative' });
        element.css({ top: height, left: width, position: 'absolute' });
    }

    function handleContentContinue() {
        const element = $("#index-open")

        element.click(function() {
            document.location.href = 'home.php';
        });

        const height = (window.innerHeight / 2) - (element.height() / 2)
        const width = window.innerWidth - element.width() - valueFromPercentage(5, window.innerWidth)

        console.log(element.width(), valueFromPercentage(5, window.innerWidth))

        element.parent().css({ position: 'relative' });
        element.css({ top: height, left: width, position: 'absolute' });
    }

    function valueFromPercentage(percent, totalValue) {
        return percent * totalValue / 100
    }

    function showOptions() {

    }

    function writeMyName() {
        writeEachChar("my_name", "Hi, my name is Willi Guilherme R. O.", HEIGH_TIME, LIGHT_MIN, LIGHT_MAX, function() {
            writeAndroid()
            handleContentInfo()
        })
    }

    function writeAndroid() {
        writeEachChar("android", "And i'm a Android Developer.", MID_TIME, MEDIUM_MIN, MEDIUM_MAX, function() {
            writeAI()
            handleContentInfo()
        })
    }

    function writeAI() {
        writeEachChar("ai", "And AI specialist.", MID_TIME - 10, DARK_MIN, DARK_MAX, function() {
            writeGame()
            handleContentInfo()
        })
    }

    function writeGame() {
        writeEachChar("game", "And Indie Game Enthusiast Developer.", MID_TIME - 20, DARK_MIN, DARK_MAX, function() {
            writeCyclist()
            handleContentInfo()
        })
    }

    function writeCyclist() {
        writeEachChar("cyclist", "And sometimes a cyclist.", LOW_TIME, DARK_MIN, DARK_MAX, function() {
            writeDm1()
            handleContentInfo()
        })
    }

    function writeDm1() {
        writeEachChar("dm1", "And Diabetes Melitus type 1 carrier.", LOW_TIME, DARK_MIN, DARK_MAX, function() {
            writeThisSiteWasMaked()
            handleContentInfo()
        })
    }

    function writeThisSiteWasMaked() {
        writeEachChar("this-site", "This site was maked 100% in html, css and js with hard coding, no libs.", LOW_TIME - 5, DARK_MIN, DARK_MAX, function() {
            showOptions()
        })
    }

    function writeEachChar(id, text, delay, minColor, maxColor, callback) {
        var actualChar = 0
        id = "#" + id
        var callbackCalled = false

        var chars = []
        for (var i = 0; i < text.length; i++)
            chars.push(new ActualChar(text[i], minColor, maxColor))

        var interval = setInterval(function() {
            var html = ""
            for (var i = 0; i < actualChar; i++) {
                html += chars[i].getChar()
            }

            $(id).html(html)

            if (actualChar == text.length) {

                var allDone = true
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

    init();
});

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