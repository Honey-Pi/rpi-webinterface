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
                ),
                "ssl"=>array(
                    "verify_peer"=>false,
                    "verify_peer_name"=>false,
                )
            );
            $context  = stream_context_create($options);
            $data = @file_get_contents($url, false, $context);
            if ($data === false) {
                  http_response_code(405);
                  $error = error_get_last();
                  $status_line = $http_response_header[0];
                  if($status_line == "HTTP/1.1 429 Too Many Requests") {
                      $content = "Try it again later. Too many requests for ThingSpeak.";
                  } else {
                      $content = "HTTP request failed. Error was: " . $error['message'];
                  }
                  $result = json_encode(['success' => false, 'content' => $content]);
            } else {
                  $result = $data;
            }

            return $result;
        } else {
            http_response_code(404);
            $result = json_encode(['success' => false, 'content' => "Error: Could not parse CSV File."]);
        }

    }

    $postBody = file_get_contents("php://input");
    $_POST = json_decode($postBody, true);

    if (isset($_POST['channelId']) && isset($_POST['writeKey'])) {
        $obj = upload_csv($scriptsFolder, (INT)$_POST['channelId'], $_POST['writeKey']);
        echo $obj;
    }
