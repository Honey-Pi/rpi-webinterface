<?php

    include_once("_headers.php");
    require_once('_vars.php');
    // json
    header('Content-type:application/json;charset=utf-8');

    function clean($string) {
       $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.
       return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
    }

    createFileIfNotExists($settingsFile);

    // save settings
    if (isset($_GET['setSettings']))
    {
        $postBody = file_get_contents("php://input");
        $postJson = json_decode($postBody, true);

        // WLAN-Router
        if (isset($postJson["internet"]["router"])) {
            $router = $postJson["internet"]["router"];
            if (isset($router["enabled"]) && $router["enabled"] === true && isset($router["ssid"])) {
                // a password is set
                if (isset($router["password"]) && strlen($router["password"]) >= 8) {
                    // wpa type WPA2
                    if (isset($router["wpa_type"]) && $router["wpa_type"] === 0) {
                        if ($router["password"] != "********") {
                            $escapedPw = escapeshellarg($router["password"]);
                            shell_exec("sudo sh ".$GLOBALS['shellDir']."/change_router_add_pw.sh $escapedPw &");
                        }
                    }

                    // password did not change
                    if ($router["password"] != "********") {
                        // bug: once wifi was disabled it cannot be enabled without re-entering the password.
                        $escapedSsid = escapeshellarg($router["ssid"]);
        				$escapedPw = escapeshellarg($router["password"]);
    				    shell_exec("sudo sh ".$GLOBALS['shellDir']."/change_router_ssidpw.sh $escapedSsid $escapedPw &");
                    }
                }

                // wpa type no password
                if (isset($router["wpa_type"]) && $router["wpa_type"] === 2) {
                    shell_exec("sudo sh ".$GLOBALS['shellDir']."/change_router_remove_pw.sh &");
                }

            } else {
                // disable connection
				shell_exec('sudo sh '.$GLOBALS['shellDir'].'/change_router_ssidpw.sh fremderRouter WLANpasswort &');
                $postJson["internet"]["router"]["enabled"] = false;
            }
        }

        // HoneyPi-AccessPoint
        if (isset($postJson["internet"]["honeypi"])) {
            $honeypi = $postJson["internet"]["honeypi"];
            if (isset($honeypi['ssid']) && strlen($honeypi['ssid']) > 0 && isset($honeypi["password"]) && strlen($honeypi["password"]) >= 8) {
				$escapedHoneypiSsid = clean($honeypi["ssid"]);
				$escapedHoneypiPw = escapeshellarg($honeypi["password"]);
                shell_exec("sudo sh ".$GLOBALS['shellDir']."/change_honeypi_ssidpw.sh $escapedHoneypiSsid $escapedHoneypiPw;");
            }
        }

        // Modem/Surfstick
        if (isset($postJson["internet"]["modem"]) && isset($postJson["internet"]["modem"]["enabled"]) && $postJson["internet"]["modem"]["enabled"] == true) {
            $modem = $postJson["internet"]["modem"];
            if (isset($modem['apn']) && strlen($modem['apn']) > 0 && isset($modem["ttyUSB"]) && strlen($modem['ttyUSB']) > 0 ) {
				$apn = escapeshellarg($modem["apn"]);
                $ttyUSB = escapeshellarg($modem["ttyUSB"]);
                shell_exec("sudo sh ".$GLOBALS['scriptsFolder']."/shell-scripts/connection.sh set-apn $apn $ttyUSB &");
            }
        }

        // 1-Wire GPIO for Ds18b20 Temperature Sensor
        if (isset($postJson["w1gpio"]) && is_numeric($postJson["w1gpio"]) && $postJson["w1gpio"] > 0) {
            $w1gpio = (INT)$postJson["w1gpio"];
        } else {
            $w1gpio = 11; // default GPIO
        }
        $postJson["w1gpio"] = $w1gpio;
        shell_exec("sudo sh ".$GLOBALS['shellDir']."/change_w1gpio.sh $w1gpio &");


        // WittyPi Module ( time- & ernergy management)
        if (isset($postJson["wittyPi"]["enabled"])){

            // path to schedule file
            $wittyPiFile = "./schedule.wpi";
            createFileIfNotExists($wittyPiFile);

            // reset voltage check to defaults
            $voltageStateFile = $GLOBALS['scriptsFolder']."/.isLowVoltage";
            clear_file($voltageStateFile);

            if ($postJson["wittyPi"]["enabled"] === true
                && isset($postJson["wittyPi"]["normal"]["enabled"])
                    && $postJson["wittyPi"]["normal"]["enabled"] === true
                        && isset($postJson["wittyPi"]["normal"]["schedule"])
                            && strlen(trim($postJson["wittyPi"]["normal"]["schedule"])) >= 1) {

                // change schedule.wpi
                file_put_contents($wittyPiFile, $postJson["wittyPi"]["normal"]["schedule"]);

                // set WittyPi (dont wait exec to finish)
                shell_exec("sudo sh ".$GLOBALS['shellDir']."/change_wittypi.sh 1 > /dev/null 2>&1 &");
            } else {

                // clear schedule.wpi
                emptyFile($wittyPiFile);
                $postJson["wittyPi"]["normal"]["enabled"] = false;

                // reset wittyPi schedule
                shell_exec("sudo sh ".$GLOBALS['shellDir']."/change_wittypi.sh 0 > /dev/null 2>&1 &");
           }

           // set WittyPi dummyload
           if ($postJson["wittyPi"]["enabled"] == true && isset($postJson["wittyPi"]["version"]) && isset($postJson["wittyPi"]["dummyload"]) && $postJson["wittyPi"]["version"] === 3) {
               if ((INT)$postJson["wittyPi"]["dummyload"] > 0) {
                   $dummyload = (INT)$postJson["wittyPi"]["dummyload"];
                   shell_exec("sudo sh ".$GLOBALS['shellDir']."/change_wittypi.sh 2 $dummyload > /dev/null 2>&1 &");
               } else {
                   shell_exec("sudo sh ".$GLOBALS['shellDir']."/change_wittypi.sh 3 > /dev/null 2>&1 &");
               }
           }

        }

        // write new settings to file
        file_put_contents($settingsFile, json_encode($postJson, JSON_PRETTY_PRINT));

    }

    // send settings
    $settings = json_decode(file_get_contents($settingsFile), true);

    // anonymize wifi password
    if (isset($settings['internet']['router']['password'])) {
        $settings['internet']['router']['password'] = "********";
    }

    echo json_encode($settings, JSON_PRETTY_PRINT);
