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
    public $date = "";

    function __construct($date, $title, $subSections)
    {
        $this->title = $title;
        $this->subSections = $subSections;
        $this->date = $date;
    }
}
