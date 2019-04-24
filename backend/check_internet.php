<?php
    include_once("_headers.php");
    // json
    header('Content-type:application/json;charset=utf-8');

    function is_connected()
    {
        // see https://superuser.com/a/769248
        $filename = "http://www.msftncsi.com/ncsi.txt";
        $check = "Microsoft NCSI";
        try {
            $content = file_get_contents($filename);
        } catch (Exception $e) {
            $content = $e->getMessage();
        }
        if($content === $check)
        {
            return ['connected' => true,
            'content' => null];
        } else {
            return ['connected' => false,
            'content' => $content];
        }

    }

    $obj = is_connected();

    echo json_encode($obj);
?>
