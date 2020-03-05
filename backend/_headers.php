<?php

    // set cors header to protect from misusage
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    $request_headers        = apache_request_headers();
    $http_origin            = $request_headers['Origin'];
    $allowed_http_origins   = array(
                                "http://192.168.178.4.1",
                                "http://honeypi.local",
                                "http://honeypi.fritz.box",
                                "http://localhost:4200"
                              );
    $host = parse_url($http_origin, PHP_URL_HOST);
    $tmp = explode('.',$host); $n = count($tmp);
    $tld = $tmp[($n-2)].".".$tmp[($n-1)]; //top-level domain
    $isHomeNetwork = strpos($host, "192.168.");

    if (in_array($http_origin, $allowed_http_origins) || in_array($tld, array("local", "honeypi")) || $isHomeNetwork !== false) {
        // This function is actually not bullet-proof
        @header("Access-Control-Allow-Origin: " . $http_origin);
    }
    header("Vary: Origin");

    // nocache
    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");

    // enable PHP error reporting (only for testing)
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

?>
