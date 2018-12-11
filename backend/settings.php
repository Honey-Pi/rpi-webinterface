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
				$escapedHoneypiSsid = escapeshellarg($honeypi["ssid"]);
				$escapedHoneypiPw = escapeshellarg($honeypi["password"]);
                shell_exec("sudo sh ".$GLOBALS['shellDir']."/change_honeypi_ssidpw.sh $escapedHoneypiSsid $escapedHoneypiPw;");
            }
        }
    }
    
    // send settings
    $settings = json_decode(file_get_contents($filename));
    echo json_encode($settings);

    
?>
