<?php

	header('Content-Type: text/html; charset=utf-8');

	/* Access like:
	http://pathto/push.php?channel=595959&title=&body=Das Gewicht ist um 10kg (12%) gesunken.
	*/

	// if params are set
	if (   isset($_REQUEST['channel']) 
		&& is_numeric($_REQUEST['channel']) 
		&& (INT)$_REQUEST['channel'] > 0
		&& isset($_REQUEST['body'])) 
	{

		$url = "https://fcm.googleapis.com/fcm/send";
	    $token = '/topics/'.$_REQUEST['channel'];
	    $serverKey = 'fcm key';
	    $title = ($_REQUEST['title']) ? filter_var($_REQUEST['title'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH) : 'HoneyPi';
	    $body = filter_var($_REQUEST['body'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
	    $notification = array('title' =>$title , 'text' => $body, 'sound' => 'default', 'badge' => '1');
	    $arrayToSend = array('to' => $token, 'notification' => $notification,'priority'=>'high');
	    $json = json_encode($arrayToSend);
	    $headers = array();
	    $headers[] = 'Content-Type: application/json';
	    $headers[] = 'Authorization: key='. $serverKey;
	    $ch = curl_init();
	    curl_setopt($ch, CURLOPT_URL, $url);
	    curl_setopt($ch, CURLOPT_CUSTOMREQUEST,"POST");
	    curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
	    curl_setopt($ch, CURLOPT_HTTPHEADER,$headers);
	    //Send the request
	    $response = curl_exec($ch);
	    //Close request
	    if ($response === FALSE) {
	    	die('FCM Send Error: ' . curl_error($ch));
	    }
		curl_close($ch);
		echo '<p>Erfolgreich.</p>';
	} else {
		echo '<p>Fehler in den Parametern. Bitte überprüfe die Parameter.</p>';
	}

?>