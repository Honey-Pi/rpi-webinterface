<?php
    include_once("_headers.php");
    require_once('_vars.php');
    // html
    header('Content-type:text/html;charset=utf-8');

    function return_default_gw() {
        $gw = "Unknown";
        // Get the host IP from the routing table
        $table = file("/proc/net/route");
        foreach ($table as $row) {
            // Split the fields out of the routing table
            $fields = preg_split("/[\t ]+/", trim($row));

            // Skip this route if it's not the default gateway
            if ($fields[1] != "00000000") continue;

            // Convert the hex gateway IP to dotted-notation
            $gw_hex = trim($fields[2]);
            //echo "gw_hex: ".$gw_hex."\n";
            $gw_rev = long2ip(hexdec($gw_hex));
            //echo "gw_rev: ".$gw_rev."\n";
            $gw = implode(".", array_reverse(explode(".", $gw_rev)));
            return $gw;
            break;
        }
    }

    $gw = return_default_gw();
    if ($gw !== "Unknown") {
        header("Location: http://$gw");
        //echo "Host IP: ".$gw."\n";
        die();
    } else {
        echo "Could not find any default gateway.";
    }
