<?php
class AndroidApplication
{
    public $title = "";
    public $description = "";
    public $technologies = "";
    public $mainImage = "";
    public $smallImages = null;
    public $googlePlayLink = null;
    public $gitLink = null;
    public $privateProject = null;

    function __construct($title, $description, $technologies, $mainImage, $smallImages, $googlePlayLink = null, $gitLink = null, $privateProject = false)
    {
        $this->title = $title;
        $this->description = $description;
        $this->technologies = $technologies;
        $this->mainImage = $mainImage;
        $this->smallImages = $smallImages;
        $this->googlePlayLink = $googlePlayLink;
        $this->gitLink = $gitLink;
        $this->privateProject = $privateProject;
    }
}