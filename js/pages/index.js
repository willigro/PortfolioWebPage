$(document).ready(function() {
    function init() {
        redrawContents()
        writeMyName()
    }

    function redrawContents() {
        handleContentInfo()
        handleContentContinue()
    }

    function handleContentInfo() {
        const element = $("#index-my-info")

        let top = (window.innerHeight / 3) - (element.height() / 2)
        if (top < FIVE_PERCENT_HEIGHT) {
            top = FIVE_PERCENT_HEIGHT
        }
        const left = valueFromPercentage(5, window.innerWidth)

        element.parent().css({ position: 'relative' });
        element.css({ top: top, left: left, position: 'absolute' });
    }

    function handleContentContinue() {
        const element = $("#index-open")
        const elementInfo = $("#index-my-info")

        element.click(function() {
            document.location.href = 'home.php';
        });

        // const height = (window.innerHeight / 2) - (element.height() / 2)
        const bottom = elementInfo.position().top + elementInfo.height() + TEN_PERCENT_HEIGHT
            // const width = window.innerWidth - element.width() - valueFromPercentage(5, window.innerWidth)
        const left = elementInfo.position().left

        element.parent().css({ position: 'relative' });
        element.css({ top: bottom, left: left, position: 'absolute' });
    }

    function valueFromPercentage(percent, totalValue) {
        return percent * totalValue / 100
    }

    function showOptions() {

    }

    function writeMyName() {
        writeEachCharColor("my_name", "Hi, my name is Willi Guilherme R. O.", HEIGH_TIME_WRITER, zeroRgb(), randomRgb(), function() {
            writeAndroid()
            redrawContents()
        })
    }

    function writeAndroid() {
        writeEachChar("android", "I'm a Android Developer.", MID_TIME_WRITER, MEDIUM_MIN_WRITER, MEDIUM_MAX_WRITER, function() {
            writeAI()
            redrawContents()
        })
    }

    function writeAI() {
        writeEachChar("ai", "And AI specialist.", MID_TIME_WRITER - 10, DARK_MIN_WRITER, DARK_MAX_WRITER, function() {
            writeGame()
            redrawContents()
        })
    }

    function writeGame() {
        writeEachChar("game", "And Indie Game Enthusiast Developer.", MID_TIME_WRITER - 20, DARK_MIN_WRITER, DARK_MAX_WRITER, function() {
            writeCyclist()
            redrawContents()
        })
    }

    function writeCyclist() {
        writeEachChar("cyclist", "And sometimes a cyclist.", LOW_TIME_WRITER, DARK_MIN_WRITER, DARK_MAX_WRITER, function() {
            writeDm1()
            redrawContents()
        })
    }

    function writeDm1() {
        writeEachChar("dm1", "And Diabetes Melitus type 1 carrier.", LOW_TIME_WRITER, DARK_MIN_WRITER, DARK_MAX_WRITER, function() {
            writeThisSiteWasMaked()
            redrawContents()
        })
    }

    function writeThisSiteWasMaked() {
        writeEachChar("this-site", "This site was maked 100% in html, css and js with hard coding, no libs.", LOW_TIME_WRITER - 5, DARK_MIN_WRITER, DARK_MAX_WRITER, function() {
            // writeBackground()
            redrawContents()
            showOptions()
        })
    }

    // function writeBackground() {
    //     writeEachChar("the-background", "The backgrounds are animations created in canvas.", LOW_TIME_WRITER - 5, DARK_MIN_WRITER, DARK_MAX_WRITER, function() {
    //         showOptions()
    //     })
    // }


    init();
});