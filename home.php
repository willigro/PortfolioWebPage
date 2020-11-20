<!DOCTYPE html>
<html lang="en">

<head>

  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="dist/images/favicon.png">

</head>

<body id="body" class="page">

  <?php include "./background.html"; ?>
  <?php include "./controller.php"; ?>

  <!-- MENU -->
  <?php include "./menu.php"; ?>

  <div onscroll="onScroll(event)">

    <!-- 

    HEADER

    -->
    <div id="header" class="header-title">

      <!-- 

      MY TEAM

      -->
      <div id="my-team" class="center">
        <!-- <p class="p-title">
          My team
        </p> -->
      </div>

      <div class="row" style="padding-top: 5vh;">
        <div id="profile-android" class="two columns offset-by-one column avatar-container">
          <img class="avatar" src="dist/images/avatar_test_4.jpg" alt="Android Developer">

          <p>Android Developer</p>

        </div>

        <div id="profile-tech-leader" class="two columns avatar-container">
          <img class="avatar" src="dist/images/avatar_test_1.jpg" alt="Android Developer">

          <p>Tech Leader</p>
        </div>

        <div id="profile-ceo" class="two columns avatar-container">
          <img class="avatar" src="dist/images/avatar_test_2.jpg" alt="Android Developer">

          <p>CEO</p>
        </div>

        <div id="profile-game" class="two columns avatar-container">
          <img class="avatar" src="dist/images/avatar_test_3.jpg" alt="Android Developer">

          <p>Game Developer</p>
        </div>

        <div id="profile-data-scientist" class="two columns avatar-container">
          <img class="avatar" src="dist/images/avatar_test_5.jpg" alt="Android Developer">

          <p>Data Scientist</p>
        </div>
      </div>

      <!-- Android Developer -->
      <div id="profile-android-box" class="profile-box wrap-content">
        <table class="profile-table">
          <tr>
            <td>Experience:</td>
            <td>3 years</td>
          </tr>
          <tr>
            <td>Skills:</td>
            <td>Middle</td>
          </tr>
          <tr>
            <td>Colaborated Projects (Including hybrids)</td>
            <td>23+</td>
            <!--
            Useful, done, libs, etc.
            6 Trinity: SmartSell, Roadcard, PetFlert, NeoEnergia, Fastmanager (php, not count), Armazem paraiba
            2 JBR: Count and draw area
            1 PSD: Was ionic
            4 Freela: RDM, AKSuplementos and more two in Ionic
            6 My: D&D, Notes, MyPocket, Pedido, Robbie, Olimpo
            1 Open Source: Circular Image View
            1 Use Mobile: Gerencianet
          -->
          </tr>
          <tr>
            <td>Projects from the zero (Including hybrids)</td>
            <td>19</td>
            <!--
            6 Trinity: Roadcard, NeoEnergia
            2 JBR: Count and draw area
            1 PSD: Was ionic
            4 Freela: RDM, AKSuplementos and more two in Ionic
            6 My: D&D, Notes, MyPocket, Pedido, Robbie, Olimpo
          -->
          </tr>
          <tr>
            <td>Paralel projects (to learn)</td>
            <td>??</td>
          </tr>
          <tr>
            <td>
              <p>
                Knowledge:
                <br>Java, Kotlin;
                <br>MVVM, MVP, MVC;
                <br>Koin, Kodein;
                <br>Architecture components: LiveData, ViewModel, Navigation
                <br>Room, Lyfecycle, etc;
                <br>JUnit, Expresso, TDD
                <br>REST, Retrofit, Glide, Picasso, and most others libs;
                <br>SQLite, DBBrowser;
                <br>Clean Code, SOLID.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              Others:
              <br>PHP, NodeJs, javascript;
            </td>
          </tr>
        </table>
      </div>

      <!-- Tech Leader -->
      <div id="profile-tech-leader-box" class="profile-box wrap-content">
        <table class="profile-table">
          <tr>
            <td>Experience:</td>
            <td>1 year</td>
          </tr>
          <tr>
            <td>Skills:</td>
            <td>Junior</td>
          </tr>
          <tr>
            <td>Projects as leader (with team)</td>
            <td>4</td>
            <!--
            3 Trinity: SmartSell, Roadcard, NeoEnergia
            1 College: Final project
          -->
          </tr>
          <tr>
            <td>
              <p>
                What did i do?:
                <br>Designed tasks, define cronograme, the architeture and tecnologies;
                <br>Code review, classes to teach some techincs and live;
                <br>Talks with costumers.
              </p>
            </td>
          </tr>
        </table>
      </div>

      <!-- CEO -->
      <div id="profile-ceo-box" class="profile-box wrap-content">
        <table class="profile-table">
          <tr>
            <td>Experience:</td>
            <td>1 year</td>
          </tr>
          <tr>
            <td>Skills:</td>
            <td>Junior</td>
          </tr>
          <tr>
            <td>Projects I do for Rittmann (me)</td>
            <td>10</td>
            <!--
            6 My: D&D, Notes, MyPocket, Pedido, Robbie, Olimpo
            4 Freela: RDM, AKSuplementos and more two in Ionic
          -->
          </tr>
          <tr>
            <td>
              <p>
                What did i do?:
                <br>Android projects in the general. But i'm working in some others projects.
              </p>
            </td>
          </tr>
        </table>
      </div>

      <!-- Game -->
      <div id="profile-game-box" class="profile-box wrap-content">
        <table class="profile-table">
          <tr>
            <td>Experience:</td>
            <td>1 year</td>
          </tr>
          <tr>
            <td>Skills:</td>
            <td>Junior</td>
          </tr>
          <tr>
            <td>Projects I finish</td>
            <td>0, yes, zero</td>
          </tr>
          <tr>
            <td>Projects I started (and remember)</td>
            <td>3</td>
          </tr>
          <tr>
          <tr>
            <td>Projects I make to learn</td>
            <td>5+</td>
          </tr>
          <tr>
            <td>
              <p>
                Tecnologies:
                <br>Godot, Unity and javascript.
              </p>
            </td>
          </tr>
        </table>
      </div>

      <!-- Data Scientist -->
      <div id="profile-data-scientist-box" class="profile-box wrap-content">
        <table class="profile-table">
          <tr>
            <td>Experience:</td>
            <td>1 year</td>
          </tr>
          <tr>
            <td>Skills:</td>
            <td>Junior</td>
          </tr>
          <tr>
            <td>Projects I finish</td>
            <td>12+</td>
          </tr>
          <tr>
            <td>Main skills:</td>
            <td>ML and genetic algorithm</td>
          </tr>
          <tr>
          <tr>
            <td>
              <p>
                Knowledge:
                <br>Python, ML, NLP, genetic algorithm, KNN,
                <br>Deep Learning, backpropagation, BigData, visual computing,
                <br>Data analysis, intelligent agent.
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <!-- 
      
    Skills 
    
    -->
    <div id="skills" class="skills">
      <!-- <p class="p-title">
        Skills
      </p> -->

      <div class="container-large">
        <div class="row p-content-small">

          <!-- BY TECHNOLOGY -->
          <div class="four columns skills-section">
            <p class="p-title">
              By Technology
            </p>

            <!-- Android -->
            <p class="p-subtitle">
              Android
            </p>
            <p>
              Kotlin, Java, JUnit, Espresso, MVC, MVVM, MVP, Clean Architecture, Android Jetpack, Room, Navigation Components, LiveData,
              REST, ViewModel, Coroutines, Kodein, Retrofit, WorkManager, Services, Broadcast, Threads, SQLite, DBBrowser, Firebase,
              Facebook, Google, GPS, Custom View, <br>and more.
            </p>

            <!-- Dev Support -->
            <p class="p-subtitle">
              Dev Tools
            </p>
            <p>
              Git, Github, Gitlab, Bitbucket, VisualCode, Android Studio, NotePade++, Apache, Godot, Unity,<br>and more.
            </p>

            <!-- Manager -->
            <p class="p-subtitle">
              Manager
            </p>
            <p>
              Agile, Scrum, Kambam, Asana, Trello, Git Wiki, Markdown.
            </p>

            <!-- AI -->
            <p class="p-subtitle">
              AI
            </p>
            <p>
              Machine learning, Genectic algorithm, Deep Learning, Computer vision, NLP (Natural Language Process)<br>and some more.
            </p>
          </div>

          <!-- LANGUAGES -->
          <div class="four columns skills-section language">
            <p class="p-title resume">
              Languages
            </p>

            <table>
              <?php

              for ($i = 0; $i < count($languages); $i++) {
                $obj = $languages[$i];

                echo "<tr>

                <td  style='width:25%'><img class='language-icons' src='" . $obj->icon . "' alt=" . $obj->name . "></td>

                <td  style='width:25%'>" . $obj->name . "</td>

                <td  style='width:25%'>" . $obj->time . "</td>

                <td style='width:25%'>
                  " . $obj->nivel . "
                  <div style='background-color: rgba(255, 255, 255, 0.8); width: 100%'>
                    <div style='background-color: " . $obj->nivelPercentColor() . "; height:10px;width:" . $obj->nivelPercent . "%'></div>
                  </div> 
                </td>

                </tr>";
              }
              ?>
            </table>
          </div>

          <!-- CONCEPTS -->
          <div class="four columns skills-section">
            <p class="p-title resume">
              Concepts
            </p>

            <!-- Coding -->
            <p class="p-subtitle">
              Coding
            </p>
            <p>
              Test, SOLID, KISS, DRY, YAGNI, SoC, Design Patterns, Refactor
            </p>

            <!-- Engineer -->
            <p class="p-subtitle">
              Engineer
            </p>
            <p>
              Simple documentation, requirements analysis, interactions with stakeholders
            </p>

            <!-- To user -->
            <p class="p-subtitle">
              To user
            </p>
            <p>
              Simple designer and usability
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 
      
    RESUME 
    
    -->
    <div id="resume">
      <div class="container">
        <div class="row p-content-small">

          <!-- FORMATION -->
          <p class="p-title resume">My academic formation</p>
          <p class="p-subtitle">Web Designer</p>
          <p>At 2011 I'd a small course of Web Designer, where I learn some concepts of HTML and CSS.</p>
          <p class="p-subtitle">System Analysis and Development</p>
          <p>
            Some years later I has been work as IT Support, doing servers and pc instalations, network config and some other things.
            <br />Was there that I met a developer and it maked me want try again, so I save some money and start my college one year later.
          </p>
          <p>
            At 2015 I started my college in System Analysis and Development, at the Unibratec in Recife, BR.
            There I learn a lot of tecnologies and engenering concepts, and was here that I fall in love for Android Development.
            In this time I loved games and AI and I wanted work just with one of them, but this changed and today I want to join the
            AI, Games and Android in one, but the project still be in the idealization phase.
          </p>
          <p class="p-subtitle">Pos college, AI</p>
          <p>
            At 2019 I started my post degree in Artificial Intelligence, also in the Unibratec, that unfortunately closed some months later.
            So, I was transfer to Europeia also in Recife. Then the quarentine has come and it spoil the classes, and the experience, but I was
            the possible to learning as much as possible. And today I have some projects with games and one that I making with Android.
          </p>

          <!-- ANDROID -->
          <p class="p-title resume">Android Development</p>
          <p class="p-subtitle">The start</p>
          <p>
            I started on the Android Development at 2017, yet in the college, working in simple projects and concepts.
            <br />In this year, my first project, maked to final exam from the class, was a virtual assistence with speech recognization.
            <br />Well, I try and I do it, but 1 day before the delivery I updated the geo lib and my app broken :D sad end to my project,
            <br />but my teache help me, saw my code and give a note to pass.
            <br />My final project in the college was a application with server, client web and android, so my team to divied the tasks and designed someome of us to be the tecnology leader.
            I was the Android leader, and we got finsh the project without problems and in the time. All of the equips got the max points, web, documentation and us (android).
          </p>
          <p class="p-subtitle">The first trainee</p>
          <p>
            Before I concluded my college, I got it a trainee in the PSD Digital Agency. There I learn PHP, Ionic 2 and nodejs. It was a
            good experiency, we were five developers with some projects, but three monthes later I left the company.
          </p>
          <p class="p-subtitle">The first freela</p>
          <p>
            So, I concluded my college, and not got a job, then I tried a freela for a collegue: create two android apps, one to client and one to
            admin use like a server. The app would be to make orders of sumplements. I'd the Android project, but in the delivery, showing to consumer
            as was the app, him ask me about IOS and I tried do a Hybrid app with Ionic 2. I did the client and admin apps, but my pc was not a
            MAC, so I not got build the IOS app and the project was stopped, time and money wasted, but experience acquired.
          </p>
          <p class="p-subtitle">Second trainee</p>
          <p>
            After of six months "stopped" I got a new trainee in the JBR - Engenering, also at Recife, this time working only with Android Development (and sometimes as IT Support).
            <br />In the start I needed create fours App, but in the end I create just two. The team was my Leader, a TI Support that help me with the
            requirements, and me, the only programmer, tester, and analyst :D. In the start was so hard, but after sometime the projects was borning.
            <br />The first one of them was a project to count vehicles in the road, there was a lot of features with XML convertion (it take me a lot of time).
            <br />The second one was a project to draw the a area, a road area with some impact, also I needed export this drawings to XML (it take me still more time).
            <br />In the end, my leader and me realized that I needed work with some equip, with differents projects, so I get out of the company.
          </p>
          <p class="p-subtitle">My first job as developer</p>
          <p>Almost two years later of get my formation I finally get my first CLT job as Android Developer at the Solutions Trinity, Recife in 2018.</p>
          <p>
            There I work with various Android apps and sometimes with javascript or PHP. Focusing in the Android, I was designed to work with a legacy App writen in Java, without pattern and with some bugs.
            <br />So, in my first month, I find and resolve almost 40 issues with several types of bugs. Few months later I was promoted, and I continue working hard, studding and learning.
            <br />In one year, I was working with 3 projects and was promoted three times.
            <br />The quarentine has come and I start to work remotely. In this period, I finish my post degree and start to find jobs from out Recife, I wanted know other developers, companies,
            places, so I get a new job, also remotely (i needed stay in Recife for now) in the Use Mobile, Ouro Preto.
            <br />Some of works was:
            <br>An app to sales, with orders.
            <br>An app to truckers.
            <br>An app to accompany the work with energy poles and equipments for a energy company.
          </p>
          <p class="p-subtitle">Second freela</p>
          <p>
            I got a job with a constumer from the Trinity, where a maked a App to sales.
          </p>
          <p class="p-subtitle">My actual job</p>
          <p>Today I work in the Use Mobile, a company from Minas Gerais, remotely. For now I just work with one project, still knowing the company.</p>

          <!-- AI -->
          <p class="p-title resume">Artificial Intelligence</p>
          <p class="p-subtitle">The start</p>
          <p>Start.</p>
          <p class="p-subtitle">Post Degree</p>
          <p>Degree.</p>
        </div>
      </div>
    </div>
  </div>
</body>

</html>