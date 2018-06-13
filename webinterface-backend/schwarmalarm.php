<?php

header('Content-Type: text/html; charset=utf-8');

if (isset($_GET['email']) && isset($_GET['content']) ) {

	// TODO: Dieses Skript könnte missbraucht werden um unerwünschte Emails vom eigenen Webserver an Fremde zu versenden.
	// Daher Pfad dieses Skriptes geheim halten oder Zugang schützen.
	$empfaenger = filter_var($_GET['email'], FILTER_VALIDATE_EMAIL);
	$text = htmlspecialchars($_GET['content']);
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