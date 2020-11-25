$(document).ready(function() {

    const DELAY = 500

    function initAndroid() {
        // last to first
        const sections = ["android-colaborated", "android-libs", "android-own", "android-numbers"]
        for (i in sections) {
            configureSection(sections[i])
            configureMenuSectionActions(sections[i])
        }

        handleMenuSectionsSelection(sections)

        $(window).scroll(function() {
            handleMenuSectionsSelection(sections)
        });

        handleNumbers()
        $("#menu-option-sections-android").show()
    }

    function configureSection(section) {
        const element = $("#" + section)

        const menu = $("#menu")
        menu.ready(function() {
            const height = menu.height() + TEM_PERCENT_HEIGHT
            element.css({ "padding-top": height });
        })
    }

    function handleNumbers() {
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

    initAndroid();
})