<?php
  include_once("_headers.php");
  // json
  header('Content-type:application/json;charset=utf-8');


  // define vars
  $dir    = '/sys/bus/w1/devices/';

  // search for ds18b20 sensors
  $files = scandir($dir);

  // filter entrys out
  $filtered_files = array_merge(array_diff($files, [".", "..", "w1_bus_master1"]));

  // send files
  echo json_encode($filtered_files);
