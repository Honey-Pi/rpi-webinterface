<?php
    
    // enable CORS (only for testing)
    header("Access-Control-Allow-Origin: *");
    
    // json
    header('Content-type:application/json;charset=utf-8');
    
    // nocache
    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");
    
    // enable PHP error reporting
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    function clean($string) {
       $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.
       return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
    }
    
    // define vars
    $filename = "settings.json";
    $shellDir = "/var/www/html/backend/shell-scripts";
    
    // check if file exists
    if (!file_exists($filename))
    {
        // create file
        file_put_contents($filename, '');
    }
    
    // save settings
    if (isset($_GET['setSettings']))
    {
        $postBody = file_get_contents("php://input");
        file_put_contents($filename, $postBody);
        
		$postJson = json_decode($postBody, true);
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
            $wittyPiFile = "schedule.wpi"; // home/pi/wittyPi/

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

           // tranfer script to witty pi
           shell_exec("sudo sh home/pi/wittyPi/runScript.sh");
        }
        
    }
    
    // send settings
    $settings = json_decode(file_get_contents($filename));
    echo json_encode($settings);

    
?>
