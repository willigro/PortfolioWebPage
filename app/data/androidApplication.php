<?php
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
