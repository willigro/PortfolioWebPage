<?php
include "./app/business/languageBusiness.php";
include "./app/business/androidApplication.php";

function getLanguages(){
    $business = new LanguageBusiness();
    return $business->getLanguages();
}

function getOwnAndroidApplications(){
    $business = new AndroidApplicationBusiness();
    return $business->getOwnAndroidApplications();
}