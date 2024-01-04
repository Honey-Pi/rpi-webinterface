<?php

  /* Access like:
  http://pathto/push.php?channel=123&title=&body=Das Gewicht ist um 10kg (12%) gesunken.
  Replacement Keys: https://de.mathworks.com/help/thingspeak/thinghttp-app.html#bvtzy2y-5
  */

  require __DIR__ . '/vendor/autoload.php';

  use Google\Auth\ApplicationDefaultCredentials;
  use GuzzleHttp\Client;
  use GuzzleHttp\HandlerStack;

  header('Content-Type: text/html; charset=utf-8');

  // if params are set
  if (   isset($_REQUEST['channel'])
    && is_numeric($_REQUEST['channel'])
    && (INT)$_REQUEST['channel'] > 0
    && isset($_REQUEST['body']))
  {

    // specify the path to the application credentials
    putenv('GOOGLE_APPLICATION_CREDENTIALS=/path/to/my/credentials.json');

    $scopes = ['https://www.googleapis.com/auth/firebase.messaging'];

    $middleware = ApplicationDefaultCredentials::getMiddleware($scopes);
    $stack = HandlerStack::create();
    $stack->push($middleware);

    $client = new Client([
      'handler' => $stack,
      'base_uri' => 'https://fcm.googleapis.com',
      'auth' => 'google_auth'  // authorize all requests
    ]);

    $topic = $_REQUEST['channel'];
    $title = ($_REQUEST['title']) ? filter_var($_REQUEST['title'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH) : 'HoneyPi';
    $body = filter_var($_REQUEST['body'], FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
    $notification = array('title' => $title , 'body' => $body);
    $message = array('topic' => $topic, 'notification' => $notification);
    $requestBody = array('message' => $message);

    $response = $client->post('/v1/projects/honeypi-push-notifications/messages:send', ['json' => $requestBody]);

    echo '<p>Erfolgreich.</p>';
  } else {
    echo '<p>Fehler in den Parametern. Bitte überprüfe die Parameter.</p>';
  }

?>
