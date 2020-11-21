$(document).ready(function() {

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

        $("#menu-option-sections-home").show()
    }

    initAndroid();
})