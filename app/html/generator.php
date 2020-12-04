<?php
class HtmlGenerator
{
  function getAndroidApplications($androidApplications)
  {
    $html = "";

    for ($i = 0; $i < count($androidApplications); $i++) {
      $obj = $androidApplications[$i];
      $html .= '<div style="margin-bottom: 10vh" class="p-content-small">
            <div class="row">';

      if ($obj->mainImage) {
        $html .= '<div class="four columns center">
                    <img class="android-app-img" src="' . $obj->mainImage . '" alt="' . $obj->title . '">
                </div>';
      } else {
        $html .= '<div class="four columns center">
            <img class="android-app-img-lib" src="dist/images/android_libs.png">
        </div>';
      }

      $html .= '<div class="eight columns">
              <p class="p-title">
                ' . $obj->title . '
              </p>
              <p>
              ' . $obj->description . '
              </p>';

      if ($obj->fromZero)
        $html .= '<p class="p-info">I worked in this project since the start</p>';

      $html .=   '<p class="p-subtitle">
                Some used tecnologies
              </p>
              <p>
              ' . $obj->technologies . '
              </p>';

      if ($obj->smallImages) {
        $html .= '<div>';
        for ($j = 0; $j < count($obj->smallImages); $j++) {
          $html .= '<img class="android-app-img-small" src="' . $obj->smallImages[$j] . '">';
        }
        $html .= '</div>'; // small images
      }

      $html .= '</div>
      </div>'; // row

      if ($obj->googlePlayLink || $obj->gitLink || $obj->privateProject) {
        $html .= '<div class="android-application-links-content" style="text-align: center">';
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
          $html .= '<p class="p-content-small">The code and the link to download is private</p>';

        $html .= '</div>'; // links content
      }
      $html .= ' </div>'; // scope
    }

    return $html;
  }

  function getMyTeam($myTeam)
  {
    $html = "<div class='p-content'><p>";

    $mainInfo = $myTeam->mainInfo;
    $knowledge = $myTeam->knowledge;

    $all = sizeof($mainInfo) + sizeof($knowledge);
    $j = 0;

    for ($i = 0; $i < sizeof($mainInfo); $i++) {
      $j++;
      $obj = $mainInfo[$i];

      $html .= $obj[0] . '<span class="p-content-small" style="color:' . $this->percent2Color((100 * $j / 2) / $all) . '"><br>' . $obj[1] . '</span>';

      if ($i < sizeof($mainInfo) - 1)
        $html .= "<br>";
    }

    $html .= "</p>
    <p>";



    for ($i = 0; $i < sizeof($knowledge); $i++) {
      $j++;
      $obj = $knowledge[$i];

      $html .= $obj[0] . '<span class="p-content-small" style="color:' . $this->percent2Color((100 * $j / 2) / $all) . '"><br>' . $obj[1] . '</span>';

      if ($i < sizeof($knowledge) - 1)
        $html .= "<br>";
    }

    return $html . "</div>";
  }

  function getMyProfessionalExperience($professional)
  {
    $html = '<div style="text-align: left;  margin-bottom: 10vh">
      <p class="p-title center-text">Professional</p>';
    for ($i = 0; $i < sizeof($professional); $i++) {
      $obj = $professional[$i];

      $html .= '<div class="row line-bottom">
      <div class="five columns">
        <div style="margin-top: 25px;">
        ' . $obj->dateFrom . '<span class="p-shine"> - </span>' . $obj->dateTo . '
        </div>
        <div>
        ' . $obj->company . '
        </div>
        <div class="p-shine">
        ' . $obj->office . '
        </div>
        <div class="p-content-small">
        ' . $obj->locate . '
        </div>
      </div>
      
      <div class="seven columns" style="margin-top: 25px;">
      <p class="p-content-small">' . $obj->description . '</p>';

      $html .= '</div>
      </div>';
    }

    return $html . '</div>';
  }

  function getMyEducationExperience($education)
  {
    $html = '<div style="text-align: left;">
    <p class="p-title center-text">Education</p>';
    for ($i = 0; $i < sizeof($education); $i++) {
      $obj = $education[$i];

      $html .= '<div class="row line-bottom">';

      if ($obj->dateFrom != null)
        $html .= '<div style="margin-top: 25px;">
      ' . $obj->dateFrom . '<span class="p-shine"> - </span>' . $obj->dateTo . '
      </div>';
      else
        $html .= '<div style="margin-top: 25px;">Unfinished</div>';

      $html .= '<div>
        ' . $obj->institute . '
        </div>
        <div class="p-shine">
        ' . $obj->course . '
        </div>    
      </div>';
    }

    return $html . '</div>';
  }

  function getResumes($resume)
  {
    $html = '';

    for ($i = 0; $i < sizeof($resume); $i++) {
      $res = $resume[$i];

      $html .= '<p class="p-title resume">' . $res->title . '</p>';

      for ($j = 0; $j < sizeof($res->sections); $j++) {
        $sec = $res->sections[$j];

        $html .= '<p class="p-subtitle resume-subtitle">' . $sec->title . '</p>';

        for ($x = 0; $x < sizeof($sec->subSections); $x++) {
          $sub = $sec->subSections[$x];

          $html .= '<p>' . $sub . '</p>';
        }
      }
    }

    return $html;
  }

  function percent2Color($value, $brightness = 255, $max = 100, $min = 0, $thirdColorHex = '55')
  {
    // Calculate first and second color (Inverse relationship)
    $first = (1 - ($value / $max)) * $brightness;
    $second = ($value / $max) * $brightness;

    // Find the influence of the middle color (yellow if 1st and 2nd are red and green)
    $diff = abs($first - $second);
    $influence = ($brightness - $diff) / 2;
    $first = intval($first + $influence);
    $second = intval($second + $influence);

    // Convert to HEX, format and return
    $firstHex = str_pad(dechex($first), 2, 0, STR_PAD_LEFT);
    $secondHex = str_pad(dechex($second), 2, 0, STR_PAD_LEFT);

    // return "#" . $firstHex . $secondHex . $thirdColorHex;
    return "#" . $thirdColorHex . $firstHex . $secondHex;
    // return "#" . $firstHex . $thirdColorHex . $secondHex;
  }
}
