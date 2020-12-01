<?php
include "./app/data/experience.php";

class ExperienceBusiness
{
    function getEducationExperiences()
    {
        return [
            new Education("2015", "2017", "Degree in System Development and Analysis"),
            new Education("2019", "2020", "Post degree in Artificial Intelligence")
        ];
    }

    function getProfessionalExperiences()
    {
        return [
            new Professional("2020-09", "Current", "UseMobile", "Android Developer", "Brazil, MG - remote"),
            new Professional("2018-11", "2020-09", "Trinity", "Android Developer", "Brazil, PE"),
            new Professional("2018-11", "2020-09", "JBR-Engenharia", "Android Developer, Trainee", "Brazil, PE"),
            new Professional("2018-11", "2020-09", "PSD Agencia Digital", "Developer, Trainee", "Brazil, PE")
        ];
    }
}