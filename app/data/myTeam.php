<?php
class MyTeam
{
    public $avatar = "";
    public $title = "";
    public $mainInfo = [];
    public $knowledge = [];

    function __construct($avatar, $title, $mainInfo = [], $knowledge = [])
    {
        $this->avatar = $avatar;
        $this->title = $title;
        $this->mainInfo = $mainInfo;
        $this->knowledge = $knowledge;
    }

    function newMainInfo($title, $description)
    {
        array_push($this->mainInfo, [$title, $description]);
    }

    function newKnowlegde($title, $description)
    {
        array_push($this->knowledge, [$title, $description]);
    }
}
