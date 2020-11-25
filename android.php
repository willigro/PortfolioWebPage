<!DOCTYPE html>
<html lang="en">

<body class="page">
  <?php include "./background.html" ?>
  <?php include "./app/controller.php" ?>

  <!-- MENU -->
  <?php include "./menu.php" ?>

  <!--

  VALUES

  -->
  <div id="android-numbers">
    <div class="container-large far-to-menu">

      <div class="row center">
        <div class="three columns">
          <p id="android-base-info-libs" class="p-extra-large center">
            <!-- To Informe by js -->
          </p>
          <p class="p-content center">
            Libs
          </p>
        </div>

        <div class="three columns">
          <p id="android-base-info-own" class="p-extra-large center">
            <!-- To Informe by js -->
          </p>
          <p class="p-content center">
            Own published projects
          </p>
        </div>

        <div class="three columns">
          <p id="android-base-info-colaborated" class="p-extra-large center">
            <!-- To Informe by js -->
          </p>
          <p class="p-content center">
            Colaborated projects
          </p>
        </div>
      </div>
    </div>
  </div>

  <!--

  Own Project list

  -->
  <div id="android-own">
    <div class="container-large p-content">
      <div class="center-text">
        <p class="p-title p-shine">My own projects</p>
        <p class="p-content">I have problems so I solved, but they are not yet finalized (are in BETA)</p>
      </div>

      <?php
      echo getOwnAndroidApplications();
      ?>
    </div>
  </div>

  <!--

  Libs Project list

  -->
  <div id="android-libs">
    <div class="container-large p-content">
      <div class="center-text">
        <p class="p-title p-shine">My own libs</p>
        <p class="p-content">Olimpo is stopped and Robbie is in planning</p>
      </div>

      <?php
      echo getAndroidLibsApplications();
      ?>
    </div>
  </div>

  <!--

  Colaborateds Project list

  -->
  <div id="android-colaborated">
    <div class="container-large p-content">
      <div class="center-text">
        <p class="p-title p-shine">Here are some projects that I worked in the last 2 years</p>
        <p class="p-content">You can ask me about this projects, I won't put many information about them because of the privacity of companies</p>
      </div>

      <?php
      echo getColaboratedAndroidApplications();
      ?>
    </div>
  </div>

</body>

<!-- Scripts
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
<script src="js/pages/android.js"></script>

</html>