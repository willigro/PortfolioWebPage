<!DOCTYPE html>
<html lang="en">

<body class="page">
  <?php include "./background.html" ?>
  <?php include "./controller.php" ?>

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
      for ($i = 0; $i < count($androidApplications); $i++) {
        $obj = $androidApplications[$i];
        echo '<div style="margin-top: 15vh; margin-bottom: 15vh">';
        echo '<div class="row">

        <div class="four columns center">
          <img class="android-app-img" src="' . $obj->mainImage . '" alt="' . $obj->title . '">
        </div>

        <div class="eight columns">
          <p class="p-title">
            ' . $obj->title . '
          </p>
          <p>
          ' . $obj->description . '
          </p>

          <p class="p-subtitle">
            Tecnologies
          </p>
          <p>
          ' . $obj->technologies . '
          </p>';

        echo '<div>';

        for ($j = 0; $j < count($obj->smallImages); $j++) {
          echo '<img class="android-app-img-small" src="' . $obj->smallImages[$j] . '">';
        }
        echo '</div>';
        echo '</div>
      </div>';

        echo '<div class="center google-play">
            <a class="google-play-link" href="' . $obj->googlePlayLink . '" target="blank">
              <img class="google-play-icon" src="dist/images/google_play.png">
              Clique aqui e baixe o app
            </a>
          </div>';
        echo '</div>';
      }
      ?>
    </div>
  </div>

   <!--

  Libs Project list

  -->
  <div id="android-libs">
    <div class="container-large p-content">
      <?php
      for ($i = 0; $i < count($androidApplications); $i++) {
        $obj = $androidApplications[$i];
        echo '<div style="margin-top: 15vh; margin-bottom: 15vh">';
        echo '<div class="row">

        <div class="four columns center">
          <img class="android-app-img" src="' . $obj->mainImage . '" alt="' . $obj->title . '">
        </div>

        <div class="eight columns">
          <p class="p-title">
            ' . $obj->title . '
          </p>
          <p>
          ' . $obj->description . '
          </p>

          <p class="p-subtitle">
            Tecnologies
          </p>
          <p>
          ' . $obj->technologies . '
          </p>';

        echo '<div>';

        for ($j = 0; $j < count($obj->smallImages); $j++) {
          echo '<img class="android-app-img-small" src="' . $obj->smallImages[$j] . '">';
        }
        echo '</div>';
        echo '</div>
      </div>';

        echo '<div class="center google-play">
            <a class="google-play-link" href="' . $obj->googlePlayLink . '" target="blank">
              <img class="google-play-icon" src="dist/images/google_play.png">
              Clique aqui e baixe o app
            </a>
          </div>';
        echo '</div>';
      }
      ?>
    </div>
  </div>

    <!--

  Colaborateds Project list

  -->
  <div id="android-colaborated">
    <div class="container-large p-content">
      <?php
      for ($i = 0; $i < count($androidApplications); $i++) {
        $obj = $androidApplications[$i];
        echo '<div style="margin-top: 15vh; margin-bottom: 15vh">';
        echo '<div class="row">

        <div class="four columns center">
          <img class="android-app-img" src="' . $obj->mainImage . '" alt="' . $obj->title . '">
        </div>

        <div class="eight columns">
          <p class="p-title">
            ' . $obj->title . '
          </p>
          <p>
          ' . $obj->description . '
          </p>

          <p class="p-subtitle">
            Tecnologies
          </p>
          <p>
          ' . $obj->technologies . '
          </p>';

        echo '<div>';

        for ($j = 0; $j < count($obj->smallImages); $j++) {
          echo '<img class="android-app-img-small" src="' . $obj->smallImages[$j] . '">';
        }
        echo '</div>';
        echo '</div>
      </div>';

        echo '<div class="center google-play">
            <a class="google-play-link" href="' . $obj->googlePlayLink . '" target="blank">
              <img class="google-play-icon" src="dist/images/google_play.png">
              Clique aqui e baixe o app
            </a>
          </div>';
        echo '</div>';
      }
      ?>
    </div>
  </div>

</body>

<!-- Scripts
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
<script src="js/android.js"></script>

</html>