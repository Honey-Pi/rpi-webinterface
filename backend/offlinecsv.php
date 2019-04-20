<?php
    include_once("_headers.php");
    require_once('_vars.php');
    // csv
    header('Content-Type: text/csv; charset=utf-8');
    // ie no sniff
    header('X-Content-Type-Options: nosniff');
    // download
    header("Content-Disposition: attachment; filename=HoneyPi-export.csv");

    // clear file
    if (isset($_GET['delete']))
    {
        if (file_exists($csvFile)) {
            clear_file($csvFile);
        }
    }

    // read file
    if (file_exists($csvFile)) {
        echo file_get_contents($csvFile);
    } else {
        echo "NOFILE";
    }

?>
