<?php
include "./app/data/myTeam.php";

/*
Don't use it, refactor if need
*/
class SkillBusiness
{
    function getSkills()
    {
        $skillsArchitecture = new SkillSection(
            "Architecture",
            ["Clean Architecture", "MVVM", "MVP", "MVC", "Facade"]
        );

        $skillsAndroidJetpack = new SkillSection(
            "Android Jetpack",
            ["LiveData", "ViewModel", "Coroutines", "Room", "Navigation Components"],
            "and more..."
        );

        $skillsTest = new SkillSection(
            "Test",
            ["JUnit", "Espresso"]
        );

        $skillsNetwork = new SkillSection(
            "Network",
            ["REST", "OkHttp3", "Retrofit", "Glide, Picasso", "Countly", "Firebase, Facebook, Google"],
            "and more..."
        );

        $skillsPersistence = new SkillSection(
            "Persistence",
            ["SQLite", "SharedPreferences", "DataStore", "Files", "Camera", "DBBrowser"],
            "and more... like MYSQL, PostgreSQL"
        );

        $skillsOther = new SkillSection(
            "Persistence",
            ["Kodein", "WorkManager", "Services", "Broadcast", "Threads", "GPS"],
            "and more..."
        );

        $majorSkillAndroid = new MajorSkill(
            "Android",
            [$skillsArchitecture, $skillsAndroidJetpack, $skillsTest, $skillsNetwork, $skillsPersistence, $skillsOther],
            true
        );

        $byTechnology = new SkillContainer("By Technology", $majorSkillAndroid);

        return [$byTechnology];
    }
}
