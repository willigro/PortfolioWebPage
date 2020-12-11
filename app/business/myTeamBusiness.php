<?php
include "./app/data/myTeam.php";

class MyTeamBusiness
{
    function getMyAndroidTeam()
    {
        $myTeam = new MyTeam(
            "",
            "Android Developer"
        );

        $myTeam->newMainInfo("Experience", "3 years");
        $myTeam->newMainInfo("Skills", "Middle");
        $myTeam->newMainInfo("Colaborated Projects " . $this->info("(Including hybrids)"), "I remember of 23+");
        $myTeam->newMainInfo("Projects from the zero" . $this->info("(Including hybrids)"), "19");
        $myTeam->newMainInfo("Paralel projects (to learn)", "??");

        // $myTeam->newKnowlegde("Languages", "Java, Kotlin");
        // $myTeam->newKnowlegde("Archtectures", "MVVM, MVP, MVC");
        // $myTeam->newKnowlegde("Persistence", "SQLite, Room, Realm, SharedPreferences, DataStore");
        // $myTeam->newKnowlegde("Test", "JUnit, Expresso, TDD");
        // $myTeam->newKnowlegde("Network", "REST, Firebase, Facebook, Google, Google Service, OKHttp3, Retrofit, Glide, Picasso, and more");
        // $myTeam->newKnowlegde("Others", "Koin, Kodein, Architecture components: LiveData, ViewModel, Navigation, Lyfecycle, etc");

        $myTeam->newKnowlegde("Android and me", "Well, I worked on almost thirty Android projects, several them stopeds, and others I'm still working.
        I love build new features, complexy features, archtectures, and testing concepts. Some days I wake up, think in some simple app to 
        solution my simple problem, search on playstore for one, and when I find I try make one better.");

        return $myTeam;
    }

    function getMyTechLeaderTeam()
    {
        $myTeam = new MyTeam(
            "",
            "Tech Leader"
        );

        $myTeam->newMainInfo("Experience", "1 year");
        $myTeam->newMainInfo("Skills", "Junior");
        $myTeam->newMainInfo("Projects as leader " . $this->info("(with team)"), "4");

        $myTeam->newKnowlegde(
            "What did i do?",
            "I Designed tasks, and defined cronograme, defined architeture and tecnologies;
                <br>Did code review, also did classes to teach some techlogies like Kotlin, ViewModel, etc;"
        );

        return $myTeam;
    }

    function getMyCEOTeam()
    {
        $myTeam = new MyTeam(
            "",
            "CEO"
        );

        $myTeam->newMainInfo("Experience", "1 year " . $this->info("(from my self)"));
        $myTeam->newMainInfo("Skills", "Junior");
        $myTeam->newMainInfo("Projects I do for Rittmann " . $this->info("(me)"), "10");

        $myTeam->newKnowlegde(
            "What did i do?",
            "Android projects in the general, for me and freelas.
            <br>I'm working in some others projects with AI."
        );

        return $myTeam;
    }

    function getMyGameTeam()
    {
        $myTeam = new MyTeam(
            "",
            "Game Developer"
        );

        $myTeam->newMainInfo("Experience", "1 year");
        $myTeam->newMainInfo("Skills", "Junior");
        $myTeam->newMainInfo("Projects I finish", "0, yes, Zero");
        $myTeam->newMainInfo("Projects I started " . $this->info("(and remember)"), "4");
        $myTeam->newMainInfo("Projects I make to learn", "6+");

        $myTeam->newKnowlegde(
            "Used tecnologies",
            "Godot and Unity.
            <br>C#, GDScript and javascript."
        );

        return $myTeam;
    }

    function getMyDataTeam()
    {
        $myTeam = new MyTeam(
            "",
            "Data Scientist"
        );

        $myTeam->newMainInfo("Experience", "1 year");
        $myTeam->newMainInfo("Skills", "Junior");
        $myTeam->newMainInfo("Projects I finish", "12+");
        $myTeam->newMainInfo("Main skills", "ML and genetic algorithm+");

        $myTeam->newKnowlegde(
            "Knowledge",
            "Python, ML, NLP, genetic algorithm, KNN, Deep Learning, backpropagation, BigData, visual computing,
            Data analysis, intelligent agent"
        );

        return $myTeam;
    }

    function info($t)
    {
        return "<span class='p-info'>" . $t . "</span>";
    }
}
