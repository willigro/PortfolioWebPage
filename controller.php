<?php

$image_root = "dist/images/";

class Language
{
    public $icon = "";
    public $name = "";
    public $time = "";
    public $nivel = "";
    public $nivelPercent = "";

    function __construct($icon, $name, $time, $nivel, $nivelPercent)
    {
        $this->icon = $icon;
        $this->name = $name;
        $this->time = $time;
        $this->nivel = $nivel;
        $this->nivelPercent = $nivelPercent;
    }
}

$languages = array(
    new Language($image_root . "java.png", "Java", "3 years", "Middle", "50"),
    new Language($image_root . "kotlin.png", "Kotlin", "2 years", "Middle", "60"),
    new Language($image_root . "javascript.png", "Javascript", "3 years", "Junior", "40"),
    new Language($image_root . "python.png", "Python", "1 year", "Begginer", "20"),
    new Language($image_root . "php.png", "PHP", "2 years", "Junior", "20"),
    new Language($image_root . "godot.png", "GDScript", "1 year", "Begginer", "20"),
    new Language($image_root . "arduino.png", "C Arduino", "1 year", "Begginer", "10")
);

?>