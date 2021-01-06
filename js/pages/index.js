$(document).ready(function() {
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

        element.parent().css({ position: 'relative' });
        element.css({ top: height, left: width, position: 'absolute' });
    }

    function valueFromPercentage(percent, totalValue) {
        return percent * totalValue / 100
    }

    function showOptions() {

    }

    function writeMyName() {
        writeEachCharColor("my_name", "Hi, my name is Willi Guilherme R. O.", HEIGH_TIME_WRITER, zeroRgb(), randomRgb(), function() {
            writeAndroid()
            handleContentInfo()
        })
    }

    function writeAndroid() {
        writeEachChar("android", "I'm a Android Developer.", MID_TIME_WRITER, MEDIUM_MIN_WRITER, MEDIUM_MAX_WRITER, function() {
            writeAI()
            handleContentInfo()
        })
    }

    function writeAI() {
        writeEachChar("ai", "And AI specialist.", MID_TIME_WRITER - 10, DARK_MIN_WRITER, DARK_MAX_WRITER, function() {
            writeGame()
            handleContentInfo()
        })
    }

    function writeGame() {
        writeEachChar("game", "And Indie Game Enthusiast Developer.", MID_TIME_WRITER - 20, DARK_MIN_WRITER, DARK_MAX_WRITER, function() {
            writeCyclist()
            handleContentInfo()
        })
    }

    function writeCyclist() {
        writeEachChar("cyclist", "And sometimes a cyclist.", LOW_TIME_WRITER, DARK_MIN_WRITER, DARK_MAX_WRITER, function() {
            writeDm1()
            handleContentInfo()
        })
    }

    function writeDm1() {
        writeEachChar("dm1", "And Diabetes Melitus type 1 carrier.", LOW_TIME_WRITER, DARK_MIN_WRITER, DARK_MAX_WRITER, function() {
            writeThisSiteWasMaked()
            handleContentInfo()
        })
    }

    function writeThisSiteWasMaked() {
        writeEachChar("this-site", "This site was maked 100% in html, css and js with hard coding, no libs.", LOW_TIME_WRITER - 5, DARK_MIN_WRITER, DARK_MAX_WRITER, function() {
            // writeBackground()

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