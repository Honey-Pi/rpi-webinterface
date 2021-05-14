<?php
    include_once("_headers.php");
    require_once("_vars.php");
    // json
    header('Content-type:application/json;charset=utf-8');

    function parse_csv_file($scriptsFolder, $channelId)
    {
        $csvFile = $scriptsFolder . "/offline-$channelId.csv";
        // read file
        if (file_exists($csvFile)) {
            $content = file_get_contents($csvFile);
            $lines = explode(PHP_EOL, $content);
            array_pop($lines); // remove last element (empty line)
            $lines = array_slice($lines,1); // remove first element (header)
            $parsed_string = "";
            foreach ($lines as $line) {
                if ($line === array_key_last($lines)) {
                    $parsed_string .= $line;
                } else {
                    $parsed_string .= $line."|";
                }
            }
        } else {
            http_response_code(404);
            return "";
        }
        return $parsed_string;
    }

    function upload_csv($scriptsFolder, $channelId, $writeKey)
    {
        $url = 'https://api.thingspeak.com/channels/'.$channelId.'/bulk_update.csv';

        $updates = parse_csv_file($scriptsFolder, $channelId);
        if($updates) {
            $data = array('write_api_key' => $writeKey, 'time_format' => 'absolute', 'updates' => $updates);

            // use key 'http' even if you send the request to https://...
            $options = array(
                'http' => array(
                    'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                    'method'  => 'POST',
                    'content' => http_build_query($data)
                )
            );
            $context  = stream_context_create($options);
            $result = file_get_contents($url, false, $context);
            if ($result === FALSE) { /* Handle error */ }

            return $result;
        } else {
            http_response_code(404);
            return "";
        }


    }

    $postBody = file_get_contents("php://input");
    $_POST = json_decode($postBody, true);

    if (isset($_POST['channelId']) && isset($_POST['writeKey'])) {
        $obj = upload_csv($scriptsFolder, $_POST['channelId'], $_POST['writeKey']);
        echo $obj;
    }
