<?php

	// set cors header to protect from misusage
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type");
	$request_headers        = apache_request_headers();
	$http_origin            = $request_headers['Origin'];
	$allowed_http_origins   = array(
	                            "https://dashboard.honeypi.de",	// prod environment
	                            "http://localhost:4201" // debug environment
	                          );
	if (in_array($http_origin, $allowed_http_origins)){
	    @header("Access-Control-Allow-Origin: " . $http_origin);
	}
	header("Vary: Origin");

	// funcs
	function get_content($URL){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_URL, $URL);
		// ausführen
		$data = curl_exec($ch);
		// prüfen, ob ein Fehler aufgetreten ist
		if (!curl_errno($ch))
		{
		    $info = curl_getinfo($ch);
		    if ($info['content_type'] === 'text/csv') {
		    	// Resource schließen
				curl_close($ch);
				return $data;
		    } else {
		    	echo 'Resource has wrong content type (no csv).';
		    }
		} else {
			echo 'curl Error';
		}
		// Resource schließen
		curl_close($ch);
		return null;
	}

	if (isset($_POST['file'])) {

		$filename = $_POST['file'];
		$file = get_content($filename);

		if ($file) {
			// csv
			header('Content-Type: text/csv; charset=utf-8');
			// ie no sniff
			header('X-Content-Type-Options: nosniff');
			// download
			header("Content-Disposition: attachment; filename=log.csv");

			echo $file;
		} else {
			echo 'No file.';
		}
	} else {
		echo 'Missing param.';
	}

?>
