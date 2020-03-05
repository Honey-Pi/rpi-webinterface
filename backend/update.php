<?php
    include_once("_headers.php");

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

    require_once("_vars.php");
    // json
    header('Content-type:application/json;charset=utf-8');

    // function for shell script
    function updateGit() {
        return shell_exec("sudo git pull");
    }
    function update() {
        return shell_exec("sudo sh ".$GLOBALS['honeyPiHome']."/update.sh");
    }
    function install() {
        exec("sudo sh ".$GLOBALS['shellDir']."/web-install.sh > /dev/null 2>&1 &", $out, $status);
        if (0 === $status) {
            return $out;
        } else {
            return "Command failed with status: $status";
        }
    }
    function installWittyPi($version) {
        exec("sudo sh ".$GLOBALS['shellDir']."/installWittyPi.sh ".(INT)$version."", $out, $status);
        if (0 === $status) {
            return $out;
        } else {
            return "Command failed with status: $status";
        }
    }

    function getVersionInfo() {
        $obj = new \stdClass();
        $arrContextOptions=stream_context_create(array(
            // disable ssl cert
            "ssl"=>array(
                "verify_peer"=>false,
                "verify_peer_name"=>false,
            ),
            "http" => array(
                "header" => "User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
            )
        ));
        try {
            $urlScripts = "https://api.github.com/repos/Honey-Pi/rpi-scripts/releases/latest";
            $contentScripts = @file_get_contents($urlScripts, false, $arrContextOptions);

            $urlWebinterface = "https://api.github.com/repos/Honey-Pi/rpi-webinterface/releases/latest";
            $contentWebinterface = @file_get_contents($urlWebinterface, false, $arrContextOptions);

            // get future updates
            $obj->scripts = json_decode($contentScripts);
            $obj->webinterface = json_decode($contentWebinterface);

            // read current versionInfo
            $version_file = "/var/www/html/version.txt";
            if (file_exists($version_file)) {
                $obj->currentVersion = file_get_contents($version_file);
            }


            return $obj;
        } catch (Exception $e) {
            $obj->error = 'Exception: '.  $e->getMessage(). "\n";
        }
        return $obj;
    }

    $output = new \stdClass();
    // switch working dir
    $output->chdir = "Changed working dir from ";
    $output->chdir .= getcwd() . "\n";
    chdir($GLOBALS['honeyPiHome']);
    $output->chdir .= " to " . getcwd() . "\n";

    if (isset($_GET['mode']))
    {
        $output->git = "Update " . $GLOBALS['honeyPiHome'] . " git:" . "\n";
        $output->git .= updateGit();

        if ($_GET['mode'] === 'update') {
            $output->result = update();
        } else if ($_GET['mode'] === 'install')
        {
            $output->result = install();
        } else if ($_GET['mode'] === 'versionInfo')
        {
            $output->result = getVersionInfo();
        } else if ($_GET['mode'] === 'installWittyPi')
        {
            $output->result = installWittyPi($_GET['version']);
        } else
        {
            $output->result = "Unknown mode";
        }
    }

    echo json_encode($output, JSON_PRETTY_PRINT);

?>
