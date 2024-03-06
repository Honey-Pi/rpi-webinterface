<?php
    include_once("_headers.php");
    // json
    header('Content-type:text/html;charset=utf-8');

    // function for shell script
    function reboot() {
        shell_exec("sudo systemctl stop hostapd.service");
        shell_exec("sudo systemctl disable hostapd.service");
        shell_exec("sudo systemctl stop dnsmasq.service");
        shell_exec("sudo systemctl disable dnsmasq.service");
        shell_exec("sudo reboot");
    }
    function shutdown() {
        shell_exec("sudo systemctl stop hostapd.service");
        shell_exec("sudo systemctl disable hostapd.service");
        shell_exec("sudo systemctl stop dnsmasq.service");
        shell_exec("sudo systemctl disable dnsmasq.service");
        shell_exec("sudo shutdown -h now");
    }
    function stop_honeypi() {
        shell_exec("sudo systemctl stop honeypi.service");
    }
    function start_honeypi() {
        shell_exec("sudo systemctl start honeypi.service");
    }
    function restart_honeypi() {
        shell_exec("sudo systemctl stop honeypi.service");
        shell_exec("sudo systemctl reload-or-restart honeypi");
        shell_exec("sudo systemctl start honeypi.service");
    }
    function show_honeypi_status() {
        exec('sudo systemctl status honeypi.service', $output, $retval);
        echo "Returned with status $retval and output:\n<br>";
        echo sprintf('<pre>%s</pre>',print_r($output,true));
    }

    if (isset($_GET['reboot'])) {
        reboot();
    } else if (isset($_GET['shutdown'])) {
        shutdown();
    } else if (isset($_GET['stop'])) {
        stop_honeypi();
        show_honeypi_status();
    } else if (isset($_GET['start'])) {
        start_honeypi();
        show_honeypi_status();
    } else if (isset($_GET['restart'])) {
        restart_honeypi();
        show_honeypi_status();
    } else {
        echo "Missing GET-Parameter.";
    }
