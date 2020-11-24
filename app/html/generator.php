<?php
class HtmlGenerator
{
  function getAndroidApplications($androidApplications)
  {
    $html = "";

    for ($i = 0; $i < count($androidApplications); $i++) {
      $obj = $androidApplications[$i];
      $html .= '<div style="margin-top: 15vh; margin-bottom: 15vh">'; // scope
      $html .= '<div class="row">

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
              </p>
           
              <div>';
      for ($j = 0; $j < count($obj->smallImages); $j++) {
        $html .= '<img class="android-app-img-small" src="' . $obj->smallImages[$j] . '">';
      }
      $html .= '</div>
                </div>;
          </div>'; // row

      if ($obj->googlePlayLink || $obj->gitLink || $obj->privateProject) {
        $html .= '<div class="center android-application-links-content">';
        if ($obj->googlePlayLink)
          $html .= '<a class="android-application-links-link" href="' . $obj->googlePlayLink . '" target="blank">
                    <img class="android-application-links-icon" src="dist/images/google_play.png">
                    Click here and open the google play
                  </a>';

        if ($obj->gitLink)
          $html .= '<a class="android-application-links-link" href="' . $obj->gitLink . '" target="blank">
                        <img class="android-application-links-icon" src="dist/images/github-32px.png">
                        Click here and open the repository
                      </a>';

        if ($obj->privateProject)
          $html .= '<a class="android-application-links-link" href="' . $obj->gitLink . '" target="blank">
                        <img class="android-application-links-icon" src="dist/images/github-32px.png">
                        Click here and open the repository
                      </a>';
        $html .= '</div>
                </div>'; // scope
      }
    }

    return $html;
  }
}
