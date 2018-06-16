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

// check if file exists
if (!file_exists($filename)) 
{
	file_put_contents($filename, '');
}

// save settings
if (isset($_GET['setSettings'])) 
{
	file_put_contents($filename, file_get_contents("php://input"));

	// run shell script after settings saved
	shell_exec("sudo sh /var/www/backend/settings_saved.sh");
}

// send settings
$settings = json_decode(file_get_contents($filename));
echo json_encode($settings);


?>