<?php
    // json
    header('Content-type:application/json;charset=utf-8');
    
    // nocache
    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");
    
    function is_connected()
    {
        $connected = fopen("http://www.google.com:80/","r");
        if($connected)
        {
            return true;
        } else {
            return false;
        }
        
    }
    
    echo json_encode(is_connected());
?>
