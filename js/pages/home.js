$(document).ready(function() {

    function initAndroid() {
        // handleContentHeader()
        handleMenuHomeSections()

        const boxes = ["#profile-avatar-android", "#profile-avatar-tech", "#profile-avatar-ceo", "#profile-avatar-game", "#profile-avatar-data"]
        const boxesContent = ["#profile-content-android", "#profile-content-tech", "#profile-content-ceo", "#profile-content-game", "#profile-content-data"]

        for (i in boxes) {
            $(boxes[i]).hover(function() {
                console.log(boxes, boxes[i] + "-content")
                $("#profile-content-android").addClass('avatar-container-hover');
            }, function() {
                $("#profile-content-android").removeClass('avatar-container-hover');
            });
        }

    }

    function handleContentHeader() {
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
        $("#header").height(window.innerHeight)
        $("#skills").height(window.innerHeight)

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