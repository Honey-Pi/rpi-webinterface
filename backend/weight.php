<?php
    include_once("_headers.php");
    require_once('_vars.php');
    // text
    header('Content-type:text/plain;charset=utf-8');

    $postBody = file_get_contents("php://input");
    $_POST = json_decode($postBody, true);

    $pin_dt = (INT)$_POST['pin_dt'];
    $pin_sck = (INT)$_POST['pin_sck'];
    $channel = substr($_POST['channel'], 0, 1);

    $output = shell_exec("sudo python3 ".$GLOBALS['scriptsFolder']."/measurement_weight.py $pin_dt $pin_sck '$channel'");
    echo $output;

?>
