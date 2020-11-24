<?php
include "./app/business/languageBusiness.php";
include "./app/business/androidApplication.php";
include "./app/html/generator.php";

$htmlGenerator = new HtmlGenerator();
$languageBusiness = new LanguageBusiness();
$androidApplicationBusiness = new AndroidApplicationBusiness();

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
