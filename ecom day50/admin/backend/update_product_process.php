<?php
require_once '../inc/connection.php';

$name = $_REQUEST['name'];
$fp = $_REQUEST['fp'];
$sp = $_REQUEST['sp'];
$pid = $_REQUEST['pid'];

$sql = "UPDATE `products` SET `name` = '$name' , `sale_price` = '$sp' , `fake_price` = '$fp' WHERE `id` = '$pid'";
$res = mysqli_query($con,$sql);

if ($res) {
    echo 1;
} else {
    echo 0;
}
?>