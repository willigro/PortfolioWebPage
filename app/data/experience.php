<?php
class Professional
{
    public $dateFrom = "";
    public $dateTo = "";
    public $company = "";
    public $office = "";
    public $locate = "";

    function __construct($dateFrom, $dateTo, $company, $office, $locate)
    {
        $this->dateFrom = $dateFrom;
        $this->dateTo = $dateTo;
        $this->company = $company;
        $this->office = $office;
        $this->locate = $locate;
    }
}

class Education
{
    public $dateFrom = "";
    public $dateTo = "";
    public $institute = "";

    function __construct($dateFrom, $dateTo, $institute)
    {
        $this->dateFrom = $dateFrom;
        $this->dateTo = $dateTo;
        $this->institute = $institute;
    }
}
