<?php
    include_once("headers.php");
    require_once('vars.php');
    // text
    header('Content-type:text/plain;charset=utf-8');


    // function for shell script
    function clear_log() {
        shell_exec("sudo sh ".$GLOBALS['shellDir']."/clear_log.sh");
    }

    // delete log
    if (isset($_GET['delete']))
    {
        if (file_exists($logFile)) {
            clear_log();
			//file_put_contents($logFile, "");
        }
    }

    // read log
    if (file_exists($logFile)) {
        echo file_get_contents($logFile);
    } else {
        echo "NOFILE";
    }

?>
