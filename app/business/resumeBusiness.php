<?php
include "./app/data/resume.php";

class ResumeBusiness
{

    function getFormationResume()
    {
        $formation = new Resume(
            "My academic formation"
        );

        $formationSectionWebDesigner = new ResumeSection("2012 - 2013", "Web Designer", [
            "At 2011 I'd a small course of Web Designer, where I learn some concepts of HTML and CSS, and discovered the PHP with a classmate. Well, I unterstood nothing and I stoped my studies after the end of the course."
        ]);

        $formationSectionSystem = new ResumeSection("2015 - 2017", "System Analysis and Development", [
            "Some years later I has been work as IT Support, doing servers and pc instalations, network config and some other things.
            <br />Was there that I met the developer that worked coding the server that I was installing and it maked me want try study again, so I save some money and start my college one year later.",
            " At 2015 I started my college in System Analysis and Development, at the Unibratec in Recife, BR.
            There I learn a lot of tecnologies and concepts of engeneering, and was here that I fall in love for Android Development.
            In this time I loved games and AI and I wanted work just with one of them, but this changed and today I want to join the
            AI, Games and Android in one, but the project still be in the idealization phase."
        ]);

        $posCollege = new ResumeSection("2019 - 2020", "Pos college, AI", [
            "At 2019 I started my post degree in Artificial Intelligence, also in the Unibratec, that unfortunately closed some months later. 
            So, I was transfer to Europeia also in Recife. Then the quarentine has come and it spoil the classes, and the experience, 
            but I did the possible to learning as much as possible, and today I have some projects of AI."
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
        $androidDeveloper = new Resume("Android Development - Jobs");

        $start = new ResumeSection("2017", "The start", [
            " I started on the Android Development at 2017, yet in the college, working in simple projects and concepts.
            <br />In this year, my first project, maked for the final exam from the class, was a virtual assistence with speech recognization.
            <br />Well, I tried and I do it, but 1 day before the delivery I updated the geo lib and my app broken" . $this->info(" :D sad end for my project") . ",
            but my teacher help me, he saw my code and give a note to pass.",
            "My final project in the college was a application with server, client web and android, so my team to divied the tasks and designed some of us to be the tecnology leader.
            I was the Android leader, and we got finsh the project without problems and in the time. All of the my team got the max points, web, documentation and us. Was a logistic app to deliver"
        ]);

        $firstTrainee = new ResumeSection("2017 - 2017", "The first internship", [
            " Before I concluded my college, I got it a internship in the PSD Agência Digital. There I learned PHP, Ionic 2 and nodejs. It was a
            good experiency, we were five developers with some projects, but three monthes later I left the company."
        ]);

        $secondTrainee = new ResumeSection("2017 - 2018", "Second internship", [
            "After few months later I got a new internship in the JBR - Engenharia, also at Recife, in this time I was working only with Android Development " . $this->info("(and sometimes as IT Support)") . ".",
            "In the start I needed create four Apps, but in the end I created just two. The team was my Leader, a TI Support that help me with the
            requirements, and me, the only programmer, tester, and analyst. In the start was so hard, but after sometime the projects was borning.",
            "- The first one of them was a project to count vehicles in the road, there was a lot of features with XML convertion " . $this->info("(it take me a lot of time)") . ".
            <br />- The second one was a project to draw the a area, a road area with some impact, also I needed export it and I needed do it drawings the in the XML, several pages, limited area, hard " . $this->info("(it take me still more time)") . ".
            <br />- In the middle I did a extension to Google Chrome to control a web page, like a crawler, reading the page and executing some things like click in button, return pages, fill fields, etc.
            <br />In the end, my leader and me realized that I needed work with some team, with differents projects, so I get out of the company."
        ]);

        $firstFreela = new ResumeSection("2018 - 2018", "The first freela", [
            "Here I has conclude the college and was in a period where I would not like continue working, so I stayed stopped for some time, but in a conversation with a costumer of the my mother
            I met a guy that ask me if I could create a app to him, so I tried. After some conversatio the idea was: create two android apps, one to client and one to
            admin, like a server. The app would be to make orders of supplements.",
            "I created the Android project, but in the delivery, showing to consumer
            as was the app, him ask me about IOS and I tried do a Hybrid app with Ionic 2. I did the client and admin apps, but my pc was not a
            MAC, so I not got build the IOS app and the project was stopped, time and money wasted, but so many experience acquired."
        ]);

        $firstJob = new ResumeSection("2018 - 2020", "My first job as developer", [
            "Almost two years later of get my formation I finally get my first CLT job as Android Developer at the Trinity Soluções, Recife in 2018.",
            "There I worked with various Android apps and sometimes with javascript or PHP. But focusing in the Android, I was designed to work with a legacy App writen in Java, without pattern and with some many open tasks.
            <br />So, in my first month, I found and resolve almost 40 issues with several types of bugs and small issues. Few months later I was promoted, and I continued working hard, studding and learning.
            <br />In one year, I was working with 3 projects and was promoted three times.",
            "The quarentine has come and I started to work remotely. In this period, I finished my post degree and start to find jobs from out Recife, I wanted know other developers, companies,
            places, so I get a new job, but remotely " . $this->info("(i needed stay in Recife for now, 2020)") . " in the Use Mobile, Ouro Preto.",
            "Some done works:
            <br>- An app for sales, with orders, management, etc.
            <br>- An app for truckers, to see news, balance, promotions, etc.
            <br>- An app for a energy company, to manager and register occorrences."
        ]);

        $secondFreela = new ResumeSection("2019 - 2019", "Second freela", [
            "I got a job with a IT support of a constumer from the Trinity when I went work with the training and support of an application there.
            <br />This job was make a App for sales. I would make a App and they would make a Service and Dashboard."
        ]);

        $actualJob = new ResumeSection("2020", "My actual job", [
            "Today I work in the Use Mobile, a company from Minas Gerais, remotely. For now I'm just working with one project."
        ]);

        $androidDeveloper->sections = [
            $start,
            $firstTrainee,
            $secondTrainee,
            $firstFreela,
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

    function info($a)
    {
        return "<span class='p-content-small p-info'>" . $a . "</span>";
    }
}
