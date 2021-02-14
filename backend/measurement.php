<?php
    include_once("_headers.php");
    require_once('_vars.php');
    // json
    header('Content-type:application/json;charset=utf-8');

    // function for shell script
    function run_measurement() {
        $output = shell_exec("sudo python3 ".$GLOBALS['scriptsFolder']."/measurement.py");
        return $output;
    }

    $obj = run_measurement();
    echo $obj;
