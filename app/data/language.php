<?php
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