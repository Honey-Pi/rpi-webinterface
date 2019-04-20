<?php
    include_once("_headers.php");
    require_once('_vars.php');
    // text
    header('Content-type:text/plain;charset=utf-8');

    // delete log
    if (isset($_GET['delete']))
    {
        if (file_exists($logFile)) {
            clear_file($logFile);
        }
    }

    // read log
    if (file_exists($logFile)) {
        echo file_get_contents($logFile);
    } else {
        echo "NOFILE";
    }

?>
