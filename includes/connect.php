<?php 
    $db_dsn = array( 
        'host' => 'localhost',
        'dbname' => 'db_gallery',
        'charset' => 'utf8'
    );

    $dsn = 'mysql:'.http_build_query($db_dsn, '', ';');


    $db_user = 'Megseroo';
    $db_pass = 'Redino15!';

    try{
        $pdo = new PDO($dsn, $db_user, $db_pass);
     
    } catch (PDOException $exception){
        echo 'Connection Error:'.$exception->getMessage();
        exit();
    }