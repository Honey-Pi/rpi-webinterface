<?php
    include_once("_headers.php");
    require_once('_vars.php');
    // text
    header('Content-type:text/plain;charset=utf-8');

    function getLastLines($string, $n = 1) {
        $lines = explode("\n", $string);
        $lines = array_slice($lines, -$n);
        return implode("\n", $lines);
    }

    // delete log
    if (isset($_GET['delete']))
    {
        if (file_exists($logFile)) {
            clear_file($logFile);
        }
    }

    // read log
    if (file_exists($logFile)) {
        $logFile_content = file_get_contents($logFile);
        echo getLastLines($logFile_content, 500);
    } else {
        echo "NOFILE";
    }
