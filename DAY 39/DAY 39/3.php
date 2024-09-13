<?php
$con = mysqli_connect( 'localhost' , 'root' , '' , 'project2' );

if (!$con) {
    echo 'db error';
    die();
}

$name = $_REQUEST["fullname"]; 
$age = $_REQUEST["age"];
$mob = $_REQUEST["mobile"];

$sql = "INSERT INTO `students` ( `name` , `age` , `mobile` ) VALUES ('$name' , '$age' , '$mob')";
$res = mysqli_query($con , $sql);
if ($res) {
    echo 'data added';
} else {
    echo 'error';
}

?>