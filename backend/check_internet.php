<?php
    include_once("headers.php");
    // json
    header('Content-type:application/json;charset=utf-8');

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
