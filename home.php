<!DOCTYPE html>
<html lang="en">
<!--

All:
  - Check english
  - Base text size

My team:
  - photos

Resume:
  - Check texts

Android:
  - Change imgs from my pocket and DdD
  - Animation for sections if need

-->
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
            <p class="p-content-small" style="margin-bottom: 5vh;">
              <span id="languages-subtitle" style="font-style: italic;"></span>
              <br><span id="languages-subtitle-info" style="font-style: italic;"></span>
            </p>

            <table id="table-languages" class="p-content" style="justify-content: center; margin-left: auto; margin-right: auto;">
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
        <div class="row p-content center">

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
                <div class="six columns">
                  Clean Architecture
                  <br>MVVM
                  <br>MVP
                  <br>MVC
                  <br>Facade
                </div>

                <div class="six columns">
                  LiveData
                  <br>ViewModel
                  <br>Coroutines
                  <br>Navigation Components
                  <br>and more...
                </div>
              </div>

              <div class="row" style="margin-top: 15px; color: orange;">
                <div class="six columns">Test</div>
                <div class="six columns">Network</div>
              </div>
              <div class="row" style="margin-top: 10px;">
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
                  <br>and more...
                </div>
              </div>

              <div class="row" style="margin-top: 15px; color: orange;">
                <div class="six columns">Persistence</div>
                <div class="six columns">Others</div>
              </div>
              <div class="row" style="margin-top: 10px">
                <div class="six columns">
                  SQLite
                  <br>Room
                  <br>SharedPreferences
                  <br>Realm
                  <br>DataStore
                  <br>Files
                  <br>Camera
                  <br>DBBrowser
                  <br>and more... like MYSQL, PostgreSQL
                </div>

                <div class="six columns">
                  Kodein
                  <br>WorkManager
                  <br>Services
                  <br>Broadcast
                  <br>Threads
                  <br>GPS
                  <br>and more...
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
                  <div class="six columns">
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

                  <div class="six columns">
                    Machine learning
                    <br>Genectic algorithm
                    <br>Deep Learning
                    <br>Computer vision
                    <br>NLP (Natural Language Process)
                    <br>and some more...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CONCEPTS -->
        <div class="row p-content">
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

        <div class="row p-content">
          <?php
          echo getResume();
          ?>
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