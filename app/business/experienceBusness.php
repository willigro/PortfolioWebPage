<?php
include "./app/data/experience.php";

class ExperienceBusiness
{
    function getEducationExperiences()
    {

        $analysis = new Education(
            "2015",
            "2017",
            "Unibratec, Brazil - PE",
            "Degree in System Development and Analysis"
        );

        $ai = new Education(
            "2019",
            "2020",
            "Initialize at Unibratec, Brazil - PE
        <br>Finalize at Europeia, Brazil - PE",
            "Post degree in Artificial Intelligence"
        );

        $english =  new Education(
            "2020",
            "Current",
            "English Live - Online",
            "English course"
        );

        $unfinished =  new Education(
            null,
            null,
            "Unity 2D, Godot, Android Development",
            "Udemy"
        );

        return [
            $english,
            $ai,
            $analysis,
            $unfinished
        ];
    }

    function getProfessionalExperiences()
    {

        $useMobile = new Professional(
            "2020-09",
            "Current",
            "UseMobile",
            "Android Developer",
            "Brazil, MG - remote",
            "Currently I'm working here with a finance project, resolving some bugs, implementing some features."
        );

        $trinity = new Professional(
            "2018-11",
            "2020-09",
            "Trinity",
            "Android Developer",
            "Brazil, PE",
            "Good times. Here I was able worked with several projects of differents types: sales, truckers, project, apk downloads, deliver, etc.
            <br>I also was able to lead small teams, doing the project architecture, some tasks division, chronogrames, talks wits costumers, etc.
            <br>I was a fast grow up with three promotions in one year and a lot of learne."
        );

        $jbr = new Professional(
            "2018-11",
            "2020-09",
            "JBR Engenharia",
            "Android Developer, Trainee",
            "Brazil, PE",
            "Well, here I was hired to make fours android projects for engenering, but in the end I make just two.
            <br>I needed work in all phases of the project, analysis, implementation, test, support, etc. It was very good to my learne, but
            I needed of a team, because there the only developer was me. Wall, all dificults here make me better and improve my skills."
        );

        $psd = new Professional(
            "2018-11",
            "2020-09",
            "PSD Agencia Digital",
            "Developer, Trainee",
            "Brazil, PE",
            "Here was my first job with development. We're five developer, in a garage, working with some web projects.
        <br>I was hired to work with PHP (I maked a small PHP test and can pass yet in the half it, because I used POO and MVC).
        <br>I also worked with Ionic 2 and NodeJs in a mobile app."
        );

        return [
            $useMobile,
            $trinity,
            $jbr,
            $psd
        ];
    }
}
