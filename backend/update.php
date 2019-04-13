<?php
    include_once("headers.php");

    // make script run forever
    ini_set('max_execution_time', 0);
    set_time_limit(0);
    // Ignore connection-closing by the client/user
    ignore_user_abort(true);
    // flush output to browser
    ini_set('output_buffering', 0);
    ini_set('zlib.output_compression', 0);
    ini_set('implicit_flush', 1);
    header('Content-Encoding: none'); // Disable gzip compression
    ob_end_flush(); // Stop buffer
    ob_implicit_flush(1); // Implicit flush at each output command

    require_once('vars.php');
    // text
    header('Content-type:text/plain;charset=utf-8');

    // function for shell script
    function updateGit() {
        return shell_exec("sudo git pull");
    }
    function update() {
        return shell_exec("sudo sh ".$GLOBALS['honeyPiHome']."/update.sh");
    }
    function install() {
        return shell_exec("sudo sh ".$GLOBALS['honeyPiHome']."/install.sh");
    }

    // switch working dir
    echo "Changed working dir from ";
    echo getcwd() . "\n";
    chdir($GLOBALS['honeyPiHome']);
    echo " to " . getcwd() . "\n";

    if (isset($_GET['mode']))
    {
        echo "Update " . $GLOBALS['honeyPiHome'] . " git:" . "\n";
        echo updateGit();

        if ($_GET['mode'] === 'update') {
            echo update();
        } else if ($_GET['mode'] === 'install')
        {
            echo install();
        }
    }

?>
