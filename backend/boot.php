<?php
    include_once("_headers.php");
    // json
    header('Content-type:application/json;charset=utf-8');

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
        shell_exec("sudo shutdown -h 0");
    }

    if (isset($_GET['reboot'])) {
        reboot();
    } else if (isset($_GET['shutdown'])) {
        shutdown();
    }
