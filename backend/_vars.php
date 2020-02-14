<?php
    $honeyPiHome = "/home/pi/HoneyPi";
    $scriptsFolder = $honeyPiHome . "/rpi-scripts";
    $backendFolder = "/var/www/html/backend";
    $shellDir = $backendFolder . "/shell-scripts";
    $logFile = $scriptsFolder . "/error.log";
    $settingsFile = $backendFolder . "/settings.json";
    $wittyPiPath = "/home/pi/wittyPi";

    // function to clear files
    function clear_file($file) {
        shell_exec("sudo sh -c 'cat /dev/null > $file'");
    }

    function createFileIfNotExists($file) {
        // check if file exists
        if (!file_exists($file))
        {
            // create file
            file_put_contents($file, '');
        }
    }

    function emptyFile($file) {
        // empty file
        //open file to write
        $fp = fopen($file, "r+");
        // clear content to 0 bits
        ftruncate($fp, 0);
        //close file
        fclose($fp);
    }
?>
