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
            if (isset($router["enabled"]) && $router["enabled"] === true) {
                if (isset($router["ssid"]) && isset($router["password"]) && strlen($router["password"]) >= 8) {
                    $ssid = $router["ssid"];
                    $pw = $router["password"];
                    shell_exec("sudo sh ".$GLOBALS['shellDir']."/change_router_ssid.sh ".$ssid);
                    shell_exec("sudo sh ".$GLOBALS['shellDir']."/change_router_pw.sh ".$pw);
                }
            } else {
                // disable connection
                shell_exec("sudo sh ".$GLOBALS['shellDir']."/change_router_ssid.sh fremderRouter");
                shell_exec("sudo sh ".$GLOBALS['shellDir']."/change_router_pw.sh WLANpasswort");
            }
        }
        
        // HoneyPi-AccessPoint
        if ($postJson["internet"]["honeypi"]) {
            $honeypi = $postJson["internet"]["honeypi"];
			$honeypi_ssid = $honeypi["ssid"];
            $honeypi_pw = $honeypi["password"];
            if (isset($honeypi_ssid) && strlen($honeypi_ssid) > 0 && isset($honeypi_pw) && strlen($honeypi_pw) >= 8) {
                shell_exec("sudo sh ".$GLOBALS['shellDir']."/change_honeypi_ssidpw.sh ".$honeypi_ssid." ".$honeypi_pw.";");
            }
        }
    }
    
    // send settings
    $settings = json_decode(file_get_contents($filename));
    echo json_encode($settings);

    
?>
