<?php
class Resume
{
    public $title = "";
    public $sections = [];

    function __construct($title)
    {
        $this->title = $title;        
    }
}

class ResumeSection
{
    public $title = "";
    public $subSections = [];

    function __construct($title, $subSections)
    {
        $this->title = $title;
        $this->subSections = $subSections;
    }
}
