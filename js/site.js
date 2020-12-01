const SCROLLING_SMOOTH_TIME = 1500
const TEM_PERCENT_HEIGHT = valueFromPercentage(10, window.innerHeight)

const menuSectionUnselectedColor = getComputedStyle(document.body).getPropertyValue('--main-text-color-menu-section');
const menuSectionSelectedColor = getComputedStyle(document.body).getPropertyValue('--main-text-color-menu-section-selected');

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
    elementMenuSection.unbind();
    elementMenuSection.click(function() {
        // Scroll to section
        $([document.documentElement, document.body]).animate({
            scrollTop: elementSection.position().top
        }, SCROLLING_SMOOTH_TIME);

        return false
    })
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
    }, 1250 / goalNumber)
}

$(document).ready(function() {

    function init() {
        configureMenu();
    }

    function configureMenu() {
        const menus = ["home", "android", "ai"]
        for (i in menus) {
            configureMainMenuActions(menus[i])
        }
    }

    function configureMainMenuActions(page) {
        const menu = $("#menu_" + page)
        menu.click(function() {
            document.location.href = page + '.php';
            selectedMenu = menu
        })

        if (document.location.href.includes(page)) {
            menu.css({ color: "red" })
        }
    }

    init();

});