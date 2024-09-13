<?php
require_once '../inc/connection.php';

$name = $_REQUEST["name"];
$username = $_REQUEST["username"];
$password = $_REQUEST["password"];

$sql = "INSERT INTO `users` (`username`, `password`, `name`) VALUES ('$username','$password','$name')";
$res = mysqli_query($con , $sql);

if($res){
   header('location:../home.php');
} else {
    echo 'error';
}

?>