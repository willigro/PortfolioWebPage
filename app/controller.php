<?php
/*
Move data to database when finish the layout
*/
include "./app/business/languageBusiness.php";
include "./app/business/myTeamBusiness.php";
include "./app/business/androidApplicationBusiness.php";
include "./app/business/experienceBusness.php";
include "./app/html/generator.php";

$htmlGenerator = new HtmlGenerator();
$languageBusiness = new LanguageBusiness();
$androidApplicationBusiness = new AndroidApplicationBusiness();
$myTeamBusiness = new MyTeamBusiness();
$experienceBusiness = new ExperienceBusiness();

function getLanguages()
{
    global $languageBusiness;
    return $languageBusiness->getLanguages();
}

function getOwnAndroidApplications()
{
    global $androidApplicationBusiness;
    global $htmlGenerator;
    return $htmlGenerator->getAndroidApplications($androidApplicationBusiness->getOwnAndroidApplications());
}

function getAndroidLibsApplications()
{
    global $androidApplicationBusiness;
    global $htmlGenerator;
    return $htmlGenerator->getAndroidApplications($androidApplicationBusiness->getAndroidLibsApplications());
}

function getColaboratedAndroidApplications()
{
    global $androidApplicationBusiness;
    global $htmlGenerator;
    return $htmlGenerator->getAndroidApplications($androidApplicationBusiness->getColaboratedAndroidApplications());
}

function getMyAndroidTeam()
{
    global $myTeamBusiness;
    global $htmlGenerator;

    return $htmlGenerator->getMyTeam($myTeamBusiness->getMyAndroidTeam());
}

function getMyTechLeaderTeam()
{
    global $myTeamBusiness;
    global $htmlGenerator;

    return $htmlGenerator->getMyTeam($myTeamBusiness->getMyTechLeaderTeam());
}

function getMyCEOTeam()
{
    global $myTeamBusiness;
    global $htmlGenerator;

    return $htmlGenerator->getMyTeam($myTeamBusiness->getMyCEOTeam());
}

function getMyGameTeam()
{
    global $myTeamBusiness;
    global $htmlGenerator;

    return $htmlGenerator->getMyTeam($myTeamBusiness->getMyGameTeam());
}

function getMyDataTeam()
{
    global $myTeamBusiness;
    global $htmlGenerator;

    return $htmlGenerator->getMyTeam($myTeamBusiness->getMyDataTeam());
}

function getMyProfessionalExperience(){
    global $experienceBusiness;
    global $htmlGenerator;

    return $htmlGenerator->getMyProfessionalExperience($experienceBusiness->getProfessionalExperiences());
}

function getMyEducationExperience(){
    global $experienceBusiness;
    global $htmlGenerator;

    return $htmlGenerator->getMyEducationExperience($experienceBusiness->getEducationExperiences());
}