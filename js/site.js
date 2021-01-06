const SCROLLING_SMOOTH_TIME = 1500

const menuSectionUnselectedColor = getComputedStyle(document.body).getPropertyValue('--main-text-color-menu-section');
const menuSectionSelectedColor = getComputedStyle(document.body).getPropertyValue('--main-text-color-menu-section-selected');
const menuSelectedColor = getComputedStyle(document.body).getPropertyValue('--main-text-color-accent');

/* 

MODAL based in 
https://codepen.io/tony-jones/pen/ZOXaYL 

*/
function modal(id) {
    // Get the modal
    var modal = document.getElementById("myModal" + id);

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg" + id);
    var modalImg = document.getElementById("img" + id);
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        document.getElementById("player-console").style.display = "none";
    }

    // When the user clicks on <span> (x), close the modal
    modal.onclick = function() {
        modalImg.className += " out";
        setTimeout(function() {
            modal.style.display = "none";
            modalImg.className = "modal-content";

            document.getElementById("player-console").style.display = "block";
        }, 400);
    }
}

function handleMenuSectionsSelection(sections, callback) {
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
        if (t + TWENTY_PERCENT_HEIGHT >= sT || i == sections.length - 1) {
            $("#menu-section-" + sections[i]).css({ color: menuSectionSelectedColor })
            if (callback)
                callback(sections[i]);
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
        const height = menu.height() + TEN_PERCENT_HEIGHT
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

function upNumberTo(goalNumber, element, plus, callback) {
    var current = 1
    $(element).html(current)
    var interval = setInterval(function() {
        $(element).html(current)

        if (current == goalNumber) {
            if (plus)
                $(element).html(current + "+")

            if (callback)
                callback();
            clearInterval(interval)
        } else
            current++
    }, 1250 / goalNumber)
}

window.mobileCheck = function() {
    let check = false;
    (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

$(document).ready(function() {

    function init() {
        configureMenu();
    }

    function configureMenu() {
        const menus = ["home", "android", "ai"]
        for (i in menus) {
            configureMainMenuActions(menus[i])
        }

        $("#menu").css({ "padding-top": FIVE_PERCENT_HEIGHT })
    }

    function configureMainMenuActions(page) {
        const menu = $("#menu_" + page)
        menu.click(function() {
            document.location.href = page + '.php';
            selectedMenu = menu
        })

        if (document.location.href.includes(page)) {
            menu.css({ color: menuSelectedColor })
        }
    }

    init();

});