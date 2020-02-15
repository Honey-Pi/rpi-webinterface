<?php
header('Access-Control-Allow-Origin: *'); 
?>
<?php
    // enable php errors
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

	// https://firebase.google.com/docs/cloud-messaging/js/topic-messaging#subscribe_the_client_app_to_a_topic

	/*
	https://iid.googleapis.com/iid/v1/nKctODamlM4:CKrh_PC8kIb7O...clJONHoA/rel/topics/movies
	Content-Type:application/json
	Authorization:key=AIzaSyZ-1u...0GBYzPu7Udno5aA
	*/

	// if params are set
	if (isset($_GET['registrationToken']) && isset($_GET['topicName'])) 
	{
		$topicName = filter_var($_GET['topicName'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
		$registrationToken = filter_var($_GET['registrationToken'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
		$url = "https://iid.googleapis.com/iid/v1/" . $registrationToken . "/rel/topics/" . $topicName;
	    $serverKey = '';
	    $json = json_encode(null);
	    $headers = array();
	    $headers[] = 'Content-Type: application/json';
	    $headers[] = 'Authorization: key='. $serverKey;
	    $ch = curl_init();
	    curl_setopt($ch, CURLOPT_URL, $url);
	    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
	    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
	    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
	    //Send the request
	    $response = curl_exec($ch);
	    //Close request
	    if ($response === FALSE) {
	    	die('FCM Send Error: ' . curl_error($ch));
	    }
        // HTTP-Status-Code prüfen
        if (!curl_errno($ch)) {
            switch ($http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE)) {
                case 200:
                    break;
                default:
                    echo 'Unerwarter HTTP-Code: ' . $http_code . "\n";
            }
        }
		curl_close($ch);

	}

?>
