<?php
    include_once("_headers.php");
    // json
    header('Content-type:application/json;charset=utf-8');

    function is_channel_correct($writeKey)
    {
        $filename = 'https://api.thingspeak.com/update?api_key='.$writeKey.'&field1=0';
        $check = "0";
        $arrContextOptions=array(
            "ssl"=>array(
                "verify_peer"=>false,
                "verify_peer_name"=>false,
            ),
        );
        try {
            $content = @file_get_contents($filename, false, stream_context_create($arrContextOptions));
        } catch (Exception $e) {
            $content = $e->getMessage();
        }
        if($content !== FALSE && $content !== $check)
        {
            http_response_code(200);
            return ['connected' => true,
            'content' => null];
        } else {
            http_response_code(404);
            if (!$content) {
                $status_line = $http_response_header[0];
                $content = $content. " and status-code is: " . $status_line;
            }
            return ['connected' => false,
            'content' => $content];
        }

    }

    $postBody = file_get_contents("php://input");
    $_POST = json_decode($postBody, true);

    if(isset($_POST['writeKey']) && !empty($_POST['writeKey'])) {
        $obj = is_channel_correct($_POST['writeKey']);
        echo json_encode($obj);
    }else {
        http_response_code(404);
        echo json_encode(['connected' => false,
        'content' => "Missing POST-parameter."]);
    }
