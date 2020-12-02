<!DOCTYPE html>
<html lang="en">

<head>

  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="dist/images/favicon.png">
</head>

<body id="body" class="page">

  <?php include "./background.html"; ?>
  <?php include "./app/controller.php"; ?>

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

      <div id="profile-avatars" class="row far-to-menu">
        <div id="profile-android" class="two columns offset-by-one column">
          <img class="avatar" src="dist/images/avatar_test_4.jpg" alt="Android Developer">

          <p>Android Developer</p>

        </div>

        <div id="profile-tech-leader" class="two columns">
          <img class="avatar" src="dist/images/avatar_test_1.jpg" alt="Android Developer">

          <p>Tech Leader</p>
        </div>

        <div id="profile-ceo" class="two columns">
          <img class="avatar" src="dist/images/avatar_test_2.jpg" alt="Android Developer">

          <p>CEO</p>
        </div>

        <div id="profile-game" class="two columns">
          <img class="avatar" src="dist/images/avatar_test_3.jpg" alt="Android Developer">

          <p>Game Developer</p>
        </div>

        <div id="profile-data-scientist" class="two columns">
          <img class="avatar" src="dist/images/avatar_test_5.jpg" alt="Android Developer">

          <p>Data Scientist</p>
        </div>
      </div>

      <div class="row center-text">
        <a id="show-my-team" class="p-content-small a-main">
          Click here and see more about them
        </a>

        <a id="hide-my-team" class="p-content-small a-main" hidden>
          Less
        </a>
      </div>

      <div id="my-team-description" class="container">

        <!-- Android Developer -->
        <div id="my-team-android" class="row far-to-menu" hidden>
          <div id="profile-avatar-android" class="four columns">
            <img class="avatar" src="dist/images/avatar_test_4.jpg" alt="Android Developer">

            <p>Android Developer</p>
          </div>

          <div id="profile-content-android" class="eight columns avatar-container">
            <?php
            echo getMyAndroidTeam();
            ?>
          </div>
        </div>

        <!-- Tech leader -->
        <div id="my-team-tech-leader" class="row" hidden>
          <div id="profile-content-tech" class="eight columns avatar-container">
            <?php
            echo getMyTechLeaderTeam();
            ?>
          </div>

          <div id="profile-avatar-tech" class="four columns">
            <img class="avatar" src="dist/images/avatar_test_1.jpg" alt="Android Developer">

            <p>Tech Leader</p>
          </div>
        </div>

        <!-- CEO -->
        <div id="my-team-ceo" class="row" hidden>
          <div id="profile-avatar-ceo" class="four columns">
            <img class="avatar" src="dist/images/avatar_test_2.jpg" alt="Android Developer">

            <p>CEO</p>
          </div>

          <div id="profile-content-ceo" class="eight columns avatar-container">
            <?php
            echo getMyCEOTeam();
            ?>
          </div>
        </div>

        <!-- Game Developer -->
        <div id="my-team-game" class="row" hidden>
          <div id="profile-content-game" class="eight columns avatar-container">
            <?php
            echo getMyGameTeam();
            ?>
          </div>

          <div id="profile-avatar-game" class="four columns">
            <img class="avatar" src="dist/images/avatar_test_3.jpg" alt="Android Developer">

            <p>Game Developer</p>
          </div>
        </div>

        <!-- Data Scientist -->
        <div id="my-team-data-scientist" class="row" hidden>
          <div id="profile-avatar-data" class="four columns">
            <img class="avatar" src="dist/images/avatar_test_5.jpg" alt="Android Developer">

            <p>Data Scientist</p>
          </div>

          <div id="profile-content-data" class="eight columns avatar-container">
            <?php
            echo getMyDataTeam();
            ?>
          </div>
        </div>
      </div>
    </div>

    <!-- 
      
    Skills 
    
    -->
    <div id="skills" class="skills move">
      <!-- <p class="p-title">
        Skills
        </p> -->

      <div class="container-larger">

        <div class="content-title-section">
          <p class="p-title-section">My Skills</p>
          <p id="train-my-dino" class="p-content">
            Train the Dino Blocks <a id="train-my-dino-link" class="a-main">clicking here</a>
          </p>
          <div id="stop-train-my-dino" class="p-content" hidden>
            Stop the training <a id="stop-train-my-dino-link" class="a-main">clicking here</a>

            <div class="p-content-small">
              Wait, I'm learning!!
              <br>Actual Best Score <span id="dino_actual_score">0</span>
              <br>Alive blocks <span id="dino_alive">0</span>
              <br>Global Best score <span id="dino_best_score" class="p-shine">0</span>
            </div>
          </div>

          <canvas id="canvas-dino-brain" hidden></canvas>
          <canvas id="canvas-dino" hidden></canvas>
        </div>

        <!-- LANGUAGES -->
        <div class="row center p-content-small">
          <div class="four columns skills-section language">
            <p class="p-title resume">
              Languages
            </p>

            <table id="table-languages" style="justify-content: center; margin-left: auto; margin-right: auto;">
              <?php
              $languages = getLanguages();
              for ($i = 0; $i < count($languages); $i++) {
                $obj = $languages[$i];

                echo "<tr>

                <td  style='width:25%'><img class='language-icons' src='" . $obj->icon . "' alt=" . $obj->name . "></td>

                <td  style='width:25%'>" . $obj->name . "</td>

                <td  style='width:25%'>" . $obj->time . "</td>

                <td style='width:25%'>
                  " . $obj->nivel . "
                  <div style='background-color: rgba(255, 255, 255, 0.8); width: 100%'>
                    <div id='" . preg_replace('/\s+/', '_', $obj->name) . "' style='background-color: " . $obj->nivelPercentColor() . "; height:10px; width: 0%' data-percente='" . $obj->nivelPercent . "'></div>
                  </div> 
                </td>

                </tr>";
              }
              ?>
            </table>
          </div>
        </div>
      </div>

      <div class="container-larger">
        <div class="row p-content-small center">

          <!-- BY TECHNOLOGY -->
          <div class="skills-section">
            <p class="p-title">
              By Technology
            </p>

            <div class="row">

              <!-- Android -->
              <p class="p-subtitle" style="margin-top: 50px">
                Android
              </p>

              <div class="row" style="color: orange;">
                <div class="six columns">Architecture</div>
                <div class="six columns">Android Jetpack</div>
              </div>
              <div class="row" style="margin-top: 10px;">
                <div class="six columns" style="font-weight: bold;">
                  Clean Architecture
                  <br>MVVM
                  <br>MVP
                  <br>MVC
                  <br>Facade
                </div>

                <div class="six columns" style="font-weight: bold;">
                  LiveData
                  <br>ViewModel
                  <br>Coroutines
                  <br>Room
                  <br>Navigation Components
                  <br><span style="font-weight: lighter;">and more...</span>
                </div>
              </div>

              <div class="row" style="margin-top: 15px; color: orange;">
                <div class="six columns">Test</div>
                <div class="six columns">Network</div>
              </div>
              <div class="row" style="margin-top: 10px;  font-weight: bold;">
                <div class="six columns">
                  JUnit
                  <br>Espresso
                </div>

                <div class="six columns">
                  REST
                  <br>OkHttp3
                  <br>Retrofit
                  <br>Glide, Picasso
                  <br>Firebase, Facebook, Google
                  <br><span style="font-weight: lighter;">and more...</span>
                </div>
              </div>

              <div class="row" style="margin-top: 15px; color: orange;">
                <div class="six columns">Persistence</div>
                <div class="six columns">Others</div>
              </div>
              <div class="row" style="margin-top: 10px;  font-weight: bold;">
                <div class="six columns">
                  SQLite
                  <br>SharedPreferences
                  <br>DataStore
                  <br>Files
                  <br>Camera
                  <br>DBBrowser
                  <br><span style="font-weight: lighter;">and more... like MYSQL, PostgreSQL</span>
                </div>

                <div class="six columns">
                  Kodein
                  <br>WorkManager
                  <br>Services
                  <br>Broadcast
                  <br>Threads
                  <br>GPS
                  <br><span style="font-weight: lighter;">and more...</span>
                </div>
              </div>


              <div class="row">
                <!-- Dev Support and AI -->
                <div style="color: orange;margin-top: 50px">
                  <div class="six columns">
                    <p class="p-subtitle">
                      Dev Tools
                    </p>
                  </div>
                  <div class="six columns">
                    <p class="p-subtitle">
                      AI
                    </p>
                  </div>
                </div>

                <div class="row" style="color: orange;">
                  <div class="six columns">Most used apps</div>
                  <div class="six columns">Techniques</div>
                </div>
                <div class="row" style="margin-top: 10px;">
                  <div class="six columns" style="font-weight: bold;">
                    Git
                    <br>Github
                    <br>Gitlab
                    <br>Bitbucket
                    <br>VisualCode
                    <br>Android Studio
                    <br>NotePade++
                    <br>Apache
                    <br>Godot
                    <br>Unity
                  </div>

                  <div class="six columns" style="font-weight: bold;">
                    Machine learning
                    <br>Genectic algorithm
                    <br>Deep Learning
                    <br>Computer vision
                    <br>NLP (Natural Language Process)
                    <br><span style="font-weight: lighter;">and some more...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CONCEPTS -->
        <div class="row p-content-small ">
          <div class="skills-section">
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

            <!-- Manager -->
            <p class="p-subtitle">
              Manager
            </p>
            <p>
              Agile, Scrum, Kambam, Asana, Trello, Git Board, Git Wiki, Markdown.
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

    Experience

    -->
    <div id="experience" class="move">
      <div class="container center-text p-content">
        <div class="content-title-section" style="position: relative">
          <p class="p-title-section">
            My Experiences
            <div id="experience-level-up" style="color: rgb(87, 106, 228); position: absolute; width: 100%; opacity: 0;" class="p-power-up-high">LEVEL UP!!</div>
          </p>

          <p class="p-content">
            Bugs Resolved: DEX + <span id="experience-bugs" style="color: pink">0</span>
            <br>Coffee: CON + <span id="experience-coffee" style="color: red">0</span>
            <br>Glasses: INT + <span id="experience-glasses" style="color: blue">0</span>
            <br>PC Gamer: AGL + <span id="experience-pc" style="color: green">0</span>
          </p>
        </div>

        <!-- PROFESSIONAL -->
        <?php
        echo getMyProfessionalExperience();
        ?>

        <!-- EDUCATION -->
        <?php
        echo getMyEducationExperience();
        ?>
      </div>
    </div>

    <!-- 
      
    RESUME 
    
    -->
    <div id="resume" class="move">
      <div class="container">

        <div class="content-title-section">
          <p class="p-title-section">My Resume</p>
          <p id="resume-subtitle" class="p-content">
            <!-- Implemented by script -->
          </p>
        </div>

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
          <!-- <p class="p-title resume">Artificial Intelligence</p>
          <p class="p-subtitle">The start</p>
          <p>Start.</p>
          <p class="p-subtitle">Post Degree</p>
          <p>Degree.</p> -->
        </div>
      </div>
    </div>
  </div>
</body>
<!-- Scripts
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
<script src="js/write_text.js"></script>
<script src="js/pages/home.js"></script>
<script src="js/dino_google_game_small/constants.js"></script>
<script src="js/dino_google_game_small/neuralnetwork.js"></script>
<script src="js/dino_google_game_small/objects.js"></script>
<script src="js/dino_google_game_small/draw.js"></script>
<script src="js/dino_google_game_small/main.js"></script>

</html>