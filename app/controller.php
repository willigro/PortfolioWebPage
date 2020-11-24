<?php
include "./app/business/languageBusiness.php";
include "./app/business/androidApplication.php";

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
    return $androidApplicationBusiness->getOwnAndroidApplications();
}

function getAndroidLibsApplications()
{
    global $androidApplicationBusiness;
    return $androidApplicationBusiness->getAndroidLibsApplications();
}

function getColaboratedAndroidApplications()
{
    global $androidApplicationBusiness;
    return $androidApplicationBusiness->getColaboratedAndroidApplications();
}
