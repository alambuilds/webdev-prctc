<?php
session_start();
require_once '../inc/connection.php';

$name = $_REQUEST["name"];
$username = $_REQUEST["username"];
$password = $_REQUEST["password"];

$sql = "INSERT INTO `users` (`username`,`password`,`name`) VALUES ( '$username','$password','$name' )";
$res = mysqli_query($con , $sql );
if ($res) {
    $_SESSION["userid"] = $row["id"];
        $_SESSION["username"] = $row["username"];
        $_SESSION["name"] = $row["name"];
        $_SESSION["login_status"] = true;
    header('location:../home.php');
} else {
    header('location:../index.php?msg=error');
}
?>