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

    function nivelPercentColor()
    {
        return $this->percent2Color($this->nivelPercent);
    }

    function percent2Color($value, $brightness = 255, $max = 100, $min = 0, $thirdColorHex = '00')
    {
        // Calculate first and second color (Inverse relationship)
        $first = (1 - ($value / $max)) * $brightness;
        $second = ($value / $max) * $brightness;

        // Find the influence of the middle color (yellow if 1st and 2nd are red and green)
        $diff = abs($first - $second);
        $influence = ($brightness - $diff) / 2;
        $first = intval($first + $influence);
        $second = intval($second + $influence);

        // Convert to HEX, format and return
        $firstHex = str_pad(dechex($first), 2, 0, STR_PAD_LEFT);
        $secondHex = str_pad(dechex($second), 2, 0, STR_PAD_LEFT);

        // return "#" . $firstHex . $secondHex . $thirdColorHex;
        // return "#" . $thirdColorHex . $firstHex . $secondHex;
        return "#" . $firstHex . $thirdColorHex . $secondHex;
    }
}

$languages = array(
    new Language($image_root . "java.png", "Java", "3 years", "Middle", "60"),
    new Language($image_root . "kotlin.png", "Kotlin", "2 years", "Middle", "70"),
    new Language($image_root . "javascript.png", "Javascript", "3 years", "Junior", "40"),
    new Language($image_root . "python.png", "Python", "1 year", "Begginer", "25"),
    new Language($image_root . "php.png", "PHP", "2 years", "Junior", "20"),
    new Language($image_root . "godot.png", "GDScript", "1 year", "Begginer", "20"),
    new Language($image_root . "arduino.png", "C Arduino", "1 year", "Begginer", "10")
);

class AndroidApplication
{
    public $title = "";
    public $description = "";
    public $technologies = "";
    public $mainImage = "";
    public $smallImages = null;
    public $googlePlayLink = null;

    function __construct($title, $description, $technologies, $mainImage, $smallImages, $googlePlayLink)
    {
        $this->title = $title;
        $this->description = $description;
        $this->technologies = $technologies;
        $this->mainImage = $mainImage;
        $this->smallImages = $smallImages;
        $this->googlePlayLink = $googlePlayLink;
    }
}

$diabetesDaily = new AndroidApplication( 
    "Diário da Diabetes", 
    "Simple register of the cash flows
    <br>Register expense or earning
    <br>Register pattern flows to easily regiter of the current flows",
    "Kotlin, Coroutines, Kodein, Navigation Components, Room, LiveData, ViewMode, MVVM, JUnit, Espresso, AndroidX.",
    $image_root . "my_pocket_test_shot_1.png",
    array(
        $image_root . "my_pocket_test_shot_1.png",
        $image_root . "my_pocket_test_shot_1.png",
        $image_root . "my_pocket_test_shot_1.png",
        $image_root . "my_pocket_test_shot_1.png"
    ),
    "https://play.google.com/store/apps/details?id=com.rgames.meusgastos");

$order = new AndroidApplication( 
    "Pedidos", 
    "Simple register of the cash flows
    <br>Register expense or earning
    <br>Register pattern flows to easily regiter of the current flows",
    "Kotlin, Coroutines, Kodein, Navigation Components, Room, LiveData, ViewMode, MVVM, JUnit, Espresso, AndroidX.",
    $image_root . "my_pocket_test_shot_1.png",
    array(
        $image_root . "my_pocket_test_shot_1.png",
        $image_root . "my_pocket_test_shot_1.png",
        $image_root . "my_pocket_test_shot_1.png",
        $image_root . "my_pocket_test_shot_1.png"
    ),
    "https://play.google.com/store/apps/details?id=com.rgames.meusgastos");

$myPocket = new AndroidApplication( 
"Meu Bolso", 
"Simple register of the cash flows
<br>Register expense or earning
<br>Register pattern flows to easily regiter of the current flows",
"Kotlin, Coroutines, Kodein, Navigation Components, Room, LiveData, ViewMode, MVVM, JUnit, Espresso, AndroidX.",
$image_root . "my_pocket_test_shot_1.png",
array(
    $image_root . "my_pocket_test_shot_1.png",
    $image_root . "my_pocket_test_shot_1.png"
),
"https://play.google.com/store/apps/details?id=com.rgames.meusgastos");

$androidApplications = array(
    $diabetesDaily,
    $order,
    $myPocket
);
