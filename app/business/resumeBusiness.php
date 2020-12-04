<?php
include "./app/data/resume.php";

class ResumeBusiness
{

    function getFormationResume()
    {
        $formation = new Resume(
            "My academic formation"
        );

        $formationSectionWebDesigner = new ResumeSection("Web Designer", [
            "At 2011 I'd a small course of Web Designer, where I learn some concepts of HTML and CSS."
        ]);

        $formationSectionSystem = new ResumeSection("System Analysis and Development", [
            "Some years later I has been work as IT Support, doing servers and pc instalations, network config and some other things.
            <br />Was there that I met a developer and it maked me want try again, so I save some money and start my college one year later.",
            " At 2015 I started my college in System Analysis and Development, at the Unibratec in Recife, BR.
            There I learn a lot of tecnologies and engenering concepts, and was here that I fall in love for Android Development.
            In this time I loved games and AI and I wanted work just with one of them, but this changed and today I want to join the
            AI, Games and Android in one, but the project still be in the idealization phase."
        ]);

        $posCollege = new ResumeSection("Pos college, AI", [
            "At 2019 I started my post degree in Artificial Intelligence, also in the Unibratec, that unfortunately closed some months later.
            So, I was transfer to Europeia also in Recife. Then the quarentine has come and it spoil the classes, and the experience, but I was
            the possible to learning as much as possible. And today I have some projects with games and one that I making with Android."
        ]);

        $formation->sections = [
            $formationSectionWebDesigner,
            $formationSectionSystem,
            $posCollege
        ];

        return $formation;
    }

    function getAndroidResume()
    {
        $androidDeveloper = new Resume("Android Development");

        $start = new ResumeSection("The start", [
            " I started on the Android Development at 2017, yet in the college, working in simple projects and concepts.
            <br />In this year, my first project, maked to final exam from the class, was a virtual assistence with speech recognization.
            <br />Well, I try and I do it, but 1 day before the delivery I updated the geo lib and my app broken :D sad end to my project,
            <br />but my teache help me, saw my code and give a note to pass.
            <br />My final project in the college was a application with server, client web and android, so my team to divied the tasks and designed someome of us to be the tecnology leader.
            I was the Android leader, and we got finsh the project without problems and in the time. All of the equips got the max points, web, documentation and us (android)."
        ]);

        $firstTrainee = new ResumeSection("The first trainee", [
            " Before I concluded my college, I got it a trainee in the PSD Digital Agency. There I learn PHP, Ionic 2 and nodejs. It was a
            good experiency, we were five developers with some projects, but three monthes later I left the company."
        ]);

        $firstFreela = new ResumeSection("The first freela", [
            " So, I concluded my college, and not got a job, then I tried a freela for a collegue: create two android apps, one to client and one to
            admin use like a server. The app would be to make orders of sumplements. I'd the Android project, but in the delivery, showing to consumer
            as was the app, him ask me about IOS and I tried do a Hybrid app with Ionic 2. I did the client and admin apps, but my pc was not a
            MAC, so I not got build the IOS app and the project was stopped, time and money wasted, but experience acquired."
        ]);

        $secondTrainee = new ResumeSection("Second trainee", [
            " After of six months \"stopped\" I got a new trainee in the JBR - Engenering, also at Recife, this time working only with Android Development (and sometimes as IT Support).
            <br />In the start I needed create fours App, but in the end I create just two. The team was my Leader, a TI Support that help me with the
            requirements, and me, the only programmer, tester, and analyst :D. In the start was so hard, but after sometime the projects was borning.
            <br />The first one of them was a project to count vehicles in the road, there was a lot of features with XML convertion (it take me a lot of time).
            <br />The second one was a project to draw the a area, a road area with some impact, also I needed export this drawings to XML (it take me still more time).
            <br />In the end, my leader and me realized that I needed work with some equip, with differents projects, so I get out of the company."
        ]);

        $firstJob = new ResumeSection("My first job as developer", [
            "Almost two years later of get my formation I finally get my first CLT job as Android Developer at the Solutions Trinity, Recife in 2018.",
            " There I work with various Android apps and sometimes with javascript or PHP. Focusing in the Android, I was designed to work with a legacy App writen in Java, without pattern and with some bugs.
            <br />So, in my first month, I find and resolve almost 40 issues with several types of bugs. Few months later I was promoted, and I continue working hard, studding and learning.
            <br />In one year, I was working with 3 projects and was promoted three times.
            <br />The quarentine has come and I start to work remotely. In this period, I finish my post degree and start to find jobs from out Recife, I wanted know other developers, companies,
            places, so I get a new job, also remotely (i needed stay in Recife for now) in the Use Mobile, Ouro Preto.
            <br />Some of works was:
            <br>An app to sales, with orders.
            <br>An app to truckers.
            <br>An app to accompany the work with energy poles and equipments for a energy company."
        ]);

        $secondFreela = new ResumeSection("Second freela", [
            " I got a job with a constumer from the Trinity, where a maked a App to sales."
        ]);

        $actualJob = new ResumeSection("My actual job", [
            "Today I work in the Use Mobile, a company from Minas Gerais, remotely. For now I just work with one project, still knowing the company."
        ]);

        $androidDeveloper->sections = [
            $start,
            $firstTrainee,
            $firstFreela,
            $secondTrainee,
            $firstJob,
            $secondFreela,
            $actualJob
        ];

        return $androidDeveloper;
    }

    function getResume()
    {

        return [
            $this->getFormationResume(),
            $this->getAndroidResume()
        ];
    }
}
