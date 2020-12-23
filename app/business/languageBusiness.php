<?php
include "./app/consts.php";
include "./app/data/language.php";

class LanguageBusiness
{
    function getLanguages()
    {
        return array(
            new Language(IMAGE_ROOT . "kotlin.png", "Kotlin", "2 years", "Middle", 100),
            new Language(IMAGE_ROOT . "java.png", "Java", "3 years", "Middle", 75),
            new Language(IMAGE_ROOT . "javascript.png", "Javascript", "3 years", "Junior", 35),
            new Language(IMAGE_ROOT . "english.png", "English", "1 year", "Begginer", 30),
            new Language(IMAGE_ROOT . "python.png", "Python", "1 year", "Begginer", 25),
            new Language(IMAGE_ROOT . "php.png", "PHP", "2 years", "Junior", 20),
            new Language(IMAGE_ROOT . "godot.png", "GDScript", "1 year", "Begginer", 20),
            new Language(IMAGE_ROOT . "arduino.png", "C Arduino", "1 year", "Begginer", 10)
        );
    }
}
