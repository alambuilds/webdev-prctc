<?php
// php rest api header search in google and copy header 2lines
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$data = [
    "name" => "amit" ,
    "age" => 25 ,
    "status" => true
];

echo json_encode($data);
?>