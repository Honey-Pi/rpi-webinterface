<?php
    include_once("_headers.php");
    require_once("_vars.php");

    // ie no sniff
    header('X-Content-Type-Options: nosniff');

    if (isset($_GET['readFilelist'])) {

        // json
        header('Content-type:application/json;charset=utf-8');

        if ($handle = opendir($scriptsFolder)) {

            $csvFiles = array();
            while (false !== ($entry = readdir($scriptsFolder))) {
                if (strpos(".csv", $entry) !== false){
                    $csvFiles[] = $entry;
                }
            }
            closedir($handle);

            echo json_encode($csvFiles, JSON_PRETTY_PRINT);

        }

    } else if (isset($_GET['channelId'])){

        $channelId = (INT)$_GET['channelId'];

        // csv
        header('Content-Type: text/csv; charset=utf-8');
        // download
        header("Content-Disposition: attachment; filename=HoneyPi-$channelId-export.csv");

        $csvFile = $scriptsFolder . "/offline-$channelId.csv";

        if (isset($_GET['delete']))
        {
            // clear file
            if (file_exists($csvFile)) {
                clear_file($csvFile);
            }
        } else {
            // read file
            if (file_exists($csvFile)) {
                echo file_get_contents($csvFile);
            } else {
                echo "NOFILE";
            }
        }
    }

?>
