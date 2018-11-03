<?php
    
    // enable CORS (only for testing)
    header("Access-Control-Allow-Origin: *");
    
    // json
    header('Content-type:application/json;charset=utf-8');
    
    // nocache
    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");
    
    // enable PHP error reporting
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    
    function is_connected()
    {
        // see https://superuser.com/a/769248
        $filename = "http://www.msftncsi.com/ncsi.txt";
        $check = "Microsoft NCSI";
        $content = file_get_contents($filename);
        if($content === $check)
        {
            return ['connected' => true,
            'content' => null];
        } else {
            $obj = ['connected' => false,
            'content' => $content];
        }
        
    }
    
    $obj = is_connected();
    
    echo json_encode($obj);
?>
