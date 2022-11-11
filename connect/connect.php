<?php
    $host = "localhost";
    $user = "sunhey9810";
    $pass = "sunheybdbfly9810*";
    $db = "sunhey9810";

    $connect = new mysqli($host, $user, $pass, $db);    
    $connect -> set_charset("utf8");

    // if (mysqli_connect_errno($connect)) {

    //     echo "데이터베이스 연결 실패: " . mysqli_connect_error();
        
    //     } else {
        
    //     echo "데이터베이스 연결 성공";
        
    //     }
        
?>
