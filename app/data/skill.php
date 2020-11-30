<?php
/*
Don't use it, refactor if need
*/
class SkillContainer
{
    public $title = "";
    public $majorSkills = [];    

    function __construct($title)
    {
        $this->title = $title;
    }
}

class MajorSkill
{
    public $title = "";
    public $skillSections = [];
    public $completeRow = false;

    function __construct($title, $skillSections, $completeRow)
    {
        $this->title = $title;
        $this->skillSections = $skillSections;
        $this->completeRow = $completeRow;
    }
}

class SkillSection
{
    public $title = "";
    public $skills = [];
    public $more = "";

    function __construct($title, $skills, $more = "")
    {
        $this->title = $title;
        $this->skills = $skills;
        $this->more = $more;
    }
}
