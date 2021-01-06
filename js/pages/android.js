$(document).ready(function() {

    function initAndroid() {
        handleNumbers()
        $("#menu-option-sections-android").show()

        $("#android-numbers").height(window.innerHeight / 2);

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
    }

    function configureSection(section) {
        const element = $("#" + section)

        const menu = $("#menu")
        menu.ready(function() {
            const height = menu.height() + TEN_PERCENT_HEIGHT
            element.css({ "padding-top": height });
        })
    }

    function handleNumbers() {
        upNumberTo(2, "#android-base-info-libs")
        upNumberTo(3, "#android-base-info-own")
        upNumberTo(23, "#android-base-info-colaborated", true)
    }

    initAndroid();
})