<?php

    include_once("headers.php");
    require_once('vars.php');
    // json
    header('Content-type:application/json;charset=utf-8');

    function clean($string) {
       $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.
       return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
    }

    // check if file exists
    if (!file_exists($settingsFile))
    {
        // create file
        file_put_contents($settingsFile, '');
    }

    // save settings
    if (isset($_GET['setSettings']))
    {
        $postBody = file_get_contents("php://input");
        $postJson = json_decode($postBody, true);

        // write new settings to file
        file_put_contents($settingsFile, json_encode($postJson, JSON_PRETTY_PRINT));

        // WLAN-Router
        if (isset($postJson["internet"]["router"])) {
            $router = $postJson["internet"]["router"];
            if (isset($router["enabled"]) && $router["enabled"] === true && isset($router["ssid"]) && isset($router["password"]) && strlen($router["password"]) >= 8) {
				$escapedSsid = escapeshellarg($router["ssid"]);
				$escapedPw = escapeshellarg($router["password"]);
				shell_exec("sudo sh ".$GLOBALS['shellDir']."/change_router_ssidpw.sh $escapedSsid $escapedPw;");

            } else {
                // disable connection
				shell_exec('sudo sh '.$GLOBALS['shellDir'].'/change_router_ssidpw.sh fremderRouter WLANpasswort;');
            }
        }

        // HoneyPi-AccessPoint
        if ($postJson["internet"]["honeypi"]) {
            $honeypi = $postJson["internet"]["honeypi"];
            if (isset($honeypi['ssid']) && strlen($honeypi['ssid']) > 0 && isset($honeypi["password"]) && strlen($honeypi["password"]) >= 8) {
				$escapedHoneypiSsid = clean($honeypi["ssid"]);
				$escapedHoneypiPw = escapeshellarg($honeypi["password"]);
                shell_exec("sudo sh ".$GLOBALS['shellDir']."/change_honeypi_ssidpw.sh $escapedHoneypiSsid $escapedHoneypiPw;");
            }
        }

        // WittyPi Module ( time- & ernergy management)
        if (isset($postJson["wittyPi_enabled"]) ){

            // path to schedule file
            $wittyPiFile = $GLOBALS['wittyPiPath'] . "/schedule.wpi"; // /home/pi/wittyPi/

            $wittyPi_enabled = $postJson["wittyPi_enabled"];
            $wittyPi_script = $postJson["wittyPi_script"];

            if (!file_exists($wittyPiFile))
            {
                // create file
                file_put_contents($wittyPiFile, '');
            }

            if ($wittyPi_enabled === true
                && isset($postJson["wittyPi_script"])
                    && strlen(trim($wittyPi_script)) >= 1) {

                file_put_contents($wittyPiFile, $wittyPi_script);
            } else {

                // empty file
                //open file to write
                $fp = fopen($wittyPiFile, "r+");
                // clear content to 0 bits
                ftruncate($fp, 0);
                //close file
                fclose($fp);

                $postJson["wittyPi_enabled"] = false;
           }

           // run WittyPi to tranfer .wpi to Module
           shell_exec("sudo sh ".$GLOBALS['wittyPiPath']."/runScript.sh");
        }

    }

    // send settings
    $settings = json_decode(file_get_contents($settingsFile));
    echo json_encode($settings);

?>
