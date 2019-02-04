<?php

header('Content-Type: text/html; charset=utf-8');

/*
//	TODO: Dieses Passwort auf dem eigenen Webserver ändern:
$passwort = "meinpasswort123";

// Dieses Skript könnte missbraucht werden um unerwünschte Emails vom eigenen Webserver an Fremde zu versenden.
// Daher den Pfad dieses Skriptes geheim halten oder den Zugang mit einer "HTTP Authentication" schützen.
$valid_passwords = array ("schwarmalarm" => $passwort);
$valid_users = array_keys($valid_passwords);

$user = $_SERVER['PHP_AUTH_USER'];
$pass = $_SERVER['PHP_AUTH_PW'];

$validated = (in_array($user, $valid_users)) && ($pass == $valid_passwords[$user]);

if (!$validated) {
  header('WWW-Authenticate: Basic realm="Private"');
  header('HTTP/1.0 401 Unauthorized');
  die ("Diese Seite ist geschützt mit einer HTTP Authentication.");
}
*/

if (isset($_REQUEST['email']) && isset($_REQUEST['content']) ) {

	$empfaenger = filter_var($_REQUEST['email'], FILTER_VALIDATE_EMAIL);
	$text = htmlspecialchars($_REQUEST['content']);
	$betreff = "Schwarmalarm";
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
	$headers .= "From: Honey-Pi.de <info@honey-pi.de>" . "\r\n" .
	"Reply-To: info@honey-pi.de" . "\r\n" .
	"X-Mailer: PHP/" . phpversion();
	
	if ($empfaenger) {
		mail($empfaenger, $betreff, $text, $headers);
		echo "Email versendet.";
	} else {
		echo "Email falsch angegeben.";
	}
}else{
	echo "URL mit falschen Parametern aufgerufen.";
}

?>