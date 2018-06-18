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
$dir    = '/sys/bus/w1/devices/';

// search for ds18b20 sensors
$files = scandir($dir);

// filter entrys out 
$filtered_files = array_merge(array_diff($files, [".", "..", "w1_bus_master1"]));

// send files
echo json_encode($filtered_files);


?>