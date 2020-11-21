$(document).ready(function() {

    const DELAY = 500

    function initAndroid() {
        const sections = ["android-project-list", "android-base-info"]
        for (i in sections) {
            configureSection(sections[i])
        }


        upNumberTo(2, "#android-base-info-libs")
        upNumberTo(3, "#android-base-info-own")
        upNumberTo(23, "#android-base-info-colaborated", true)
    }

    function upNumberTo(goalNumber, element, plus) {
        var current = 1
        $(element).html(current)
        var interval = setInterval(function() {
            $(element).html(current)

            if (current == goalNumber) {
                if (plus)
                    $(element).html(current + "+")
                clearInterval(interval)
            } else
                current++
        }, DELAY / goalNumber)
    }

    function configureSection(section) {
        const element = $("#" + section)
            // element.height(window.innerHeight / 2)

        const menu = $("#menu")
        menu.ready(function() {
            const height = menu.height() + TEM_PERCENT_HEIGHT
            element.css({ "padding-top": height });
        })
    }

    initAndroid();
})