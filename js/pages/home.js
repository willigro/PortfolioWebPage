$(document).ready(function() {

    const MY_TEAM_MOVE_ANIMATION_DELAY = 700
    const MY_TEAM_MOVE_ANIMATION_DELAY_FAST = 500
    const MY_TEAM_OPACITY_ANIMATION_DELAY = 500
    var languagesDone = false

    function initAndroid() {
        handleMenuHomeSections(true)

        upNumberTo(25, "#experience-bugs");
        upNumberTo(12, "#experience-coffee");
        upNumberTo(8, "#experience-glasses");
        upNumberTo(17, "#experience-pc");

        $("#train-my-dino-link").click(function() {
            $("#train-my-dino").hide();
            $("#stop-train-my-dino").show();
            $("#canvas-dino").show(500);

            initDinoGame();
        });

        $("#stop-train-my-dino-link").click(function() {
            $("#train-my-dino").show();
            $("#stop-train-my-dino").hide();
            $("#canvas-dino").hide(500);

            stopDinoInterval()
        });

        $("#show-my-team").click(function() {

            const boxes = ["#profile-android", "#profile-tech-leader", "#profile-ceo", "#profile-game", "#profile-data-scientist"]
            const boxesA = ["#my-team-android", "#my-team-tech-leader", "#my-team-ceo", "#my-team-game", "#my-team-data-scientist"]

            var one = false
            for (i in boxes) {
                const b = boxes[i]
                const bA = boxesA[i]

                $(b).animate({
                    opacity: 0
                }, MY_TEAM_OPACITY_ANIMATION_DELAY);

                $(bA).show(MY_TEAM_MOVE_ANIMATION_DELAY, function() {
                    if (!one) {
                        one = true
                        $("#skills").show(MY_TEAM_MOVE_ANIMATION_DELAY_FAST);
                        $("#resume").show(MY_TEAM_MOVE_ANIMATION_DELAY_FAST);
                    }
                });
            }

            $("#skills").hide(MY_TEAM_MOVE_ANIMATION_DELAY_FAST);
            $("#resume").hide(MY_TEAM_MOVE_ANIMATION_DELAY_FAST);

            $("#profile-avatars").hide(MY_TEAM_MOVE_ANIMATION_DELAY, function() {
                handleMenuHomeSections(false)
            });

            $(this).hide()
            $("#hide-my-team").show()
        });

        $("#hide-my-team").click(function() {

            const boxes = ["#profile-android", "#profile-tech-leader", "#profile-ceo", "#profile-game", "#profile-data-scientist"]
            const boxesA = ["#my-team-android", "#my-team-tech-leader", "#my-team-ceo", "#my-team-game", "#my-team-data-scientist"]

            for (i in boxes) {
                const b = boxes[i]
                const bA = boxesA[i]

                $(b).animate({
                    opacity: 1
                }, MY_TEAM_OPACITY_ANIMATION_DELAY);

                $(bA).hide(MY_TEAM_MOVE_ANIMATION_DELAY);
            }

            $("#profile-avatars").show(MY_TEAM_MOVE_ANIMATION_DELAY, function() {
                handleMenuHomeSections(false)
            });

            $(this).hide()
            $("#show-my-team").show()
        });
    }

    function handleMenuHomeSections(updateHeight) {
        if (updateHeight) {
            $("#header").height(window.innerHeight)
        }
        // The order matters
        const sections = ["resume", "experience", "skills", "my-team"]
        for (i in sections) {
            configureMenuSectionActions(sections[i])
        }

        handleMenuSectionsSelection(sections)

        $(window).scroll(function() {
            handleMenuSectionsSelection(sections)

            if (!languagesDone && this.scrollY > $("#skills").position().top / 2) {
                handleLanguages();
            }
        });

        $("#menu-option-sections-home").show()
    }

    function handleLanguages() {
        languagesDone = true
        $("#table-languages").ready(function() {
            $("#table-languages > tbody > tr").each(function() {
                const value = $(this).find('td').eq(1).text();
                updateLanguagePercentWidth("#" + value.replace(/\s/g, '_'))
            });
        });
    }

    function updateLanguagePercentWidth(element) {
        var current = 1
        const goalNumber = $(element).data("percente")
        var interval = setInterval(function() {
            $(element).css({ width: current + "%" })

            if (current == goalNumber) {
                clearInterval(interval)
            } else
                current++
        }, 1000 / goalNumber)
    }

    initAndroid();
})