<?php
class Professional
{
    public $dateFrom = "";
    public $dateTo = "";
    public $company = "";
    public $office = "";
    public $locate = "";
    public $description = "";

    function __construct($dateFrom, $dateTo, $company, $office, $locate, $description)
    {
        $this->dateFrom = $dateFrom;
        $this->dateTo = $dateTo;
        $this->company = $company;
        $this->office = $office;
        $this->locate = $locate;
        $this->description = $description;
    }
}

class Education
{
    public $dateFrom = "";
    public $dateTo = "";
    public $institute = "";
    public $course = "";

    function __construct($dateFrom, $dateTo, $institute, $course)
    {
        $this->dateFrom = $dateFrom;
        $this->dateTo = $dateTo;
        $this->institute = $institute;
        $this->course  = $course;
    }
}
