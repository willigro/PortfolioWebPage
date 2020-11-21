const SCROLLING_SMOOTH_TIME = 1500
const TEM_PERCENT_HEIGHT = valueFromPercentage(10, window.innerHeight)

const menuSectionUnselectedColor = getComputedStyle(document.body).getPropertyValue('--main-text-color-menu-section');
const menuSectionSelectedColor = getComputedStyle(document.body).getPropertyValue('--main-text-color-menu-section-selected');


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