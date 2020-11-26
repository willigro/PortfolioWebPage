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
        $myTeam->newMainInfo("Colaborated Projects (Including hybrids)", "23+");
        $myTeam->newMainInfo("Projects from the zero (Including hybrids)", "19");
        $myTeam->newMainInfo("Paralel projects (to learn)", "??");

        $myTeam->newKnowlegde("Languages", "Java, Kotlin");
        $myTeam->newKnowlegde("Archtectures", "MVVM, MVP, MVC");
        $myTeam->newKnowlegde("Persistence", "SQLite, Room, Realm, SharedPreferences, DataStore");
        $myTeam->newKnowlegde("Test", "JUnit, Expresso, TDD");
        $myTeam->newKnowlegde("Network", "REST, Firebase, Facebook, Google, Google Service, OKHttp3, Retrofit, Glide, Picasso, and more");
        $myTeam->newKnowlegde("Others", "Koin, Kodein, Architecture components: LiveData, ViewModel, Navigation, Lyfecycle, etc");

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
        $myTeam->newMainInfo("Projects as leader (with team)", "4");

        $myTeam->newKnowlegde(
            "What did i do?",
            "Designed tasks, define cronograme, the architeture and tecnologies;
                <br>Code review, classes to teach some techincs and live;
                <br>Talks with costumers"
        );

        return $myTeam;
    }

    function getMyCEOTeam()
    {
        $myTeam = new MyTeam(
            "",
            "CEO"
        );

        $myTeam->newMainInfo("Experience", "1 year (from my self)");
        $myTeam->newMainInfo("Skills", "Junior");
        $myTeam->newMainInfo("Projects I do for Rittmann (me)", "10");

        $myTeam->newKnowlegde(
            "What did i do?",
            "Android projects in the general. But i'm working in some others projects"
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
        $myTeam->newMainInfo("Projects I started (and remember)", "4");
        $myTeam->newMainInfo("Projects I make to learn", "6+");

        $myTeam->newKnowlegde(
            "Tecnologies",
            "Godot, Unity and javascript"
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
}
