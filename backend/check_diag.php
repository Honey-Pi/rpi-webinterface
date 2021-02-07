<?php
    include_once("_headers.php");
    require_once('_vars.php');
    // text
    header('Content-type:text/plain;charset=utf-8');

    $output = shell_exec("sudo python3 ".$GLOBALS['scriptsFolder']."/diag.py");
    echo $output;
