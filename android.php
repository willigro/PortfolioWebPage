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
            <!-- To Informe -->
          </p>
          <p class="p-content center">
            Libs
          </p>
        </div>

        <div class="three columns">
          <p id="android-base-info-own" class="p-extra-large center">
            <!-- To Informe -->
          </p>
          <p class="p-content center">
            Own published projects
          </p>
        </div>

        <div class="three columns">
          <p id="android-base-info-colaborated" class="p-extra-large center">
            <!-- To Informe -->
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
      <?php
      echo getColaboratedAndroidApplications();
      ?>
    </div>
  </div>

</body>

<!-- Scripts
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
<script src="js/android.js"></script>

</html>