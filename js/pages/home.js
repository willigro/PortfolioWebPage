$(document).ready(function() {

    const SECTION_RESUME = "resume"
    const SECTION_SKILLS = "skills"
    const SECTION_MY_TEAM = "my-team"
    const SECTION_EXPERIENCE = "experience"

    const MY_TEAM_MOVE_ANIMATION_DELAY = 700
    const MY_TEAM_MOVE_ANIMATION_DELAY_FAST = 500
    const MY_TEAM_OPACITY_ANIMATION_DELAY = 500

    var languagesDone = false
    var experienceDone = false
    var resumeDone = false

    function initAndroid() {
        handleMenuHomeSections(true)
        configureDinoClick()
        configureMyTeamClick()
    }

    function configureMyTeamClick() {
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

    function configureDinoClick() {
        $("#train-my-dino-link").click(function() {
            configureDino();
            initDinoGame();
        });

        $("#stop-train-my-dino-link").click(function() {
            stopDinoInterval()
        });
    }

    function handleExperienceXpValues(callback) {
        experienceDone = true
        upNumberTo(25, "#experience-bugs");
        upNumberTo(12, "#experience-coffee");
        upNumberTo(8, "#experience-glasses");
        upNumberTo(17, "#experience-pc", null, callback);
    }

    function handleMenuHomeSections(updateHeight) {
        if (updateHeight) {
            $("#header").height(window.innerHeight)
        }
        // The order matters
        const sections = [SECTION_RESUME, SECTION_EXPERIENCE, SECTION_SKILLS, SECTION_MY_TEAM]
        for (i in sections) {
            configureMenuSectionActions(sections[i])
        }

        handleMenuSectionsSelection(sections, callbackSectionSelected)

        $(window).scroll(function() {
            handleMenuSectionsSelection(sections, callbackSectionSelected)
        });

        $("#menu-option-sections-home").show()
    }

    let callbackSectionSelected = function(section) {
        switch (section) {
            case SECTION_SKILLS:
                if (!languagesDone)
                    handleLanguages();
                break;
            case SECTION_EXPERIENCE:
                if (!experienceDone) {
                    let element = $('#experience-level-up')
                    handleExperienceXpValues()

                    let t = element.position().top
                    let op = .5
                    const delay = 15
                    const tFactor = 3
                    let opFactor = .01
                    let interval = setInterval(function() {
                        t -= tFactor;
                        op += opFactor;

                        element.css({ "top": t, "opacity": op })
                        if (element.position().top <= -FIVE_PERCENT_HEIGHT && op < 1) {
                            clearInterval(interval)
                        }
                    }, delay)
                }
                break;
            case SECTION_RESUME:
                if (!resumeDone) {
                    resumeDone = true
                    writeEachChar("resume-subtitle", "A little bit about me and my Android path", MID_TIME_WRITER, LIGHT_MIN_WRITER, LIGHT_MAX_WRITER)
                }
                break;
        }
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
        let current = 1
        const goalNumber = $(element).data("percente")
        let interval = setInterval(function() {
            $(element).css({ width: current + "%" })

            if (current == goalNumber) {
                clearInterval(interval)
            } else
                current++
        }, 1000 / goalNumber)
    }

    initAndroid();
})