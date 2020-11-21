$(document).ready(function() {

    const menuSectionUnselectedColor = getComputedStyle(document.body).getPropertyValue('--main-text-color-menu-section');
    const menuSectionSelectedColor = getComputedStyle(document.body).getPropertyValue('--main-text-color-menu-section-selected');

    function initAndroid() {
        handleContentHeader()
        handleMenuHomeSections()
    }

    function handleContentHeader() {
        $("#header").height(window.innerHeight)
        $("#skills").height(window.innerHeight)

        const boxes = ["#profile-android", "#profile-tech-leader", "#profile-ceo", "#profile-game", "#profile-data-scientist"]
        for (i in boxes) {
            handleShowAndHideBox(boxes[i])
        }
    }

    function handleShowAndHideBox(profile) {
        const box = profile + "-box"

        // show
        $(profile).mouseenter(function() {
            // const position = $(profile).offset()
            const element = $(box)
            element.show()
                // element.width(window.innerWidth)
                // element.css({ left: 0, position: 'absolute' });
        });

        $(box).mouseenter(function() {
            $(box).show()
        });

        // hide
        $(profile).mouseleave(function() {
            $(box).hide()
        });

        $(box).mouseleave(function() {
            $(box).hide()
        });
    }

    function handleMenuHomeSections() {
        // The order matters
        // const sections = ["my-team", "skills", "resume"]
        const sections = ["resume", "skills", "my-team"]
        for (i in sections) {
            configureMenuSectionActions(sections[i])
        }

        handleMenuSectionsSelection(sections)

        $(window).scroll(function() {
            handleMenuSectionsSelection(sections)
        });

        $("#menu-option-sections").show()
    }

    function handleMenuSectionsSelection(sections) {
        // reset all
        for (i in sections) {
            const s = "#menu-section-" + sections[i]
            $(s).css({ color: menuSectionUnselectedColor })
        }

        // select one
        for (i in sections) {
            const s = $("#" + sections[i])
            const sT = s.position().top
            const t = document.documentElement.scrollTop

            if (t + TEM_PERCENT_HEIGHT >= sT || i == sections.length - 1) {
                $("#menu-section-" + sections[i]).css({ color: menuSectionSelectedColor })
                break
            }
        }
    }

    function configureMenuSectionActions(section) {
        const menuSection = "#menu-section-" + section
        section = "#" + section

        const elementSection = $(section)

        const menu = $("#menu")
        menu.ready(function() {
            const height = menu.height() + TEM_PERCENT_HEIGHT
            elementSection.css({ "padding-top": height });
        })

        const elementMenuSection = $(menuSection)
        elementMenuSection.click(function() {
            // Scroll to section
            $([document.documentElement, document.body]).animate({
                scrollTop: elementSection.position().top
            }, SCROLLING_SMOOTH_TIME);

            return false
        })
    }

    initAndroid();
})